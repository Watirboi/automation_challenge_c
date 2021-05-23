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

Then(/^I should be able to filter by selected conditions$/, () => {
    landingPage.applyNewConditionFilter();
    landingPage.applyGiftIdeasForHerFilter();
    landingPage.applyCustomerRatingTopRatedFilter();
    landingPage.filterSelectionBtns();
});

Then(/^I should be able to filter by open-box condition$/, () => {
    landingPage.applyOpenBoxFilter();
});