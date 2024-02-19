import axios from 'axios'

export const BASE_URL = 'http://localhost:3000'
export const ALL_PRODUCTS = BASE_URL + '/products'

const client = async (url, {body, ...customConfig} = {}) => {
  const headers = {'Content-Type': 'application/json'}

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  try {
    const response = await axios(url, config)

    if (response.statusText === 'OK') {
      return response.data
    }

    throw new Error(response.statusText)
  } catch (e) {
    return Promise.reject(e)
  }
}

client.get = (url, customConfig) => {
  return client(url, {...customConfig, method: 'GET'})
}
client.post = (url, {body, ...customConfig}) => {
  return client(url, {body, method: 'POST', ...customConfig})
}

export {client}