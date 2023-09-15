import path from 'path'
import { copy, emptyDir } from 'fs-extra'

// Project directory
import { fileURLToPath } from 'url'
const projectDir = path.dirname(fileURLToPath(import.meta.url))

// Set input directories
const vueBuildDir = path.resolve(projectDir, '../ionic-app/www')

// Set out directories
const staticDir = path.resolve(projectDir, 'www')

// Clean build dirs
export function clean() {
  emptyDir(staticDir).then(() => {
    console.log('env:none clean... done')
  })
}

// Move files from vue-app/www
function move_files() {
  copy(vueBuildDir, staticDir).then((err) => {
    if (err) console.log(err);
    else console.log('env:none move_files... done');
  });
}

// Lookup commands
let commandsLookup = {
  clean,
  move_files
}

// Defaults
let execute = 'move_files'

// Get args
if (process.argv[2]) execute = process.argv[2]

// Validate args
if (!commandsLookup[execute]) {
  console.log(`Invalid command:\n ${execute}`)
  let commands = 'Available commands:'
  for (let key in commandsLookup) {
    commands += `\n ${key}`
  }
  console.log(commands)
}

// Execute command
if (commandsLookup[execute]) {
  commandsLookup[execute]()
}