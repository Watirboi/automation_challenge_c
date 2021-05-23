const Page = require('./page');

class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchboxTextField() {
        return $('#gh-search-input');
    }
    get closeModalButton() {
        return $("#widgets-view-email-modal-mount > div > div > div:nth-child(1) > div > div > div > div > button");
    }
    get resultsStringText() {
        return $('#search-header-1 > div > div > div.title-wrapper.title > span:nth-child(2) > span:nth-child(1) > h1');
    }

    get searchFieldSubmitBtn() {
        return $('.header-search-button');
    }

    get btnsRemoveNew(){ return $$('#main-results > div.facets-wrapper > ul > li > button')}

    open(path) {
        super.open('https://bestbuy.com');
        browser.pause(1000);
        this.closeModalForm();
    }

    closeModalForm() {
        try {
            if (this.closeModalButton.isExisting()) {
                this.closeModalButton.click();
            }
        } catch (e) {
            console.log("An error has occurred: " + e);
        }
    } 

    enterSearchString(searchString) {
        this.searchboxTextField.waitForDisplayed(5000);
        this.searchboxTextField.click();
        this.searchboxTextField.setValue(searchString);
        browser.pause(2000);
        this.searchFieldSubmitBtn.click();   
    }
    
    /* Filters */

    verifySearchDisplayedInResultsForText(searchString) {
        //(this.resultsStringText.getText());
        this.resultsStringText.waitForDisplayed(5000);
        return this.resultsStringText.getText().includes(searchString);
    }

    applyNewConditionFilter(condition) {
        // Apply New Condition filter

        $('#condition_facet-New-0').scrollIntoView();
        $('#condition_facet-New-0').click();
        browser.pause(3000);
    }

    applyOpenBoxFilter(condition) {
        // Apply Open Box Condition filter
        $('#condition_facet-Open-Box-1').scrollIntoView();
        $('#condition_facet-Open-Box-1').click();
    }
    
    /* Gift Ideas */

    applyGiftIdeasForHerFilter(condition) {
        // Apply Open Box Condition filter
        browser.pause(10000);
        $('#giftcenter_facet-For-Her-1').scrollIntoView();
        $('#giftcenter_facet-For-Her-1').click();
    }

    applyCustomerRatingTopRatedFilter(condition) {
        // Apply Open Box Condition filter
        $('#customerreviews_facet-Top-Rated-0').scrollIntoView();
        $('#customerreviews_facet-Top-Rated-0').click();
    }

    filterSelectionBtns() {
        this.btnsRemoveNew.forEach(btn => {
            console.log(btn.getText.toLowerCase())
        })
    }

    clickProduct(product) {

    }

    /* Average Ratings */
    isAvgRatingsDisplayed() {

    }

}

module.exports = new LandingPage();