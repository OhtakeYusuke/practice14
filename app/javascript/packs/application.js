
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener("turbolinks:load", function(){
  const open = document.getElementById('open');
  const overray = document.querySelector(".overray");
  open.addEventListener('click', () => {
    overray.classList.add("show");
    open.classList.add("hide");
  });
  const close = document.querySelector(".close");
  close.addEventListener("click", ()=>{
    overray.classList.remove("show");
    open.classList.remove("hide");
  });
});
