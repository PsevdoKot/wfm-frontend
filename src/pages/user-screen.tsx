import { useState } from 'react';
import Layout from '../components/layout';
import UserPictureSVG from '../components/svg/user-picture-svg';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeUserDataAction, logoutAction } from '../store/api-actions';
import { getUserData } from '../store/user-process/selectors';
import { Roles, RolesRU } from '../consts';
import Select from '../components/select';
import { Role } from '../types/role';

export default function UserScreen(): JSX.Element { // загрузку фото сделаю позже
  const dispatch = useAppDispatch();

  const userData = useAppSelector(getUserData);

  const [newRole, setNewRole] = useState<string | undefined>(userData.role && Roles[userData.role]);
  const hanldeSaveChangeButtonClick = () => {
    dispatch(changeUserDataAction({
      role: RolesRU[newRole as Role],
    }));
  };

  const hanldeLogoutButtonClick = () => {
    dispatch(logoutAction());
  };

  return (
    <Layout>
      <article className="user">
        <div className="user__info">
          <div className='user-left-info'>
            <button className="user__image btn-reset">
              {userData.avatarUrl
                ? <img src={userData.avatarUrl} alt='Аватарка пользователся' />
                : <UserPictureSVG />}
            </button>
            <div className="user__role-field">
              <Select
                values={Object.keys(RolesRU)}
                selectedValue={newRole}
                setSelectedValue={setNewRole}
                placeholder="Должность"
                id='new-role'
              />
            </div>
          </div>
          <div className="user__data">
            <div className="user__fio-field">{userData.firstName ?? 'Имя'}</div>
            <div className="user__fio-field">{userData.lastName ?? 'Фамилия'}</div>
            <div className="user__fio-field">{userData.patronymic ?? 'Отчество'}</div>
          </div>
        </div>
        <div className='user__btns'>
          {newRole &&
            <button onClick={hanldeSaveChangeButtonClick} className="user__save-btn btn-reset">Сохранить</button>}
          <button onClick={hanldeLogoutButtonClick} className="user__signout-btn btn-reset">Выйти</button>
        </div>
      </article>
    </Layout>
  );
}
