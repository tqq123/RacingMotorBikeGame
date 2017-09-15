function Menu(fun){
	this.fun=fun;
	this.$bg= $("<div></div>");
	this.$bgm=$("<div></div>");
	this.$mainBody=$("<div></div>");
	this.$single=$("<input type='button'>");
	this.$multi=$("<input type='button'>");
	this.$shop=$("<input type='button'>");
	this.$back=$("<input type='button'>");


	var pause=false;
	var self = this;

	this.createUI=function(){
		this.$bg.css({
			'width':'100%',
			'height':'100%',
			'backgroundImage':"url('img/pattern.jpg')",
			'z-index':'-1',
			'position':'absolute',
			'background-repeat':'no-repeat',
			'background-size':'cover'
		})
		this.$mainBody.append(this.$bg);
		//返回
		this.$back.css({
			'width':'95px',
			'height':'95px',
			'backgroundImage':"url('img/backbtn.png')",
			'position':'absolute',
			'left':'2%',
			'top':'4%',
			'border-radius':'50px'
		})
		this.$mainBody.append(this.$back);
		//背景音乐
		this.$bgm.css({
			'width':'50px',
			'height':'50px',
			'backgroundImage':"url('img/audio/1.png')",
			'position':'absolute',
			'right':'7%',
			'top':'3%'
		})
		this.$bgm.click(function(){
			if(!pause){
				$("#bgm")[0].pause();
				pause=true;
				self.$bgm.css({
					'backgroundImage':"url('img/audio/2.png')"
				})
			}
			else{
				$("#bgm")[0].play();
				pause=false;
				self.$bgm.css({
					'backgroundImage':"url('img/audio/1.png')"
				})
			}
		})
		this.$mainBody.append(this.$bgm);
		this.$single.css({
			'width':'263px',
			'height':'71px',
			'backgroundImage':"url('img/onebtn.png')",
			'position':'absolute',
			'left':'8%',
			'top':'78%',
			'border-radius':'40px'
		})
		this.$mainBody.append(this.$single);
		this.$multi.css({
			'width':'263px',
			'height':'71px',
			'backgroundImage':"url('img/morebtn.png')",
			'position':'absolute',
			'left':'39%',
			'top':'78%',
			'border-radius':'40px'
		})
		this.$mainBody.append(this.$multi)
		this.$shop.css({
			'width':'263px',
			'height':'71px',
			'backgroundImage':"url('img/mallbtn.png')",
			'position':'absolute',
			'left':'71%',
			'top':'78%',
			'border-radius':'40px'
		})
		this.$mainBody.append(this.$shop);
	}
	this.createUI();
	//单人游戏
	this.$single.click(function(){
		self.fun("map");
	})
	//多人游戏
	this.$multi.click(function(){
		alert("正在开发中，敬请期待");
	})
	//商店
	this.$shop.click(function(){
		self.fun("shop");
	})

	//返回
	this.$back.click(function(){
		self.fun("success");
	})
}