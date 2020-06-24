function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('search').value
    Client.checkForNews(formText)

    console.log("::: Data Submitted :::")
 
    return 2; //for jest test
}

export { handleSubmit }
