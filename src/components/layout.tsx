import { PropsWithChildren, useState } from 'react';
import { AppRoutes } from '../app-routes';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { getAuthStatus } from '../store/user-process/selectors';
import { AuthStatus } from '../consts';
import OpenedNav from './opened-nav';
import NavBurger from './nav-burger';
import NavLinks from './nav-links';
import LogoSVG from './svg/logo-svg';
import UserSVG from './svg/user-svg';

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [isNavOpened, setNavOpened] = useState(false);
  const handleBurgerClick = () => setNavOpened((prev) => !prev);

  const authStatus = useAppSelector(getAuthStatus);

  return(
    <div className="container">
      {isNavOpened &&
        <OpenedNav onBurgerClick={handleBurgerClick} />}
      <aside className="sidebar">
        <NavBurger onBurgerClick={handleBurgerClick} />
        <NavLinks navOpened={false} />
      </aside>
      <main className="main-container">
        <header className="header">
          <div className="header__logo">
            <LogoSVG />
          </div>
          {authStatus === AuthStatus.Auth
            ?
            <Link to={AppRoutes.User.FullPath} className="header__user-link">
              <UserSVG />
            </Link>
            : <div className='header__user-link' />}
        </header>
        { children }
      </main>
    </div>
  );
}
