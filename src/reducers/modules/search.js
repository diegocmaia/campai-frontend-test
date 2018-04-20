import http from '../utils/http'
import config from '../../config'

export const constants = {
  SEARCH_ENTITIES: 'SEARCH_ENTITIES'
}

export const actions = {
  searchEntities (text) {
    return dispatch => (
      dispatch({
        type: constants.SEARCH_ENTITIES,
        payload: {
          promise: http.get(`${config.API_BASE_URL}/search?text=${text}`).then(response => (action, dispatch) => {
            const payload = { entities: response }
            dispatch({...action, payload})
          })
        }
      })
    )
  }
}

const ACTION_HANDLERS = {
  SEARCH_ENTITIES_FULFILLED: (state, action) => {
    const { entities } = action

    return {
      ...state,
      entities,
      isLoading: false
    }
  },

  SEARCH_ENTITIES_PENDING: state => {
    return {
      ...state,
      isLoading: true
    }
  },

  SEARCH_ENTITIES_CANCELED: state => {
    return {
      ...state,
      isLoading: false
    }
  }
}

export const initialState = {
  entities: {},
  isLoading: false
}

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, (action.payload || action)) : state
}
