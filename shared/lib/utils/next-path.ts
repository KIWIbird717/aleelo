// npm i fs path
import * as fs from "fs";
import path from "path";

// Replace 'app' with 'pages' if you want to search in the '/pages' directory
const mainDirectory = "app";

// Define the directory path
const directoryPath = path.join(process.cwd(), mainDirectory);

// Function to recursively read directory contents
/**
 * Получение всех доступных путей для страниц приложения
 * @link https://github.com/vercel/next.js/discussions/49693
 */
function getFolderPaths(dir: string, folderList: string[] = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      // Add the folder path to the list
      folderList.push(filePath);
      // Recursively call the function if it's a directory
      getFolderPaths(filePath, folderList);
    }
  });

  return folderList;
}

// Get all folder paths in the directory
export const folderPaths = getFolderPaths(directoryPath).map((paths) => {
  return paths.split(mainDirectory)[1];
});
