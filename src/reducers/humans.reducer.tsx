import qs from "query-string"
import {handleActions} from "redux-actions"
import {updateSearchAction} from "../actions/humans/updateSearch.action";
import {updateSelectedHumanAction} from "../actions/humans/updateSelectedHuman.action";
import {createHumanAction, updateHumanAction} from "../actions/humans/createOrUpdateHuman.action";
import {
  IHRCreateHumanAction,
  IHRInitialState,
  IHRUpdateHumanAction,
  IHRUpdateSelectedHumanAction,
  IHRUrlData,
  IHRRemoveHumanAction
} from "./humans.reducer.types";

import {removeHumanAction} from "actions/humans/deleteHuman.action";

const urlData:IHRUrlData = {

}

const parsed = qs.parse(location.search);
if (parsed.user) {
  urlData.selectedHuman = Number(parsed.user)
}

const initialState:IHRInitialState = {
  list: [
    {
      id: 1,
      name: "John Doe",
      notes: `He is soooo strange Q`
    }, {
      id: 2,
      name: "Janette Doe",
      notes: `She is wife of mister #1?`
    }
  ],
  search: "",
  selectedHuman: 0,
  searchList: [],
  ...JSON.parse(localStorage.getItem("humans")),
  ...urlData
};



export const humans = handleActions({
  [createHumanAction]: (state: IHRInitialState, action: IHRCreateHumanAction) => ({
      ...state,
      list: [
          ...state.list,
        {
            ...action.payload,
            id: Number((state.list[state.list.length - 1] || {id: 0}).id) + 1
        }
      ],
      selectedHuman: Number((state.list[state.list.length - 1] || {id: 0}).id) + 1
  }),
  [updateHumanAction]: (state: IHRInitialState, action: IHRUpdateHumanAction) => ({
      ...state,
      list: [
          ...state.list.filter(item => item.id !== action.payload.id),
          action.payload
      ]
  }),
  [updateSelectedHumanAction]: (state: IHRInitialState, action: IHRUpdateSelectedHumanAction) => ({
      ...state,
      selectedHuman: action.payload
  }),
  [updateSearchAction]: (state: IHRInitialState, action: any) => ({
      ...state,
      searchList: action.payload.list,
      search: action.payload.value
  }),
  [removeHumanAction]: (state: IHRInitialState, action: IHRRemoveHumanAction) => ({
      ...state,
      list: [
          ...state.list.filter(item => item.id !== action.payload)
      ]
  })
}, initialState)
