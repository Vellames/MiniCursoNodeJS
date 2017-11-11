$(document).ready(function() {
  $(document).on('click', '.delete-record', function() {
    if(!confirm('Deseja realmente apagar esse registro?')) {
      return false;
    }
  });
  
  $('.currency').maskMoney({
    thousands: '.',
    decimal: ','
  });
  $('.currency').each(function(){
    $(this).maskMoney('mask', $(this).val());
  });

  $('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
    language: 'pt-BR'
  })
});