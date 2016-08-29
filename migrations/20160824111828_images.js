
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', function(table){
    table.increments('id').primary();
    table.string('url');
    table.integer('video_id').references('id').inTable('videos');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
