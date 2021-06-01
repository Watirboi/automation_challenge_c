Feature:  Results Should Persist After Clicking Back
    User clicks on any link from result and navigates back, 
    then result should be maintained

    Background:
        Given I open the url "<url>"

    Scenario Outline: If I click back, I expect to see the same number of results
        When I enter <products> in the BestBuy search field
        Then I expect that see all the <products> that meet my search requirement
        Then I should be able to apply 3 filters to limit the <parameters> products displayed
        Then I should see the number of items returned
        When I click on a <products> matching sku: <sku>
        When I navigate back
        Then I expect to see the same number of items returned

        Examples:
                |url|products|parameters|sku|
                |www.bestbuy.com|television|New Birthday Top-Rated|6395127|