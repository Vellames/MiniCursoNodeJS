$(document).ready(function() {
  $(document).on('click', '.delete-record', function() {
    if(!confirm('Deseja realmente apagar esse registro?')) {
      return false;
    }
  })
});