/**
 * Created by TQQ on 2016/10/18.
 */
function Loading(fun){
    this.fun=fun;
    this.$bg= $("<div></div>");
    this.$load= $("<div></div>");
    this.$load1= $("<div></div>");
    this.$load2= $("<div></div>");
    this.$mainBody=$("<div></div>");
    var self = this;


    this.createUI=function(){
        this.$bg.css({
            'width':'100%',
            'height':'100%',
            'backgroundImage':"url('img/loading.jpg')",
            'z-index':'-1',
            'position':'absolute',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        })
        this.$bg.appendTo(this.$mainBody);
        this.$load.css({
            'width':'180px',
            'height':'29px',
            'backgroundImage':"url('img/18.png')",
            'position':'absolute',
            'left':'50%',
            'top':'78%',
            'margin-left':'-90px'
        })
        this.$mainBody.append(this.$load);
        this.$load1.css({
            'height':'35px',
            'border-radius':'25px',
            'backgroundColor':'green',
            'position':'absolute',
            'left':'50%',
            'margin-left':'-500px',
            'top':'85%',
            '-webkit-animation':'loading 5s ease-out',
            'z-index':'100'
        })
        this.$mainBody.append(this.$load1);
        this.$load2.css({
            'height':'35px',
            'width':'1000px',
            'border-radius':'25px',
            'backgroundColor':'lightgoldenrodyellow',
            'position':'absolute',
            'left':'50%',
            'margin-left':'-500px',
            'top':'85%',
        })
        this.$mainBody.append(this.$load2);
    }
    this.createUI();
}