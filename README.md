# automation_challenge_c

WebdriverIO framework that uses ES6 (with Babel), Cucumber, Page Object model, Allure.
Note that this example uses a retail website.  

It peforms a search for a retail store product.  It captures reviews and verifies product specification is displayed.  Filtering is done to limit the resultset.  Average rating is also captured.  The review count and top 3 reviews are captured to console.

![Automation Sample](https://github.com/Watirboi/automation_challenge_c/blob/main/sample-video.gif)

## Requirements:
---
* node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
* npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started:
---
### Install the dependencies:
npm install

## Execution:
* npm run test from the terminal

## Reports
---
### Allure
Run this command to generate the allure report
* npm run allure-reports 

* This will open the reports.  You will have to Ctrl-C to cancel this application