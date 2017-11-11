const passport = require('passport');

module.exports = (app) => {
  app.post('/auth/local', passport.authenticate('local', {
    successRedirect : '/',
    failureRedirect : '/',
    failureFlash : true
  }));

  app.get('/auth/logout', (req, res) => {
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.redirect('/');
    })
  });
}