import Axios, { AxiosRequestConfig } from 'axios'
import https from 'https'
import qs from 'qs'

import { Vm } from './entities'

async function getVms(): Promise<Vm[]> {
  const conf: AxiosRequestConfig = {
    baseURL: 'https://192.168.105.225:8443/ovirt-engine/api',
    headers: {
      'Content-Type': 'application/xml',
      'Accept-Language': 'zh-CN',
      Accept: 'application/json',
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    validateStatus() {
      return true
    },
  }

  const instance = Axios.create(conf)

  const res = await instance.request({
    url: 'https://192.168.105.225:8443/ovirt-engine/sso/oauth/token',
    method: 'POST',
    data: qs.stringify({
      username: 'sysadmin@internal',
      password: 'admin==1',
      grant_type: 'password',
      scope: 'ovirt-app-api',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  })

  const config: AxiosRequestConfig = {
    url: '/vms',
    headers: {
      Authorization: `Bearer ${res.data.access_token}`,
    },
  }

  const vmsRes = await instance.request(config)
  return vmsRes.data?.vm
}

getVms().then((vms) => {
  vms.forEach((vm) => {
    console.log(vm.id, vm?.description, vm.name, vm.template?.href)
  })
})
