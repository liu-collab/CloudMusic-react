import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-page/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";
import { reducer as rankingRducer } from "../pages/discover/c-page/ranking/store"
import {reducer as songReducer} from '../pages/discover/c-page/songs/store'
//合并reducer
const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingRducer,
  song:songReducer
})

export default reducer