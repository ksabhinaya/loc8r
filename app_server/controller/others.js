/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
    content: 'Smart timetable is the application you’ll build . It generates a timetable  on different devices, showing students divided to batches and details about each subjects, and allows visitors to log in and leave reviews.'
  
  };
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'Smart timetable is the application you’ll build . It generates a timetable  on different devices, showing students divided to batches and details about each subjects, and allows visitors to log in and leave reviews.'
    
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'Smart timetable is the application you’ll build . It generates a timetable  on different devices, showing students divided to batches and details about each subjects, and allows visitors to log in and leave reviews.'
  }