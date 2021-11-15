const router = require('express').Router();

router.get('/', (req, res) => {
  // not sure if this is right
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  
  res.render('homepage');

});

router.get('/signup', (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup')
});

module.exports = router;