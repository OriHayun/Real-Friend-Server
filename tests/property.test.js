const request = require('supertest');
const app = require('../src/app');
const Property = require('../src/models/property');

const id = '5c4b4c7913abc504abb61024'

test('Should get all properties in Database', async () => {
    await request(app).get('/properties').expect(200)
})

test('Should update property\'s favorite field to true ', async () => {
    await Property.findByIdAndUpdate(id, { favorite: false }, { new: true, runValidators: true })
    await request(app).put(`/properties/${id}`).send({ favorite: true }).expect(200)
})
