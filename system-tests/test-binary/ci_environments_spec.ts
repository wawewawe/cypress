import systemTests, { ItOptions } from '../lib/system-tests'

function smokeTestDockerImage (title: string, dockerImage: string, expectedExitCode: number, onRun?: ItOptions['onRun']) {
  systemTests.it(title, {
    withBinary: true,
    browser: 'electron',
    dockerImage,
    spec: 'test1.js',
    specDir: 'tests',
    project: 'todos',
    expectedExitCode,
    onRun,
  })
}

describe('e2e binary CI environments', () => {
  smokeTestDockerImage(
    'bare node image fails (lacks xvfb)',
    'node:16', 1,
    async (exec) => {
      const { stdout } = await exec()

      expect(stdout).to.include('Your system is missing the dependency: Xvfb')
    },
  )

  // smokeTestDockerImage(
  //   'bare xvfb image fails',
  //   // TODO: bump to node 16.16.0
  //   'cypressinternal/xvfb:12.13.0', 1,
  // )

  // TODO: bump to ubuntu 20.04.6 w/ node 16
  // smokeTestDockerImage(
  //   'ubuntu 16 passes',
  //   'cypress/base:ubuntu16-12.13.1', 0,
  // )

  // TODO: bump to ubuntu 22.04.2 w/ node 18
  // smokeTestDockerImage(
  //   'ubuntu 19 passes',
  //   'cypress/base:ubuntu19-node12.14.1', 0,
  // )
})
