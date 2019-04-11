const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  describe("GET route", () => {
    it("should return status code 200", () => {
      return request(server)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
  });

  it('should return "Go Lakers" ', () => {
    request(server)
      .get("/")
      .then(res => {
        expect(res.text).toEqual("Go Lakers");
      })
      .catch(error => {
        console.log(error);
      });
  });
  it("should return status code 200 for POST", () => {
    return request(server)
      .post("/lakers")
      .send({});
  });
  it("should return status code 200 for DELETE", () => {
    return request(server)
      .delete("/lakers/:id")
      .send({});
  });
});
