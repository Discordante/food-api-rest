-- CreateEnum
CREATE TYPE "NutritionalName" AS ENUM ('Calories', 'Fat', 'SaturatedFat', 'TransFat', 'Cholesterol', 'Sodium', 'Carbohydrates', 'Fiber', 'Sugars', 'Protein', 'Vitamins', 'Salt');

-- CreateEnum
CREATE TYPE "FoodCategory" AS ENUM ('FruitsAndVegetables', 'CerealsAndGrains', 'Legumes', 'Tubers', 'Nuts', 'MeatFishEggs', 'Dairy', 'OilsAndFats');

-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('kcal', 'g', 'mg', 'IU');

-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageSrc" TEXT[],
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NutritionalValue" (
    "id" SERIAL NOT NULL,
    "name" "NutritionalName" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "unit" "Unit" NOT NULL,
    "dishId" INTEGER NOT NULL,

    CONSTRAINT "NutritionalValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "FoodCategory",
    "imageSrc" TEXT,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allergen" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,

    CONSTRAINT "Allergen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageSrc" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DishTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DishIngredients" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DishAllergens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Dish_name_key" ON "Dish"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Allergen_name_key" ON "Allergen"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_DishTags_AB_unique" ON "_DishTags"("A", "B");

-- CreateIndex
CREATE INDEX "_DishTags_B_index" ON "_DishTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DishIngredients_AB_unique" ON "_DishIngredients"("A", "B");

-- CreateIndex
CREATE INDEX "_DishIngredients_B_index" ON "_DishIngredients"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DishAllergens_AB_unique" ON "_DishAllergens"("A", "B");

-- CreateIndex
CREATE INDEX "_DishAllergens_B_index" ON "_DishAllergens"("B");

-- AddForeignKey
ALTER TABLE "NutritionalValue" ADD CONSTRAINT "NutritionalValue_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishTags" ADD CONSTRAINT "_DishTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishTags" ADD CONSTRAINT "_DishTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishIngredients" ADD CONSTRAINT "_DishIngredients_A_fkey" FOREIGN KEY ("A") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishIngredients" ADD CONSTRAINT "_DishIngredients_B_fkey" FOREIGN KEY ("B") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishAllergens" ADD CONSTRAINT "_DishAllergens_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishAllergens" ADD CONSTRAINT "_DishAllergens_B_fkey" FOREIGN KEY ("B") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
