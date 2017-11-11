module.exports = {
  isAuthorized: (req, res, next) => {
    if(req.session.passport){
      return next();
    }
    req.flash('info', 'Você precisa estar logado para acessar essa rota');
    res.redirect('/');
  }
}