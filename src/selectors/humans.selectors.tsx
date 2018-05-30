import idx from "idx";

export const getHumansList = state => idx(state, _ => _.humans.list) || []
export const getHumansSearchList = state => idx(state, _ => _.humans.searchList) || []
export const getHumansSearchField= state => idx(state, _ => _.humans.search) || ""
export const getHuman = (state, options) => (idx(state, _ => _.humans.list) || []).find(human => human.id === options.id)
export const getSelectedHuman = (state) => getHuman(state, {id: state.humans.selectedHuman})