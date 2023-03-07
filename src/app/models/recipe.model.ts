export interface Recipe {
  from: number;
  to: number;
  count: number;
  _links: Links;
  hits?: (HitsEntity)[] | null;
}
export interface Links {
  next: NextOrSelf;
}
export interface NextOrSelf {
  href: string;
  title: string;
}
export interface HitsEntity {
  recipe: Recipe1;
  _links: Links1;
}
export interface Recipe1 {
  uri: string;
  label: string;
  image: string;
  images: Images;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels?: (string)[] | null;
  healthLabels?: (string)[] | null;
  cautions?: (string | null)[] | null;
  ingredientLines?: (string)[] | null;
  ingredients?: (IngredientsEntity)[] | null;
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType?: (string)[] | null;
  mealType?: (string)[] | null;
  dishType?: (string)[] | null;
  // totalNutrients: TotalNutrients;
  // totalDaily: TotalDaily;
  digest?: (DigestEntity)[] | null;
}
export interface Images {
  THUMBNAIL: THUMBNAILOrSMALLOrREGULAROrLARGE;
  SMALL: THUMBNAILOrSMALLOrREGULAROrLARGE;
  REGULAR: THUMBNAILOrSMALLOrREGULAROrLARGE;
  LARGE?: THUMBNAILOrSMALLOrREGULAROrLARGE1 | null;
}
export interface THUMBNAILOrSMALLOrREGULAROrLARGE {
  url: string;
  width: number;
  height: number;
}
export interface THUMBNAILOrSMALLOrREGULAROrLARGE1 {
  url: string;
  width: number;
  height: number;
}
export interface IngredientsEntity {
  text: string;
  quantity: number;
  measure?: string | null;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}

export interface DigestEntity {
  label: string;
  tag: string;
  schemaOrgTag?: string | null;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub?: (SubEntity)[] | null;
}
export interface SubEntity {
  label: string;
  tag: string;
  schemaOrgTag?: string | null;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}
export interface Links1 {
  self: NextOrSelf;
}
