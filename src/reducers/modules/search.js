import http from '../utils/http'
import config from '../../config'

const constants = {
  SEARCH_ENTITIES: 'SEARCH_ENTITIES',
  CLEAR_RESULTS: 'CLEAR_RESULTS',
  SHOW_ERROR: 'SHOW_ERROR'
}

export const actions = {
  searchEntities (text) {
    return {
      type: constants.SEARCH_ENTITIES,
      payload: {
        promise: http.get(`${config.API_BASE_URL}/search?text=${text}`)
        .then(response => ({ entities: response }))
      }
    }
  },

  clearResults () {
    return {
      type: constants.CLEAR_RESULTS
    }
  },

  showError () {
    return {
      type: constants.SHOW_ERROR
    }
  }
}

const ACTION_HANDLERS = {
  CLEAR_RESULTS: state => {
    return initialState
  },

  SHOW_ERROR: state => {
    return {
      ...state,
      isLoading: false,
      showError: true
    }
  },

  SEARCH_ENTITIES_FULFILLED: (state, action) => {
    const { entities } = action

    return {
      ...state,
      entities,
      isExpanded: true,
      isLoading: false,
      showError: false
    }
  },

  SEARCH_ENTITIES_PENDING: state => {
    return {
      ...state,
      isLoading: true,
      showError: false
    }
  },

  SEARCH_ENTITIES_CANCELED: state => {
    return {
      ...state,
      isLoading: false,
      showError: false
    }
  }
}

export const initialState = {
  entities: {},
  isExpanded: false,
  isLoading: false,
  showError: false
}

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, (action.payload || action)) : state
}
