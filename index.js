import express from 'express'
import { addNewFurniture } from './furniture.js'


const app = express()
app.use(express.json())
let PORT = 3030

app.get('/',(req,res ) => res.send('working'))
app.post('/furniture', addNewFurniture);



app.listen (PORT, () => console.log(`Listening on http://localhost:${PORT}...`))