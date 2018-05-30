import {createAction} from "redux-actions";
import {IHuman} from "../../types/humans.types";

export const createHumanAction:any = createAction(
    `modules/humans/createHumanAction`,
    (human: IHuman):IHuman => human
)

export const updateHumanAction:any = createAction(
    `modules/humans/updateHumanAction`,
    (human: IHuman):IHuman => human
)

export const createOrUpdateHuman = (human) => {
  return human.id !== 0 ? updateHumanAction(human) : createHumanAction(human)
}
