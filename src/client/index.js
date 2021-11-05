import {URLValidator} from './js/checkURL'
import {handleSubmit} from './js/formHandler'

import './styles/style.scss'

// TODO: get the button for submit
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {handleSubmit(e)})

console.log('Hello')

export {
    URLValidator,
    handleSubmit
}