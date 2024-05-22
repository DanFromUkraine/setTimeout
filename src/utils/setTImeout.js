const btn = document.querySelector("#button-js");
const modal = document.querySelector(".modal");

console.log("до сета");
function onClick(e) {


    setInterval(() => {
        modal.classList.toggle("modal_active");
        // modal.classList.remove("modal");
        console.log(modal);
    }, 10);
}

btn.addEventListener("click", onClick);

console.log("після сета");

setInterval(() => {
    modal.classList.toggle("modal_active");
    console.log(modal);
}, 1000);