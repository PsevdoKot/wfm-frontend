import { Routes, Route } from 'react-router-dom';
import ManagementScreen from './pages/management-screen';
import LoginScreen from './pages/login-screen';
import ErrorScreen from './pages/error-screen/error-screen';
import PrivateRoute from './components/private-route';
import { AppRoutes } from './app-routes';
import HistoryRouter from './components/history-route';
import browserHistory from './browser-history';
import SignUpScreen from './pages/signup-screen';
import UserScreen from './pages/user-screen';
import PlanningScreen from './pages/planning-screen';
import CalculatorScreen from './pages/calculator-screen';

export default function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoutes.Planning.FullPath} element={<PlanningScreen />} />
        <Route path={AppRoutes.Management.FullPath} element={<ManagementScreen />} />
        <Route path={AppRoutes.Calculator.FullPath} element={<CalculatorScreen />} />
        <Route path={AppRoutes.Login.FullPath} element={<LoginScreen />} />
        <Route path={AppRoutes.SignUp.FullPath} element={<SignUpScreen />} />
        <Route path={AppRoutes.User.FullPath} element={
          <PrivateRoute>
            <UserScreen />
          </PrivateRoute>
        }
        />
        <Route path={AppRoutes.Error.FullPath} element={<ErrorScreen errorStatusCode={404} />} />
      </Routes>
    </HistoryRouter>
  );
}
