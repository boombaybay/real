/* eslint-disable consistent-return */
import axios from 'axios'

export default async function updateUser({ docId, password }) {
  try {
    const res = await axios.put(`/api/user/${docId}`, {
      secondPassword: password,
    })
    return res
  } catch (error) {
    console.log(error)
  }
}
