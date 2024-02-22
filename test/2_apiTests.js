const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../server");
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);

const serverAddress = "http://localhost:3000";
const weatherInfoArraySchema = require("../schemas/weatherInfoArray.schema.json");

describe("Weather API Tests", function () {
  before(function () {
    server.start();
  });

  after(function () {
    server.close();
  });

  describe("GET /weather", function () {
    it("should return all weather data", function (done) {
      // send http request
      chai
        .request(serverAddress)
        .get("/weather")
        .end(function (err, res) {
          expect(err).to.be.null;
          // check response status
          expect(res).to.have.status(200);

          // check response data structure
          expect(res.body).to.be.jsonSchema(weatherInfoArraySchema);
          done();
        });
    });
  });

  describe("Add new weather data", function () {
    it("should accept weather data when data is correct", function (done) {
      /*
      Example how to define request body structure
      .send({
          sensorId: 1,
          cityCode: "2222",
          temperature: 10.6,
          windSpeed: 0.7
        })
      */

      assert.fail();
    });
    it("should reject request with status 400 missing fields from data structure", function (done) {
      assert.fail();
    });
    it("should reject request with status 400 whenn incorrect data types are in the request body", function (done) {
      assert.fail();
    });
    it("should reject empty post requests and return error 400", function (done) {
      assert.fail();
    });
    it("should contain added weather data ", function (done) {
      // use assert.fail() for example to trigger a failure if you are checking the data in the response
      assert.fail();
    });
  });
});
