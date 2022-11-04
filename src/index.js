import "./style.css";

const tomake = document.getElementById("firstidoftodo");

let Listiftodo =
  localStorage.getItem("containertodo") !== null
    ? JSON.parse(localStorage.getItem("containertodo"))
    : [];
let Id =
  Listiftodo.length > 0 ? Listiftodo[Listiftodo.length - 1].index + 1 : 0;
const inputs = document.getElementById("inputvalue");
const btns = document.getElementById("addlist");


function displaytodolist() {
  tomake.innerHTML = "";
  let count;

  for (count = 0; count < Listiftodo.length; count += 1) {
    let checkiftrue = Listiftodo[count].completed === true ? "checked" : "";
    tomake.innerHTML += `
     <div class="containertodo">
       <div class="backtodo">
         <input type="checkbox" class="check" name="completed" value="${Listiftodo[count].completed}" ${checkiftrue}>
         <p class="description">${Listiftodo[count].description}</p>
         <div class="change hidden">
         <input class="editinputchange" value="${Listiftodo[count].description}">
         </div>
       </div>
       <div class="flex-end">
         <div id="removebtn" class="removebtn hidden">
           <button id="remove" class="remove"><i class='fa fa-trash'></i></button>
         </div>
         <div id="makechange" class="makechange">
         <button id="edit" class="edit" type="button" value="${Listiftodo[count].index}">...</button>
       </div>
       </div>
     </div>
     `;
  }
  for (let i = 0; i < document.querySelectorAll('.remove').length; i += 1) {
    document.querySelectorAll('.remove')[i].addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this item?')) {
            Listiftodo.splice(i, 1);
            localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
            displaytodolist();
        }
    });
  }
  for (let i = 0; i < document.querySelectorAll('.edit').length; i += 1) {
    document.querySelectorAll('.edit')[i].addEventListener('click', () => {
        document.querySelectorAll('.change')[i].classList.remove('hidden');
        document.querySelectorAll('.removebtn')[i].classList.remove('hidden');
        document.querySelectorAll('.edit')[i].classList.add('hidden');
        document.querySelectorAll('.description')[i].classList.add('hidden');
        document.querySelectorAll('.editinputchange')[i].addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                Listiftodo[i].description = document.querySelectorAll('.editinputchange')[i].value;
                localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
                displaytodolist();
            }
        });
    });
  }
}



btns.addEventListener("click", (e) => {
  e.preventDefault();
  const newvalue = document.getElementById('inputvalue').value;
  inputs.value = "";
  Id += 1;
  Listiftodo.push({
    Id: Id,
    description: newvalue,
    completed: false,
  });
  localStorage.setItem("containertodo", JSON.stringify(Listiftodo));
  displaytodolist();
});



document.addEventListener("DOMContentLoaded", displaytodolist, false);
