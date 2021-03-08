'use strict';

{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  function getHead() {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++ ) {
      dates.unshift ({
        date: d - i,
        isToday: false,
        isDisabled: true,
    });
  }
     return dates;
  }

  function getBody() {
    const dates = [];
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday:false,
        isDisabled:false
      });
    }

    if (year === today.getFullYear() && month === today.getMonth())
    {dates[today.getDate() - 1].isToday = true}

    return dates;
  }

  function getTail() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();

    for (let i = 1; i < 7 - lastDay; i++ ) {
      dates.push({
        date: i,
        istoday: false,
        isDisabled: true
    });
    }
    return dates;
  }

  function reset() {
    const tbody = document.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
  }}

  function update() {
    const title = `${year}年/${month + 1}月`;
    document.querySelector('#title').textContent = title;
  }

  function display() {
    const dates = [
      ...getHead(),
      ...getBody(),
      ...getTail()
    ];
  
    const weeks = [];
    const weeksCounts = dates.length / 7 ;
  
    for (let i = 0; i < weeksCounts; i++) {
      weeks.push(dates.splice(0,7));
    }
  
    weeks.forEach(week => {
      const tr = document.createElement('tr');
  
      week.forEach(date => {
        const td = document.createElement('td');
        td.textContent = date.date;
  
        if (date.isToday) {
          td.classList.add('today');
        } 
        if (date.isDisabled) {
          td.classList.add('disabled');
        }
        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);
    });
  }

  function createCalendar() {
    reset();
    update();
    display();
  }

  document.querySelector('#prev').addEventListener('click', () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
    createCalendar();
  });

  document.querySelector('#next').addEventListener('click', () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    createCalendar();
  });

  document.querySelector('#today').addEventListener('click', () => {
    year = today.getFullYear();
    month = today.getMonth();
    createCalendar();
  });
  createCalendar();
  }
