/*
* @jest-environment jsdom
*/
const setaddtodo = require('./setaddtodo.js');

describe('Listiftodo', () => {
  test('add a Listiftodo', () => {
    const Listiftodo = {
      Id: 0,
      description: 'Hevar',
      completed: false,
    };
    const Listiftomake = [];

    const done = setaddtodo(Listiftodo, Listiftomake);
    expect(Listiftomake).toEqual(done);
    localStorage.setItem('containertodo', JSON.stringify(done));
    expect(JSON.parse(localStorage.getItem('containertodo'))).toEqual(done);
    for (let i = 0; i < done.length; i += 1) {
      document.body.innerHTML
        += '<div class="happen">' + '<ul id="some"><li></li></ul>' + '</div>';
    }
    const some = document.querySelectorAll('.happen');
    expect(some).toHaveLength(done.length);
  });
});
