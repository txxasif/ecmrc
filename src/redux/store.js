import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/user.reducer';
import productsReducer from './reducers/categories/categories.reducers';
import logger from 'redux-logger';

// const tempMiddleware = (store) = (next) = (action) => {
//   if(!action.type) {
//     return next(action);
//   }
//   console.log('type :',action.type);
//   console.log('payload : ',action.payload);
//   console.log('currentState :', store.getState());
//   next(action);
// }

export const store  = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
})


