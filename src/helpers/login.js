import Cookies from 'js-cookie';

const isLoggedIn = () => {
    return Cookies.get('logged-in');
}

export default isLoggedIn;