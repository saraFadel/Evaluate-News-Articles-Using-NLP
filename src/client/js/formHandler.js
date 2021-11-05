//import {URLValidator} from './checkURL'

const URL = document.getElementById('articleUrl')

export function handleSubmit (e) {
    e.preventDefault()
    if(Client.URLValidator(URL.value)){

        fetch("http://localhost:8081/here/"+ URL.value)
      .then(response => response.json())
      .then(function(response) {
        console.log(response.msg);
        if (response.msg ==='OK'){
             document.getElementById('agreement').innerHTML = 'Agreement:   '+ response.agreement;
             document.getElementById('subjectivity').innerHTML = 'Subjectivity:  '+ response.subjectivity;
             document.getElementById('confidence').innerHTML = 'Confidence:    ' + response.confidence;
             document.getElementById('irony').innerHTML = 'Irony:    '+ response.irony;
        }
        else{
            document.getElementById('subjectivity').innerHTML = "Problem in accessing NLP results";
        }

      })
       
    }else {
        alert("OOPS, Not a valid URL!")
    }
}