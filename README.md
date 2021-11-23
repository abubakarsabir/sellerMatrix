# Seller Metrix - Cypress automation

## Prerequisites: ##

* Node = V14.x.x
* Cypress

## Installation
Firstly Clone this Project 

    git clone https://github.com/abubakarsabir/sellerMatrix.git
    cd sellerMetrix
## Opening the Cypress dashboard 

    npx cypress open
## Run command to execute tests headed
   
    npx cypress open 

## Run command to execute tests headless

    npx cypress run 

## Run command to execute tests with reporting
    
    Step 1 - Run command to execute tests

        npx cypress run --reporter mochawesome
    Step 2 - Run command to merge multiple json reports into one
       
        npx mochawesome-merge cypress/report/mochawesome-report/*.json ＞ cypress/report/output.json
        npx mochawesome-merge cypress/report/mochawesome-report/*.json | out-file -encoding ascii cypress/report/output.json
    Step 3 - Run command to generate html report

        npx marge cypress/report/output.json --reportDir ./ --inline

