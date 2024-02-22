import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const loginRouter = express.Router()

const JWT_SECRET = process.env.JWT_SECRET || ''

loginRouter.use(express.json())

loginRouter.post('/', (req: Request, res: Response) => {
    const { email, password } = req.body

    if (email === 'test@test.com' && password === 'test') {
        const token = jwt.sign({ id: 1, email: 'test@test.com' }, JWT_SECRET, { algorithm: 'HS256' });

        
        return res.json({ token })
    }

    return res.status(401).json({ error: true, message: 'Invalid credentials' })
})
