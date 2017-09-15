/**
 * Created by Administrator on 2016/10/27.
 */
function mygold($div,top,left){
    this.$div = $div;
    this.$top = top;
    this.$left = left;
    var x=60;
    var self=this;
    this.createUI=function(){//可以用。css来改变cv的样式
        var ctx;
        this.$cv = $("<canvas width='60px' height='60px'></canvas>");
        var img= new Image();//插入图片
        img.src="play/money.png";
        ctx = this.$cv[0].getContext("2d");
        img.onload = function(){
            window.setInterval(function(){
                x-=60;
                ctx.beginPath();
                ctx.clearRect(0,0,60,60);
                ctx.drawImage(img,x,0);
                if(x<-1080){
                    x=0;
                }
            },20);
            ctx.closePath();
            self.$cv.css({
                'position':'absolute',
                'top':self.$top,
                'left':self.$left
            });
        };
        this.$div.append(this.$cv);
    };
    this.createUI();
}