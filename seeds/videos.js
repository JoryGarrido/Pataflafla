
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
          knex('videos')
          .insert({
            name: 'Test1',
            video_url: "https://www.youtube.com/watch?v=yF3lhhTgqvs",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
            user_id: 1
          }),
        knex('videos')
        .insert({
          name: 'Test2',
          video_url: "https://www.youtube.com/watch?v=oUlzrcpSPFE",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
          user_id: 1
        }),
        knex('videos')
        .insert({
          name: 'Test3',
          video_url: "https://www.youtube.com/watch?v=mkcF4Mpp_y4",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
          user_id: 1
        }),
        knex('videos')
        .insert({
          name: 'Test4',
          video_url: "https://www.youtube.com/watch?v=RgvfU-1ycUs",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
          user_id: 1
        }),
        knex('videos')
        .insert({
          name: 'Test5',
          video_url: "https://www.youtube.com/watch?v=3PfDkGcSNE0",
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
          user_id: 1
        })
      ]);
    });
};
