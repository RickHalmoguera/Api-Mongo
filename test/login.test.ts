const request = require('supertest');
import app from '../app'





describe('Test for the /login with the credentials', () => {
    it('Sends the wrong credentials, and should return error with message', async () => {
        const response = await request(app)
            .post('/login')
            .send({ "email": "email", "password": "password" })

        expect(response.statusCode).toEqual(401)
        expect(response.body).toEqual({
            "error":true,
            "message": "Invalid credentials" 
        })
    })

    it('Sends the correct credentials, should return a Token', async () => {
        const response = await request(app)
            .post('/login')
            .send({ "email": "test@test.com", "password": "test"})

        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('token')
    })
})

