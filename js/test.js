`use strict`

var hagim = hagimFromHeader;
var titleToHolidays = titleToHolidaysHeader;
document.addEventListener('DOMContentLoaded', function(){
  if(document.body.clientWidth > 1020) {
    const weekDays = Array.from(document.querySelectorAll('abbr'));
    const th = Array.from(document.querySelectorAll('th'));
    for (let i=0; i < weekDays.length;++i) {
      th[i].innerHTML = weekDays[i].title;
    }

    let days = Array.from(document.querySelectorAll(`td`));

    const createEvent = (text = '') => {
      let dayEvent = document.createElement(`div`);
      dayEvent.className = `calendar__event`;
      dayEvent.innerHTML = text;
      return dayEvent;
    };

    days = days.map(function(el) {
      let wrapDay = document.createElement('tr');
      wrapDay.className = 'calendar__day-wrap';
      wrapDay.innerHTML = el.outerHTML;
      return el.parentNode.replaceChild(wrapDay,el);
    });

    let eventBlock = Array.from(document.querySelectorAll(`.hasevent`));
    eventBlock = eventBlock.map(function(el){
      el.dataset.content;
      document.createElement('')
      $(el.data('content').text())
      return el.appendChild(createEvent(el.dataset.core_calendarPopupcontent));
    });

    const calendarDays = Array.from(document.querySelectorAll('.day'));
    for (let day in hagim) {
      calendarDays.map(function(el) {
        if(el.innerHTML == day || el.firstChild.innerHTML == day) {
          if (el.classList.contains('hasevent')){
            const wrapImg = document.createElement(`div`);
            wrapImg.className = hagim[day];
            wrapImg.classList.add('wrapImg');
            // el.insertBefore(wrapImg, el.firstChild);
            el.appendChild(wrapImg);
          } else {
              if (hagim[day]){
                  el.classList.add(hagim[day]);
            }
          }
        }
      });
    }
    for (let day in titleToHolidays) {
      calendarDays.map(function(el) {
        if(el.innerHTML == day || el.firstChild.innerHTML == day) {
          const titleHoliday = document.createElement(`span`);
          titleHoliday.className = 'title__holiday';
          titleHoliday.innerHTML = titleToHolidays[day];
          el.insertBefore(titleHoliday, el.firstChild);
        }
      });
    }

    const dayBlockWidth = Math.floor((document.body.clientWidth)*0.084);
    const calendarWidth = Math.floor((document.body.clientWidth)*0.6336);
    const calendarFont = Math.floor((document.body.clientWidth)*0.018);

    const dayBlockWrap = Array.from(document.querySelectorAll('.calendar .calendar__day-wrap'));
    const dayBlock =  Array.from(document.querySelectorAll('.calendar .calendartable td'));
    const font =  Array.from(document.querySelectorAll('.calendar .calendartable th'));
    const eventBlockHover =  document.querySelectorAll('.calendar__event');
    const calendar =  document.querySelector('.cal__container');

    calendar.style.cssText = 'width: '+calendarWidth+'px; margin: 0 auto;';

    eventBlockHover.forEach(function(el){
      return el = el.style.cssText = 'font-size: '+calendarFont+'px; line-height: '+calendarFont+'px;';
    });

    font.forEach(function(el){
      return el = el.style.cssText = 'font-size: '+calendarFont+'px;';
    });

    dayBlockWrap.forEach(function(el){
      return el = el.style.cssText = 'width: '+dayBlockWidth+'px;';
    });

    dayBlock.forEach(function(el){
      return el = el.style.cssText = 'width: '+dayBlockWidth+'px; height: '+dayBlockWidth+'px; font-size: '+calendarFont+'px;';
    });
  }
});
