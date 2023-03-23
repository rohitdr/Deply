const mongooseConnectToDb=require('./db')
const express = require('express')
var cors = require('cors')
mongooseConnectToDb();

const app = express()
app.use(cors())
const port = 5000

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/api/auth',require('./Routes/auth'))

app.use('/api/recipe',require('./Routes/Recipe.js'))

//serving the indexfile
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.resolve(__dirname,'Frontend','build')))
  app.get('/',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'Frontend','build','index.html'))
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})