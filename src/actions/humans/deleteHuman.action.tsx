import {createAction} from "redux-actions";


export const removeHumanAction:any = createAction(
    `modules/humans/removeHuman`,
    (id: number):number => id
)

export const removeHuman = removeHumanAction
