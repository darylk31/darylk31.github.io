$(function(){

$('@contactForm').submit(function(e){
  e.preventDefault();

  var name, email, message;

  name = $('#name');
  email = $('#email');
  message = $('#message');

  if (name.val() == "" || email.val() == "" || message.val() == ""){
    alert('Please check submission forms again.')

  } else{
    $.ajax({
      url: "https://formspree.io/darylkwok@live.ca",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });

    alert('Message sent.')
  }
});
});
