const db = require("../data/dbConfig.js");
const Lakers = require("./lakersModel.js");
const request = require("supertest");
const server = require("../api/server");

describe("lakers model", () => {
  beforeEach(async () => {
    await db("lakers").truncate();
  });

  describe("insert()", () => {
    it("adds a laker to the list", async () => {
      await Lakers.insert({ name: "Lonzo Ball" });
      await Lakers.insert({ name: "LeBron James" });
      await Lakers.insert({ name: "Kyle Kuzma" });

      const lakers = await db("lakers");
      expect(lakers).toHaveLength(3);
    });

    it("should remove a laker from the list", async () => {
      await Lakers.remove({ id: 1 });
      await Lakers.remove({ id: 2 });

      const lakers = await db("lakers");
      expect(lakers).toHaveLength(0);
    });
  });
});
