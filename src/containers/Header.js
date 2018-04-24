import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HeaderView from '../views/Header'

import { actions as searchActions } from '../reducers/modules/search'

const mapStateToProps = (state, props) => ({
  isLoading: state.search.isLoading,
  isExpanded: state.search.isExpanded,
  entities: state.search.entities
})

const mapDispatchToProps = (dispatch, props) => ({
  searchActions: bindActionCreators(searchActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderView)
