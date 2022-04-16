var feed = new Instafeed({
  get: "user",
  limit: 12,
  resolution: "standard_resolution",
  target: "instafeed",
  sortBy: "most-recent",
  template:
    '<div class="col-lg-3 col-md-3 col-sm-4 col-xs-4 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" class="img-fluid"/></a></div>',
  accessToken: "여기에 토큰 입력",
});
feed.run();
