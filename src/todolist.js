
const tomake = document.getElementById('firstidoftodo');
const clearall = document.getElementById('clearbutton');

const Listiftodo = localStorage.getItem('containertodo') !== null
  ? JSON.parse(localStorage.getItem('containertodo'))
  : [];
let Id = Listiftodo.length > 0 ? Listiftodo[Listiftodo.length - 1].index + 1 : 0;
const inputs = document.getElementById('inputvalue');
const btns = document.getElementById('addlist');

function displaytodolist() {
  tomake.innerHTML = '';
  let count;

  for (count = 0; count < Listiftodo.length; count += 1) {
    const checkiftrue = Listiftodo[count].completed === true ? 'checked' : '';
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
      Listiftodo.splice(i, 1);
      localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
      displaytodolist();
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
  for (let i = 0; i < document.querySelectorAll('.check').length; i += 1) {
    document.querySelectorAll('.check')[i].addEventListener('change', () => {
      if (document.querySelectorAll('.check')[i].checked === true) {
        Listiftodo[i].completed = true;
      } else {
        Listiftodo[i].completed = false;
      }
      localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
      displaytodolist();
    });
  }
}

clearall.addEventListener('click', () => {
  for (let i = 0; i < Listiftodo.length; i += 1) {
    if(Listiftodo[i].completed === true){
      Listiftodo.splice(i, 1);
      localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
      displaytodolist();
    }}
  }
); 


btns.addEventListener('click', (e) => {
  e.preventDefault();
  const newvalue = document.getElementById('inputvalue').value;
  inputs.value = '';
  Id += 1;
  Listiftodo.push({
    Id,
    description: newvalue,
    completed: false,
  });
  localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
  displaytodolist();
});

document.addEventListener('DOMContentLoaded', displaytodolist, false);
