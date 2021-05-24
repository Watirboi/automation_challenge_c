Feature:  Results Should Persist After Clicking Back
    user clicks on any link from result and navigates back, then result should be maintained

Background:
    Given I open the url "<url>"

Scenario Outline:
    When I enter <products> in the BestBuy search field
    Then I expect that see all the <products> that meet my search requirement
    Then I should be able to apply 3 filters to limit the <parameters> products displayed
    When I click on a <products> matching sku: <sku>
    Then I expect to see the returned items count displayed
    When I navigate back
    Then the results should be maintained

    Examples:
            |url|products|parameters|sku|
            |www.bestbuy.com|television|New Birthday Top-Rated|6395127|