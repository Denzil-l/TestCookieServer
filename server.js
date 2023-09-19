import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
app.use(cookieParser())

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res) => {
    console.log(req.cookies)
    res.cookie('myCookie', 'cookieValue', {
        httpOnly: true,
        maxAge: 60 * 1000, // Время жизни куки в миллисекундах (здесь 60 секунд)
      });
    res.status(200).json({x:'text'})
    console.log("Я выполнил запрос")
})

app.listen(process.env.PORT, () => console.log(`Server is working in the PORT: ${process.env.PORT}`))



