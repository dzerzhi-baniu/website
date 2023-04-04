import {argv} from 'node:process';
import {readdir, writeFile} from 'node:fs/promises'
import {existsSync, mkdirSync} from 'node:fs'
import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';

async function save2Json(outputJson, text) {
  const outputDir = dirname(outputJson);

  try {
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir);
    }
    await writeFile(outputJson, text);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

function checkArgs() {
  if (argv.length < 4) {
    const __filename = fileURLToPath(import.meta.url);
    console.log(`Usage: node.exe ${__filename} output.json source_dir1 [source_dir2] ... [source_dirN]`);
    process.exit(0);
  }
}

async function main() {
  checkArgs();

  const output = {};

  for (let i = 3; i < argv.length; i++) {
    const sourceDir = argv[i];
    const fullNames = await readdir(sourceDir, {withFileTypes: true});
    output[sourceDir] = fullNames.filter(fn => fn.isFile()).map(f => `${f.name}`);
  }

  await save2Json(argv[2], JSON.stringify(output, null, 2));
}

await main()
