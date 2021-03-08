'use strict';

{
  function createColumn(col) {
    const n = [];
    for (let i = 0; i < 15; i++ ) {
      n[i] = i + 1 + 15 * col;
    }

    const column = [];
      for (let i = 0; i < 5; i++ ) {
        column[i] = n.splice(Math.floor(Math.random() * n.length), 1)[0];
      }
      return column;
  }
  
  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++ ) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }
  
  function renderBingo(columns) {
    for (let row = 0; row < 5; row++ ) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++ ){
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr); 
    }
  }
  
  const columns = createColumns();
  renderBingo(columns);

}