Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe('NYSE tests', ()=>{
    let myData;
   //before 'Desc' block initializing and accessing the element selector data from fxiture file thrugh 'myData'
    before(()=>{
        cy.fixture('testdata').then((data)=>{
            myData=data
        })
    })

    //before 'Desc' block visiting the url and adjusting viewport size
    before(()=>{
        cy.visit(myData.url)
        cy.wait(2000)
        cy.get('._3qoKVL3FNq').click()
    })

    beforeEach(()=>{
        cy.viewport(1024, 768)
        cy.scrollTo(1000, 0)
    })


    //LOOK in > Cypress > Support > Commands
    it('Look up for “OTCM” quote in quote textbox',()=>{
        cy.tests(["RHHBY", "OTCM", "ADBCF"]);
    })

   
//The commented out lines below are before I added the Cypress command in : /LOOK in > Cypress > Support > Commands

//     it('Look up for “OTCM” quote in quote textbox',()=>{
//         //Validating data sorted by symbol ascending
//        cy.get(myData.quoteTextBox).type(myData.searchTerm1)
//        cy.wait(1000)
//        cy.get(myData.quoteTextBox).type('{enter}')
       
//     })

//     it('Navigate to “Quote” tab',()=>{
//         //validating both symbol and names are visible 
//         cy.wait(2000)
//         cy.get(myData.quoteTab).click()
//      })

//     it('Capture – Open/Market Cap',()=>{
//        cy.get(myData.open).then(($ele) =>{
//         openValue = $ele.text().trim();
//        })

//        cy.get(myData.marketCap).then(($ele) =>{
//         marketCapValue = $ele.text().trim()
//        })
//     })

//     it('Navigate to “Security Details” tab',()=>{
//         //validating both symbol and names are visible 
//         cy.reload()
//         cy.get(myData.securityDetailsTab).click()
//      })

//      it('Assert Market Cap on Quote Page matches with Security Detail Page',()=>{
//         cy.get(myData.securityDetailsTabMarketCap).then(($ele)=> {
//             expect($ele.text().trim()).to.equal(marketCapValue)
//         })
// })
})
