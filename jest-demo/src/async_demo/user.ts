import request from './request'

export function getUserName(userID: string): Promise<string> {
  return request(`/users/${userID}`).then((user) => user.name)
}
