Feature: First 3 Letter Search
    There should be pre-defined search criteria for auto complete e.g. after typing first 3 letter it should suggest matching keyword
Background:
    Given I open the url "<url>"

Scenario Outline:  Enter first 3 letters for search
        When I enter <products> in the BestBuy search field
        Then I expect the site to return <product> results despite the typo


        Examples:
            |url|products|
            |www.bestbuy.com|tel|