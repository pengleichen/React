import axios from 'axios'
axios.defaults.baseURL = '/api/v1'
const ajax = (url = '', data = {}, type = 'GET') => {
  if (type === 'GET') {
    let query = '';
    Object.keys(data).forEach(key => {
      query += `${key}=${data[key]}&`
    })
    return axios.get(`${url}?${query.slice(-1)}`)
  } else if (type === 'POST') {
    return axios.post(url, data)
  }

}

export default ajax