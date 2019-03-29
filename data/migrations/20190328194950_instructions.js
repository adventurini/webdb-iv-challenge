exports.up = function(knex, Promise) {
	return knex.schema.table('recipes', function(tbl) {
        tbl
            .string('instructions', 128)
    })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes');
};
