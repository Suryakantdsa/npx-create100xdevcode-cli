#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// CLI logic
const targetDir = process.argv[2] || "my-turbo-app";
const templateDir = path.join(__dirname, "..", "template");
const destination = path.join(process.cwd(), targetDir);

// Function to copy files recursively
const copyRecursiveSync = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Scaffold the project
if (fs.existsSync(destination)) {
  console.error(`Error: Directory "${targetDir}" already exists.`);
  process.exit(1);
}

console.log(`Creating project in "${targetDir}"...`);
copyRecursiveSync(templateDir, destination);
// console.log("Installing dependencies...");
// require("child_process").execSync("npm install", { cwd: destination, stdio: "inherit" });

console.log(` 
  Success! Created your Turborepo
  `)
console.log(`
  To get started:

- Change to the directory: cd ${targetDir}

- Run commands with Turborepo:
   - npm run build: Build all apps and packages
   - npm run dev: Develop all apps and packages
  `)

