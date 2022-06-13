const html = document.querySelector("html");

const responsiveNavbar = document.querySelector(".responsive__navbar");

responsiveNavbar.addEventListener("click", (e) => e.stopPropagation());
html.addEventListener("click", () => responsiveNavbar.classList.remove("show"));

const responsiveToggle = document.querySelector(".toggle");

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) =>
  link.addEventListener("click", () =>
    responsiveNavbar.classList.remove("show")
  )
);

responsiveToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  responsiveNavbar.classList.toggle("show");
});

var btn=document.querySelector("#ss");
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    var body=`name:`+name+`<br> email:`+email+`<br> number:`+number;
   Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    Host : "smtp.gmail.com",
    Username : "sivasahoo2001@gmail.com",
    Password : "passiweequiqword",
    To : 'sivasahoo20012gmail.com',
    From : email,
    Subject : "This is the subject",
    Body : body
}).then(
  message => alert(message)
);
})
