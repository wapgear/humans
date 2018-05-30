import {IHuman} from "../types/humans.types";

export interface IHRInitialState {
  list: IHuman[];
  search: string;
  selectedHuman: number;
  searchList: IHuman[];
}

export interface IHRUpdateHumanAction {
  payload: IHuman;
}

export interface IHRCreateHumanAction extends IHRUpdateHumanAction {

}

export interface IHRUpdateSelectedHumanAction {
  payload: number;
}


export interface IHRUpdateSearchAction {
  payload: IHRUpdateSearchAction
}

export interface IHRUrlData {
  selectedHuman?: number;
}

export interface IHRRemoveHumanAction {
  payload: number;
}
