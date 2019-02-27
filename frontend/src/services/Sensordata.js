import axios from 'axios'
//import { API } from 'aws-amplify'

const baseUrl = 'http://localhost:3001/api/data'

/*const getAll = async () => {
  const apiName = 'sensordata'
  const path = '/'
  const data = await API.get(apiName, path)
  return data
}*/

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }