import {storeData} from '../../../utils/helperFunctions';
import {saveUserCar, saveUserData} from '../reducers/auth';
import store from '../store';
import types from '../types';
const {dispatch} = store;

export const userLogin = data => {
  storeData('userData', data)
    .then(res => {
      dispatch(saveUserData(data));
    })
    .catch(error => {
      console.log('error during store data');
    });
};

export const userCars = data => {
  storeData('userCar', data)
    .then(res => {
      dispatch(saveUserCar(data));
    })
    .catch(error => {
      console.log('error during store data');
    });
};
// export const userLogin = data => {
//   return new Promise((resolve, reject) => {
//     apiPost(LOGIN_API, data)
//       .then(res => {
//         console.log('get res+++', res);
//         if (!!res.data && !!res?.data?.validOTP) {
//           storeData('userData', res.data)
//             .then(value => {
//               console.log('im here');
//               dispatch(saveUserData(res.data));
//               resolve(res);
//             })
//             .catch(error => {
//               reject(error);
//             });
//         } else {
//           resolve(res);
//         }
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
//   // dispatch(saveUserData(data));
// };

// export const otpVerify = (data, token = null) => {
//   return new Promise((resolve, reject) => {
//     apiPost(OTP_VERIFY, data)
//       .then(res => {
//         if (!!res?.data) {
//           let addToken = {...res.data, token};
//           storeData('userData', addToken)
//             .then(value => {
//               console.log('im here');
//               dispatch(saveUserData(addToken));
//               resolve(res);
//             })
//             .catch(error => {
//               reject(error);
//             });
//         } else {
//           resolve(res);
//         }
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
//   // dispatch(saveUserData(data));
// };

export function logout() {
  dispatch({type: types.CLEAR_REDUX_STATE});
}
