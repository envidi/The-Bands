var banner = document.querySelector(".banner");
var main = document.querySelector(".main");
var btnTickets = document.querySelectorAll(".btn-ticket");
var showBuyTicket = document.querySelector(".show-buy-ticket");
var soldOutNumber = document.querySelector(".sold__out-number");
var containShowBuyTicket = document.querySelector(".contain__show-buy-ticket");
// var linkBtnTickets = document.querySelectorAll(".btn-ticket>a");
var formContact = document.querySelector(".contact__send-email");
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var errors = document.querySelectorAll(".error");

formContact.addEventListener("submit", validationContact);
function validationContact(event5) {
    event5.preventDefault();
    var inputs = document.querySelectorAll("input");
    var errors = document.querySelectorAll(".error");
    var inclu = ["name", "email", "message"]

    let loi = false;
    inputs.forEach(function (input5) {
        var nameContact = input5.getAttribute("name");

        if (nameContact !== null) {
            input5.style.borderColor = "#ccc";
            if (input5.value.length === 0 && inclu.includes(nameContact)) {
                addloi(input5)
                loi = true;

            }
            else {
                loi = false
            }
        }

    })
    if (!loi) {
        alert("Send information successfully");

    }

}
function addloi(input5) {
    input5.style.borderColor = "red";
}

var test1 = showBuyTicket.closest(".contain__show-buy-ticket");


btnTickets.forEach(function (btnTicket, index) {

    btnTicket.addEventListener("click", function () {

        containShowBuyTicket.classList.add("show");
        containShowBuyTicket.style.display = "flex"
    })
})

var firstCloseBuyTicket = document.querySelector(".fa-xmark");
var containFirstClose = firstCloseBuyTicket.closest(".close");
firstCloseBuyTicket.addEventListener("click", function () {
    containShowBuyTicket.classList.remove("show");

})
document.addEventListener("click", function (e) {
    if (e.target.matches(".contain__show-buy-ticket")) {
        containShowBuyTicket.classList.remove("show");
    }
})

var w = window.innerWidth;

var g = w * 50 / 100;
console.log(g)
var h = window.innerHeight;
var j = w - g;


main.style.height = j + "px";

window.addEventListener("resize", function () {
    var w = window.innerWidth;
    var g = w * 50.3 / 100;
    var h = window.innerHeight;
    var j = w - g;
    if (w < 600) {
        var g = w * 50 / 100;
        j = w - g;
    }

    main.style.height = j + "px";

    if (w > 1280) {

    }


})

var position = 0;
var add = 0;




function infinityMove() {
    add = position++;

    var nhan = add * 100
    //    nhan = add * 100;

    if (add > 3) {
        add = 0
    }
    if (nhan > 300) {
        nhan = 0
    }


    function add5() {
        if (add == 0) {
            position = 0
            add = position++;
            // nhan = add * 100
        }
        return add
    }

    add5()

    banner.style.transform = `translateX(${nhan}%)`



}


setInterval(function () {
    infinityMove()
}, 2500);


var formBuyTicket = document.querySelector(".form-buy-ticket");


var increasing = 3;
formBuyTicket.addEventListener("submit", validation)
function validation(e) {
    e.preventDefault();
    var errors = document.querySelectorAll(".error");
    var inputs = document.querySelectorAll("input");
    var order = ["price", "email"]
    increasing++;
    soldOutNumber.innerHTML = increasing
    errors.forEach(function (error) {
        error.classList.add("seek")
    })
    var loi = false;
    inputs.forEach(function (input) {
        var nameInput = input.getAttribute("name");

        if (nameInput !== null) {
            input.style.borderColor = "#ccc";
            if (input.value.length === 0 && order.includes(nameInput)) {
                addError(input, "Trường yêu cầu bắt buộc");
                loi = false
            }
        }

    })

}
function addError(input, moreError) {
    var nextEle = input.nextElementSibling;
    nextEle.classList.remove("seek");
    nextEle.textContent = moreError;
    input.style.borderColor = "red"
}







function scrollScreen() {
    var header = document.querySelector("header")
    const boxTop = document.documentElement.getBoundingClientRect().top
    var scroll = boxTop * -1;
    console.log(scroll)
    if (scroll >= 200) {
        header.classList.remove("bgB")
    }
    else {
        header.classList.add("bgB")
    }
}
scrollScreen();
window.addEventListener("scroll", scrollScreen)





