$('#submitButton').click(function(){

  var message;

  message = $('#contactForm').serialize();

  $.ajax({
      url: "https://formspree.io/darylkwok@live.ca",
      method: "POST",
      data: {message: message}
      dataType: "json"
  });

    alert('Message sent, we\'ll be in touch very soon.');

});
