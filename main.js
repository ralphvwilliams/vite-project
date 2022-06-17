import axios from "axios";
//https://aeea-154-160-7-119.eu.ngrok.io/api/persons
let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let postBtn = document.getElementById("post");
let allDIv = document.getElementById("all");

function displayAll() {
  allDIv.innerHTML = "";
  axios
    .get("https://academy-contacts-backend.herokuapp.com/api/persons")
    .then((data) => {
      console.log(data);
      data.data.forEach((person) => {
        allDIv.innerHTML += `<p class="personName">Name: ${person.name}</p>
            <p class="personNumber">Number: ${person.number}`;
      });
    });
}

// displayAll();

function postContact() {
  let contact = {
    name: nameInput.value,
    number: numberInput.value,
  };
  axios
    .post("https://academy-contacts-backend.herokuapp.com/api/persons", contact)
    .then((data) => {
      console.log(data);
      displayAll();
    });
}

// postContact();
displayAll();
postBtn.addEventListener("click", (e) => {
  e.preventDefault();
  postContact();
  nameInput.value = "";
  numberInput.value = "";
});
