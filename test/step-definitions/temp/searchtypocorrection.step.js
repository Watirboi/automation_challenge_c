const { Given,When,Then } = require('cucumber');
const landingPage = require('../pageobjects/landing.page');
const assert = require('assert');

Given(/^I open the (url|site) "([^"]*)?"$/, (page, callback) => {
    landingPage.open();
});

When(/^I enter (.*) in the BestBuy search field$/, (products) => {
    landingPage.enterSearchString(products);
});

