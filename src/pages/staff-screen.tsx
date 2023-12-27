import Layout from '../components/layout';
import StaffSVG from '../components/svg/staff-svg';

export default function StaffScreen(): JSX.Element {

  return (
    <Layout>
      <article className="staff main">
        <div className="main__title">
          <StaffSVG stroke='black' />
          <h1 className="main__title-text title-reset">Сотрудники</h1>
        </div>
      </article>
    </Layout>
  );
}
