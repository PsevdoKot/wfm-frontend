import Layout from '../../components/layout';
import UserPictureSVG from '../../components/svg/user-picture-svg';
import { AuthStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/selectors';

export default function UserScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthStatus);

  const hanldeLogoutButtonClick = () => {
    dispatch(logoutAction());
  };

  return (
    <Layout>
      <article className="user">
        <div className="user__info">
          <div className="user__image">
            <UserPictureSVG />
          </div>
          <div className="user__data">
            <div className="user__fisrt-name">Имя</div>
            <div className="user__last-name">Фамилия</div>
          </div>
        </div>
        {authStatus === AuthStatus.Auth ??
        <button onClick={hanldeLogoutButtonClick} className="user__signout-btn btn-reset">Выйти</button>}
      </article>
    </Layout>
  );
}
