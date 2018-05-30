import {createAction} from "redux-actions";
import {history} from "helpers";

export const updateSelectedHumanAction:any = createAction(
    `modules/humans/updateSelectedHuman`,
    (value: string):string => value
)

export const updateSelectedHuman = value => {
  history.replace(`/?user=${value}`)
  return updateSelectedHumanAction(value)
}
