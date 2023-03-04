var dialog = document.getElementById("dialog");
var close = document.getElementById("dial_close");
var sign = document.getElementById("signIN");

close.addEventListener("click", (e) => {
  e.preventDefault();

  dialog.classList.remove("dial_active");
});

sign.addEventListener("click", (e)=>{
    e.preventDefault()

    dialog.classList.add("dial_active")
})
