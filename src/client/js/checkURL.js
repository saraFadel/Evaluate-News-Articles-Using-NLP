const validateURL = require('valid-url')

//TODO: Check URL is valid or not
 export function URLValidator (inputURL) {
    if(validateURL.isUri(inputURL)){
        console.log('Valid URL')
        return true
    }else {
        console.log('Not A Valid URL')
        return false
    }
}
