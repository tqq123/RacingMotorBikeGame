function home(fun){
	this.fun = fun;
	this.$userName= $("<input type='text' value='主页' />")
	this.$me=$("<div></div>");
	this.$btn = $("<input type='button' value='跳转到菜单' />");
	
	this.$mainBody=$("<div></div>")
	var self = this;
	this.createUI=function(){
		this.$me.css({
			'width':'32000px',
			'height':'100%',
			'overflow':'hidden',
			'backgroundImage':"url('imgs/map2.jpg')",
			'z-index':'-1',
			'position':'absolute',
			'background-repeat':'no-repeat'
		})
		this.$mainBody.append(this.$me);
		this.$userName.appendTo(this.$mainBody);
		this.$btn.appendTo(this.$mainBody);
		this.$btn.click(function(){
			console.log("成功");//
			self.fun("home");
		})
	}
	this.createUI();
}

//var home = new home();
//home.$mainBody
