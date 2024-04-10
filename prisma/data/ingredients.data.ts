import { FoodCategory } from '@prisma/client';

const ingredients = [
  {
    name: 'Tomato',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Tomato',
  },
  {
    name: 'Egg',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Egg',
  },
  {
    name: 'Carrot',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Egg',
  },
  {
    name: 'Water',
    imageSrc: 'https://placehold.co/600x400?text=Egg',
  },
  {
    name: 'Potato',
    category: FoodCategory.Tubers,
    imageSrc: 'https://placehold.co/600x400?text=Potato',
  },
  {
    name: 'Olive Oil',
    category: FoodCategory.OilsAndFats,
    imageSrc: 'https://placehold.co/600x400?text=Olive+Oil',
  },
  {
    name: 'Garlic',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Garlic',
  },
  {
    name: 'Onion',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Onion',
  },
  { name: 'Salt', imageSrc: 'https://placehold.co/600x400?text=Salt' },
  {
    name: 'Pepper',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Pepper',
  },
  {
    name: 'Paprika',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Paprika',
  },
  {
    name: 'Rice',
    category: FoodCategory.CerealsAndGrains,
    imageSrc: 'https://placehold.co/600x400?text=Rice',
  },
  {
    name: 'Chicken',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Chicken',
  },
  {
    name: 'Rabbit',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Rabbit',
  },
  {
    name: 'Seafood',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Seafood',
  },
  {
    name: 'Chorizo',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Chorizo',
  },
  {
    name: 'Saffron',
    category: FoodCategory.Nuts,
    imageSrc: 'https://placehold.co/600x400?text=Saffron',
  },
  {
    name: 'Beans',
    category: FoodCategory.Legumes,
    imageSrc: 'https://placehold.co/600x400?text=Beans',
  },
  {
    name: 'Lentils',
    category: FoodCategory.Legumes,
    imageSrc: 'https://placehold.co/600x400?text=Lentils',
  },
  {
    name: 'Almonds',
    category: FoodCategory.Nuts,
    imageSrc: 'https://placehold.co/600x400?text=Almonds',
  },
  {
    name: 'Bread',
    category: FoodCategory.CerealsAndGrains,
    imageSrc: 'https://placehold.co/600x400?text=Bread',
  },
  {
    name: 'Wine',
    category: FoodCategory.OilsAndFats,
    imageSrc: 'https://placehold.co/600x400?text=Wine',
  },
  {
    name: 'Olives',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Olives',
  },
  {
    name: 'Cod',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Cod',
  },
  {
    name: 'Pork Belly',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Pork+Belly',
  },
  {
    name: 'Quinoa',
    category: FoodCategory.CerealsAndGrains,
    imageSrc: 'https://placehold.co/600x400?text=Quinoa',
  },
  {
    name: 'Chickpeas',
    category: FoodCategory.Legumes,
    imageSrc: 'https://placehold.co/600x400?text=Chickpeas',
  },
  {
    name: 'Spinach',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Spinach',
  },
  {
    name: 'Manchego Cheese',
    category: FoodCategory.Dairy,
    imageSrc: 'https://placehold.co/600x400?text=Manchego+Cheese',
  },
  {
    name: 'Prawns',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Prawns',
  },
  {
    name: 'Squid',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Squid',
  },
  {
    name: 'Mussels',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Mussels',
  },
  {
    name: 'Serrano Ham',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Serrano+Ham',
  },
  {
    name: 'Artichokes',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Artichokes',
  },
  {
    name: 'Asparagus',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Asparagus',
  },
  {
    name: 'Peas',
    category: FoodCategory.Legumes,
    imageSrc: 'https://placehold.co/600x400?text=Peas',
  },
  {
    name: 'Sweet Paprika',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Sweet+Paprika',
  },
  {
    name: 'Hazelnut',
    category: FoodCategory.Nuts,
    imageSrc: 'https://placehold.co/600x400?text=Hazelnut',
  },
  {
    name: 'Bell Peppers',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Bell+Peppers',
  },
  {
    name: 'Zucchini',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Zucchini',
  },
  {
    name: 'Eggplant',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Eggplant',
  },
  {
    name: 'Cucumber',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Cucumber',
  },
  {
    name: 'Lemon',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Lemon',
  },
  {
    name: 'Lime',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Lime',
  },
  {
    name: 'Orange',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Orange',
  },
  {
    name: 'Strawberries',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Strawberries',
  },
  {
    name: 'Blueberries',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Blueberries',
  },
  {
    name: 'Raspberries',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Raspberries',
  },
  {
    name: 'Mint',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Mint',
  },
  {
    name: 'Parsley',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Parsley',
  },
  {
    name: 'Cilantro',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Cilantro',
  },
  {
    name: 'Basil',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Basil',
  },
  {
    name: 'Oregano',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Oregano',
  },
  {
    name: 'Rosemary',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Rosemary',
  },
  {
    name: 'Thyme',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Thyme',
  },
  {
    name: 'Beef',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Beef',
  },
  {
    name: 'Pork',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Pork',
  },
  {
    name: 'Lamb',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Lamb',
  },
  {
    name: 'Turkey',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Turkey',
  },
  {
    name: 'Duck',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Duck',
  },
  {
    name: 'Goose',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Goose',
  },
  {
    name: 'Tuna',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Tuna',
  },
  {
    name: 'Salmon',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Salmon',
  },
  {
    name: 'Trout',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Trout',
  },
  {
    name: 'Herring',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Herring',
  },
  {
    name: 'Mackerel',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Mackerel',
  },
  {
    name: 'Sardines',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Sardines',
  },
  {
    name: 'Anchovies',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Anchovies',
  },
  {
    name: 'Chicken Broth',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Chicken+Broth',
  },
  {
    name: 'Pork Broth',
    category: FoodCategory.MeatFishEggs,
    imageSrc: 'https://placehold.co/600x400?text=Pork+Broth',
  },
  {
    name: 'Mushrooms',
    category: FoodCategory.FruitsAndVegetables,
    imageSrc: 'https://placehold.co/600x400?text=Mushrooms',
  },
  {
    name: 'Natural Food Coloring',
    imageSrc: 'https://placehold.co/600x400?text=Natural+Food+Coloring',
  },
  {
    name: 'Salmorreta',
    imageSrc: 'https://placehold.co/600x400?text=Salmorreta',
  },
];

export default ingredients;
