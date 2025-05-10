import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { appRoutes } from './routes';

const AppRoutes = () => {
  const element = useRoutes(appRoutes);
  return element;
};

function App() {

  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  )
}

export default App