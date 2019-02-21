import axios from 'axios'
//import { API } from 'aws-amplify'

const baseUrl = 'https://a2nnf67mq1.execute-api.eu-west-2.amazonaws.com/prod/eficode19'

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