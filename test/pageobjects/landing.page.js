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

    get openAccordionReviewsPanelBtn () { return $('button[data-track="customerreviewstab Open"]') }

    get reviewsOnPage () { return $$('ul.reviews-list > li') }
    
    // get ratingsReviewIds() { return $$('div.v-m-bottom-l > div > div > ul > li.ugc-stat.customer-review-stats > span > a > div > span.ugc-c-review-average') }
    get ratingsReviewIds() { return $$('[id^="user-generated-content-ugc-stats"]')}

    get ratingsReviewCommentsIds() { return $$('[id^="user-generated-content-ratings-and-reviews"]')}

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

    applyFeaturesCarryCaseIncFilter(condition) {
        // Apply Open Box Condition filter
        $('[id^="customerreviews_facet-Carrying-Case-Included"]').scrollIntoView();
        $('[id^="customerreviews_facet-Carrying-Case-Included"]').click();
    }

    applyColorWhiteFilter(condition) {
        // Apply Open Box Condition filter
        $('[id^="colorcat_facet-White"]').scrollIntoView();
        $('[id^="colorcat_facet-White"]').click();
    }

    applyRefrigeratorBrandFilter(brand) {
        // Apply Refrigerator Brand filter
        $(`[id^="brand_facet-${brand}"]`).scrollIntoView();
        $(`[id^="brand_facet-${brand}"]`).click();
    }

    applyRefrigeratorFeaturesFilter(feature) {
        // Apply Refrigerator feature filter
        $(`[id^="features_facet-${feature}"]`).scrollIntoView();
        $(`[id^="features_facet-${feature}"]`).click();
    }

    applyRefrigeratorFeaturesColorFilter(feature) {
        // Apply Refrigerator feature - color filter
        $(`[id^="primaryfinishcolor_facet-${feature}"]`).scrollIntoView();
        $(`[id^="primaryfinishcolor_facet-${feature}"]`).click();
    }

    applySurfaceProRamFilter(feature) {
        // Apply Refrigerator feature - color filter
        $(`[id^="systemmemoryram_facet-${feature}"]`).scrollIntoView();
        $(`[id^="systemmemoryram_facet-${feature}"]`).click();
    }

    applySurfaceProStorageCapacityFilter(feature) {
        // Apply Refrigerator feature - color filter
        $(`[id^="storagecapacitysv_facet-${feature}"]`).scrollIntoView();
        $(`[id^="storagecapacitysv_facet-${feature}"]`).click();
    }

    applySurfaceProFeatureFFCameraFilter(feature) {
        // Apply Refrigerator feature - color filter
        $(`[id^="features_facet-${feature}"]`).scrollIntoView();
        $(`[id^="features_facet-${feature}"]`).click();
    }

   /*  ? Should this be a Switch Statement */
   /* This grew and I should have created a Constants file to house these values */
    clickFilterOptions(parameters) {
        let filter_array = parameters.split(" ");
        for(let i=0; i < filter_array.length; i++) {
            if(filter_array[i] == 'New') {
                this.applyNewConditionFilter();
            } else if (filter_array[i] == 'Birthday') {
                this.applyGiftIdeasBirthdayFilter();
            } else if (filter_array[i] == 'Top-Rated') {
                this.applyCustomerRatingTopRatedFilter();
            } else if (filter_array[i] == 'Brand-Samsung') {
                this.applyRefrigeratorBrandFilter("Samsung");
            } else if (filter_array[i] == 'Features-IceMaker') {
                this.applyRefrigeratorFeaturesFilter('Ice-Maker');
            } else if (filter_array[i] == 'PrimaryFinish-Color:BlackSS') {
                this.applyRefrigeratorFeaturesColorFilter('Black-stainless-steel');
            } else if (filter_array[i] == 'Ram-16-Gigabytes') {
                this.applySurfaceProRamFilter('16-gigabytes');
            } else if (filter_array[i] == 'Storage-Capacity-1000-Gigabytes') {
                this.applySurfaceProStorageCapacityFilter('1000-gigabytes');
            } else if (filter_array[i] == 'Features-FF-Camera') {
                this.applySurfaceProFeatureFFCameraFilter('Front-Facing-Camera');
            }
            else {
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
    isAvgRatingsDisplayed(product, sku) {
        const avgRating = $(`a[href$="/${sku}.p?skuId=${sku}#tabbed-customerreviews"] div > span.ugc-c-review-average`);
        avgRating.waitForDisplayed(5000);
        console.log(avgRating.getText());
        console.log(`The average user rating for product ${product} is: ${avgRating.getText()}`);
    }

    isProductSpecificationDisplayed(product) {
        console.log("Product Spec function...");
        expect($('span=Specifications').isDisplayed()).toBe(true);
    }

    consoleLogTop3Reviews() {
        // browser.debug();
        this.openReviewsAccordionPanel();
        console.log(`There are ${this.reviewsOnPage.length} reviews on this page`);
        // Capture the top 3 reviews for this product
        for (var i=1; i<4; i++) {
            const review = $(`#reviews-accordion > div.row.ugc-reviews.clearfix > div > div > ul > li:nth-child(${i}) > div > div.review-item-content.col-xs-12.col-md-8.col-lg-9 > div.ugc-review-body.body-copy-lg > div > p`);
            review.waitForExist(6000);
            console.log('\x1b[33m%s\x1b[0m', `Review #${i}: ` + review.getText());
        }
    }

    searchCorrectionDisplay(product) {
        let correctedTyping = $("#search-header-1 > div > div > div.title-wrapper.title > span:nth-child(2) > span:nth-child(1) > h1");
        console.log(correctedTyping);
        expect(correctedTyping.getText() == product);
    }

    getReturnItemCount() {
        let reviewsCount = $('a[href$="/${sku}.p?skuId=${sku}#tabbed-customerreviews"] div > span.c-reviews-v4')[0].getText(0);
        console.log(`This product returned: ${reviewsCount} reviews.`);
    }

    isReturnedCountDisplayed() {
        $("#sku-list-1 > div > div > div:nth-child(2) > div > div.banner-middle-column > span").isDisplayed();
    }

    navigateBack() {
        browser.back()
    }

    openReviewsAccordionPanel() {
        // Open the `Reviews` accordion panel
        this.openAccordionReviewsPanelBtn.scrollIntoView();
        this.openAccordionReviewsPanelBtn.click();
        browser.pause(5000);
    }

    compareReturnedItems() {
        const oldReturnedItemCt = this.getReturnItemCount();
        this.navigateBack
        const newReturnedItemCt = this.getReturnItemCount();
        return (oldReturnedItemCt == newReturnedItemCt);
    }

}

module.exports = new LandingPage();