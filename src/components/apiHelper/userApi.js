import { jwtDecode } from 'jwt-decode';
import { $authHost } from './http';

export const checkLogin = async () => {
    const { data } = await $authHost.get('api/user/auth');
    return jwtDecode(data.token);
};