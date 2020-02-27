import Mock from 'mockjs'
import result from './usemock'

Mock.mock('/query', 'post', result.getList)
Mock.mock('/queryOne', 'post', result.getUse)
Mock.mock('/deleteUser', 'post', result.deleteUser)
Mock.mock('/addUser', 'post', result.addUser)
Mock.mock('/updateUser', 'post', result.updateUser)
Mock.mock('/result', 'post', result.result)

export default Mock
