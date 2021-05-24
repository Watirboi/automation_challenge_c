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

    get productSkus() { return $$('div.list-item.lv > div > a > img')}

    // get ratingsReviewIds() { return $$('div.v-m-bottom-l > div > div > ul > li.ugc-stat.customer-review-stats > span > a > div > span.ugc-c-review-average') }
    get ratingsReviewIds() { return $$('[id^="user-generated-content-ugc-stats"]')}

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

    verifySearchDisplayedInResultsForText(searchString) {
        this.resultsStringText.waitForDisplayed(5000);
        return this.resultsStringText.getText().includes(searchString);
    }

    /* Filters */

    applyNewConditionFilter(condition) {
        // Apply New Condition filter
        $('[id^="condition_facet-New"]').scrollIntoView();
        $('[id^="condition_facet-New"]').click();
    }

    applyOpenBoxFilter(condition) {
        // Apply Open Box Condition filter
        $('[id^="condition_facet-Open-Box"]').scrollIntoView();
        $('[id^="condition_facet-Open-Box"]').click();
    }

    applyGiftIdeasForHerFilter(condition) {
        // Apply Open Box Condition filter
        $('[id^="giftcenter_facet-For-Her"]').scrollIntoView();
        $('[id^="giftcenter_facet-For-Her"]').click();
    }

    applyGiftIdeasBirthdayFilter(condition) {
        // Apply Open Box Condition filter
        $('[id^="giftcenter_facet-Birthday"]').scrollIntoView();
        $('[id^="giftcenter_facet-Birthday"]').click();
    }

    applyCustomerRatingTopRatedFilter(condition) {
        // Apply Open Box Condition filter
        $('[id^="customerreviews_facet-Top-Rated"]').scrollIntoView();
        $('[id^="customerreviews_facet-Top-Rated"]').click();
    }

    clickFilterOptions(parameters) {
        let filter_array = parameters.split(" ");
        for(let i=0; i < filter_array.length; i++) {
            if(filter_array[i] == 'New') {
                this.applyNewConditionFilter();
            } else if (filter_array[i] == 'Birthday') {
                this.applyGiftIdeasBirthdayFilter();
            } else if (filter_array[i] == 'Top-Rated') {
                this.applyCustomerRatingTopRatedFilter();
            } else {
                console.log("Option not available: " + filter_array[i]);
            }
        }
        browser.pause(5000);
        this.btnsRemoveNew.forEach(btn => {
            console.log("Remove this button: " + btn.getText())
            console.log("Filter array: " + filter_array);
            let filter_verify = [];
            filter_verify[btn] = filter_array.includes(btn.getText())
            console.log(filter_verify);
            //expect(filter_verify).to.be.true;
        })
    }

    clickProduct(product, sku) {
        // the component selector keeps changing.  What am I missing?
        // let demo = browser.react$$('vt', {
        //     sku: '6395127'
        // });
        // let demo = browser.react$('xn', { name: "Insignia™ - 32\" Class N10 Series LED HD TV" });
        // console.log("Found: " + demo.props.alt);
        /* Will try custom selectors */
        console.log(`We found ${this.productSkus.length} ${product}(s) on this page.`);
        browser.pause(1000);
        $(`[data-sku-id="${sku}"] > div > a > img`).click()
    }

    /* Average Ratings */
    isAvgRatingsDisplayed(product) {
        expect($('div.v-m-bottom-l > div > div > ul > li.ugc-stat.customer-review-stats > span > a > div > span.ugc-c-review-average').isDisplayed()).toBe(true);
        browser.pause(2000);
        console.log($('div.v-m-bottom-l > div > div > ul > li.ugc-stat.customer-review-stats > span > a > div > span.ugc-c-review-average').getText());
    }

    isProductSpecificationDisplayed(product) {
        // console.log("Product Spec function...");
        expect($('span=Specifications').isDisplayed()).toBe(true);
    }

}

module.exports = new LandingPage();