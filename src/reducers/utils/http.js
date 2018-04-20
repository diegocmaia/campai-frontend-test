const checkStatus = async function (response) {
  // no body was sent and no need to parse body. Just return empty object.
  if (response.status === 204) {
    return {}
  }

  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.status = response.status
    const defaultMessage = 'An error occurred. Please try again or contact support.'
    const json = response.json()
    error.response = json.verbose || json.code || defaultMessage
    throw error
  }
}

const getHTTP = function ({uri, headers}) {
  return fetch(uri, {
    method: 'GET',
    headers: {
        ...headers
    },
    timeout: 60000
  })
  .catch((err) => {
    throw err
  })
}

const preInterfaceRunner = async function (methodName, methodFunction, params) {
  try {
    let result = await methodFunction(params)
    result = await checkStatus(result)

    return parseJson(result)
  } catch (err) {
    throw err
  }
}

const parseJson = function (response) {
  return response.json()
}

function get (uri, headers = {}) {
  return preInterfaceRunner('get', getHTTP, { uri, headers })
}

export default { get }
