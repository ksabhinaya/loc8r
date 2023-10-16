<<<<<<< HEAD
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
=======
/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  
  };
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
>>>>>>> 29bd2d7c66fa7c3e75e186714d713914421a27db
  }