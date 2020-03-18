const express = require('express')

console.log('salam1')

const app = express()

app.get('', (req,res)=>{
    res.send('Hellp express!')
})

console.log('salam')

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})