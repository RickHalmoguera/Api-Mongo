require('ts-node/register')
import {app} from './app'


const PORT = process.env.PORT || 3001
app.get('/',(req,res)=>{
    res.send("<h1>Hello </h1>")
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
