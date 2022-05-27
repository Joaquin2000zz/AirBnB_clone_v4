$('INPUT#:amenity').click(function() {
    let id = $(this).attr('data-id');
    let dictIds = {};
    if($(this).is(':checked')){
        dictIds['id'] = id;
    }else{
      if (dictIds.hasOwnProperty('id')) {
        delete dictIds['id'];
      }
    }
    $('#amenities h4').text(dictIds.values().join(', '));
});