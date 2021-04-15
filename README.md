#  <span style="color:red">**Book Shop Automation Testing Cypress** text</span>


> Name: Automation Test	
> 
> Description: Automation Practice Web Site 2021
> 
> Project: QA Challenge 
> 	
> Application: http://practice.automationtesting.in/
> 
> Platform:	Web / Cypress / WebStorm
> 
> Created by	Andreia Freitas 
> 	
> Created on	05/04/2021	
		
		
<span style="color:blue">*Test Plan*</span>


        > Roles:
        > 
        > Guest (Customer without login)
        > 
        > Customer (with login)



## HOMEPAGE

### As a Guest I want to see on the Homepage a highlight slider
#### Acceptance criteria :
        Given I am a guest and I am on the top of the homepage
        When I click on the slider arrow
        Then I can see a different highlight book
##### Steps to reproduce:
        Open browser
        Visit URL http://practice.automationtesting.in/
        Click on the arrow presented on the slider
        Change slider
        Being able to see different sliders


### As a Guest I want to see the latest arrivals on the Homepage
#### Acceptance criteria :
        Given I am a guest and I am on the homepage
        When I scroll to the new arrivals section
        Then I can see 3 books
##### Steps to reproduce:
        Open browser
        Visit URL http://practice.automationtesting.in/
        Scroll below the slider 
        Homepage must contains 3 arrivals


### As a Guest I am able to use the search bar to look for website content
#### Acceptance criteria:
        Given I am a guest on the top left of the website 
        When I type on search bar and press enter
        Then the result of my search appears on the middle of the page
##### Steps to reproduce:
        Open browser
        Visit URL http://practice.automationtesting.in/
        On the top left of the page you can find the search bar
        Type: 'HTML'
        The user is able to find HTML links to the content on the page


### As a Guest I want to check social media connections
#### Acceptance criteria:
        Given I am a guest and I am at the button of any webpage,
        When I click on social media icon 
        Then on the browser opens a new tab with the link of the social media I clicked on.
##### Steps to reproduce:
        Open browser
        Visit URL http://practice.automationtesting.in/
        Scroll down to the footer and you can find social media button 
        Click on facebook button 
        Opens a new tab on the browser with a facebook page related to the website


### As a Guest I want to subscribe the page to receive notifications about the website:
#### Acceptance criteria:
        Given I input my email address 
        When I am on the button of the homepage and click the button ‘Subscribe’
        Then shows a message “Thank you, your sign-up request was successful! Please check your email inbox to confirm.”
##### Steps to reproduce:
        Open browser
        Visit URL http://practice.automationtesting.in/
        Scroll down on to the footer and on the right side the user can find the input to subscribe 
        On the input box insert an email address 
        Click on the button subscribe 
        The user can see a message: “Thank you, your sign-up request was successful! Please check your email inbox to confirm.”



## MY ACCOUNT - REGISTRATION

### As a guest I want to register an account to have access to the website 
#### Acceptance criteria :
        Given I am guest and I want to create a new account 
        When I fill out my credentials: email and password 
        Then I will be registered as a new customer.
##### Steps to reproduce:
        Visit http://practice.automationtesting.in/my-account
        Insert email address: test@test.io
        Insert password: sfdgfhgjklj;koilukytredgfchgvhbhjiu8976iytghbjnm,
        Click ‘Register’
        User will be registered successfully and will be navigated to the Home page



## MY ACCOUNT -  LOGIN

### As a guest I want to be able to login to see my account
#### Acceptance Criteria 1:
        Given I am a logged out website user and I am on the sign in page 
        When I fill out my credentials(email & password)
        Then the system will sign me in & let me access my profile 
##### Steps to reproduce:
        Enter the URL “http://practice.automationtesting.in/my-account”
        Insert registered email address in : test@test.io
        Insert password: sfdgfhgjklj;koilukytredgfchgvhbhjiu8976iytghbjnm,
        Click on Login button
        User must successfully login to the web page and can navigate to the HomePage

#### Acceptance Criteria 2:
        Given I am a logged out customer
        When I login with incorrect username and incorrect password
        Then proper error message must be displayed
##### Steps to reproduce --------       Negative testing     ----------
        Enter the URL “http://practice.automationtesting.in/my-account”
        Enter incorrect username
        Enter incorrect password
        Click on login button
        Proper error message must be displayed and prompt to enter login again



## SHOP

### As a customer I want to filter books by price range.
#### Acceptance criteria:
        Given I am a customer 
        When I change the price range
        Then I can see only books where the price is between the range.
##### Steps to reproduce:
        Visit: http://practice.automationtesting.in/shop/
        Filter by price 300 - 350
        Click ‘Filter’


### As a customer I want to write and submit a review 
#### Acceptance criteria:
	Given I am a customer
	When I am on the product page and select the button ‘Reviews”
	Then I am able to write a review and submit


### As a customer I want to use the breadcrumb menu to go back 
#### Acceptance criteria 
	Given I am a customer 
	When I am on the book page and click on the breadcrumb menu
	Then I can go back 


### As a guest I want to buy a book without login 
#### Acceptance criteria :
        Given I am a guest and I do not want want to login  
        When I visit the shop page and checkout with a book
        Then I can buy that book without login
##### Steps to reproduce:
        Visit: http://practice.automationtesting.in/
        Click on the menu ‘Shop’
        Select available book
        Add to basket 
        View basket 
        Proceed to checkout
        Complete billing details
        Select Cash on delivery 
        Place order 
        Page load to be able to see order details


### As a guest to check out I need to fill all the form to complete the billing details
#### Acceptance Criteria 
	Given I am a guest 
	When I am on the form 
	Then I fill all my details


First name 
“string”
Last name
“String” 
Email address 
@mail.com example 
Phone
Numerical
Country 
Scroll down/ 
Address
“Street address” “Apartment, suite, unit etc.(optional)
Town/City
“String”
County
“String”, Optional
Postcode
Include string and numerical 


### As a guest I can change the quantity of a product
#### Acceptance Criteria 
	Given I am a Guest 
	When I am on the basket 
	Then I change the quantity of product that I am buying


### As a guest I am able to input a discount coupon
#### Acceptance Criteria
	Given I am a Guest and  I am on the basket 
	When I input my discount coupon 
	Then automatically is given me a discount amount


### As a customer I want to search by product category to only see JavaScript books
#### Acceptance Criteria
        Given I am a customer I want to look for books 
        When I click on product category
        Then I can see only books from the chosen category.
##### Steps to reproduce:
        Visit: http://practice.automationtesting.in/shop/
        On product categories click on ‘JavaScript’



## How to setup project

### Install dependencies
**Requires Node version >= 10.0.0**
```
npm install
```

### How to run tests

Set username and password environment variables in `cypress.json` 

```
npm run cypress:open
```

