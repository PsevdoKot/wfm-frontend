import Layout from '../components/layout';
import CalendarSVG from '../components/svg/calendar-svg';
import PlanningSVG from '../components/svg/planning-svg';
import SettingsSVG from '../components/svg/settings-svg';

export default function PlanningScreen(): JSX.Element {
  return (
    <Layout>
      <article className="planning main">
        <div className="main__title">
          <PlanningSVG stroke='black' />
          <h1 className="main__title-text title-reset">Планирование</h1>
        </div>
        <div className="main__table-controls table-controls">
          <div className="table-controls__date">
            <button className="table-controls__date-left-btn btn-reset">&lt;</button>
            <button className="table-controls__calendar-btn btn-reset">
              <CalendarSVG />
            </button>
            <button className="table-controls__date-right-btn btn-reset">&gt;</button>
          </div>
          <div className="table-controls__right">
            <input className="table-controls__filter" name="filter" type="text" placeholder="Фильтр" id="filter" />
            <select className="table-controls__selector">
              <option>Опция 1</option>
              <option>Опция 2</option>
              <option>Опция 3</option>
            </select>
            <button className="table-controls__settings btn-reset">
              <SettingsSVG />
            </button>
          </div>
        </div>
        <table className="main__table">
          <thead className="main__table-head">
            <tr className="main__table-row">
              <th className="main__table-head-cell">ПН</th>
              <th className="main__table-head-cell">ВТ</th>
              <th className="main__table-head-cell">СР</th>
              <th className="main__table-head-cell">ЧТ</th>
              <th className="main__table-head-cell">ПТ</th>
              <th className="main__table-head-cell">СБ</th>
              <th className="main__table-head-cell">ВС</th>
            </tr>
          </thead>
          <tbody className="main__table-body">
            <tr className="main__table-row">
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
              <td className="main__table-body-cell"></td>
            </tr>
          </tbody>
        </table>
      </article>
    </Layout>
  );
}
