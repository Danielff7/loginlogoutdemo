import axios from 'axios';

export const userActions = {
    login,
    logout
    // register,
    // getAll,
    // delete: _delete
};
function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        const datapackage = {
            username: username,
            password: password
        }
        axios.defaults.withCredentials = true;
            axios.post('http://localhost:3001/studentlogin', datapackage)
            .then(response => {
                if (response.status === 200){
                    alert(JSON.stringify(response.data));
                    dispatch(success({username}));
                }else {
                    alert(JSON.stringify(response.data));
                    dispatch(failure({username}));
                }
            });
        
    };

    function request(user) { return { type: 'USER_LOGIN_REQ', user } }
    function success(user) { return { type: 'USER_LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'USER_LOGIN_FAIL', error } }
}
function logout() {
    return dispatch => {
        dispatch ({type: 'USER_LOGOUT', payload: 'logout'});
    }
}

// export const signuprequest = (userinfo) => {
//     console.log('request sign up')
//     return {
//         type: 'SIGNUP_REQUEST',
//         payload: userinfo
//     }
// };
// export const signupsuccess = (userinfo) => {
//     console.log('sign up success')
//     return {
//         type: 'SIGNUP_SUCCESS',
//         payload: userinfo
//     }
// }
// export const signinrequ = (passwordmail) => {
//     console.log("login request");
//     return {
//         type: 'USER_LOGIN_REQ',
//         payload: passwordmail
//     }
// }
// export const signinsuccess = (passwordmail) => {
//     console.log("login function");
//     return {
//         type: 'USER_LOGIN_SUCCESS',
//         payload: passwordmail
//     }
// }
// export const signinfailure = (passwordmail) => {
//     return {
//         type: 'USER_LOGIN_FAIL',
//         payload: passwordmail
//     }
// }
// export const logout = () => {
//     console.log("logout function");
//     return {
//         type: 'USER_LOGOUT',
//         payload: ''
//     }
// }