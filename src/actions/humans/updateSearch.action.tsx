import {createAction} from "redux-actions";

type IUpdateSearchAction = {
  value: string;
  list: any[];
}

export const updateSearchAction:any = createAction(
    `modules/humans/updateSearch`,
    (value: string, list: any[]):IUpdateSearchAction => ({value, list})
)

export const updateSearch = (value, rawList = []) => {
  const list = rawList.filter(
      item =>
          item.name.includes(value) ||
          item.notes.includes(value)
  )
  return updateSearchAction(value, list)
}