@Pending
Feature:  Best Buy Product Search
    As a user if
    I enter a product string different from the local language
    the product may not be found

    Background:
        Given I open the url "<url>"
    
    Scenario Outline:  I should be able to search for a product
        When I enter <products> in the BestBuy search field
        And I click the submit search icon (magnifying glass)
        Then I expect a message that reads `Hmmm, we didn't find anything for <products>`
        
        Examples:
        |url|products|brand|
        |www.bestbuy.com|teléfono|sony's|
            




