import axios from 'axios'

export async function getAllVms() {
  try {
    const res = await axios.get('http://mock-api.com/vzMrj8gG.mock/vms')
    if (res.status === 200) {
      return res.data
    } else {
      throw 'fetch vms failed'
    }
  } catch(e) {
    console.error(e)
    throw 'fetch vms failed'
  }
}
