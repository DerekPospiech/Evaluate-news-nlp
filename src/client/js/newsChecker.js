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
          body: JSON.stringify(data) 
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
    console.log(res.text)
}

export { checkForNews }
