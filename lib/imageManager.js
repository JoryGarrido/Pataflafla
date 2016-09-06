var knex = require('../db/knex');

module.exports.upload = function(req,res,next){
  knex('images')
  .insert({
    url: req.body.url,
    video_id: req.body.video_id
  })
  .then(function(data){
    return;
  });
};

module.exports.getImages = function(req,res,next){
  knex('images')
  .where('video_id', req.params.id)
  .then(function(data){
    res.send(data);
  });
};
