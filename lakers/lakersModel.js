const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove,
  all
};

async function insert(laker) {
  const [id] = await db("lakers").insert(laker);

  return db("lakers")
    .where({ id })
    .first();
}

function remove(id) {
  return null;
}

function all() {
  return db("lakers");
}
