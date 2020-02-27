import Mock from 'mockjs'
const mocklist = []
const count = 5
const Random = Mock.Random
Mock.setup({
  timeout: 800 // 设置延迟响应，模拟向后端请求数据
})

for (let i = 0; i < count; i++) {
  mocklist.push(Mock.mock({
    account: '@id',
    name: '@cname',
    'money|3000-8000.2': 0
  }))
}
export default {

  getList: () => {
    // 若 localStorage 没有数据，则将 Mock 的数据存入

    localStorage.setItem('userlist', JSON.stringify(mocklist))

    // 每次获取数据时，再从 localStorage 中拉取数据
  },

  // 获取单个用户信息
  getUse: (options) => {
    // 先从 localStorage 中拉取数据
    var userlist = JSON.parse(localStorage.getItem('userlist'))
    console.log(userlist)
    // 遍历数组，返回id 与传来 id 相当的一个对象
    console.log(options)
    if (options.body === '{}') {
      // var list = {}
      // for (var key in userlist) {
      //   list[key] = userlist[key]
      // }
      // console.log(111)
      // console.log(list)
      // return list
      console.log(111)
      return userlist
    } else {
      console.log(2222)
      for (const index in userlist) {
        if (userlist[index].account === options.body) {
          console.log(333)
          // var user = JSON.stringify(userlist[index])
          var user = userlist[index]
          var user1 = []
          user1[0] = user
          return user1
        }
      }
    }
  },

  // 删除用户信息
  deleteUser: (options) => {
    // 先从 localStorage 中拉取数据
    var userlist = JSON.parse(localStorage.getItem('userlist'))
    // 根据传递的 id 删除 用户
    console.log('mock获取options.body' + options.body)
    console.log('mock获取options.type' + options.type)
    console.log('mock获取options.url' + options.url)
    for (const index in userlist) {
      if (userlist[index].account === options.body) {
        console.log('hahhh')
        userlist.splice(index, 1)
        localStorage.setItem('userlist', JSON.stringify(userlist))
      }
    }
    console.log(userlist)
    return {
      message: '用户删除成功'
    }
  },

  // 添加用户信息
  addUser: (options) => {
    // 先从 localStorage 中拉取数据
    var userlist = JSON.parse(localStorage.getItem('userlist'))
    // 获取传入用户信息对象，是一个字符串，需要转化为对象
    if (options !== undefined) {
      var user = JSON.parse(options)
      user.id = Random.id()
      // 将 user 插入到 userlist 中
      userlist.unshift(user)
      // 重新将 userlist 存入 localStorage 中
      localStorage.setItem('userlist', JSON.stringify(userlist))
      return {
        data: '用户添加成功'
      }
    }
    // 使用 mock 随机生成一个 id
  },

  // 更新用户信息
  updateUser: (options) => {
    // 先从 localStorage 中拉取数据
    var userlist = JSON.parse(localStorage.getItem('userlist'))
    if (options !== undefined) {
      var user = JSON.parse(options)
      // 遍历 userlist 根据传入对象的 id 更新用户信息
      for (const index in userlist) {
        if (userlist[index].id === user.id) {
          userlist[index] = user
        }
      }
      localStorage.setItem('userlist', JSON.stringify(userlist))
      return {
        data: '用户更新成功'
      }
    }
  },
  result: (options) => {
    var aa = JSON.parse(options.body)
    var userlist = JSON.parse(localStorage.getItem('userlist'))
    var i = 0
    var listflag1
    var listflag2
    for (const index in userlist) {
      if (userlist[index].account === aa.paymentAccount) {
        console.log(1)
        console.log(userlist[index].money)
        listflag1 = index
        if (userlist[index].money < parseFloat(aa.money)) {
          return {
            type: 'error',
            message: '账户余额不足'
          }
        }
        i++
        // userlist[index].money = userlist[index].money - parseFloat(aa.money)
        // console.log(userlist[index].money)
        // i++
      }
    }

    for (const index in userlist) {
      if (userlist[index].account === aa.receivingAccount) {
        console.log(2)
        // console.log(userlist[index].money)
        // userlist[index].money = userlist[index].money + parseFloat(aa.money)
        // console.log(userlist[index].money)
        listflag2 = index
        i++
      }
    }
    if (i === 2) {
      userlist[listflag1].money = userlist[listflag1].money - parseFloat(aa.money)
      userlist[listflag2].money = userlist[listflag2].money + parseFloat(aa.money)
    }
    localStorage.setItem('userlist', JSON.stringify(userlist))
    if (i === 2) {
      return {
        type: 'success',
        message: '转账成功'
      }
    } else {
      return {
        type: 'error',
        message: '转账失败'
      }
    }
  }
}
