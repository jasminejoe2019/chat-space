$(function(){
  function buildHTML(message){
    var html = 
 `<div class="message" id='${message.id}'>
   <div class="upper-message">
      <div class="upper-message__name">
      ${message.user_name}
      </div>
      <div class="upper-message__date">
      ${message.date}
      </div>
   </div>
   <div class="lower-message">
      <p class="lower-message__content">
      ${message.content}
      </p>
      <img class="lower-message__image" src="
      ${message.image}" alt="">
   </div>
</div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.textbox').val('')
    })
  })
})



