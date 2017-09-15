/**
 * Created by TQQ on 2016/10/17.
 */
function SignupScene(fun){
    this.fun=fun;
    this.$me=$("<div></div>");
    this.$mainBody=$("<div></div>");
    this.$bgm=$("<div></div>");
    this.$bor=$("<div></div>");
    this.$login=$("<div></div>");
    this.$loginBg=$("<div></div>");
    this.$input=$("<input type='text' id='username'>");
    this.$login1=$("<div></div>");
    this.$loginBg1=$("<div></div>");
    this.$input1=$("<input type='password' id='keyword'>");
    this.$loginbtn=$("<input type='button'>");
    this.$loginbtn1=$("<div></div>");
    this.$signbtn=$("<input type='button'>");
    this.$signbtn1=$("<div></div>");
    this.$back=$("<input type='button'>");

    var self = this;
    var pause=false;
    var flag_1=0;

    this.createUI=function(){
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
            'font-size':'21px',
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
            'font-size':'21px'
        })
        this.$bor.append(this.$input1);

        this.$signbtn.css({
            'width':'267px',
            'height':'72px',
            'backgroundImage':"url('img/zucebtn.png')",
            'position':'absolute',
            'left':'24%',
            'top':'64%',
            'border-radius':'40px'
        })
        this.$bor.append(this.$signbtn);
        this.$mainBody.append(this.$bor);

    }
    this.createUI();


    //插入用户数据
    this.insertInfo=function(name,key,fun){
        db.transaction(function(tx){
            tx.executeSql("insert into tbname (name,key)values(?,?)",[name,key],
                function(ta,result){
                    fun(1);
                },
                function(ta,error){
                    fun(0);
                })
        })
    }

    //插入金币数据
    this.insertMoney=function(idname,money){
        db.transaction(function(tx){
            tx.executeSql("insert into money (idname,coin)values(?,?)",[idname,money],
                function(ta,result){
                },
                function(ta,error){
                })
        })
    }
    //注册
    this.signup=function(){
        var username=$("#username").val();
        var key=$("#keyword").val();
        if(username!="" && key!=""){
            db.transaction(function(tx){
                tx.executeSql("select * from tbname",[],function(ta,result){
                    //查询数据库�
                    for(var i= 0;i<result.rows.length;i++){
                        if(username==result.rows.item(i).name){
                            flag_1=1;
                            break;
                        }
                        else{
                            flag_1=0;
                        }
                    }
                    if(flag_1==1){
                        alert("用户名已被注册");
                    }
                    else{
                        self.insertInfo(username,key,function(a){
                            if(a==1){
                                alert("注册成功");
                                //创建玩家数据
                                db.transaction(function(tx){
                                    //仓库
                                    tx.executeSql("create table if not exists "+username+"(id integer primary key autoincrement,idname text,src text unique,src1 text,type text)");
                                })
                                self.fun("success");
                                flag_1=0;
                                self.insertMoney(username,1000);
                            }else{}
                        })


                    }
                })
            })
        }
        else{
            alert("用户名密码不能为空");
        }

        console.log(flag_1)

    }

    this.$signbtn.click(function() {
        self.signup();
        /*db.transaction(function (tx) {
            tx.executeSql("drop table tbname")
        })*/
    })
    //返回
    this.$back.click(function(){
        self.fun("success");
    })
}
