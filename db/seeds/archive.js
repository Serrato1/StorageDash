
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('archive').del()
    .then(function () {
      // Inserts seed entries
      return knex('archive').insert([{
          host_id: '1',
          renter_id: '2',
          start_date: 'March 30th, 2018',
          price: '$99',
          storage_type: 'Garage',
          size: '30',
          access_method: '24 Hour Notice',
          street_address: '123 Main St',
          city: 'Phoenix',
          state: 'Arizona',
          zip: '85043',
          storage_features: '["climate-controlled", "indoors"]',
          photos:'["http://doorservpro.com/files/bigstock/2017/05/An-empty-garage-with-door-and-171689615.jpg?w=1060&h=795&a=t", "https://s3-production.bobvila.com/slides/5476/widened/dd012ec31c681374a4d2d67abd85e952.jpg?1501001844"]',
          pay_status: 'current'
        },
        {
          host_id: '1',
          renter_id: '',
          start_date: '',
          price: '$99',
          storage_type: 'Garage',
          size: '30',
          access_method: '24 Hour Notice',
          street_address: '123 Main St',
          city: 'Phoenix',
          state: 'Arizona',
          zip: '85043',
          storage_features: '["climate-controlled", "indoors"]',
          photos:'["http://doorservpro.com/files/bigstock/2017/05/An-empty-garage-with-door-and-171689615.jpg?w=1060&h=795&a=t", "https://s3-production.bobvila.com/slides/5476/widened/dd012ec31c681374a4d2d67abd85e952.jpg?1501001844"]',
          pay_status: ''
          },
      ]);
    });
};
