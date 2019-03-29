exports.up = function(knex, Promise) {
	return knex.schema.createTable('chops', function(tbl) {
        tbl
            .increments();

        tbl
            .float('quantity')

        tbl
            .integer('ingredientId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
            
        tbl
            .integer('recipesId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
});
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('chops');
};
