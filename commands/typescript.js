import { addFunctionResource } from 'amplify-category-function/lib/provider-utils/awscloudformation'
import { supportedServices } from 'amplify-category-function/lib/provider-utils/supported-services'
import { ServiceName } from 'amplify-category-function'
import fs from 'fs'
import path from 'path'

const CATEGORY = 'function'
const SERVICE = ServiceName.LambdaFunction

function returnFilesDueIfMonorepo(functionsPath) {
  if (fs.existsSync(functionsPath + '/lerna.json')) {
    return {
      files: ['index.ts.ejs', 'monorepo-package.json.ejs'],
      destMap: {
        'index.ts.ejs': 'index.ts',
        'monorepo-package.json.ejs': 'package.json',
        'package.json.ejs': '' // otherwise it creates a src-dir with the packages.json which we don't want
      }
    }
  } else {
    return {
      files: ['index.ts.ejs', 'package.json.ejs', 'tsconfig.json.ejs'],
      destMap: {
        'index.ts.ejs': 'index.ts',
        'package.json.ejs': 'package.json',
        'tsconfig.json.ejs': 'tsconfig.json'
      }
    }
  }
}

async function run(context) {
  const srcDir = path.join(`${__dirname}/../`, 'typescript-lambda')
  // const files = fs.readdirSync(srcDir)
  const { amplify } = context
  const projectPath = amplify._getEnvInfo().projectPath
  const functionsPath = path.join(projectPath, 'amplify', 'backend', 'function')
  const functionFiles = returnFilesDueIfMonorepo(functionsPath)
  const functionsParams = {
    runtime: {
      name: 'nodejs',
      value: 'nodejs',
      cloudTemplateValue: 'nodejs14.x',
      defaultHandler: 'handler'
    },
    functionTemplate: {
      sourceRoot: srcDir,
      sourceFiles: functionFiles.files,
      defaultEditorFile: path.join('./', 'index.ts'),
      destMap: functionFiles.destMap
    }
  }
  const serviceConfig = supportedServices[SERVICE]
  const functionName = await addFunctionResource(
    context,
    CATEGORY,
    SERVICE,
    serviceConfig,
    functionsParams
  )
  fs.mkdirSync(path.join(functionsPath, '/', functionName, '/src'))
}

module.exports = {
  run
}
