import './style.css';

const tomake = document.getElementById('firstidoftodo');

const Listiftodo = [
  {
    index: 1,
    description: 'Create a todo list',
    completed: false,
  },
  {
    index: 2,
    description: 'Create a webpack',
    completed: false,
  },
  {
    index: 3,
    description: 'Create a redux with react',
    completed: false,
  },
];

function displaytodolist() {
  let count;
  for (count = 0; count < Listiftodo.length; count += 1) {
    tomake.innerHTML += `
     <div class="containertodo">
     <div class="backtodo">
     <input type="checkbox" class="check" name="completed" value="${Listiftodo[count].completed}">
      <p class="description">${Listiftodo[count].description}</p>
     </div>
     <div class="makechange">
     <p>...</p>
     </div>
     </div>
     `;
  }
}

document.addEventListener('DOMContentLoaded', displaytodolist, false);
