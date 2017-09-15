function MyActor($parent,imgs,left,top,dis,dis1){//0 1
	this.$parent = $parent;
	this.imgs=imgs;
	this.left=left;
	this.top=top;
	this.dis=dis;//全部距离
	this.dis1=-145;
	this.myspeedx = 0;
	this.myspeedy = 0;
	this.createUI=function(){
		this.$div=$("<div></div>");
		this.$name=$("<div></div>");
		this.$name1=$("<div></div>");
		this.$name2=$("<div></div>");
		this.$name3=$("<div></div>");
		this.$person = $("<div></div>");
		this.$bike = $("<div></div>");
		this.$wheel_left = $("<div class='wheel'></div>");
		this.$div.css({
			'position':'absolute',
			'width': '200px',
			'height': '200px'
		})
		this.$parent.append(this.$div);
		this.$person.css({
			'position': 'absolute',
			'width': '72px',
			'height': '92px',//'img/Biker01.png'
			'background-image':'url('+this.imgs[0]+')',
			'left': '38px',
			'top':'310px',
			'z-index':'300'
		});
		this.$div.append(this.$person);
		this.$bike.css({
			'position': 'absolute',
			'width': '85px',
			'height': '36px',//'img/Biker01.png'
			'background-image':'url('+this.imgs[1]+')',
			'left': '30px',
			'top':'370px',
			'z-index':'200'
		})
		this.$div.append(this.$bike);
		this.$wheel_left.css({
			'position': 'absolute',
			'width': '35px',
			'height': '35px',
			'background-image':'url('+this.imgs[2]+')',
			'left': '15px',
			'top':'388px'
		})
		this.$wheel_right=this.$wheel_left.clone();
		this.$wheel_right.css("left","92px");
		this.$div.append(this.$wheel_left);
		this.$div.append(this.$wheel_right);
	}
	this.createUI();
	this.MyPosition=function(){
		this.$div.css({
			'left':this.left+'px',
			'top':this.top+'px'
		})
	}
	this.MyPosition();


	this.move=function(speedx,speedy){//undecided  speedx=10
		this.myspeedx=(speedx==undefined)?this.myspeedx:speedx;
		this.myspeedy=speedy;
		this.dis+=this.myspeedx;
		this.dis1+=this.myspeedy;
		this.$div.css({
			'left':this.dis+'px',
			'top':this.dis1+'px'
		})
	}
}
