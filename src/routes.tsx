import { RouteObject } from 'react-router-dom';
import { routes } from '@/lib/routes';
import Home from './pages/Home';


export const appRoutes: RouteObject[] = [
    {
        path: routes.home,
        element: <Home />,
    },
]; 