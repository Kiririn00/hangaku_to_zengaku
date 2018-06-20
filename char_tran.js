
var str;

$('form#form').submit(function (event) {

  //this will cancel action of form
  event.preventDefault();

  var $form = $(this),//this is $('form#form')
    str = $form.find( 'input#text' ).val(),
    all_str = "";//get value

  str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      console.log("before: ", s);
      str = String.fromCharCode(s.charCodeAt(0) - 65248);
      all_str += str;
      return str;
  });
  console.log(all_str);

  $form.find( 'input#text' ).val(all_str);
});
