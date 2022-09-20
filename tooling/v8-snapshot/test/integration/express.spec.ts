// This test uses the ../../../example-express, installing a snapshot and
// checking the metadata for deferreds and healthy modules.
import path from 'path'
import fs from 'fs-extra'
import { exec as execOrig } from 'child_process'
import { promisify } from 'util'
import { assert } from 'chai'
import Fixtures from '@tooling/system-tests'
import * as FixturesScaffold from '@tooling/system-tests/lib/dep-installer'
import snapshot from 'snap-shot-it'

const exec = promisify(execOrig)

const EXPRESS_MINIMAL_PROJECT = 'v8-snapshot/example-express'

describe('integration: express', () => {
  it('installs snapshot for example-express', async () => {
    Fixtures.remove()
    await FixturesScaffold.scaffoldCommonNodeModules()
    await FixturesScaffold.symlinkNodeModule('@tooling/v8-snapshot')
    await FixturesScaffold.symlinkNodeModule('electron')
    await FixturesScaffold.symlinkNodeModule('@packages/v8-snapshot-require')
    const projectBaseDir = await Fixtures.scaffoldProject(EXPRESS_MINIMAL_PROJECT)

    await FixturesScaffold.scaffoldProjectNodeModules({ project: EXPRESS_MINIMAL_PROJECT, updateLockFile: false, forceCopyDependencies: true })

    const cacheDir = path.join(projectBaseDir, 'cache')
    const metadataFile = path.join(cacheDir, 'snapshot-meta.json')

    await fs.remove(cacheDir)

    const env: Record<string, any> = {
      ELECTRON_RUN_AS_NODE: 1,
      DEBUG: '(cypress:packherd|cypress:snapgen|cypress:snapshot):*',
      PROJECT_BASE_DIR: projectBaseDir,
      DEBUG_COLORS: 1,
    }
    const _MB = 1024 * 1024
    const cmd = `node ./snapshot/install-snapshot.js`

    let stdout = ''
    let stderr = ''

    try {
      ({ stdout, stderr } = await exec(cmd, { cwd: projectBaseDir, maxBuffer: 600 * _MB, env }))

      const { deferredHash, ...metadata } = require(metadataFile)

      snapshot(metadata)
    } catch (err: any) {
      assert.fail(`error: ${err.toString()}\nstdout: ${stdout}\nstderr: ${stderr}`)
    }
  })
})