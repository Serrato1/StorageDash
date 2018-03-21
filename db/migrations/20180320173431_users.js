exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function(table){

    table.increments('id');
    table.string('email');
    table.string('password');
    table.string('phone');
    table.string('street_address');
    table.string('city');
    table.string('state');
    table.string('zip');
    table.string('is_verified');
    table.string('avatar');
    table.timestamps('true', 'true')

    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
