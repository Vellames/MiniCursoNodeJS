module.exports = {
  getObjectToView: (req, params) => {
    return {
      user: ( req.session.passport ? req.session.passport.user : null),
      messages: {
        success: req.flash('success'),
        error: req.flash('error'),
        info: req.flash('info')
      },
      params: params
    }
  }
}