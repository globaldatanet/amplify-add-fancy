import path from 'path'
import fs from 'fs'

async function run(context) {
  const { amplify } = context
  const projectPath = amplify._getEnvInfo().projectPath
  const functionsPath = path.join(projectPath, 'amplify', 'backend', 'function')
  const srcDir = path.join(`${__dirname}/../`, 'monorepo-lambda')
  const files = fs.readdirSync(srcDir)
  files.forEach((file) => {
    fs.copyFileSync(srcDir + '/' + file, functionsPath + '/' + file)
  })
}

module.exports = {
  run
}
