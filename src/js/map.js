/**
 * Created by TQQ on 2016/10/18.
 */
function Map(fun){
    this.fun=fun;
    this.$bg= $("<div></div>");
    this.$bgm=$("<div></div>");
    this.$mainBody=$("<div></div>");
    this.$map=$("<div></div>");
    this.$left=$("<div></div>");
    this.$right=$("<div></div>");
    this.$back=$("<input type='button'>");

    var pause=false;
    var self = this;
    var i=0;
    //地图
    var arr=["img/map/1.png","img/map/2.png","img/map/3.png",
        "img/map/4.png","img/map/5.png","img/map/6.png",
        "img/map/7.png","img/map/10.png","img/map/11.png"
        ,"img/map/13.png","img/map/14.png"];

    this.createUI=function(){
        this.$bg.css({
            'width':'100%',
            'height':'100%',
            'backgroundImage':"url('img/1.jpg')",
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
            'left':'6%',
            'bottom':'4%',
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
        //地图
        this.$map.css({
            'width':'567px',
            'height':'399px',
            'backgroundImage':"url('"+arr[i]+"')",
            'position':'absolute',
            'left':'50%',
            'top':'50%',
            'margin':'-200px 0 0 -283px',
            'cursor':'pointer'
        })
        this.$mainBody.append(this.$map);
        //左箭头
        this.$left.css({
            'width':'47px',
            'height':'135px',
            'backgroundImage':"url('img/map/8.png')",
            'position':'absolute',
            'left':'23%',
            'top':'40%',
            'cursor':'pointer'
        })
        this.$mainBody.append(this.$left);
        //右箭头
        this.$right.css({
            'width':'47px',
            'height':'135px',
            'backgroundImage':"url('img/map/9.png')",
            'position':'absolute',
            'right':'23%',
            'top':'40%',
            'cursor':'pointer'
        })
        this.$mainBody.append(this.$right);
    }
    this.createUI();
    this.$left.click(function(){
        i--;
        if(i<0){
            i=10;
        }
        self.$map.css({
            'backgroundImage':"url('"+arr[i]+"')"
        })
        console.log(i)
    })
    this.$right.click(function(){
        i++;
        if(i>10){
            i=0;
        }
        self.$map.css({
            'backgroundImage':"url('"+arr[i]+"')"
        })
        console.log(i)
    })

    //返回按钮
    this.$back.click(function(){
        self.fun("menu");
    })

    //点击地图
    this.$map.click(function(){
        if(i==4){
            self.fun("mission");
        }
        else{
            alert("目前仅开放'Sun City',请充值解锁其他地图");
        }
    })
}