/* eslint-disable consistent-return */
import axios from 'axios'

export default async function createUser(formData) {
  try {
    const res = await axios.post(`/api/user`, formData)
    return res.data.docId
  } catch (error) {
    console.log(error)
  }
}
