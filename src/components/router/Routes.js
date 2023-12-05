import UserComponent from '../../pages/UserPages/UserComponent.jsx'
import Auth from '../../pages/auth/SignIn.jsx'
import Home from '../../pages/home/home.jsx'
import {
    USER_ROUTE,
    LOGIN_ROUTE,
    HOME_ROUTE
} from '../../utils/consts'

export const authRoutes = [
    {
        path: USER_ROUTE,
        Component: UserComponent
    }
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth 
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }
];