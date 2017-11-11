module.exports = {
  getObjectToView: (req, params) => {
    return {
      messages: {
        success: req.flash('success'),
        error: req.flash('error'),
        info: req.flash('info')
      },
      params: params
    }
  }
}