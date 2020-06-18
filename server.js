const express = require('express') //import express libray
const app = express()  //app define
const PORT = process.env.PORT || 3000 // define port

const authRouter = require('./router/authRouter')
const postRouter = require('./router/postRouter')

app.listen(PORT, () =>{
    console.log('server is running on ',{PORT}) //runing application in PORT

})

app.use('/login', authRouter)
app.use('/api', postRouter)

// app.get('/', (req, res, next) =>{
//     res.send('Helllo')
// })


