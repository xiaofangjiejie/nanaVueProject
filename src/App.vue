<template>
  <div id="App">
    <router-view/>
    <div class="sy-footer">
      <router-link to="/" class="sy-footer-list col-4">
        <div class="sy-footer-img footer01"></div>
        <span class="sy-footer-span">首页</span>
      </router-link>
      <router-link to="/faxian" class="sy-footer-list col-4">
        <div class="sy-footer-img footer02"></div>
        <span class="sy-footer-span">发现</span>
      </router-link> 
      <router-link to="/mine" class="sy-footer-list col-4">
        <div class="sy-footer-img footer03"></div>
        <span class="sy-footer-span">我的</span>
      </router-link>
    </div> 
      
  </div>
  
</template>
<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
a:focus, a:hover ,a:focus span, a:hover span{
    color: #ff4d43;
    text-decoration: none;
}
:after, :before {
  box-sizing: border-box;
}
div {
    display: block;
}
.i-container {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
    color: #757575;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sy-footer{
	border-top: 1px solid #dfdfdf;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
  height: 1rem;
  background: #ffffff;
}
.sy-footer-list i{
	color: #979797;
	margin: 0.1rem 0 0 0;
}
.sy-footer-list{
  float: left;
  width: 33.333%;
}
.sy-footer-span{
	color: #979797;
	font-size: 0.2rem;
	display: block;
}
.sy-footer-img{
  width: 0.5rem;
  height: 0.5rem;
  background-size: 100%;
  margin: 0.1rem auto 0 auto;
}
.footer01{
  background-image: url(assets/images/shouye.png);
  background-repeat: no-repeat;
}
.router-link-exact-active .footer01{
  background-image: url(assets/images/shouye_a.png);
  background-repeat: no-repeat;
}
.footer02{
  background-image: url(assets/images/faxian.png);
  background-repeat: no-repeat;
}
.router-link-exact-active .footer02{
  background-image: url(assets/images/faxian_a.png);
  background-repeat: no-repeat;
}
.footer03{
  background-image: url(assets/images/mine.png);
  background-repeat: no-repeat;
}
.router-link-exact-active .footer03{
  background-image: url(assets/images/mine_a.png);
  background-repeat: no-repeat;
}
.router-link-exact-active span{
  color: #ff4d43;
}
.f-red,.f-red i,.f-red span{
	color: #ff4d43;
}
.i-container .sy-warn {
    display: inline-block;
    width: 0.5rem;
    margin-top: 0.15rem;
    line-height: 0.8rem;
    text-align: center;
}
.sy-warn i{
	color: #979797;
}
.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}
.news_list_left {
  width: 2.5rem;
  padding: 0.2rem;
}
.news_list_right {
  float: right;
  width: 5rem;
  padding: 0.2rem;
}
p {
    margin-top: 0;
    margin-bottom: 0.5rem;
}
.fx-top-list span, .mine-con-list span, .mine-top-list span {
    font-size: 0.28rem;
}
.sy-header,.fx-header {
    border-bottom: 1px solid #dfdfdf;
    width: 100%;
    height: 0.8rem;
    background: #ffffff;
    position: fixed;
    top: 0;
    text-align: center;
    vertical-align: middle;
    z-index: 801;
    font-size: 0.34rem;
    color: #333;
    overflow: hidden;
    padding: 0 16px;
    box-sizing: border-box;
}
.i-container .sy-title,.fx-title {
    height: 0.8rem;
    line-height: 0.8rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
}

.content{
	margin: 0.8rem 0 1rem 0;
}
</style>
