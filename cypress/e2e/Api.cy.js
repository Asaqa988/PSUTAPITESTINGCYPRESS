let randomIsbn = Math.floor(Math.random()*4837483)

let randomAisle = Math.floor(Math.random()*377111)
let myBaseURLAdd = "https://rahulshettyacademy.com/Library/Addbook.php"
let myBaseURLGet = `https://rahulshettyacademy.com/Library/GetBook.php?ID=${randomIsbn}${randomAisle}`
let myBaseURLDelete = "https://rahulshettyacademy.com/Library/DeleteBook.php"


let authorNames = ["ahmad","anas","ali","soso"]
let randomIndex = Math.floor(Math.random()*authorNames.length)

describe('api testing ', () => {
    it(' test the post request', () => {
        // this is the data i need to send 
        let requestBody = {
            name:"hello bb",
            isbn:randomIsbn,
            aisle:randomAisle,
            author:authorNames[randomIndex]
            }

            // this is my request 

            cy.request({
                method : "POST",
                url : myBaseURLAdd,
                body : requestBody

            }).then((theResponse)=>{
                cy.log(theResponse.body )
                cy.log(theResponse.status)

                expect(theResponse.status).to.eq(200)
                expect(theResponse.body.Msg).to.eq("successfully added")

            })
        
    });

 it('test the get request', () => {
    

    cy.request({
        method : "GET",
        url : myBaseURLGet
    }).then((theResponse)=>{
        cy.log(theResponse.body[0].book_name)
        cy.log(theResponse.body[0].author)

    })
 });


});