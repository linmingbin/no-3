/*屏幕与字体适配*/
var docEl = document.documentElement;
var dpr = window.devicePixelRatio;
var metaEl = document.querySelector('meta[name="viewport"]');
var dpr = window.devicePixelRatio || 1;
var scale = 1 / dpr;
function getSize() {
  // 获取屏幕的宽度
  //font-size 20px
  var screenWidth = docEl.clientWidth;
  docEl.style.fontSize = screenWidth / (720 / 100) + "px";
  //console.log(screenWidth / (720 / 100) + "px");
}
getSize(); // 页面加载完执行一次
window.onresize = function() {
  getSize();
};