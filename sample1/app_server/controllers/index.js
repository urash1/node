/* GET home page */
module.exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
/* GET home page */
module.exports.blah = function(req, res){
  res.render('blah', { title: 'blah' });
};