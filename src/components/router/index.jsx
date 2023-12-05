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
            
            {/* після логінки токен в локал сторедж (зберігання токену з локалсторелджу і прионовленні сторінки перевірку на співпадіння токену з юзером, і якщо так - не перекидувати на логінку. Інформацію про користувача записувати в стор. щоб їх використовувати по всьому проектуможна було. */}
            {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
            ))},
            <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;