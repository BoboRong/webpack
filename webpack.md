# 内容回顾

## MVVM
	View id=app的div
	VM   new Vue({})
	Model Vue实例中的data:{}
	
## Vue的指令
	`{{}}` 在页面上显示值
	v-text/v-html 在页面上显示字符串/网页内容
	v-bind 给我们dom元素绑定属性上的值，让我们属性的值来自data:{}  <img v-bind:src="img_url">
	v-on 处理事件，执行函数
	v-model 模型--->视图  视图--->模型 只能用在带有value属性的dom元素上
	v-if/v-show v-if 来回切换，花销会大 v-show 初始化渲染性能低
	v-for 列表渲染 v-for="(xxx,index) in xxx" 给我们遍历到的每个元素添加一个唯一标识符 :key
	
## Vue组件
	相同功能的代码写在一起形成一个页面，我们就称之为组件
	
	组件定义方式:
		1、先定义，再注册
		2、定义注册一步的到位(第一种的一个语法糖)
		3、写在 <template></template>之间
		4、写在<script></script>
		5、当文件组件 .vue
		
## 过滤器
	对服务器返回的数据，先过滤，再显示

------------------

# 今日内容

## 路由
	单页面应用(SPA)
		和服务器端渲染相对的概念
		
	它是说，当我们点击了页面的某个元素之后，不会打开一个新页面，而是在原有的页面中切换内容
	
	前端的路由(Angular，Vue，React)
		作用:当触发了某个路由之后，决定将哪个组件，显示在当前的页面上
		
	官方文档:
		https://router.vuejs.org/zh-cn/essentials/getting-started.html
		
	思考:
		1、肯定要有对应的跳转的组件（先定义组件，不要注册）
		
		2、组件要有一个呈现的地方
			ng-view / router-view
			
		3、设置我们路由和组件对应关系(注册组件和设置路由与组件的对象关系)
		
		4、设置我们路由和Vue实例的关系
		
		5、触发我们的路由，router-link
		
	步骤:
		1、必选先导入 vue.js，然后再导入vue-router.js
		2、分两大块
			html
				1、跳转的超链接
				
				2、呈现组件的占位符
				
			js
				1、定义组件或是导入外部组件
				
				2、设置路由与组件的对应关系(设置路由规则)
				
				3、把创建好的路由注入到Vue实例中(将路由对象纳入到Vue实例中管理)
				
	注意点:
		1、一定别忘记，把我们创建好的路由，注入到我们的根实例 new Vue({router:xxxx})
		2、一定得有我们组件呈现的地方
		
	补充两点:
		1、打开我们应用就让他显示一个默认的组件?
			在我们设置路由规则的地方，设置以下`/`让它重定向到指定的路由中去
			```
				{path:'/',redirect:'/newslist'},
			```

------------------

## 网络请求
	Vue 
		Vue-Resource  axios
		
	参考:
		https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
		
	步骤:
		1、先导入vue.js,在导入vue-resource.js
		2、使用
			this.$http.get
			this.$http.post(url,body,{emulateJSON:true})
			this.$http.jsonp
		
	注意点:
		post请求第三个参数设置为:emulateJSON:true
			```
				this.$http.post(url,{username:'afdaf',password:'lisi'},{emulateJSON:true})
			```

------------------

## Webpack的使用

## 基本概念
	gulp grunt browserify 

	目前来说最火的前端构建工具
	
	Webpack 是当下最热门的前端资源模块化管理和打包工
	具。它可以将许多松散的模块按照依赖和规则打包成符合
	生产环境部署的前端资源。还可以将按需加载的模块进行
	代码分隔，等到实际需要的时候再异步加载。通过 
	loader 的转换，任何形式的资源都可以视作模块，比如
	CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、
	JSON、Coffeescript、 LESS 等。
	
	开发阶段配合一个全局包和一个本地包，就可以实现所见及所得的效果
	
	最后项目做完了，只需要执行一个话 webpack，把所有源代码，进行压缩，打包，生成生产环境所需的代码

	安装两个全局包
		npm i webpack webpack-dev-server -g
		
	注意点:
		Webpack2.x开始，支持打包的时候，自动将es6转成es5

## 基本使用
	步骤及注意点:
		1、webpack打包必须要有一个入口文件(一般来说入口文件指定一个即可)，我们一般打包只会打包这个入口文件
		
		2、在我们要打包文件的目录下 webpack 入口文件 打包之后的文件(一般把它命名为bundle.js)
		
		3、运行起来，需要借助一个html，我们一般创建一个index.html，然后导入我们刚刚打包好的bundle.js
		
	打包多个文件	
		1、在终端中使用 webpack打包 webpack 入口文件 输出的文件(bundle.js) 同样只需要打包入口文件即可，因为入口文件中已经包含了其它模块
		
	打包css 
		1、安装两个本地包
			npm i style-loader css-loader --save-dev
		
## Webpack核心概念
	入口文件
	
	输出文件:
		https://doc.webpack-china.org/concepts/output/
	
	Loader:
		让我们webpack支持打包非js文件，支持的Loade列表 https://doc.webpack-china.org/loaders/
		
		css: style-loader，css-loader
		
		1.x 和 2.x 的区别
		
		1.x 可以省略loader 必须 !style!css
		2.x 不能省略 必须 !style-loader!css-loader
		
		注意点:1.x和2.x在loader方面使用不一样
			https://webpack.js.org/guides/migrating/#automatic-loader-module-name-extension-removed
			
	plugins:
		作用:利用插件帮我们做一些额外的事情
			
		例子:
		 	使用webpack本地包插件，来实现输出的文件头部添加注释信息。		
			
		使用步骤:
			1、在你的项目本地，安装一个本地包 webpack
					
		
	注意点:上面几个在webpack.config.js中配置的时候，都是同级的，千万不要嵌套，写在别人里面了
			
