var videoManager = require('../lib/videoManager');


describe('videoManager.upload', function(){
  it('has upload function', function(){
    expect(typeof videoManager.upload).toEqual('function');
  })
  it('uploads a video correctly', function(){
    // videoManager.upload().then()
  })
})

describe('videoManager.comment', function(){
  it('has comment function', function(){
    expect(typeof videoManager.comment).toEqual('function');
  })
})

describe('videoManager.Share', function(){
  it('has share function', function(){
    expect(typeof videoManager.share).toEqual('function');
  })
})

describe('Get video function', function(){
  it('has getVideoById function', function(){
    expect(typeof videoManager.getVideoById).toEqual('function');
  });
  it('can get video by id', function(){

  })
})
