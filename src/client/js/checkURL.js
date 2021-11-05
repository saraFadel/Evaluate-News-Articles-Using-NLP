const validateURL = require('valid-url')


 export function URLValidator (inputURL) {
    if(validateURL.isUri(inputURL)){
        console.log('Valid URL')
        return true
    }else {
        console.log('Not A Valid URL')
        return false
    }
}
