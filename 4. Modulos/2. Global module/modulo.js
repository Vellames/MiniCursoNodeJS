module.exports = function(nome) {
  console.log("Fui Chamado");

  return {
    maiusculo: function() {
      return nome.toUpperCase();
    },

    minusculo: function() {
      return nome.toLowerCase();
    }
  }
}