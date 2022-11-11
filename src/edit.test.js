/*
 * @jest-environment jsdom
 */
const setediting = require('./edit.js');

describe('Listiftodo part 2', () => {
  test('update todo', () => {
    const listiftodo = [
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
    const i = 0;
    const done = setediting(listiftodo, 'hoshang', i);
    expect(done).toEqual(
      [
        {
          Id: 0,
          description: 'hoshang',
          completed: false,
        },
        {
          Id: 1,
          description: 'kas',
          completed: false,
        },
      ],
    );
    localStorage.setItem('containertodo', JSON.stringify(done));
    expect(JSON.parse(localStorage.getItem('containertodo'))).toEqual(done);
    document.body.innerHTML = '';
    for (let i = 0; i < done.length; i += 1) {
      document.body.innerHTML
        += '<div class="home">'
        + '  <ul id="editlist"><li></li></ul>'
        + '</div>';
    }
    const editlist = document.querySelectorAll('.home');
    expect(editlist).toHaveLength(done.length);
  });
});
