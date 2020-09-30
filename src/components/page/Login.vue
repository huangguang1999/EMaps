<template>
    <div class="login-wrap">
          <img src="../../assets/img/logo.png" class="ms-logo" />
          <div class="ms-png">
            <template v-if="index === 0">
              <img src="../../assets/img/login/normal.png" />
            </template>
            <template v-else-if="index === 1">
              <img src="../../assets/img/login/user.png" style="height:107px;"/>
            </template>
            <template v-else>
              <img src="../../assets/img/login/code.png" style="height:107px;" />
            </template>
          </div>
        <div class="ms-login">
          <div class="ms-title">地图大数据系统</div>
          <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
              <el-form-item prop="name">
                  <el-input v-model="param.name" placeholder="name" @focus="changeIndex(1)" @blur="changeIndex(0)">
                      <el-button slot="prepend" icon="icon-emaps-people"></el-button>
                  </el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input
                      type="password"
                      placeholder="password"
                      v-model="param.password"
                      @keyup.enter.native="submitForm()"
                      @focus="changeIndex(2)"
                      @blur="changeIndex(0)"
                  >
                      <el-button slot="prepend" icon="icon-emaps-lock"></el-button>
                  </el-input>
              </el-form-item>
              <div class="login-btn">
                  <el-button type="primary" @click="submitForm()">登录</el-button>
              </div>
          </el-form>
        </div>
    </div>
</template>

<script>
import {login} from '@/api/user';

export default {
    data: function() {
        return {
            param: {
                name: 'hg',
                password: '123',
            },
            rules: {
                name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            token: this.$GLOBAL.token,
            index: 0
        };
    },
    methods: {
        submitForm () {
            this.$refs.login.validate(valid => {
                if (valid) {
                    const userInfo = Object.assign({}, this.param)
                    login(userInfo).then(res => {
                        if (res.success) {
                            this.$message.success('登录成功')
                            localStorage.setItem(this.token, res.data.data.token)
                            this.$router.push('/')
                        } else {
                            alert(res.msg)
                        }
                    }).catch(err => {
                        throw err
                    })
                } else {
                    this.$message.error('请输入账号和密码')
                    return false
                }
            });
        },
        changeIndex (value) {
          this.index = value
        }
    },
};
</script>

<style scoped lang="scss">
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login/login-bg.svg);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 80% 50%;

    .ms-logo {
      width: 200px;
      height: 200px;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -150px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.8);
        overflow: hidden;      
        
      .ms-title {
          width: 100%;
          line-height: 50px;
          text-align: center;
          font-size: 20px;
          color: #1296db;
          border-bottom: 1px solid #1296db;
            
      }
    }

}
.ms-png img {
  width: 125px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -233px 0 0 -61px;
  z-index: 1;
}

.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
    padding-top: 10px;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
