function myRocker($div/*,fun*/){
	this.$div=$div;
	//this.fun=fun;
	var ctx;
	var WIDTH=150;
	var HEIGHT =150;
	var rmax = 75;
	var rmin =30;
	
	var self = this;
	//ui
	var $cv= $("<canvas width='150' height='150'></canvas>");
	this.createUI=function(){
		/*this.$cv.css({
		})*/
		this.$div.append($cv);
	}
	this.createUI();
	
	this.myfu =function(eventName,fn){
		$cv.on(eventName,fn)
	}
	
	this.myPaint=function(nx,ny){
		ctx =$cv[0].getContext("2d");
		ctx.beginPath();
		ctx.clearRect(0,0,WIDTH,HEIGHT);
		ctx.arc(75,75,rmax,0,2*Math.PI);
		ctx.strokeStyle="aqua";
		ctx.stroke();
		ctx.closePath();
		
		ctx.beginPath();
		ctx.fillStyle="aqua";
		ctx.arc(nx+75,ny+75,rmin,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
	//obj.myPaint(0,0);//对象
	this.myPaint(0,0);//static 方法
				
	var bol = false;
	$cv.on("mousedown",function(e){
		e.preventDefault();
		bol=true;
	})
	
	$(document).on("mousemove",function(e){
		e.preventDefault();
		if(bol){
			var mouseX = e.clientX;
			var mouseY = e.clientY;
			
			var cirCenX= $cv.offset().left+WIDTH/2;
			var cirCenY= $cv.offset().top+HEIGHT/2;
			
			var subX = mouseX-cirCenX;
			var subY =mouseY- cirCenY;
			
			var ml = Math.sqrt(subX*subX+subY*subY);//Math.pow(subX,2)
			
			var nx =0;
			var ny =0;
			if(ml+rmin>rmax){
				nx=(rmax-rmin)*subX/ml;
				ny=(rmax-rmin)*subY/ml;
			}else{
				nx=subX;
				ny=subY;
			}
			self.myPaint(nx,ny);
			/*self.fun(nx,ny);*/
			$cv.trigger("mydefine",[nx,ny]);
		}
	})	
	$(document).on("mouseup",function(e){//event
		e.preventDefault();
		bol = false;
		self.myPaint(0,0);
		$cv.trigger("mydefine",[0,0]);
	})
}