import { db } from "..";
import { categories } from "../schema";

const categoryNames = [
  "Science",
  "Technology",
  "History",
  "Music",
  "Sports",
  "Gaming",
  "Travel",
  "Food",
  "Fashion",
  "Art",
  "Animals",
];

export const seedCategories = async () => {
  const values = categoryNames.map((name) => ({
    name,
  }));

  try {
    await db.insert(categories).values(values);
    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Erorr seeding categories", error);
    process.exit(1);
  }
};

seedCategories();
