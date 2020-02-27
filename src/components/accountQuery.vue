 <template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item class="a" label="账号">
        <el-input v-model="keywords" placeholder="账号" clearable></el-input>
      </el-form-item>
      <el-form-item class="a">
        <el-button type="primary" @click="query">查询</el-button>
      </el-form-item>
      <el-form-item class="b">
        <el-button @click="clear">清空</el-button>
      </el-form-item>
      <el-form-item class="b">
        <el-button @click="create">创建</el-button>
      </el-form-item>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="account" label="账号" width="200"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="money" label="余额" width="200"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="update(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="Delete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: '',
      tableData: []
    }
  },

  methods: {
    query: function() {
      this.$accountQueryOne(this.keywords).then((response) => {
        console.log(response)
        // const res = []
        // for (const key in response) {
        //   res.push(response[key])
        // }
        // console.log(res)
        this.tableData = response
      }).then(function(response) {

      })
    },
    update: function(index, row) {
      console.log(index, row)
      console.log(this.tableData.index)
    },
    Delete: function(index, row) {
      // console.log('77777' + index, row)
      // console.log(this.tableData[index].account)
      this.$accountDeleteUser(this.tableData[index].account).then((res) => {
        this.$accountQueryOne().then((response) => {
          this.tableData = response
          this.$message({
            message: res.message,
            type: 'success'
          })
        })
      })
    },
    create: function() {
      this.$accountQuery().then((response) => {
        this.$message({
          message: 'loaclStorage存储已创建',
          type: 'success'
        })
      })
    },
    clear: function() {
      localStorage.clear()
      this.$accountQueryOne(this.keywords).then((response) => {
        console.log(response)
        this.tableData = response
        this.$message({
          message: 'loaclStorage存储已清空',
          type: 'success'
        })
      })
    }
  }

}
</script>
<style >
.a {
  padding: 0;
  margin: 0;
  position: relative;
  top: 10px;
  left: 30px;
}
.b {
padding: 0;
  margin: 0;
  position: relative;
  top: 10px;
  left: -10px;
  float:right;
}
</style>
