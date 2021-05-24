Feature: Test CRUD methods for BestBuy search functionality

Background:
    Given I set the REST API url

Scenario: Get products from search api
    Given I set GET products api endpoint "1"
    When I Set HEADER param request content type as "application/json"
    AND Send GET HTTP request
    Then I receive valid HTTP response response code 200 for "GET"
    AND Response BODY "GET" is not empty