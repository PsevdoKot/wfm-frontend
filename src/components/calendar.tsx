import { useState, useEffect } from 'react';
import datesGenerator, { CalendarData, DateObject } from '../shared/dates-generator';
import cs from 'classnames';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

export type CalendarProps = {
  currentDate: Date;
}

export default function Calendar({ currentDate }: CalendarProps): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [dates, setDates] = useState<DateObject[][]>([]);
  const [calendar, setCalendar] = useState<Partial<CalendarData>>({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year
    };
    const { dates: newDates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...newDates]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }, []);

  const handleNextButtonClick = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates: newDates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...newDates]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  };

  const handlePrevButtonClick = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const { dates: newDates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...newDates]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  };

  const handleDateSelect = (date: DateObject) => {
    setSelectedDate(new Date(date.year, date.month, date.date));
  };

  return (
    <div className='calendar'>
      <div className='calendar__btns'>
        <button onClick={handlePrevButtonClick} className='calendar__prev-btn btn-reset'>
          Предыдущий
        </button>
        <div className='calendar__month'>
          {`${months[calendar.month as number]} ${calendar.year as number}`}
        </div>
        <button onClick={handleNextButtonClick} className='calendar__next-btn btn-reset'>
          Следующий
        </button>
      </div>
      <div>

        <div>
          <table className='main__table'>
            <thead className='main__table-head'>
              <tr className='main__table-row'>
                {days.map((day) => (
                  <td key={day} className='main__table-head-cell'>
                    {day}
                  </td>
                ))}
              </tr>
            </thead>

            <tbody>
              {dates.length > 0 && dates.map((week) => (
                <tr key={JSON.stringify(week[0])} className='main__table-row'>
                  {week.map((each) => (
                    <td
                      key={JSON.stringify(each)}
                      className={cs('main__table-body-cell', {
                        'calculator__table-body-cell': each.month === calendar.month,
                        'calculator__table-body-cell--active': each.month === calendar.month && each.date === selectedDate.getDate()
                      })}
                    >
                      <button onClick={() => handleDateSelect(each)} className='calendar__date-btn btn-reset'>
                        {each.date}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <div className='calendar__selected-date'>
        Выбранная дата: {selectedDate.toLocaleString()}
      </div>
    </div>
  );
}
