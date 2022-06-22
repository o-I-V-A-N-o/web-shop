import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';


function Calendar(props) {
  var current = props.date
  var start = moment().startOf("month").month(props.date.format("M")-1).startOf("isoWeek").subtract(1, 'days')
  var end = moment().endOf("month").month(props.date.format("M")-1).isoWeekday(7)
  var date = moment().startOf("month").month(props.date.format("M")-1).startOf("isoWeek").subtract(1, 'days')
  
  const daysInWeek= [1, 2, 3, 4, 5, 6, 7]
  const countWeek= [1, 2, 3, 4, 5]
  
  var newDate = new Array
  var currentNewDate = new Array
  
  var i = 0, key_gen = 0
  var getDate

  while (start.isBefore(end)) {
    getDate = start.add(1, 'days')
    newDate[i] = getDate.format("DD")
    if (getDate.format("M") != current.format("M")) {
      currentNewDate[i] = 'ui-datepicker-other-month'
    } else {
      currentNewDate[i] = ''
    }
    console.log(newDate[i], ' - ', currentNewDate[i])
    i++
  }
  i = 0
  console.log(i++)
  console.log("--")
    return (
      <>
        <div className="ui-datepicker">
          <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{props.date.format("dddd")}</div>
            <div className="ui-datepicker-material-date">
              <div className="ui-datepicker-material-day-num">{props.date.format("DD")}</div>
              <div className="ui-datepicker-material-month">{props.date.format("MMMM")}</div>
              <div className="ui-datepicker-material-year">{props.date.format("YYYY")}</div>
            </div>
          </div>
          <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
              <span className="ui-datepicker-month">{props.date.format("MMMM")}</span>&nbsp;<span className="ui-datepicker-year">{props.date.format("YYYY")}</span>
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
              {countWeek.map(value =>
                <tr key={key_gen++}>
                  {daysInWeek.map(value_2 =>
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