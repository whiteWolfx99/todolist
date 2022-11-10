const tomake = document.getElementById("firstidoftodo");
const clearall = document.getElementById("clearbutton");
const checkiftrue = document.querySelectorAll(".check");

const Listiftodo =
  localStorage.getItem("containertodo") !== null
    ? JSON.parse(localStorage.getItem("containertodo"))
    : [];
let Id = Listiftodo.length;
const inputs = document.getElementById("inputvalue");
const btns = document.getElementById("addlist");

const displaytodolist = () => {
  tomake.innerHTML = "";

  if (Listiftodo !== null) {
    Listiftodo.forEach((Listiftodo) => {
      const checkiftrue = Listiftodo.completed === true ? "checked" : "";
      tomake.innerHTML += `
      <div class="containertodo">
        <div class="backtodo">
          <input type="checkbox" class="check" name="completed" value="${Listiftodo.completed}" ${checkiftrue}>
          <p class="description">${Listiftodo.description}</p>
          <div class="change hidden">
          <input class="editinputchange" value="${Listiftodo.description}">
          </div>
        </div>
        <div class="flex-end">
          <div id="removebtn" class="removebtn hidden">
            <button id="remove" class="remove"><i class='fa fa-trash'></i></button>
          </div>
          <div id="makechange" class="makechange">
          <button id="edit" class="edit" type="button" value="${Listiftodo.index}">...</button>
        </div>
        </div>
      </div>
      `;
    });
  }
  removing();
  editing();
  checking();
};
//removing
function removing() {
  for (let i = 0; i < document.querySelectorAll(".remove").length; i += 1) {
    document.querySelectorAll(".remove")[i].addEventListener("click", () => {
      setromovebyid(Listiftodo, Listiftodo[i])
      localStorage.setItem("containertodo", JSON.stringify(Listiftodo));
      displaytodolist();
    });
  }
}
function setromovebyid(object, clear) {
  return object.splice(object.indexOf(clear), 1);
}

// editing
function editing() {
  for (let i = 0; i < document.querySelectorAll(".edit").length; i += 1) {
    document.querySelectorAll(".edit")[i].addEventListener("click", () => {
      document.querySelectorAll(".change")[i].classList.remove("hidden");
      document.querySelectorAll(".removebtn")[i].classList.remove("hidden");
      document.querySelectorAll(".edit")[i].classList.add("hidden");
      document.querySelectorAll(".description")[i].classList.add("hidden");
      document.querySelectorAll(".editinputchange")
        [i].addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            setediting(Listiftodo[i], i);
            localStorage.setItem("containertodo", JSON.stringify(Listiftodo));
            displaytodolist();
          }
        });
    });
  }
}

function setediting(setdesc, i) {
  setdesc.description = document.querySelectorAll(".editinputchange")[i].value;
}


// checking
function checking() {
  for (let i = 0; i < document.querySelectorAll(".check").length; i += 1) {
    document.querySelectorAll(".check")[i].addEventListener("change", () => {
      setCompleted(Listiftodo[i]);
      localStorage.setItem("containertodo", JSON.stringify(Listiftodo));
      displaytodolist();
    });
  }
}
// set checking
function setCompleted(item) {
  return (item.completed = !item.completed);
}
// clear all
function clearallfunction() {
  for (let i = 0; i < Listiftodo.length; i += 1) {
    if (Listiftodo[i].completed === true) {
      setclearall(Listiftodo, i);
      localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
      displaytodolist();
    }
  }
}

function setclearall(clear, i) {
  return clear.splice(i, 1);
}

// add list
function addtodo() {
  const newvalue = document.getElementById("inputvalue").value;
  inputs.value = "";
  Id += 1;
  Listiftodo.push({
    Id,
    description: newvalue,
    completed: false,
  });
  localStorage.setItem("containertodo", JSON.stringify(Listiftodo));
  displaytodolist();
}



clearall.addEventListener("click", clearallfunction);
btns.addEventListener("click", addtodo);
document.addEventListener("DOMContentLoaded", displaytodolist, false);
