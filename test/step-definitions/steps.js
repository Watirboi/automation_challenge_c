const { Given,When,Then, And } = require('cucumber');
const landingPage = require('../pageobjects/landing.page');
const assert = require('assert');

Given(/^I open the (url|site) "([^"]*)?"$/, (page, callback) => {
    landingPage.open();
});

When(/^I enter (.*) in the BestBuy search field$/, (products) => {
    landingPage.enterSearchString(products);
});

Then(/^I expect that see all the (.*) that meet my search requirement$/, (products) => {
    assert.strictEqual(landingPage.verifySearchDisplayedInResultsForText(products), true, "did not match");
});

Then(/^I should be able to apply 3 filters to limit the (.*) products displayed$/, (parameters) => {
    landingPage.clickFilterOptions(parameters);
    // landingPage.verifyFiltersSelected(parameters);
});

When(/^I click on a (.*) matching sku: (.*)$/, (products,sku) => {
    landingPage.clickProduct(products,sku);
});

Then(/^I should see the average ratings displayed for the (.*)$/, (products) => {
    landingPage.isAvgRatingsDisplayed(products);
});

Then(/^I should see the product specification displayed for the (.*)$/, (products) => {
    landingPage.isProductSpecificationDisplayed(products);
});

Then('I should now see the number of results returned and top 3 reviews',() => {
    // console.log("last step")
    landingPage.consoleLogTop3Reviews();
});

Then(/^I expect the site to return (.*) results despite the typo$/, (products) => {
    // assert.strictEqual(landingPage.verifySearchDisplayedInResultsForText(products), true, "did not match");
    landingPage.searchCorrectionDisplay(products);
});

When(/^I navigate back$/, () => {
    landingPage.navigateBack();
});

Then(/^I expect to see the returned items count displayed$/, () => {
    expect(landingPage.isReturnedCountDisplayed()).toBe(true);
});

Then(/^the results should be maintained$/, () => {
    expect(landingPage.compareReturnedItems).toBe(true);
})