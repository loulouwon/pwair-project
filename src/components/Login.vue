<template>
  <div class="login-wrap">
     <h1>PWAir</h1>
     <h2>Open the window when we push you</h2>
     <div class="icon-face-box">
         <span class="far fa-grin-hearts"></span>
         <span class="far fa-grin"></span>
         <span class="far fa-dizzy"></span>
     </div>
      <!-- .form-box shadow : S -->
      <div class="form-box shadow">
          <md-field md-clearable>
              <label>Email</label>
              <md-input type="text"></md-input>
          </md-field>

          <md-field>
              <label>Password</label>
              <md-input type="password"></md-input>
          </md-field>
          <router-link to="/Main" class="md-raised">
            <md-button class="btn-login">Login</md-button>
          </router-link>
      </div>
      <!-- //.form-box shadow : E -->      
      <div class="btn-wrap">
          <md-button class="md-icon-button md-raised md-primary"><span class="fab fa-google"></span></md-button>
          <md-button class="md-icon-button md-raised md-primary"><span class="fab fa-facebook-f"></span></md-button>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data: () => ({
    
  })
}
</script>

<style scoped>
.login-wrap{    
    padding: 50px 30px;
}
.login-wrap h1,
.login-wrap h2{
    color: #fff;
}
.login-wrap h1{
    font-size: 2.5em;
    margin: 0;
}
.login-wrap h2{
    font-weight: 300;
    font-size: 1.15em;
    letter-spacing: -1px;
    margin-bottom: 15px;
}
.icon-face-box{
    color: #fff;
    font-weight: 300;
    font-size: 2.4em;
    margin-bottom: 30px;
}
.icon-face-box span{
    margin: 0 3px;
}
.form-box{
    background: #fff;
    border-radius: 10px;
    padding: 15px 20px 35px;
    box-shadow: 0 10px 15px -5px rgba(0, 0, 0, .09) inset;
}
.form-box .md-button{
    width: 100%;
    font-size: 1.15em;
    font-weight: 400;
    margin: 0;
}
.form-box .btn-login{
    font-weight: 300;
    background: #7A57D1;
    color: #fff;
    margin: 0;
    font-size: 1.1em;
}
.login-wrap .btn-wrap{
    margin-top: 20px;
}
.login-wrap .btn-wrap button{
    font-size: 1.25em;
    color: #fff!important;
}
.login-wrap .btn-wrap button:first-child{
    margin-right: 10px;
}
</style>