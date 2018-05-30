import {connect} from "react-redux"
import {compose} from "recompose";
import {HumansComponent} from "./Humans.component";
import * as humansSelectors from "selectors/humans.selectors";
import {updateSearch} from "actions/humans/updateSearch.action";
import {createOrUpdateHuman} from "actions/humans/createOrUpdateHuman.action";
import {updateSelectedHuman} from "actions/humans/updateSelectedHuman.action";
import {removeHuman} from "actions/humans/deleteHuman.action";

const mapStateToProps = state => ({
  list: humansSelectors.getHumansList(state),
  searchList: humansSelectors.getHumansSearchList(state),
  selectedHuman: humansSelectors.getSelectedHuman(state),
  searchField: humansSelectors.getHumansSearchField(state)
})

const mapActionsToProps = {
  updateSearch,
  createOrUpdateHuman,
  updateSelectedHuman,
  removeHuman
}

export const HumansModule = compose(
    connect(mapStateToProps, mapActionsToProps)
)(HumansComponent)