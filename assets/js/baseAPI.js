// 开发环境服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net'
// 测试环境服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net'
//生成环境服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net'

//拦截所有ajax请求  在ajax请求之前做的操作
//在发送ajax请求之前 对url地址进行处理 这样方便管理
$.ajaxPrefilter(function (options) {
    options.url = baseURL + options.url;
})