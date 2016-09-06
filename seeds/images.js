
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // return Promise.all([
      //   knex('images').insert({url: 'http://i.imgur.com/9351s6I.png', video_id: 1}),
      //   knex('images').insert({url: 'http://i.imgur.com/g46O4wp.png', video_id: 2}),
      //   knex('images').insert({url: 'https://www.youtube.com/watch?v=4fvo_iOuSck', video_id: 3})
      // ]);
    });
};
