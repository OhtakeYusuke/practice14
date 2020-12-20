
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

  const mdMask = document.getElementById("modal-mask");
  const mdOpen = document.getElementById("modal-btn");
  const mdClose = document.getElementById("modal-close-btn");
  const modal = document.getElementById("modal");
  mdOpen.addEventListener("click", ()=>{
    mdMask.classList.remove("hidden");
    modal.classList.remove("hidden");
  });
  mdClose.addEventListener("click", ()=>{
    mdMask.classList.add("hidden");
    modal.classList.add("hidden");
  });
  mdMask.addEventListener("click", ()=>{
    mdMask.classList.add("hidden");
    modal.classList.add("hidden");
  });
});
