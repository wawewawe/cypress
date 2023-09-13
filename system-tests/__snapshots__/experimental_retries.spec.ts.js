exports['e2e retries.experimentalStrategy / experimentalBurnIn=false / "detect-flake-and-pass-on-threshold" / passes / only runs the first attempt of the test if the test passes'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (always-passes.cy.js)                                                      │
  │ Searched:   cypress/e2e/tests/always-passes.cy.js                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  always-passes.cy.js                                                             (1 of 1)


  always passes
    ✓ always passes


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     always-passes.cy.js                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  always-passes.cy.js                      XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        1        1        -        -        -  


`

exports['e2e retries.experimentalStrategy / experimentalBurnIn=false / "detect-flake-and-pass-on-threshold" / passes / retries up to the "passesRequired" limit if the config can be satisfied'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (deterministic-flaky.cy.js)                                                │
  │ Searched:   cypress/e2e/tests/deterministic-flaky.cy.js                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  deterministic-flaky.cy.js                                                       (1 of 1)


  deterministic flaky test
    ✖(Attempt 1 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 2 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 3 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 4 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 5 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 6 of 10) deterministically runs pass/fail on this test
    ✓ deterministically runs pass/fail on this test


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     deterministic-flaky.cy.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  deterministic-flaky.cy.js                XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        1        1        -        -        -  


`

exports['e2e retries.experimentalStrategy / experimentalBurnIn=false / "detect-flake-and-pass-on-threshold" / passes / retries up to the "passesRequired" limit if the config can be satisfied (max attempts)'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (deterministic-flaky.cy.js)                                                │
  │ Searched:   cypress/e2e/tests/deterministic-flaky.cy.js                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  deterministic-flaky.cy.js                                                       (1 of 1)


  deterministic flaky test
    ✖(Attempt 1 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 2 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 3 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 4 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 5 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 6 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 7 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 8 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 9 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 10 of 10) deterministically runs pass/fail on this test
    ✓ deterministically runs pass/fail on this test


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     deterministic-flaky.cy.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  deterministic-flaky.cy.js                XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        1        1        -        -        -  


`

exports['e2e retries.experimentalStrategy / experimentalBurnIn=false / "detect-flake-and-pass-on-threshold" / fails / short-circuits if the needed "passesRequired" cannot be satisfied by the remaining attempts available'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (deterministic-flaky.cy.js)                                                │
  │ Searched:   cypress/e2e/tests/deterministic-flaky.cy.js                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  deterministic-flaky.cy.js                                                       (1 of 1)


  deterministic flaky test
    ✖(Attempt 1 of 6) deterministically runs pass/fail on this test
    ✓(Attempt 2 of 6) deterministically runs pass/fail on this test
    ✖(Attempt 3 of 6) deterministically runs pass/fail on this test
    ✖ deterministically runs pass/fail on this test


  0 passing
  1 failing

  1) deterministic flaky test
       deterministically runs pass/fail on this test:
     AssertionError: expected true to be false
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     deterministic-flaky.cy.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  deterministic-flaky.cy.js                XX:XX        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        1        -        1        -        -  


`

exports['e2e retries.experimentalStrategy / experimentalBurnIn=false / "detect-flake-and-pass-on-threshold" / fails / retries up to the "passesRequired" limit if the config can be satisfied (max attempts possible)'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (deterministic-flaky.cy.js)                                                │
  │ Searched:   cypress/e2e/tests/deterministic-flaky.cy.js                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  deterministic-flaky.cy.js                                                       (1 of 1)


  deterministic flaky test
    ✖(Attempt 1 of 7) deterministically runs pass/fail on this test
    ✓(Attempt 2 of 7) deterministically runs pass/fail on this test
    ✖(Attempt 3 of 7) deterministically runs pass/fail on this test
    ✓(Attempt 4 of 7) deterministically runs pass/fail on this test
    ✖(Attempt 5 of 7) deterministically runs pass/fail on this test
    ✓(Attempt 6 of 7) deterministically runs pass/fail on this test
    ✖(Attempt 7 of 7) deterministically runs pass/fail on this test
    ✖ deterministically runs pass/fail on this test


  0 passing
  1 failing

  1) deterministic flaky test
       deterministically runs pass/fail on this test:
     AssertionError: expected true to be false
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     deterministic-flaky.cy.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  deterministic-flaky.cy.js                XX:XX        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        1        -        1        -        -  


`

exports['e2e retries.experimentalStrategy / experimentalBurnIn=false / "detect-flake-but-always-fail" / passes / only runs the first attempt of the test if the test passes'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (always-passes.cy.js)                                                      │
  │ Searched:   cypress/e2e/tests/always-passes.cy.js                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  always-passes.cy.js                                                             (1 of 1)


  always passes
    ✓ always passes


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     always-passes.cy.js                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  always-passes.cy.js                      XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        1        1        -        -        -  


`

exports['e2e retries.experimentalStrategy / experimentalBurnIn=false / "detect-flake-but-always-fail" / fails / runs all attempts of the test if the first attempt fails and "stopIfAnyPassed=false"'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (deterministic-flaky.cy.js)                                                │
  │ Searched:   cypress/e2e/tests/deterministic-flaky.cy.js                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  deterministic-flaky.cy.js                                                       (1 of 1)


  deterministic flaky test
    ✖(Attempt 1 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 2 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 3 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 4 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 5 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 6 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 7 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 8 of 10) deterministically runs pass/fail on this test
    ✖(Attempt 9 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 10 of 10) deterministically runs pass/fail on this test
    ✖ deterministically runs pass/fail on this test


  0 passing
  1 failing

  1) deterministic flaky test
       deterministically runs pass/fail on this test:
     [object Object]
AssertionError: expected true to be false
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     deterministic-flaky.cy.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  deterministic-flaky.cy.js                XX:XX        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        1        -        1        -        -  


`

exports['e2e retries.experimentalStrategy / experimentalBurnIn=false / "detect-flake-but-always-fail" / fails / runs attempts of the test if the first attempt fails until the test passes if "stopIfAnyPassed=true"'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (deterministic-flaky.cy.js)                                                │
  │ Searched:   cypress/e2e/tests/deterministic-flaky.cy.js                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  deterministic-flaky.cy.js                                                       (1 of 1)


  deterministic flaky test
    ✖(Attempt 1 of 10) deterministically runs pass/fail on this test
    ✓(Attempt 2 of 10) deterministically runs pass/fail on this test
    ✖ deterministically runs pass/fail on this test


  0 passing
  1 failing

  1) deterministic flaky test
       deterministically runs pass/fail on this test:
     [object Object]
AssertionError: expected true to be false
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     deterministic-flaky.cy.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  deterministic-flaky.cy.js                XX:XX        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        1        -        1        -        -  


`
