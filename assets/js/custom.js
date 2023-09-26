$(function() {
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
})


const startChat = document.getElementById("start-chat");
const userDetailsBox = document.getElementById("user-details-box");
const chatBox = document.getElementById("chat-box");
const messageBox = document.getElementById("message-input");

startChat.addEventListener('click', function(){
  userDetailsBox.classList.add ("d-none");
  chatBox.classList.remove ("d-none");
  messageBox.classList.remove ("d-none");
});
