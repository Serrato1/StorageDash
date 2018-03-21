exports.up = function(knex, Promise) {

  return knex.schema.createTable('listings', function(table){

    table.increments('id');
    table.string('host_id');
    table.string('renter_id');
    table.string('start_date');
    table.string('price');
    table.string('storage_type');
    table.string('size');
    table.string('access_method');
    table.string('street_address');
    table.string('city');
    table.string('state');
    table.string('zip');
    table.string('storage_features');
    table.string('photos');
    table.string('pay_status');
    table.timestamps('true', 'true')

    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('listings');
};
