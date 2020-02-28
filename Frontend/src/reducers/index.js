import {combineReducers} from 'redux';
import Login from './login';
// import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
// function data() {
//     return {
//         studentarr : [
//             {   
//                 photo : "http://i.imgur.com/7yUvePI.jpg",
//                 first : "Dan",
//                 last : "Bravo",
//                 major : 'Software Engineering',
//                 email : 'dan_bravo@sjsu.edu',
//                 password : '12345678',
//                 school : 'SJSU',
//                 Address : '2089 El camino real, Santa Clara'
//             }
//         ],
//         loginauth : false
//     }
// }


const allReducers = combineReducers({
    userLogin: Login
    // users: UserReducer,
    // activeUser: ActiveUserReducer
});

export default allReducers
