'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');

// before any of the test create a connection
beforeAll(async () => {
    await db.sync();
  });
  
// after all the tests are done
afterAll(async () => {
    await db.drop();
  });

describe("API Server", ()=>{

    // Check if 404 is handled 
    test("Should respond with 404 status on an invalid path", async ()=>{
        let response = await mockRequest.get("/ynwa");
        expect(response.status).toEqual(404);
    });

    // Check if 404 is handled 
    test("Should respond with 404 status on an invalid method", async ()=>{
        let response = await mockRequest.post("/ynwa");
        expect(response.status).toEqual(404);
    });

    // Check if 500 is handled 
    test('Should respond with 500', async () => {
        const response = await mockRequest.get("/food/?name=");
        expect(response.status).toEqual(500);
    });

     // Test if can Read
    test("Can get all Food", async ()=>{
        let response = await mockRequest.get("/food");
        expect(response.status).toEqual(200);
    });

    // Test if can Read one food
     test("Can get all Food", async ()=>{
        let response = await mockRequest.get("/food/1");
        expect(response.status).toEqual(200);
    });

    // Check can add a food
    test("Can Add A Food", async ()=>{
        let response = await mockRequest.post("/food").send({
            "order": "shawarma",
            "orderPlace": "zarqa",
            "orderPrice": "7"
        });
        expect(response.status).toEqual(201);
    });

    // Test Can Update the food
    test("Can update a record", async ()=>{
        let response = await mockRequest.put("/food/1")
        expect(response.status).toEqual(201);
    });

     // Test Can Delete record from 
    test("Can Delete a record", async ()=>{
        let response = await mockRequest.delete("/food/1")
         expect(response.status).toEqual(204);
    });
})
  