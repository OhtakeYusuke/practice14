import consumer from "./consumer"

const appRoom = consumer.subscriptions.create("RoomChannel", {
  connected() {
    
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const messages = document.getElementById("messages");
    messages.insertAdjacentHTML("afterbegin", data["message"]);
  },

  speak: function(message) {
    // console.log("check")
    return this.perform('speak', {message: message});
  }
});

window.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    appRoom.speak(e.target.value);
    e.target.value = '';
    e.preventDefault();
  }
})

document.addEventListener("turbolinks:load", function(){
  const submit = document.getElementById("submit");
  const chat = document.getElementById("chat-field");
  submit.addEventListener("click", function(e){
    appRoom.speak(chat.value);
    chat.value = "";
    e.preventDefault();
  })
})

document.addEventListener("turbolinks:load", function(){
  const text = document.getElementById("chat-field");
  const count = document.getElementById("count");
  document.addEventListener("input", (e)=>{
    if (text.value.length === 0){
      count.textContent = "";
    }else{
      count.textContent = `${text.value.length} 文字入力中`;
    }
  })
})
document.addEventListener("turbolinks:load", function(){
  console.log("check!!!!");
  // const text = document.getElementById("chat-field");
  const count = document.getElementById("count");
  document.addEventListener("submit", (e)=>{
    console.log("check");
    count.textContent = "";  
  })
})
