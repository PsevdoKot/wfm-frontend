// export type MainScreenProps = {};

export default function MainScreen(): JSX.Element {
  return (
    <article className="main">
      <div className="main__title">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="calendar-check">
            <path id="Vector"
              d="M42 16H6M16 10V6.00002M32 10V6M10 8.00002H9.8C7.70132 8.00002 6 9.70134 6 11.8V36C6 38.2092 7.79086 40 10 40H38C40.2092 40 42 38.2092 42 36V11.8C42 9.70134 40.2986 8.00002 38.2 8.00002H38M22 8.00002H26M30.506 24.2218L23.7604 32.6244C23.015 33.553 21.6286 33.6286 20.7866 32.7866L18 30"
              stroke="black" strokeWidth="2" strokeLinecap="round"
            />
          </g>
        </svg>
        <h1 className="main__title-text title-reset">WFM</h1>
      </div>
      <div className="main__table-controls table-controls">
        <div className="table-controls__date">
          <button className="table-controls__date-left-btn btn-reset">&lt;</button>
          <button className="table-controls__calendar-btn btn-reset">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 4.82354H1M5.44444 2.52942V1.00001M12.5556 2.52941V1M2.77778 1.76471H2.68889C1.75614 1.76471 1 2.41522 1 3.21765V12.4706C1 13.3153 1.79594 14 2.77778 14H15.2222C16.2041 14 17 13.3153 17 12.4706V3.21765C17 2.41522 16.2438 1.76471 15.3111 1.76471H15.2222M8.11111 1.76471H9.88889"
                stroke="black" strokeLinecap="round"
              />
            </svg>
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
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g
                id="&#208;&#154;&#208;&#189;&#208;&#190;&#208;&#191;&#208;&#186;&#208;&#176; &#208;&#157;&#208;&#176;&#209;&#129;&#209;&#130;&#209;&#128;&#208;&#190;&#208;&#185;&#208;&#186;&#208;&#184;"
              >
                <path id="Vector"
                  d="M28.8266 9.72447C28.5405 9.261 28.0706 8.92159 27.5201 8.78318C26.9682 8.64475 26.3817 8.71755 25.8879 8.98517C25.0673 9.42912 24.078 9.42861 23.2579 8.98384L22.408 8.52298C21.6387 8.1058 21.1597 7.3009 21.1597 6.42578C21.1597 5.31016 20.1994 4.375 19.0119 4.375H15.988C14.8005 4.375 13.8401 5.31016 13.8401 6.42578C13.8401 7.30096 13.3611 8.10594 12.592 8.52343L11.7432 8.98416C10.923 9.42931 9.93347 9.42969 9.11301 8.98517C8.61922 8.71755 8.03145 8.64474 7.47976 8.78318C6.92914 8.9216 6.45939 9.261 6.17314 9.72447L4.66334 12.1813C4.37821 12.6448 4.30062 13.1964 4.44812 13.7132C4.5956 14.2311 4.95612 14.672 5.44992 14.9396C6.25784 15.3781 6.76107 16.2237 6.76134 17.1429L6.76155 17.8571C6.76182 18.7763 6.25886 19.6219 5.45102 20.0604C4.95721 20.329 4.59559 20.769 4.44812 21.2857C4.30064 21.8035 4.37819 22.3552 4.66334 22.8187L6.17533 25.2755C6.46044 25.739 6.93022 26.0784 7.48086 26.2169C8.03257 26.3553 8.61922 26.2825 9.1141 26.0148C9.93468 25.5709 10.9239 25.5714 11.744 26.0162L12.5908 26.4755C13.3607 26.893 13.8401 27.6984 13.8401 28.5743C13.8401 29.6899 14.8003 30.625 15.988 30.625H19.011C20.1995 30.625 21.1588 29.6899 21.1588 28.5743C21.1594 27.6984 21.6393 26.8931 22.4092 26.4756L23.2569 26.0161C24.0771 25.5713 25.0664 25.5709 25.887 26.0148C26.3818 26.2824 26.9685 26.3553 27.5192 26.2169C28.0709 26.0784 28.5406 25.739 28.8257 25.2755L30.3367 22.8187C30.6218 22.3552 30.6994 21.8035 30.5519 21.2867C30.4044 20.769 30.0439 20.328 29.5501 20.0604C28.7421 19.6219 28.2392 18.7763 28.2392 17.8571V17.1429C28.2392 16.2237 28.7421 15.3781 29.5501 14.9396C30.0439 14.671 30.4044 14.231 30.5519 13.7142C30.6994 13.1964 30.6218 12.6448 30.3367 12.1813L28.8266 9.72447Z"
                  stroke="black" strokeWidth="2.25" strokeLinecap="round"
                />
                <path id="Vector_2"
                  d="M21.875 17.5C21.875 19.9163 19.9163 21.875 17.5 21.875C15.0837 21.875 13.125 19.9163 13.125 17.5C13.125 15.0837 15.0837 13.125 17.5 13.125C19.9163 13.125 21.875 15.0837 21.875 17.5Z"
                  stroke="black" strokeWidth="2.25" strokeLinecap="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <table className="main__table">
        <thead className="main__table-head">
          <tr className="main__table-row">
            <th className="main__table-head-cell main__table-head-cell--first"></th>
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
            <td className="main__table-body-cell main__table-body-cell--first"></td>
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
  );
}
