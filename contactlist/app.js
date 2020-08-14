const add = document.getElementById("add");
const cancelBtn = document.getElementById("cancel");
const saveBtn = document.getElementById("save");
const nameField = document.getElementById("name");
const telField = document.getElementById("tel");
const names = document.querySelector("#list");
const form = document.getElementById("form");
const searchBar = document.querySelector("#search");

contacts = [];

add.addEventListener("click", appearMenu);
cancelBtn.addEventListener("click", appearMenu);
saveBtn.addEventListener("click", saveContact);
searchBar.addEventListener("keyup", filter);
names.addEventListener("click", deleteItem);

function appearMenu() {
  form.classList.toggle("hidden");
}

function saveContact() {
  const nameText = document.getElementById("name").value;
  const telText = document.getElementById("tel").value;
  if (nameText.length >= 1 && telText.length >= 1) {
    person = {
      name: `${nameText}`,
      tel: `${telText}`,
    };
    contacts.push(person);
    let newPersonInList = document.createElement("li");
    newPersonInList.innerHTML = `
 <div class="contactInList"><h4>${nameText.toUpperCase()}</h4><span><h4 class="number end">${telText.toUpperCase()}</h4><i class="fa fa-trash remove end" aria-hidden="true"></i></span></div>
 `;
    const listRoot = document.getElementById("list");
    listRoot.append(newPersonInList);
    clearInputs();
    appearMenu();
  } else {
    alert("Please enter a valid Name and a valid Number");
  }
}
function clearInputs() {
  nameField.value = "";
  telField.value = "";
}

function deleteItem(event) {
  const myTarget = event.target;
  if (myTarget.classList[1] === "fa-trash") {
    if (confirm("Do you really want to delete this contact?")) {
      myTarget.parentElement.parentElement.remove();
    }
  }
}
function filter() {
  for (let i = 0; i < names.children.length; i++) {
    const searchBarText = document.getElementById("search").value.toUpperCase();
    if (!names.children[i].textContent.includes(searchBarText)) {
      names.children[i].style.display = "none";
    } else {
      names.children[i].style.display = "block";
    }
  }
}
