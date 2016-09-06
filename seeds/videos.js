
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
          knex('videos')
          .insert({
            name: "I'm On the John, Son MARCHING SNARE",
            video_url: "https://www.youtube.com/watch?v=tz3wSbSiJIs",
            description: 'New spree ya wanna know! via YouTube capture',
            user_id: 1
          }),
        knex('videos')
        .insert({
          name: '16th Note Grid and Variations MARCHING SNARE',
          video_url: "https://www.youtube.com/watch?v=cHAV_zPN8_U",
          description: 'As with most grid exercises, this exercise presents some tricky accent pattern / pulse relationships. The pattern that usually presents the most difficulty is when the accent is on the "e". The key to this excercise is MARKING TIME!',
          user_id: 1
        }),
        knex('videos')
        .insert({
          name: 'Debussy Clair De Lune PIANO',
          video_url: "https://www.youtube.com/watch?v=4fvo_iOuSck",
          description: 'This is one of my favorite pieces! I thought I would post this video asking for critique and you are more than welcome to play along with me. :)',
          user_id: 1
        })
      ]);
    });
};
