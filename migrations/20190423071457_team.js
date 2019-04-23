exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('team', function (table) {
      table.increments('id');
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
    })
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable("team");
};