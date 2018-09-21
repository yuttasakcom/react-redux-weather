import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import WeatherReducer from './weathermap/reducers/reducer_weather'

const reducers = combineReducers({
    weather: WeatherReducer
})

const store = createStore(reducers, {}, applyMiddleware(ReduxPromise))

export default store
