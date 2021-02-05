const superTest = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const urlTest = superTest("localhost:4000");

//Test suite
describe("TEST", () => {
    // Test para respuesta exitosa
    it("Status OK 200", async () => {
        let response = await urlTest
            .get("/api/test?text=test")
            .then((response) => {
                return response;
            });
        expect(response.status, "Status succesful").to.equal(200);
    });
    // Test para error
    it("Status Bad 400", async () => {
        let response = await urlTest.get("/api/test").then((response) => {
            return response;
        });
        expect(response.status, "Bad request").to.equal(400);
    });
});
