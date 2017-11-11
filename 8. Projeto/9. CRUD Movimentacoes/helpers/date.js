const datetime = require('date-and-time');
const accounting = require('accounting');

module.exports = (app) => {
  app.locals.formatDate = (date) => {
    return datetime.format(date, 'DD/MM/YYYY', true);
  }

  app.locals.formatMoney = (money) => {
    return accounting.formatMoney(money, 'R$', 2, '.', ',')
  }
}