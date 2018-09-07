// const initialState = {
//     user: {
//         username: '',
//         password: '',
//         profilePic: ''
//     },
//     posts: []
// }

// const LOGGED_IN = 'LOGGED_IN';
// const LOGGED_OUT = 'LOGGED_OUT';
// const SET_POSTS = 'SET_POSTS';
// const UPDATE_USERNAME = 'UPDATE_USERNAME';
// const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
// // const SET_POSTS = 'SET_POSTS';

// export default function reducer(state = initialState, action){
//     switch(action.type){

//         // case LOGGED_IN:
//         //     return {...state, user: action.payload}
//         // case LOGGED_OUT:
//         //     return {...state, user: null}
//         // case SET_POSTS:
//         //     return {...state, posts: action.payload}
//         // // case UPDATE_USERNAME:
//         //     return {...state, username: action.payload}
//         // case UPDATE_PASSWORD:
//         //     return {...state, password: action.payload}


//         default:
//             return state;
//     }
// }

// export function logIn( user ){
//     return {
//         type: LOGGED_IN,
//         payload: user
//     }
// }
// export function logOut(){
//     return {
//         type: LOGGED_OUT
//     }
// }
// // export function updateCity( city ){
// //     return {
// //         type: UPDATE_CITY,
// //         payload: city
// //     }
// // }

// // export function updatePassword ( user, password ){
// //     let { password } = user;
// //     return {
// //         type: UPDATE_PASSWORD,
// //         payload: password
// //     }
// // }
