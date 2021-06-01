Feature:  Search offers typo correction suggestions
    Does the search box offers typo corrections for the search query

Background:
    Given I open the url "<url>"
    
    Scenario Outline:  Search offers suggestions despite query typo
        When I enter <products> in the BestBuy search field
        Then I expect the site to return <product> results despite the typo

        Examples:
            |url|products|
            |www.bestbuy.com|tlevision|