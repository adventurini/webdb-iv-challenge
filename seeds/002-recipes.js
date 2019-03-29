exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: "recipe1", dishId: 1, instructions: "instruction 1" },
    { name: "recipe2", dishId: 2, instructions: "instruction 1" },
    { name: "recipe3", dishId: 3, instructions: "instruction 1" }
  ]);
};