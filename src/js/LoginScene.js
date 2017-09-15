function LoginScene(fun){
	this.fun=fun;
	this.$me=$("<div></div>");
	this.$mainBody=$("<div></div>");
	this.$bgm=$("<div></div>");
	this.$bor=$("<div></div>");
	this.$login=$("<div></div>");
	this.$loginBg=$("<div></div>");
	this.$input=$("<input type='text'>");
	this.$login1=$("<div></div>");
	this.$loginBg1=$("<div></div>");
	this.$input1=$("<input type='password'>");
	this.$loginbtn=$("<input type='button'>");
	this.$signbtn=$("<input type='button'>");
	this.$version=$("<div></div>");

	var self = this;
	var pause=false	;
	var flag=0;  //登录标志
	var name,password;


	this.createUI=function(){
		//背景
		this.$me.css({
			'width':'100%',
			'height':'100%',
			'backgroundImage':"url('img/1.jpg')",
			'z-index':'-1',
			'position':'absolute',
			'background-repeat':'no-repeat',
			'background-size':'cover'
		})
		this.$me.appendTo(this.$mainBody);
		//版本信息
		this.$version.css({
			'width':'50px',
			'height':'50px',
			'backgroundImage':"url('img/7.png')",
			'position':'absolute',
			'right':'11%',
			'top':'3%'
		})
		this.$version.click(function(){
			alert("Author:D调的_coder         Version:1.0.0")
		})
		this.$mainBody.append(this.$version);
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
		//登录框
		this.$bor.css({
			'width':'509px',
			'height':'424px',
			'backgroundImage':"url('img/2.png')",
			'position':'absolute',
			'left':'50%',
			'top':'50%',
			'margin':'-212px 0 0 -254px'
		})
		this.$login.css({
			'height':'29px',
			'width':'67px',
			'backgroundImage':"url('img/10.png')",
			'position':'absolute',
			'left':'7%',
			'top':'14%'
		})
		this.$bor.append(this.$login);
		this.$loginBg.css({
			'width':'387px',
			'height':'62px',
			'backgroundImage':"url('img/8.png')",
			'position':'absolute',
			'left':'20%',
			'top':'10%'
		})
		this.$bor.append(this.$loginBg);
		this.$input.css({
			'width':'307px',
			'height':'52px',
			'backgroundColor':'rgba(0,0,0,0)',
			'position':'absolute',
			'left':'28%',
			'top':'11%',
			'border':'none',
			'font-size':'25px',
			'font-weight':'bold'
		})
		this.$bor.append(this.$input);
		this.$login1.css({
			'height':'29px',
			'width':'67px',
			'backgroundImage':"url('img/11.png')",
			'position':'absolute',
			'left':'7%',
			'top':'38%'
		})
		this.$bor.append(this.$login1);
		this.$loginBg1.css({
			'width':'387px',
			'height':'62px',
			'backgroundImage':"url('img/8.png')",
			'position':'absolute',
			'left':'20%',
			'top':'35%',
		})
		this.$bor.append(this.$loginBg1);
		this.$input1.css({
			'width':'307px',
			'height':'52px',
			'backgroundColor':'rgba(0,0,0,0)',
			'position':'absolute',
			'left':'28%',
			'top':'36%',
			'border':'none',
			'font-size':'25px'
		})
		this.$bor.append(this.$input1);
		this.$loginbtn.css({
			'width':'267px',
			'height':'72px',
			'backgroundImage':"url('img/4.png')",
			'position':'absolute',
			'left':'24%',
			'top':'54%',
			'border-radius':'40px'
		})
		this.$bor.append(this.$loginbtn);

		this.$signbtn.css({
			'width':'267px',
			'height':'72px',
			'backgroundImage':"url('img/5.png')",
			'position':'absolute',
			'left':'24%',
			'top':'74%',
			'border-radius':'40px'
		})
		this.$bor.append(this.$signbtn);
		this.$mainBody.append(this.$bor);
	}
	this.createUI();
	//注册页面
	this.$signbtn.click(function(){
		self.fun("login");
	})

	//登录
	this.$loginbtn.click(function(){
		db.transaction(function(tx){
			tx.executeSql("select * from tbname",[],function(ta,result){
				var username=$("input").eq(0).val();
				var key=$("input").eq(1).val();
				if(username!="" && key!=""){
					//查找数据库
					for(var i= 0;i<result.rows.length;i++){
						if(username==result.rows.item(i).name && key==result.rows.item(i).key){
							flag=1;
							break;
						}
					}
					if(flag==1){
						alert("登录成功");
						localStorage.user=username;
						flag=0;
						self.fun("loading");
						window.setTimeout(function(){
							self.fun("menu");
						},5000)
					}
					else{
						alert("用户名密码错误");
					}
				}
				else{
					alert("用户名密码不能为空");
				}
			})
		})
	})
}
