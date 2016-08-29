
exports.up = function(knex, Promise) {
  return knex.schema.createTable('videos', function(table){
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.string('video_url').notNullable();
    table.string('description');
    table.integer('user_id').notNullable().references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('videos');
};
