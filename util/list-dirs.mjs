import {argv} from "node:process";
import {fileURLToPath} from "node:url";
import {readdirSync} from "node:fs";

function listDir(sourceDir) {
  const fullNames = readdirSync(sourceDir, {withFileTypes: true});
  const dirs = fullNames.filter(fn => fn.isDirectory()).map(d => `${sourceDir}/${d.name}`);
  const subDirs = dirs.flatMap(d => listDir(d))

  return [...dirs, ...subDirs];
}

async function main() {
  if (argv.length < 3) {
    const __filename = fileURLToPath(import.meta.url);
    console.log(`Usage: node.exe ${__filename} source_1.json`);
    process.exit(0);
  }

  const sourceDir = argv[2];
  const results = listDir(sourceDir);

  console.log(results.join(" "));
}

await main();
