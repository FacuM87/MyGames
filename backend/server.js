import express from 'express'
import config from './src/config/config.js'
import indexRouter from './src/routes/index.routes.js'


const app = express()

app.use(express.json())

app.use('/', indexRouter)


app.listen(config.port, ()=>{
    console.log(`Server running in ${config.port}`);
})