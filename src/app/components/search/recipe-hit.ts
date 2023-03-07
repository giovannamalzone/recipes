interface RecipeHit {
  recipe: {
    label: string;
    image: string;
    url: string;
    yield: number;
    calories: number;
    totalWeight: number;
    totalTime: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    ingredients: { text: string }[];
  };
}
