const {
    Given,
    When,
    Then
} = require('cucumber');
const landingPage = require('../pageobjects/landing.page');
const assert = require('assert');



Given(/^I open the (url|site) "([^"]*)?"$/, (page, callback) => {
    landingPage.open();
});

When(/^I set (.*) to the BestBuy search field$/, (products) => {
    landingPage.enterSearchString(products);
});

Then(/^I expect that the h1 header contains the text (.*)$/, (products) => {
    assert.strictEqual(landingPage.verifySearchDisplayedInResultsForText(products), true, "did not match");
});

Then(/^I should be able to apply filter by selected (.*)$/, (parameters) => {
    landingPage.clickFilterOptions(parameters);
    // landingPage.verifyFiltersSelected(parameters);
});

When(/^I click on a (.*) (.*)$/, (products,sku) => {
    landingPage.clickProduct(products,sku);
});

Then(/^I should see the average ratings displayed for (.*)$/, (products) => {
    landingPage.isAvgRatingsDisplayed(products);
});

Then(/^I should see the product specification displayed for (.*)$/, (products) => {
    landingPage.isProductSpecificationDisplayed(products);
});