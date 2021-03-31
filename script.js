let modalShow = document.querySelector("#modal-show");
let modalClose = document.querySelector("#modal-close");
let modalSuccess = document.querySelector("#modal-success");
let modal = document.querySelector("#modal")

modalShow.addEventListener("click", function(){
    modal.classList.toggle("active")
})

modalSuccess.addEventListener("click", function(){
    modal.classList.toggle("active");
})

modalClose.addEventListener("click", function () {
  modal.classList.toggle("active");
});