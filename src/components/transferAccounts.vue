<template>
  <div class="one">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="付款账号" prop="paymentAccount">
        <el-input v-model="form.paymentAccount" @blur="isEmpty(paymentAccount,'blur')" clearable></el-input>
      </el-form-item>
      <el-form-item label="币种" prop="currency">
        <el-select v-model="form.currency" placeholder="请选择币种">
          <el-option label="人民币" value="CNN"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="转账金额" prop="money">
        <el-input
          maxlength="8"
          oninput="value=value.replace(/[^\d.]/g,'')"
          v-model="form.money"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="收款人" prop="Payee">
        <el-input v-model="form.Payee" clearable></el-input>
      </el-form-item>
      <el-form-item label="收款账号" prop="receivingAccount">
        <el-input v-model="form.receivingAccount" clearable></el-input>
      </el-form-item>
      <el-form-item label="收款银行" prop="receivingBank">
        <el-select v-model="form.receivingBank" placeholder="请选择">
          <el-option label="中国工商银行" value="CNN"></el-option>
          <el-option label="中国农业银行" value="CNN"></el-option>
          <el-option label="中国建设银行" value="CNN"></el-option>
          <el-option label="中国银行" value="CNN"></el-option>
          <el-option label="中国交通银行" value="CNN"></el-option>
          <el-option label="中信银行" value="CNN"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.remarks" clearable></el-input>
      </el-form-item>
      <el-form-item class="two">
        <el-button type="primary" @click="transfer">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        paymentAccount: '',
        currency: '',
        money: '',
        Payee: '',
        receivingAccount: '',
        receivingBank: '',
        remarks: ''
      },
      rules: {
        paymentAccount: [{ required: true, message: '请输入付款账号', trigger: 'blur' }],
        money: [{ required: true, message: '请输入转账金额', trigger: 'blur' }],
        receivingAccount: [{ required: true, message: '请输入收款账号', trigger: 'blur' }]
      }
    }
  },
  directives: {
    // focus: {
    //   inserted: function(el) {
    //     el.focus()
    //   }
    // }
    focus: {
      inserted: function(el) {
        el.children[0].focus()
      }
    }
  },
  methods: {
    transfer: function() {
      console.log('hesgu ' + this.$refs.form)
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          this.$transferAccountpost(this.form).then((response) => {
            console.log(response)
            this.$message({
              message: response.message,
              type: response.type
            })
          }).then(function(response) {
          })
        } else {
          this.$message({
            message: '请输入必输项',
            type: 'error'
          })
        }
      })

      // this.$axiosPostForm.post('/result', '1').then((response) => {
      //   alert(response.data.message)
      // }).then(function(res) {
      //   console.log(res)
      // })
    },
    isEmpty: function(el, name, type) {
      if (name.trim().length === 0) {
        el.children[0].focus()
      }
    }
  }
}
</script>
<style>
.one {
  top: 20px;
  position: relative;
  width: 500px;
  margin: auto;
}
.two {
  text-align: center;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
