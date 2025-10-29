/**
 * @title Swagger Petstore
 * @description This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * @swagger 2.0
 * @version 1.0.7
 */

import type { UnConfig } from '@uni-helper/uni-network'
import type * as Types from './index.type'
import http from './index.instance'

export const baseURL = 'https://petstore.swagger.io/v2/'

/**
 * @summary uploads an image
 * @method post
 * @tags pet
 * @consumes multipart/form-data
 */
export function postPetPetIdUploadImage(data: FormData, paths: Types.PostPetPetIdUploadImagePath, config?: UnConfig<never>) {
  const url = `/pet/${paths.petId}/uploadImage`
  return http.request<Types.ApiResponse>({ baseURL, method: 'post', url, data, ...config })
}
/**
 * @summary Add a new pet to the store
 * @method post
 * @tags pet
 * @consumes application/json; application/xml
 */
export function postPet(data: Types.Pet, config?: UnConfig<never>) {
  const url = '/pet'
  return http.request<void>({ baseURL, method: 'post', url, data, ...config })
}
/**
 * @summary Update an existing pet
 * @method put
 * @tags pet
 * @consumes application/json; application/xml
 */
export function putPet(data: Types.Pet, config?: UnConfig<never>) {
  const url = '/pet'
  return http.request<void>({ baseURL, method: 'put', url, data, ...config })
}
/**
 * @summary Finds Pets by status
 * @description Multiple status values can be provided with comma separated strings
 * @method get
 * @tags pet
 */
export function getPetFindByStatus(params: Types.GetPetFindByStatusQuery, config?: UnConfig<never>) {
  const url = '/pet/findByStatus'
  return http.request<Types.Pet[]>({ baseURL, method: 'get', url, params, ...config })
}
/**
 * @summary Finds Pets by tags
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @method get
 * @tags pet
 */
export function getPetFindByTags(params: Types.GetPetFindByTagsQuery, config?: UnConfig<never>) {
  const url = '/pet/findByTags'
  return http.request<Types.Pet[]>({ baseURL, method: 'get', url, params, ...config })
}
/**
 * @summary Find pet by ID
 * @description Returns a single pet
 * @method get
 * @tags pet
 */
export function getPetPetId(paths: Types.GetPetPetIdPath, config?: UnConfig<never>) {
  const url = `/pet/${paths.petId}`
  return http.request<Types.Pet>({ baseURL, method: 'get', url, ...config })
}
/**
 * @summary Updates a pet in the store with form data
 * @method post
 * @tags pet
 * @consumes application/x-www-form-urlencoded
 */
export function postPetPetId(data: FormData, paths: Types.PostPetPetIdPath, config?: UnConfig<never>) {
  const url = `/pet/${paths.petId}`
  return http.request<void>({ baseURL, method: 'post', url, data, ...config })
}
/**
 * @summary Deletes a pet
 * @method delete
 * @tags pet
 */
export function deletePetPetId(data: FormData, paths: Types.DeletePetPetIdPath, headers?: Types.DeletePetPetIdHeader, config?: UnConfig<never>) {
  const url = `/pet/${paths.petId}`
  return http.request<void>({ baseURL, method: 'delete', url, data, headers, ...config })
}
/**
 * @summary Returns pet inventories by status
 * @description Returns a map of status codes to quantities
 * @method get
 * @tags store
 */
export function getStoreInventory(config?: UnConfig<never>) {
  const url = '/store/inventory'
  return http.request<Record<string, number>>({ baseURL, method: 'get', url, ...config })
}
/**
 * @summary Place an order for a pet
 * @method post
 * @tags store
 * @consumes application/json
 */
export function postStoreOrder(data: Types.Order, config?: UnConfig<never>) {
  const url = '/store/order'
  return http.request<Types.Order>({ baseURL, method: 'post', url, data, ...config })
}
/**
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @method get
 * @tags store
 */
export function getStoreOrderOrderId(paths: Types.GetStoreOrderOrderIdPath, config?: UnConfig<never>) {
  const url = `/store/order/${paths.orderId}`
  return http.request<Types.Order>({ baseURL, method: 'get', url, ...config })
}
/**
 * @summary Delete purchase order by ID
 * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @method delete
 * @tags store
 */
export function deleteStoreOrderOrderId(paths: Types.DeleteStoreOrderOrderIdPath, config?: UnConfig<never>) {
  const url = `/store/order/${paths.orderId}`
  return http.request<void>({ baseURL, method: 'delete', url, ...config })
}
/**
 * @summary Creates list of users with given input array
 * @method post
 * @tags user
 * @consumes application/json
 */
export function postUserCreateWithList(data: Types.User[], config?: UnConfig<never>) {
  const url = '/user/createWithList'
  return http.request<void>({ baseURL, method: 'post', url, data, ...config })
}
/**
 * @summary Get user by user name
 * @method get
 * @tags user
 */
export function getUserUsername(paths: Types.GetUserUsernamePath, config?: UnConfig<never>) {
  const url = `/user/${paths.username}`
  return http.request<Types.User>({ baseURL, method: 'get', url, ...config })
}
/**
 * @summary Updated user
 * @description This can only be done by the logged in user.
 * @method put
 * @tags user
 * @consumes application/json
 */
export function putUserUsername(data: Types.User, paths: Types.PutUserUsernamePath, config?: UnConfig<never>) {
  const url = `/user/${paths.username}`
  return http.request<void>({ baseURL, method: 'put', url, data, ...config })
}
/**
 * @summary Delete user
 * @description This can only be done by the logged in user.
 * @method delete
 * @tags user
 */
export function deleteUserUsername(data: Types.User, paths: Types.DeleteUserUsernamePath, config?: UnConfig<never>) {
  const url = `/user/${paths.username}`
  return http.request<void>({ baseURL, method: 'delete', url, data, ...config })
}
/**
 * @summary Logs user into the system
 * @method get
 * @tags user
 */
export function getUserLogin(params: Types.GetUserLoginQuery, config?: UnConfig<never>) {
  const url = '/user/login'
  return http.request<string>({ baseURL, method: 'get', url, params, ...config })
}
/**
 * @summary Logs out current logged in user session
 * @method get
 * @tags user
 */
export function getUserLogout(config?: UnConfig<never>) {
  const url = '/user/logout'
  return http.request<void>({ baseURL, method: 'get', url, ...config })
}
/**
 * @summary Creates list of users with given input array
 * @method post
 * @tags user
 * @consumes application/json
 */
export function postUserCreateWithArray(data: Types.User[], config?: UnConfig<never>) {
  const url = '/user/createWithArray'
  return http.request<void>({ baseURL, method: 'post', url, data, ...config })
}
/**
 * @summary Create user
 * @description This can only be done by the logged in user.
 * @method post
 * @tags user
 * @consumes application/json
 */
export function postUser(data: Types.User, config?: UnConfig<never>) {
  const url = '/user'
  return http.request<void>({ baseURL, method: 'post', url, data, ...config })
}
