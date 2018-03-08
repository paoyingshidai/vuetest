class TestService {
  /**
   * 检测当前用户是否已经登录
   * @resolve {Object} userData / null
   */
  testService () {
    alert('test service !')
  }

}

// 实例化后导出，全局单例
export default new TestService()
