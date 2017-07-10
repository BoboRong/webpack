import Vue from 'vue'
import App from './App.vue'


// 创建一个vue的根实例
new Vue({
    el:'#app',
    render:function(createElement){
        // 告诉我们Vue实例，到时候启动项目，渲染的就是我们App.vue
        return createElement(App) 
        // 根实例将那个组件渲染到id=app的div中去
        
    }
})
