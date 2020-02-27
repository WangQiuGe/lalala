import { get, post } from './axiosPostForm'

export const accountQuery = p => post('/query', p)
export const accountQueryOne = p => post('/queryOne', p)
export const accountDeleteUser = p => post('/deleteUser', p)
export const accountAddUser = p => post('/addUser', p)
export const accountUpdateUser = p => post('/updateUser', p)
export const transferAccountpost = p => post('/result', p)
export const transferAccountget = p => get('/result', p)