## Webpack之配置文件（webpack.config.js）
	目的:减小我们在终端里面输入很长的打包指令，减少错误
	
	使用:
		1、在我们的项目根路径下创建一个js文件 webpack.config.js
		
		2、配置entry【必须】,output【必须】
			配置loader，参考:https://webpack.js.org/guides/migrating/#automatic-loader-module-name-extension-removed
	
		3、我们只需要在终端中，在项目根目录下输入我们 `webpack`指令即可
		
	注意：
		1、里面所有的代码都是写在
			module.exports = {}
			
		2、里面的代码只能是核心概念中的代码
		
## Webpack其它的指令介绍【了解】
	使用的时候在webpack后面接上一些指令
	webpack --progress 【在控制台输出打包进度】
	webpack -p 【压缩js,这里只有一个`_`，后面我们在实际开发中使用webpack本地包中自带uglify的压缩功能】
	webpack --config 指定你webpack要打包的文件名称
	
	注意点：
		1、以上其它的指令，除了-p【压缩】，其它都是两个`_`
		
		2、上面的--progree -p --config，没有先后顺序，可以接一个也可以接多个
		
		3、--progress -p --config，不能在webpack.config.js中配置
		

## 开发阶段如何提高打包效率
	方式1【了解】、在我们执行webpack指令的时候，在后面加上 --watch
	
	方式2【掌握】webpack-dev-server
	
	注意事项:使用我们上面两种方式，不要放在中文目录下，路径中也不要特殊符号
	
## webpack-dev-server
	前提:
		全局安装webpack-dev-server这个全局包，`npm i webpack-dev-server -g`
		
	最基本的用法:
		1、执行webpack-dev-server --progress -p --config xxx
		
	高级用法:(想换一个端口号、自动打开浏览器、热更新)
		参考:	
			
		
		执行webpack-dev-server --progress --port 3008 --open
		
		--hot --inline【热更新】
		
	
	注意事项：
		1、webpack-dev-server打包的bundle.js在内存中
		2、我们运行的html文件，必须叫index.html
		3、我们在index.html导入我们打包好的bundle.js必须这样写
			```
				<script type="text/javascript" src="bundle.js"></script>
			```
		4、不要把我们的项目目录放在中文路径下
	
## webpack-dev-server和webpack有什么区别
	1、使用阶段不一样
		开发阶段:使用webpack-dev-server
		
		生产阶段:webpack
		
	2、产生的东西不一样
		webpack-dev-server，打包出来的东西，在内存，不会生成一个实实在在的bundle.js【效率高】
		
		webpack打包，会生成一个实实在在的bundle.js
		
	3、凡是webpack有功能，webpack-dev-server都有，并且还提供了比webpack更牛逼的功能
		webpack --progress -p xxx
		webpack-dev-server --progress -p xxx

------------------


## 构建项目(看到根组件的内容即可)

### 创建一些必备的文件夹和文件	
	
	src : 项目源代码目录
		main.js 打包的入口文件(项目中需要打包的所有的文件都在这里导入)
		
		App.vue 项目的根组件，这个使我们项目一起动用户看到的第一个组件(单文件组件)
	
	package.json 描述我们项目文件，记录我们安装了哪些第三方包 ` npm init -y `
	
	webpack.config.js webpack的配置文件
	
### 配置webpack.config.js中最基本的信息
	```
		entry: './src/main.js', //项目打包的入口文件 【必须】
	    output: {//打包输出文件【必须】
	      path: __dirname+'/dist',
	      filename: 'bundle.js'
	    }
	```
### 在App.vue中写代码
	```
		<template>
		    <div>
		        我是根组件
		    </div>
		</template>
	```
	
### 在main里面写代码
	1、安装vue 
		npm i vue --save
	
	2、导入vue,导入App.vue
	
	3、创建根实例，告诉我们根实例，我们渲染是App.vue这个组件
		```
			new Vue({
			    el:"#app",
			    render:function(createElement){
			        return createElement(App) //告诉我们Vue实例，到时候启动项目，渲染的就是我们App.vue
			    }//根实例将那个组件渲染到id=app的div中去
			})
		```
		
### 让我们webpack支持.vue文件的打包
	参考:https://doc.webpack-china.org/loaders/

	1、安装 vue-loader
		npm i vue-loader vue-template-compiler css-loader --save-dev
	
	2、在webpack.config.js
		```
			module: { //Loader
			    rules: [
			      {
			        test: /\.vue$/, //匹配以.vue结尾的
			        use: [
			          {
			            loader: "vue-loader"
			          }
			        ]
			      }
			    ]
			  }
		```

### 运行
	webpack-dev-server --progress --port 6008 --open
	
	也可以配置到package.json中
	```
		"scripts": {
		    "test": "echo \"Error: no test specified\" && exit 1",
		    "dev": "webpack-dev-server --progress --port 6008 --open"
		 },
	```

------------------
