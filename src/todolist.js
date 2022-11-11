import setaddtodo from './setaddtodo.js';
import setromovebyid from './setremove.js';
import setediting from './edit.js';
import setCompleted from './check.js';
import setclearall from './clearall.js';

const tomake = document.getElementById('firstidoftodo');
const clearall = document.getElementById('clearbutton');
const Listiftodo = localStorage.getItem('containertodo') !== null ? JSON.parse(localStorage.getItem('containertodo')) : [];
let Id = Listiftodo.length;
const inputs = document.getElementById('inputvalue');
const btns = document.getElementById('addlist');

const displaytodolist = () => {
  tomake.innerHTML = '';

  if (Listiftodo !== null) {
    Listiftodo.forEach((Listiftodo) => {
      const checkiftrue = Listiftodo.completed === true ? 'checked' : '';
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

  for (let i = 0; i < document.querySelectorAll('.remove').length; i += 1) {
    document.querySelectorAll('.remove')[i].addEventListener('click', () => {
      setromovebyid(Listiftodo, Listiftodo[i]);
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
      document
        .querySelectorAll('.editinputchange')[i].addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            setediting(Listiftodo, e.target.value, i);
            localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
            displaytodolist();
          }
        });
    });
  }

  for (let i = 0; i < document.querySelectorAll('.check').length; i += 1) {
    document.querySelectorAll('.check')[i].addEventListener('change', () => {
      setCompleted(Listiftodo, i);
      localStorage.setItem('containertodo', JSON.stringify(Listiftodo));
      displaytodolist();
    });
  }
};

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

// add list
function addtodo() {
  const newvalue = inputs.value;
  inputs.value = '';
  Id += 1;
  const addtesttodo = setaddtodo({ Id, description: newvalue, completed: false }, Listiftodo);
  localStorage.setItem('containertodo', JSON.stringify(addtesttodo));
  displaytodolist();
}

clearall.addEventListener('click', clearallfunction);
btns.addEventListener('click', addtodo);
document.addEventListener('DOMContentLoaded', displaytodolist, false);

module.exports = setromovebyid;
