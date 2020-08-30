import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import moviesReducer from './reducers/movies_state.reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['selectedMovie'],
}

const persistedReducer =  combineReducers({
    movies: persistReducer(persistConfig, moviesReducer)
});

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };