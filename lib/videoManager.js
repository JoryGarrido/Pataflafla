var knex = require('../db/knex');
module.exports.upload = function(req, res, next){
  if (!req.decoded) {
    res.status(400).send();
  }
  knex('videos')
  .insert({
    name: req.body.title,
    description: req.body.description,
    video_url: req.body.video_url,
    user_id: req.decoded.id
  })
  .then(function(data){
      return
  });
}

module.exports.getVideoById = function(req,res,next){
  knex('videos')
  .where('video_url', 'https://www.youtube.com/watch?v=' + req.params.id)
  .then(function(data){
    var finalData = {};
    finalData.decoded = req.decoded;
    finalData.data = data;
    res.send(finalData);
  })
  .catch(function(e){
    console.log(e);
  });
}

module.exports.getAllVideos = function(req,res,next){
  knex('videos')
  .then(function(data){
    res.send(data);
  })
  .catch(function(e){
    console.log(e);
  });
}
