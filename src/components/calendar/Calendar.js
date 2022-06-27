import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';


function Calendar(props) {
  var current = props.date
  var start = moment().startOf("month").year(current.format("YYYY")).month(current.format("M")-1).startOf("isoWeek").subtract(1, 'days')
  const daysInWeek= [1, 2, 3, 4, 5, 6, 7]
  const countWeek= [1, 2, 3, 4, 5, 6]
  
  var newDate = new Array
  var currentNewDate = new Array
  
  var i = 0, key_gen = 0
  var getDate

  for (var j=0; j <= 42; j++) {
    getDate = start.add(1, 'days')
    newDate[j] = getDate.format("DD")
    if (getDate.format("M") != current.format("M")) {
      currentNewDate[j] = 'ui-datepicker-other-month'
    } else {
      if (getDate.format("DD") == current.format("DD")) {
        currentNewDate[j] = 'ui-datepicker-today'
      } else {
        currentNewDate[j] = ''
      }
    }
  }

  return (
    <>
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{current.format("dddd")}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{current.format("DD")}</div>
            <div className="ui-datepicker-material-month">{current.format("MMMM")}</div>
            <div className="ui-datepicker-material-year">{current.format("YYYY")}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{current.format("MMMM")}</span>&nbsp;<span className="ui-datepicker-year">{current.format("YYYY")}</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>
            {countWeek.map(() =>
              <tr key={key_gen++}>
                {daysInWeek.map(() =>
                  <td key={key_gen++} className={currentNewDate[i]}>{newDate[i++]}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Calendar;