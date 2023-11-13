import fs from "node:fs/promises";

export default async function writeFile(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
  } catch (error) {
    throw error;
  }
}
