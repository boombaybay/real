/* eslint-disable consistent-return */
import axios from 'axios'

const recordVisitor = async (location) => {
  try {
    const res = await axios.post(`/api/visitor`, location)
    return res
  } catch (error) {
    console.log(error)
  }
}

export default async function getUserLocation() {
  try {
    const res = await axios.get('https://extreme-ip-lookup.com/json/')
    const { city, continent, country, countryCode, isp, lat, lon, query, region } = res.data
    if (res) {
      await recordVisitor(res.data)
    }
    return { city, continent, country, countryCode, isp, lat, lon, ipAddress: query, region }
  } catch (err) {
    return null
  }
}
