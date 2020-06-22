function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('search').value
    Client.checkForNews(formText)

    console.log("::: Data Submitted :::")

}

export { handleSubmit }
