import { runSpec } from './support/spec-loader'
import { runCypressInCypressMochaEventsTest } from './support/mochaEventsUtils'
import { snapshots } from './runner.experimentalRetries.mochaEvents.snapshots'

/**
 * The mochaEvent tests require a spec to be loaded and executed within an inner Cypress context.
 * The spec must load and execute within the duration of the Cypress command timeout.
 * The execution time of the inner Cypress is resource/OS dependant and can exceed the default value (4s),
 * so we have increased the command timeout to allow the inner spec more time to complete and report
 * its mocha event log.
 */
describe('experimental retries: experimentalStrategy & experimentalOptions', { defaultCommandTimeout: 7500 }, () => {
  const projects: ['detect-flake-and-pass-on-threshold', 'detect-flake-but-always-fail', 'detect-flake-but-always-fail-stop-any-passed'] = ['detect-flake-and-pass-on-threshold', 'detect-flake-but-always-fail', 'detect-flake-but-always-fail-stop-any-passed']

  projects.forEach((project) => {
    describe(project, () => {
      describe('tests finish with correct state', () => {
        describe('hook failures', () => {
          // regardless of strategy, this should fail the suite immediately and not run any additional attempts, so the snapshots should match
          it(`fail in [before]`, (done) => {
            const { assertMatchingSnapshot } = runCypressInCypressMochaEventsTest(
              snapshots,
              `"${project}": tests finish with correct state hook failures fail in [before] #1`,
              done,
            )

            runSpec({
              fileName: 'fail-with-before.mochaEvents.cy.js',
              projectName: project,
            }).then((win) => {
              assertMatchingSnapshot(win)
            })
          })

          // This will differ per strategy as the attempts on the first attempts will max out
          // the snapshots for 'detect-flake-and-always-fail' configurations should be the same, regardless of experimentalOptions configuration.

          it(`fail in [beforeEach]`, (done) => {
            const { assertMatchingSnapshot } = runCypressInCypressMochaEventsTest(
              snapshots,
              `"${project}": tests finish with correct state hook failures fail in [beforeEach] #1`,
              done,
            )

            runSpec({
              fileName: 'fail-with-beforeEach.mochaEvents.cy.js',
              projectName: project,
            }).then((win) => {
              assertMatchingSnapshot(win)
            })
          })

          it(`fail in [after]`, (done) => {
            const { assertMatchingSnapshot } = runCypressInCypressMochaEventsTest(
              snapshots,
              `"${project}": tests finish with correct state hook failures fail in [after] #1`,
              done,
            )

            runSpec({
              fileName: 'fail-with-after.mochaEvents.cy.js',
              projectName: project,
            }).then((win) => {
              assertMatchingSnapshot(win)
            })
          })

          it(`fail in [afterEach]`, (done) => {
            const { assertMatchingSnapshot } = runCypressInCypressMochaEventsTest(
              snapshots,
              `"${project}": tests finish with correct state hook failures fail in [afterEach] #1`,
              done,
            )

            runSpec({
              fileName: 'fail-with-afterEach.mochaEvents.cy.js',
              projectName: project,
            }).then((win) => {
              assertMatchingSnapshot(win)
            })
          })
        })
      })

      describe('mocha grep', () => {
        it('fail with [only]', (done) => {
          const { assertMatchingSnapshot } = runCypressInCypressMochaEventsTest(
            snapshots,
            `"${project}": tests finish with correct state mocha grep fail with [only] #1`,
            done,
          )

          runSpec({
            fileName: 'fail-with-only.mochaEvents.cy.js',
            projectName: project,
          }).then((win) => {
            assertMatchingSnapshot(win)
          })
        })

        it('pass with [only]', (done) => {
          const { assertMatchingSnapshot } = runCypressInCypressMochaEventsTest(
            snapshots,
            `"${project}": tests finish with correct state mocha grep pass with [only] #1`,
            done,
          )

          runSpec({
            fileName: 'pass-with-only.mochaEvents.cy.js',
            projectName: project,
          }).then((win) => {
            assertMatchingSnapshot(win)
          })
        })
      })
    })

    describe('mocha events', () => {
      it('simple single test', (done) => {
        const { assertMatchingSnapshot } = runCypressInCypressMochaEventsTest(
          snapshots,
          `"${project}": mocha events simple single test #1`,
          done,
        )

        runSpec({
          fileName: 'simple-single-test.mochaEvents.cy.js',
          projectName: project,
        }).then((win) => {
          assertMatchingSnapshot(win)
        })
      })

      it('simple three tests', (done) => {
        const { assertMatchingSnapshot } = runCypressInCypressMochaEventsTest(
          snapshots,
          `"${project}": mocha events simple three tests #1`,
          done,
        )

        runSpec({
          fileName: 'three-tests-with-hooks.mochaEvents.cy.js',
          projectName: project,
        }).then((win) => {
          assertMatchingSnapshot(win)
        })
      })
    })
  })
})
