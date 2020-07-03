import { checkForNews } from "./newsChecker"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('search').value

    //try is created for jest testing as the client library is not defined in jest
    try{
    Client.checkForNews(formText)
    }
    catch{
        checkForNews(formText)  
    }
    console.log("::: Data Submitted :::")
 
    return 2; //for jest test
}

export { handleSubmit }
