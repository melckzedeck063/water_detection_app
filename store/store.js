import {configureStore} from '@reduxjs/toolkit' ;

import user_reducer from './reducers/user_reducer';
import signal from './reducers/signal_reducer'

export const store  =  configureStore({
    reducer :  {
         user_reducer,
         signal
    }
})