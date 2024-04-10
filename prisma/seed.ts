import { PrismaClient } from '@prisma/client';
import allergens from './data/allergens.data';
import ingredients from './data/ingredients.data';
import tags from './data/tags.data';
import dishes from './data/dishes.data';
const prisma = new PrismaClient();

async function main() {
  await prisma.allergen.createMany({
    data: allergens,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.tag.createMany({
    data: tags,
  });

  await Promise.all(
    dishes.map(async (dish) => {
      await prisma.dish.create({
        data: {
          name: dish.name,
          description: dish.description,
          imageSrc: dish.imageSrc,
          stock: dish.stock,
          ingredients: {
            connectOrCreate: dish.ingredients.map((ingredient) => ({
              where: { name: ingredient.name },
              create: { name: ingredient.name },
            })),
          },
          allergens: {
            connect: dish.allergens.map((allergens) => ({
              name: allergens.name,
            })),
          },
          tags: {
            connectOrCreate: dish.tags.map((tag) => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
          nutritionalValues: {
            createMany: { data: dish.nutritionalValues },
          },
        },
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
