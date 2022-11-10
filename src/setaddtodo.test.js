/*
 * @jest-environment jsdom
 */
const setaddtodo = require('./setaddtodo.js');
const setremovebyid = require('./setremove.js');

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
        += '<div class="happen">'
        + '<ul id="some"><li></li></ul>'
        + '</div>';
    }
    const some = document.querySelectorAll('.happen');
    expect(some).toHaveLength(done.length);
  });

  test('remove todo', () => {
    const list = [
      {
        Id: 0,
        description: 'Hevar',
        completed: false,
      },
      {
        Id: 1,
        description: 'kas',
        completed: false,
      },
    ];
    const Id = 0;
    const done = setremovebyid(list, Id);

    expect(done).toEqual([
      {
        Id: 1,
        description: 'kas',
        completed: false,
      },
    ]);
    localStorage.setItem('containertodo', JSON.stringify(done));
    expect(JSON.parse(localStorage.getItem('containertodo'))).toEqual(done);
    document.body.innerHTML = '';
    for (let i = 0; i < done.length; i += 1) {
      document.body.innerHTML
        += '<div class="home">'
        + '  <ul id="lists"><li></li></ul>'
         + '</div>';
    }
    const finaly = document.querySelectorAll('.home');
    expect(finaly).toHaveLength(done.length);
  });
});
