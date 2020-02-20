
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user1', password: 'user1', department: 'PR'},
        {username: 'user2', password: 'user2', department: 'PR'},
        {username: 'user3', password: 'user3', department: 'Web'},
      ]);
    });
};
