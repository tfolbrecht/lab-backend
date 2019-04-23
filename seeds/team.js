
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('team').del()
    .then(function () {
      // Inserts seed entries
      return knex('team').insert([
        {id: 0, first_name: 'Jonathan', last_name: 'Holloway'},
        {id: 1, first_name: 'Zach', last_name: 'Angell'},
        {id: 2, first_name: 'Lukas', last_name: 'Siatka'},
        {id: 3, first_name: 'Kailey', last_name: 'Smith'},
        {id: 4, first_name: 'Jor Ming', last_name: 'Poon'},
        {id: 5, first_name: 'Thomas', last_name: 'Folbrecht'},
        {id: 6, first_name: 'Jordan', last_name: 'Spell'},
        {id: 7, first_name: 'Kathryn', last_name: 'Hampton'}
      ]);
    });
};
