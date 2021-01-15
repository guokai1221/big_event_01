// 开发环境服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net'
// 测试环境服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net'
//生成环境服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net'


//注意 每次调用 $.get() $.post() $.ajax()的时候
//会先调用 ajaxPrefilter 这个函数
//在这个函数中 可以呢到我们给ajax提供的配置对象 
//在发送ajax请求之前 对url地址进行处理 这样方便管理
$.ajaxPrefilter(function (options) {
    options.url = baseURL + options.url;
})