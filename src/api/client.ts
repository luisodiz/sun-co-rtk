import axios, { AxiosError } from 'axios'
import type { RawAxiosRequestHeaders, AxiosRequestConfig } from 'axios'

export const BASE_URL = 'http://localhost:3000'
export const ALL_PRODUCTS = BASE_URL + '/products'

interface AxiosRequestConfigWithBody extends AxiosRequestConfig {
  body?: any
}

const client = async <T>(
  url: string,
  { body, ...customConfig }: AxiosRequestConfigWithBody = {}
): Promise<T> => {
  const headers: RawAxiosRequestHeaders = {
    'Content-Type': 'application/json',
  }

  const config: AxiosRequestConfigWithBody = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  try {
    const response = await axios<T>(url, config)

    if (response.statusText == 'OK') {
      return response.data
    }

    throw new Error(response.statusText)
  } catch (e) {
    if (e instanceof AxiosError) {
      return Promise.reject(e)
    }
    return Promise.reject(`Something went wrong. ${e}`)
  }
}

client.get = <T>(
  url: string,
  customConfig?: AxiosRequestConfig
): Promise<T> => {
  return client<T>(url, { ...customConfig, method: 'get' })
}

client.post = <T>(
  url: string,
  { body, ...customConfig }: AxiosRequestConfigWithBody = {}
): Promise<T> => {
  return client<T>(url, { body, method: 'post', ...customConfig })
}

export { client }
