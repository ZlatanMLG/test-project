import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes} from './Routes';
import { HOME_ROUTE } from '../../utils/consts';


const AppRouter = () => {
    const isUserAuthenticated = localStorage.getItem('isAuthenticated');

    
    return (
        <Routes>
            {isUserAuthenticated && authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))},
            {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
            ))},
            <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;