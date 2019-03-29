exports.seed = function(knex, Promise) {
  return knex("chops").insert([
    { recipesId: 1, ingredientId: 1, quantity: 10 },
    { recipesId: 2, ingredientId: 2, quantity: 20 },
    { recipesId: 3, ingredientId: 3, quantity: 30 }
  ]);
};