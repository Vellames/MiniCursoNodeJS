const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = (app, passport) => {
    
  /**
   * Estrategia de login local
   */
  passport.use('local', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, (req, email, password, done) => {
    const User = app.db.models.User;
    User.findOne({where : { email: email }}).then((user) => {
      if(user) {
        bcrypt.compare(password, user.password).then((res) => {
          if(res) {
            return done(null, user);
          } else {
            return done(null, false, req.flash('error', 'Senha inválida'))
          }
        })
      } else {
        return done(null, false, req.flash('error', 'Email inválido'))
      }
    })
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  })
}