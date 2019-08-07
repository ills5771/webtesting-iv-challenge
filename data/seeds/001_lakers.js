exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("lakers")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("lakers").insert([
        { name: "Lonzo Ball" },
        { name: "LeBron James" },
        { name: "Kyle Kuzma" }
      ]);
    });
};
