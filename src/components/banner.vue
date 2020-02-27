 <template>
  <el-aside >
    <el-menu >
      <el-menu-item>
        <template slot="title">
          <router-link to="/accountQuery" tag='div'>
            <i class="el-icon-search"></i>账户信息查询
          </router-link>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title">
          <router-link to="/accountAdd" tag='div'>
            <i class="el-icon-plus"></i>账户信息添加
          </router-link>
        </template>
      </el-menu-item>
      <el-menu-item>
        <template slot="title" >
          <router-link to="/transferAccounts" tag='div'>
            <i class="el-icon-check"></i>转账
          </router-link>
        </template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style>
</style>
