function checkForNews(inputText) {
    console.log("::: Running checkForNews on ::", inputText)

    // POST method:
    const postData = async (url = '', data = {})=>{
        // Default options are marked with *
        const res = await fetch(url, {
          method: 'POST', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text:data})  
        });
    
        try {
            const newData = await res.json();
           // console.log(newData);
            return newData;
          }  catch(error) {
            console.log("error", error);
            // appropriately handle the error
          }
      }

      postData('/', inputText)
      .then(response=>{
        console.log("this is the data trying to be outputted into the response section" + response)
        document.getElementById('results').innerHTML = response.polarity
  // Dear student, you should create different UI elements to show different attributes of result such as polarity, text, subjectivity 
      })
    }

export { checkForNews }
