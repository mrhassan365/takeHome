// let myData;

// cy.fixture('testdata').then((data)=>{
//    myData=data
// })

Cypress.Commands.add('tests', (inputArr) => {
   let openValue;
   let marketCapValue;
   for(let i of inputArr){
      cy.get("._2LtWySGSlk > :nth-child(1) > ._3XTsBmZSmj > ._1jocgGqVNR > input").type(i)
      cy.wait(1000)
      cy.get("._2LtWySGSlk > :nth-child(1) > ._3XTsBmZSmj > ._1jocgGqVNR > input").type('{enter}')

      cy.wait(2000)
      cy.get("._3FGgPCya0x > :nth-child(3) > a").click()

      cy.get("._2AJ8TxkVSp > :nth-child(1) > p").then(($ele) =>{
         openValue = $ele.text().trim();
        })
 
        cy.get("._2AJ8TxkVSp > :nth-child(11) > p").then(($ele) =>{
         marketCapValue = $ele.text().trim()
        })

        cy.reload()
        cy.get("._3FGgPCya0x > :nth-child(5) > a").click()

        cy.get(":nth-child(3) > .kYmYWE").then(($ele)=> {
         expect($ele.text().trim()).to.equal(marketCapValue)
     })
   }
})


