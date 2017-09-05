$(function(){

$('#submitButton').click(function(){

  var email = $('#email');
  var message = $('#message');
  var data = 'email='+ email  + '&message='+ message;



  if (email.val() == "" || message.val() == ""){
    alert('Please check submission forms again.')
    console.log('Submit Failed.')
  } else{
    $.ajax({
      url: "https://formspree.io/darylkwok@live.ca",
      method: "POST",
      data: data,
      dataType: "json"
    })
    alert('Message sent.')
    console.log('Email sent!')
  }
});
});
