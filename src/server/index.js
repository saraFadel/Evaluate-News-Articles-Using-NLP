const path = require('path')
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const dotenv = require('dotenv')
dotenv.config()

//const mockAPIResponse = require('./mockAPI.js')

// const PORT = 8081

// Create an instance for the server
const app = express()

// Avoid cors-origin conflict
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
  extended: false
 }))


app.use(express.static('dist'))

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
// const APIToken = 'dc4d71a221ccb400626989d912dbf07b'


app.get('/here/*', async (req, res) => {
    // res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
    const url = req.params[0]

    const response = await axios.get(`${baseURL}${process.env.API_KEY}&url=${url}&lang=en`)
    console.log(response.data.confidence)
    res.send({
        msg: response.data.status.msg,
        agreement: response.data.agreement,
        subjectivity:response.data.subjectivity,
        confidence:response.data.confidence,
        irony:response.data.irony
    })
})

app.listen(process.env.PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${process.env.PORT}!`)
})

