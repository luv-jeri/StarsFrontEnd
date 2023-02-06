import './App.css';
import AppRoutes from './routes/App.routes';
import AuthRoutes from './routes/Auth.routes';
import useAuth from './context/Auth.context';

function App() {
  const { user } = useAuth();
  return <div>{user ? <AppRoutes /> : <AuthRoutes />}</div>;
}

export default App;
