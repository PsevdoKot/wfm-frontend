import { Link } from 'react-router-dom';
import { AppRoutes } from '../app-routes';

export default function OpenedNav(): JSX.Element {
  return (
    <div className="container--opened-menu">
      <aside className="sidebar--opened">
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <svg width="221" height="16" viewBox="0 0 221 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 0.292725H22.9919V4.02444H4.96278V6.09761H18.5086C22.1287 6.09761 24.2865 7.87808 24.2865 10.8781C24.2865 13.8781 22.1527 15.6586 18.5086 15.6586H0V0.292725ZM4.96278 9.73175V12.0732H17.5974C18.7004 12.0732 19.2038 11.7317 19.2038 10.9025C19.2038 10.0976 18.7004 9.73175 17.5974 9.73175H4.96278Z"
                fill="white"
              />
              <path
                d="M27.1871 0.292725H43.9454C48.5727 0.292725 51.3296 2.48784 51.3296 6.19517C51.3296 9.90248 48.5965 12.0976 43.9454 12.0976H32.3656V15.683H27.1871V0.292725ZM32.3896 4.26833V8.17078H43.1542C45.1922 8.17078 46.0792 7.5854 46.0792 6.24394C46.0792 4.85369 45.1922 4.26833 43.1542 4.26833H32.3896Z"
                fill="white"
              />
              <path
                d="M61.6637 11.1708L50.875 0.292725H57.1325L64.7325 7.8537L71.4934 0.292725H77.607L63.8453 15.683H57.588L61.6637 11.1708Z"
                fill="white"
              />
              <path
                d="M90.2886 0C97.7206 0 102.132 1.80488 103.259 5.2439L97.6728 6.36585C97.0254 4.70732 94.7479 3.95122 90.3126 3.95122C84.2469 3.95122 81.5617 5.17072 81.5617 7.99999C81.5617 10.8049 84.2229 12.0488 90.3126 12.0488C94.8677 12.0488 97.1452 11.2683 97.6968 9.53657L103.211 10.6098C102.012 14.1951 97.7446 16 90.3126 16C81.25 16 76.2633 13.1463 76.2633 7.99999C76.2393 2.82927 81.226 0 90.2886 0Z"
                fill="white"
              />
              <path
                d="M105.633 0.292725H110.812V5.8537H126.635V0.292725H131.838V15.683H126.635V9.82931H110.812V15.683H105.633V0.292725Z"
                fill="white"
              />
              <path
                d="M135.649 0.292725H140.828V10.7805L156.124 0.292725H161.327V15.683H156.124V5.19516L140.828 15.683H135.649V0.292725Z"
                fill="white"
              />
              <path
                d="M164.97 0.292725H170.15V6.70736L182.521 0.292725H190.96L176.671 7.53663L191.32 15.683H182.281L170.15 8.92686V15.683H164.97V0.292725Z"
                fill="white"
              />
              <path
                d="M205.92 4.09761L209.948 9.36589H201.893L205.92 4.09761ZM203.331 0.292725L191.056 15.683H197.074L199.135 13H212.728L214.792 15.683H221L208.725 0.292725H203.331Z"
                fill="white"
              />
            </svg>
          </div>
          <button className="nav__burger btn-reset">
            <span className="nav__burger-line"></span>
            <span className="nav__burger-line"></span>
            <span className="nav__burger-line"></span>
          </button>
        </div>
        <nav className="sidebar__nav nav">
          <ul className="nav__list list-reset">
            <li className="nav__item">
              <Link to={AppRoutes.Main.FullPath} className="nav__link">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="calendar-check">
                    <path id="Vector"
                      d="M42 16H6M16 10V6.00002M32 10V6M10 8.00002H9.8C7.70132 8.00002 6 9.70134 6 11.8V36C6 38.2092 7.79086 40 10 40H38C40.2092 40 42 38.2092 42 36V11.8C42 9.70134 40.2986 8.00002 38.2 8.00002H38M22 8.00002H26M30.506 24.2218L23.7604 32.6244C23.015 33.553 21.6286 33.6286 20.7866 32.7866L18 30"
                      stroke="white" strokeWidth="2" strokeLinecap="round"
                    />
                  </g>
                </svg>
                <span className="nav__link-text">WFM</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
