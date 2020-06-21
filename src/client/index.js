import { checkForNews } from './js/newsChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/base.scss'
import './styles/footer.scss'

console.log(checkForNews);


  //GET method from projectData
  const getProjectData = async (url = '', data = {})=>{
    // Default options are marked with *
    const res = await fetch(url, {
      method: 'GET', 
      credentials: 'same-origin', 
      headers: { 'Content-Type': 'application/json'}
    });

    try {
        const data = await res.json();
        //console.log(data);
        return data;
      }  catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }
  }

  function updateUI(){

    let projectData = getProjectData('/sentiment')
    .then (function(projectData){

    //update 
    console.log(projectData);
    document.getElementById('results').innerText = projectData;

  })
}



//alert("I EXIST")
//console.log("CHANGE!!");

export {
    checkForNews,
    handleSubmit
}