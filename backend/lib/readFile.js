import fs from "node:fs/promises";

export default async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    throw error;
  }
}
