/**
 * Created by TQQ on 2016/10/18.
 */
function Shop(fun){
    this.fun=fun;
    this.$bg= $("<div></div>");
    this.$bgm=$("<div></div>");
    this.$mainBody=$("<div></div>");
    this.$rside=$("<div></div>");
    this.$lside=$("<div></div>");
    this.$view=$("<div></div>");
    this.$money=$("<div></div>");
    this.$coins=$("<div></div>");
    this.$mygarage=$("<input type='button'>");
    this.$topup=$("<input type='button'>");
    this.$person=$("<div></div>");
    this.$motor=$("<div></div>");
    this.$wheel=$("<div></div>");
    this.$engine=$("<div></div>");
    this.$container=$("<div></div>");
    this.$container_view=$("<div></div>");
    this.$left=$("<input type='button'>");               //上下页
    this.$right=$("<input type='button'>");
    this.$back=$("<input type='button'>");



    var pause=false;
    var self = this;
    var player;
    var motor;
    var wheel;
    var engine;
    var money;
    var name=localStorage.user;

    //插入数据
    this.insertInfo=function(idname,src,src1,type,fun){
        db.transaction(function(tx){
            tx.executeSql("insert into "+name+" (idname,src,src1,type)values(?,?,?,?)",[idname,src,src1,type],
                function(ta,result){
                    fun(1);
                },
                function(ta,error){
                    fun(0);
                })
        })
    }
    //更新余额
    this.update=function(money,username){
        db.transaction(function(tx){
            tx.executeSql("update money set coin=? where idname=?",[money,username]);
        })
    }



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
        this.$rside.css({
            'width':'613px',
            'height':'584px',
            'backgroundImage':"url('img/store/rsidebg.png')",
            'position':'absolute',
            'left':'40%',
            'top':'8%'
        })
        this.$mainBody.append(this.$rside);
        this.$lside.css({
            'width':'291px',
            'height':'584px',
            'backgroundImage':"url('img/store/lsidebg.png')",
            'position':'absolute',
            'left':'18%',
            'top':'8%'
        })
        this.$view.css({
            'width':'257px',
            'height':'267px',
            'backgroundImage':"url('img/store/renwubg.png')",
            'position':'absolute',
            'left':'6%',
            'top':'11%'
        })
        this.$lside.append(this.$view);
        this.$money.css({
            'width':'112px',
            'height':'31px',
            'backgroundImage':"url('img/store/1_03.png')",
            'position':'absolute',
            'left':'7%',
            'top':'61%'
        })
        this.$lside.append(this.$money);

        this.$coins.css({
            'font-size':'27px',
            'font-weight':'bold',
            'font-family':'微软雅黑',
            'position':'absolute',
            'left':'55%',
            'top':'60%'
        })
        //查询金币

        db.transaction(function(tx){
            var name=localStorage.user;
            if(name!=undefined){
                tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                    self.$coins.html(result.rows.item(0).coin);
                })
            }
        })

        this.$lside.append(this.$coins);
        this.$mygarage.css({
            'width':'233px',
            'height':'65px',
            'backgroundImage':"url('img/store/carport.jpg')",
            'position':'absolute',
            'left':'10%',
            'top':'71%',
            'border-radius':'35px'
        })
        this.$lside.append(this.$mygarage);
        this.$topup.css({
            'width':'233px',
            'height':'65px',
            'backgroundImage':"url('img/store/chongzhi.jpg')",
            'position':'absolute',
            'left':'10%',
            'top':'85%',
            'border-radius':'35px'
        })
        this.$lside.append(this.$topup);
        this.$mainBody.append(this.$lside);
        this.$person.css({
            'width':'126px',
            'height':'104px',
            'backgroundImage':"url('img/store/10.png')",
            'position':'absolute',
            'left':'3px',
            'top':'12%'
        })
        this.$rside.append(this.$person);
        this.$motor.css({
            'width':'91px',
            'height':'81px',
            'backgroundImage':"url('img/store/moto0.png')",
            'position':'absolute',
            'left':'3%',
            'top':'35%'
        })
        this.$rside.append(this.$motor);
        this.$wheel.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/lunzi0.png')",
            'position':'absolute',
            'left':'6%',
            'top':'57%'
        })
        this.$rside.append(this.$wheel);
        this.$wheel.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/lunzi0.png')",
            'position':'absolute',
            'left':'6%',
            'top':'57%'
        })
        this.$rside.append(this.$wheel);
        this.$engine.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/yinqing.png')",
            'position':'absolute',
            'left':'6%',
            'top':'79%'
        })
        this.$rside.append(this.$engine);
        this.$container.css({
            'width':'468px',
            'height':'450px',
            'position':'absolute'
        })

        db.transaction(function(tx){
            //默认生成人物
            tx.executeSql("select * from shop where type ='person'",[],function(ta,result){
                //查询数据库
                for(var i=0;i<result.rows.length;i++){
                    self.$div=$("<div></div>");
                    self.$div.css({
                        'width':'140px',
                        'height':'204px',
                        'backgroundImage':"url('img/store/woodbg.png')",
                        'float':'left',
                        'margin-left':'13px',
                        'position':'relative',
                        'margin-top':'15px'
                    })
                    self.$img=$("<div></div>");
                    self.$img.css({
                        'width':'114px',
                        'height':'88px',
                        'backgroundImage':"url('"+result.rows.item(i).src+"')",
                        'position':'absolute',
                        'top':'15%',
                        'left':'8%'
                    })
                    self.$div.append(self.$img);
                    self.$coin=$("<div></div>");
                    self.$coin.css({
                        'width':'32px',
                        'height':'33px',
                        'backgroundImage':"url('img/store/coins.png')",
                        'position':'absolute',
                        'top':'60%',
                        'left':'15%'
                    })
                    self.$div.append(self.$coin);
                    self.$coin_amount=$("<div></div>");
                    self.$coin_amount.css({
                        'width':'32px',
                        'height':'33px',
                        'position':'absolute',
                        'top':'60%',
                        'left':'40%',
                        'font-size':'27px',
                        'font-weight':'bold',
                        'font-family':'微软雅黑'
                    })
                    self.$coin_amount.html(result.rows.item(i).price);
                    self.$div.append(self.$coin_amount);
                    self.$buy=$("<input name='"+i+"' type='button'>");
                    self.$buy.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/buybtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'2%'
                    })
                    self.$div.append(self.$buy);

                    //购买

                    self.$buy.click(function(){
                        var bought_shop=result.rows.item(this.name).src;
                        var bought_view=result.rows.item(this.name).src1;
                        var type=result.rows.item(this.name).type;
                        var name=localStorage.user;
                        var self1=this;
                        //查询金币
                        db.transaction(function(tx){
                            tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                                money=result.rows.item(0).coin;
                                tx.executeSql("select * from shop where type ='person'",[],function(ta,result){
                                    //对比余额
                                    console.log(money)
                                    if(money-result.rows.item(self1.name).price>=0){
                                        var nowmoney=money-result.rows.item(self1.name).price;
                                        self.insertInfo(name,bought_shop,bought_view,type,function(a){
                                            if(a==1){
                                                alert("购买成功");
                                                //更新余额
                                                self.update(nowmoney,name);
                                                self.$coins.html(nowmoney);
                                            }else{
                                                alert("已经购买");
                                            }
                                        })
                                    }
                                    else{
                                        alert("余额不足请充值");
                                    }
                                })
                            })
                        })
                    })
                    self.$look=$("<input name='"+i+"' type='button'>");
                    self.$look.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/lookbtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'49%'
                    })
                    self.$div.append(self.$look);
                    self.$container.append(self.$div);


                    self.$look.click(function(){
                        self.$view.empty();
                        self.$man=$("<div></div>");
                        self.$man.css({
                            'width':'72px',
                            'height':'92px',
                            'position':'absolute',
                            'backgroundImage':"url('"+result.rows.item(this.name).src1+"')",
                            'top':'20%',
                            'left':'39%',
                            'z-index':'100'
                        })
                        self.$view.append(self.$man);
                        self.$motor1=$("<div></div>");
                        self.$motor1.css({
                            'width':'120px',
                            'height':'43px',
                            'position':'absolute',
                            'backgroundImage':"url('"+motor+"')",
                            'top':'43%',
                            'left':'26%',
                            'z-index':'10'
                        })
                        self.$view.append(self.$motor1);
                        self.$wheel_1=$("<div></div>");
                        self.$wheel_1.css({
                            'width':'110px',
                            'height':'39px',
                            'position':'absolute',
                            'backgroundImage':"url('"+wheel+"')",
                            'top':'50%',
                            'left':'30%'
                        })
                        self.$view.append(self.$wheel_1);
                        self.$engine1=$("<div></div>");
                        self.$engine1.css({
                            'width':'76px',
                            'height':'80px',
                            'position':'absolute',
                            'backgroundImage':"url('"+engine+"')",
                            'bottom':'0%',
                            'left':'0%'
                        })
                        self.$view.append(self.$engine1);
                        player=result.rows.item(this.name).src1;
                    })
                }
            })


        })
        this.$container_view.css({
            'width':'468px',
            'height':'450px',
            'position':'absolute',
            'left':'21%',
            'top':'11%',
            'overflow':'hidden'
        })
        this.$container_view.append(this.$container);
        this.$rside.append(this.$container_view);
        this.$left.css({
            'width':'46px',
            'height':'48px',
            'backgroundImage':"url('img/store/anniuzuo.png')",
            'border-radius':'65px',
            'position':'absolute',
            'bottom':'4%',
            'left':'51%'
        })
        this.$rside.append(this.$left);
        this.$right.css({
            'width':'46px',
            'height':'48px',
            'backgroundImage':"url('img/store/anniuyou.png')",
            'border-radius':'65px',
            'position':'absolute',
            'bottom':'4%',
            'left':'61%'
        })
        this.$rside.append(this.$right);
    }
    this.createUI();


    //返回
    this.$back.click(function(){
        //查询金币
        db.transaction(function(tx){
            var name=localStorage.user;
            if(name!=undefined){
                tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                    localStorage.coin=result.rows.item(0).coin;
                })
            }
        })
        self.fun("menu");
    })

    //切换装备



    //人物
    this.$person.click(function(){
        self.$container.css({
            'top': '0px'
        })
        top=0;
        //上下页
        self.$right.unbind();
        self.$left.unbind();
        self.$right.click(function(){
            if(top==-438){
                alert("已是最后一页");
            }
            else{
                top-=438;
                self.$container.css({
                    'top': top+'px'
                })
            }
        })
        self.$left.click(function(){
            if(top==0){
                alert("已是第一页");
            }
            else{
                top+=438;
                self.$container.css({
                    'top': top+'px'
                })
            }
        })

        //按钮样式
        self.$person.css({
            'width':'126px',
            'height':'104px',
            'backgroundImage':"url('img/store/10.png')",
            'position':'absolute',
            'left':'3px',
            'top':'12%'
        })

        self.$motor.css({
            'width':'91px',
            'height':'81px',
            'backgroundImage':"url('img/store/moto0.png')",
            'position':'absolute',
            'left':'3%',
            'top':'35%'
        })
        self.$wheel.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/lunzi0.png')",
            'position':'absolute',
            'left':'6%',
            'top':'57%'
        })
        self.$engine.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/yinqing.png')",
            'position':'absolute',
            'left':'6%',
            'top':'79%'
        })


        //生成装备
        self.$container.empty();
        db.transaction(function(tx){
            //人物
            tx.executeSql("select * from shop where type ='person'",[],function(ta,result){
                //查询数据库�
                for(var i=0;i<result.rows.length;i++){
                    self.$div=$("<div></div>");
                    self.$div.css({
                        'width':'140px',
                        'height':'204px',
                        'backgroundImage':"url('img/store/woodbg.png')",
                        'float':'left',
                        'margin-left':'13px',
                        'position':'relative',
                        'margin-top':'15px'
                    })
                    self.$img=$("<div></div>");
                    self.$img.css({
                        'width':'114px',
                        'height':'88px',
                        'backgroundImage':"url('"+result.rows.item(i).src+"')",
                        'position':'absolute',
                        'top':'15%',
                        'left':'8%'
                    })
                    self.$div.append(self.$img);
                    self.$coin=$("<div></div>");
                    self.$coin.css({
                        'width':'32px',
                        'height':'33px',
                        'backgroundImage':"url('img/store/coins.png')",
                        'position':'absolute',
                        'top':'60%',
                        'left':'15%'
                    })
                    self.$div.append(self.$coin);
                    self.$coin_amount=$("<div></div>");
                    self.$coin_amount.css({
                        'width':'32px',
                        'height':'33px',
                        'position':'absolute',
                        'top':'60%',
                        'left':'40%',
                        'font-size':'27px',
                        'font-weight':'bold',
                        'font-family':'微软雅黑'
                    })
                    self.$coin_amount.html(result.rows.item(i).price);
                    self.$div.append(self.$coin_amount);
                    self.$buy=$("<input name='"+i+"' type='button'>");
                    self.$buy.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/buybtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'2%'
                    })
                    self.$div.append(self.$buy);
                    //购买
                    self.$buy.click(function(){
                        var bought_shop=result.rows.item(this.name).src;
                        var bought_view=result.rows.item(this.name).src1;
                        var type=result.rows.item(this.name).type;
                        var name=localStorage.user;
                        var self1=this;
                        //查询金币
                        db.transaction(function(tx){
                            tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                                money=result.rows.item(0).coin;
                                tx.executeSql("select * from shop where type ='person'",[],function(ta,result){
                                    //对比余额
                                    console.log(money)
                                    if(money-result.rows.item(self1.name).price>=0){
                                        var nowmoney=money-result.rows.item(self1.name).price;
                                        self.insertInfo(name,bought_shop,bought_view,type,function(a){
                                            if(a==1){
                                                alert("购买成功");
                                                //更新余额
                                                self.update(nowmoney,name);
                                                self.$coins.html(nowmoney);
                                            }else{
                                                alert("已经购买");
                                            }
                                        })
                                    }
                                    else{
                                        alert("余额不足请充值");
                                    }
                                })
                            })
                        })
                    })


                    self.$look=$("<input name='"+i+"' type='button'>");
                    self.$look.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/lookbtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'49%'
                    })
                    self.$div.append(self.$look);
                    self.$container.append(self.$div);


                    self.$look.click(function(){
                        self.$view.empty();
                        self.$man=$("<div></div>");
                        self.$man.css({
                            'width':'72px',
                            'height':'92px',
                            'position':'absolute',
                            'backgroundImage':"url('"+result.rows.item(this.name).src1+"')",
                            'top':'20%',
                            'left':'39%',
                            'z-index':'100'
                        })
                        self.$view.append(self.$man);
                        self.$motor1=$("<div></div>");
                        self.$motor1.css({
                            'width':'120px',
                            'height':'43px',
                            'position':'absolute',
                            'backgroundImage':"url('"+motor+"')",
                            'top':'43%',
                            'left':'26%',
                            'z-index':'10'
                        })
                        self.$view.append(self.$motor1);
                        self.$wheel_1=$("<div></div>");
                        self.$wheel_1.css({
                            'width':'110px',
                            'height':'39px',
                            'position':'absolute',
                            'backgroundImage':"url('"+wheel+"')",
                            'top':'50%',
                            'left':'30%'
                        })
                        self.$view.append(self.$wheel_1);
                        self.$engine1=$("<div></div>");
                        self.$engine1.css({
                            'width':'76px',
                            'height':'80px',
                            'position':'absolute',
                            'backgroundImage':"url('"+engine+"')",
                            'bottom':'0%',
                            'left':'0%'
                        })
                        self.$view.append(self.$engine1);
                        player=result.rows.item(this.name).src1;
                    })
                }
            })
        })

    })
    // 摩托
    this.$motor.click(function(){
        self.$container.css({
            'top': '0px'
        })
        top=0;
        //上下页
        self.$right.unbind();
        self.$left.unbind();
        self.$right.click(function(){
            alert("已是最后一页");
        })
        self.$left.click(function(){
            alert("已是第一页");
        })
        self.$motor.css({
            'width':'126px',
            'height':'104px',
            'backgroundImage':"url('img/store/11.png')",
            'position':'absolute',
            'left':'3px',
            'top':'35%'
        })
        self.$person.css({
            'width':'72px',
            'height':'86px',
            'backgroundImage':"url('img/store/person0.png')",
            'position':'absolute',
            'left':'5%',
            'top':'12%'
        })
        self.$wheel.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/lunzi0.png')",
            'position':'absolute',
            'left':'6%',
            'top':'57%'
        })
        self.$engine.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/yinqing.png')",
            'position':'absolute',
            'left':'6%',
            'top':'79%'
        })


        //生成装备
        self.$container.empty();
        db.transaction(function(tx){
            tx.executeSql("select * from shop where type ='motor'",[],function(ta,result){

                for(var i=0;i<result.rows.length;i++){
                    self.$div=$("<div></div>");
                    self.$div.css({
                        'width':'140px',
                        'height':'204px',
                        'backgroundImage':"url('img/store/woodbg.png')",
                        'float':'left',
                        'margin-left':'13px',
                        'position':'relative',
                        'margin-top':'15px'
                    })
                    self.$img=$("<div></div>");
                    self.$img.css({
                        'width':'114px',
                        'height':'88px',
                        'backgroundImage':"url('"+result.rows.item(i).src+"')",
                        'position':'absolute',
                        'top':'15%',
                        'left':'8%'
                    })
                    self.$div.append(self.$img);
                    self.$coin=$("<div></div>");
                    self.$coin.css({
                        'width':'32px',
                        'height':'33px',
                        'backgroundImage':"url('img/store/coins.png')",
                        'position':'absolute',
                        'top':'60%',
                        'left':'15%'
                    })
                    self.$div.append(self.$coin);
                    self.$coin_amount=$("<div></div>");
                    self.$coin_amount.css({
                        'width':'32px',
                        'height':'33px',
                        'position':'absolute',
                        'top':'60%',
                        'left':'40%',
                        'font-size':'27px',
                        'font-weight':'bold',
                        'font-family':'微软雅黑'
                    })
                    self.$coin_amount.html(result.rows.item(i).price);
                    self.$div.append(self.$coin_amount);
                    self.$buy=$("<input name='"+i+"' type='button'>");
                    self.$buy.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/buybtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'2%'
                    })
                    self.$div.append(self.$buy);

                    //购买
                    self.$buy.click(function(){
                        var bought_shop=result.rows.item(this.name).src;
                        var bought_view=result.rows.item(this.name).src1;
                        var type=result.rows.item(this.name).type;
                        var name=localStorage.user;
                        var self1=this;
                        //查询金币
                        db.transaction(function(tx){
                            tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                                money=result.rows.item(0).coin;
                                tx.executeSql("select * from shop where type ='person'",[],function(ta,result){
                                    //对比余额
                                    console.log(money)
                                    if(money-result.rows.item(self1.name).price>=0){
                                        var nowmoney=money-result.rows.item(self1.name).price;
                                        self.insertInfo(name,bought_shop,bought_view,type,function(a){
                                            if(a==1){
                                                alert("购买成功");
                                                //更新余额
                                                self.update(nowmoney,name);
                                                self.$coins.html(nowmoney);
                                            }else{
                                                alert("已经购买");
                                            }
                                        })
                                    }
                                    else{
                                        alert("余额不足请充值");
                                    }
                                })
                            })
                        })
                    })

                    self.$look=$("<input name='"+i+"' type='button'>");
                    self.$look.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/lookbtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'49%'
                    })
                    self.$div.append(self.$look);
                    self.$container.append(self.$div);

                    self.$look.click(function(){
                        self.$view.empty();
                        self.$man=$("<div></div>");
                        self.$man.css({
                            'width':'72px',
                            'height':'92px',
                            'position':'absolute',
                            'backgroundImage':"url('"+player+"')",
                            'top':'20%',
                            'left':'39%',
                            'z-index':'100'
                        })
                        self.$view.append(self.$man);
                        self.$motor1=$("<div></div>");
                        self.$motor1.css({
                            'width':'120px',
                            'height':'43px',
                            'position':'absolute',
                            'backgroundImage':"url('"+result.rows.item(this.name).src1+"')",
                            'top':'43%',
                            'left':'26%',
                            'z-index':'10'
                        })
                        self.$view.append(self.$motor1);
                        self.$wheel_1=$("<div></div>");
                        self.$wheel_1.css({
                            'width':'110px',
                            'height':'39px',
                            'position':'absolute',
                            'backgroundImage':"url('"+wheel+"')",
                            'top':'50%',
                            'left':'30%'
                        })
                        self.$view.append(self.$wheel_1);
                        self.$engine1=$("<div></div>");
                        self.$engine1.css({
                            'width':'76px',
                            'height':'80px',
                            'position':'absolute',
                            'backgroundImage':"url('"+engine+"')",
                            'bottom':'0%',
                            'left':'0%'
                        })
                        self.$view.append(self.$engine1);
                        motor=result.rows.item(this.name).src1;
                    })
                }
            })
        })
    })
    //轮子
    this.$wheel.click(function(){
        self.$container.css({
            'top': '0px'
        })
        top=0;
        //上下页
        self.$right.unbind();
        self.$left.unbind();
        self.$right.click(function(){
            alert("已是最后一页");
        })
        self.$left.click(function(){
            alert("已是第一页");
        })
        self.$wheel.css({
            'width':'126px',
            'height':'104px',
            'backgroundImage':"url('img/store/12.png')",
            'position':'absolute',
            'left':'3px',
            'top':'57%'
        })
        self.$person.css({
            'width':'72px',
            'height':'86px',
            'backgroundImage':"url('img/store/person0.png')",
            'position':'absolute',
            'left':'5%',
            'top':'12%'
        })
        self.$motor.css({
            'width':'91px',
            'height':'81px',
            'backgroundImage':"url('img/store/moto0.png')",
            'position':'absolute',
            'left':'3%',
            'top':'35%'
        })
        self.$engine.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/yinqing.png')",
            'position':'absolute',
            'left':'6%',
            'top':'79%'
        })


        //生成装备
        self.$container.empty();
        db.transaction(function(tx){
            tx.executeSql("select * from shop where type ='wheel'",[],function(ta,result){

                for(var i=0;i<result.rows.length;i++){
                    self.$div=$("<div></div>");
                    self.$div.css({
                        'width':'140px',
                        'height':'204px',
                        'backgroundImage':"url('img/store/woodbg.png')",
                        'float':'left',
                        'margin-left':'13px',
                        'position':'relative',
                        'margin-top':'15px'
                    })
                    self.$img=$("<div></div>");
                    self.$img.css({
                        'width':'114px',
                        'height':'88px',
                        'backgroundImage':"url('"+result.rows.item(i).src+"')",
                        'position':'absolute',
                        'top':'15%',
                        'left':'8%'
                    })
                    self.$div.append(self.$img);
                    self.$coin=$("<div></div>");
                    self.$coin.css({
                        'width':'32px',
                        'height':'33px',
                        'backgroundImage':"url('img/store/coins.png')",
                        'position':'absolute',
                        'top':'60%',
                        'left':'15%'
                    })
                    self.$div.append(self.$coin);
                    self.$coin_amount=$("<div></div>");
                    self.$coin_amount.css({
                        'width':'32px',
                        'height':'33px',
                        'position':'absolute',
                        'top':'60%',
                        'left':'40%',
                        'font-size':'27px',
                        'font-weight':'bold',
                        'font-family':'微软雅黑'
                    })
                    self.$coin_amount.html(result.rows.item(i).price);
                    self.$div.append(self.$coin_amount);
                    self.$buy=$("<input name='"+i+"' type='button'>");
                    self.$buy.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/buybtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'2%'
                    })
                    self.$div.append(self.$buy);

                    //购买
                    self.$buy.click(function(){
                        var bought_shop=result.rows.item(this.name).src;
                        var bought_view=result.rows.item(this.name).src1;
                        var type=result.rows.item(this.name).type;
                        var name=localStorage.user;
                        var self1=this;
                        //查询金币
                        db.transaction(function(tx){
                            tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                                money=result.rows.item(0).coin;
                                tx.executeSql("select * from shop where type ='person'",[],function(ta,result){
                                    //对比余额
                                    console.log(money)
                                    if(money-result.rows.item(self1.name).price>=0){
                                        var nowmoney=money-result.rows.item(self1.name).price;
                                        self.insertInfo(name,bought_shop,bought_view,type,function(a){
                                            if(a==1){
                                                alert("购买成功");
                                                //更新余额
                                                self.update(nowmoney,name);
                                                self.$coins.html(nowmoney);
                                            }else{
                                                alert("已经购买");
                                            }
                                        })
                                    }
                                    else{
                                        alert("余额不足请充值");
                                    }
                                })
                            })
                        })
                    })
                    self.$look=$("<input name='"+i+"' type='button'>");
                    self.$look.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/lookbtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'49%'
                    })
                    self.$div.append(self.$look);
                    self.$container.append(self.$div);

                    self.$look.click(function(){
                        self.$view.empty();
                        self.$wheel_1=$("<div></div>");
                        self.$wheel_1.css({
                            'width':'110px',
                            'height':'39px',
                            'position':'absolute',
                            'backgroundImage':"url('"+result.rows.item(this.name).src1+"')",
                            'top':'50%',
                            'left':'30%'
                        })
                        self.$view.append(self.$wheel_1);
                        self.$man=$("<div></div>");
                        self.$man.css({
                            'width':'72px',
                            'height':'92px',
                            'position':'absolute',
                            'backgroundImage':"url('"+player+"')",
                            'top':'20%',
                            'left':'39%',
                            'z-index':'100'
                        })
                        self.$view.append(self.$man);
                        self.$motor1=$("<div></div>");
                        self.$motor1.css({
                            'width':'120px',
                            'height':'43px',
                            'position':'absolute',
                            'backgroundImage':"url('"+motor+"')",
                            'top':'43%',
                            'left':'26%',
                            'z-index':'10'
                        })
                        self.$view.append(self.$motor1);
                        self.$engine1=$("<div></div>");
                        self.$engine1.css({
                            'width':'76px',
                            'height':'80px',
                            'position':'absolute',
                            'backgroundImage':"url('"+engine+"')",
                            'bottom':'0%',
                            'left':'0%'
                        })
                        self.$view.append(self.$engine1);
                        wheel=result.rows.item(this.name).src1;
                    })
                }
            })
        })
    })
    //引擎
    this.$engine.click(function(){
        self.$container.css({
            'top': '0px'
        })
        top=0;
        //上下页
        self.$right.unbind();
        self.$left.unbind();
        self.$right.click(function(){
            alert("已是最后一页");
        })
        self.$left.click(function(){
            alert("已是第一页");
        })
        self.$engine.css({
            'width':'126px',
            'height':'104px',
            'backgroundImage':"url('img/store/13.png')",
            'position':'absolute',
            'left':'3px',
            'top':'79%'
        })
        self.$person.css({
            'width':'72px',
            'height':'86px',
            'backgroundImage':"url('img/store/person0.png')",
            'position':'absolute',
            'left':'5%',
            'top':'12%'
        })
        self.$motor.css({
            'width':'91px',
            'height':'81px',
            'backgroundImage':"url('img/store/moto0.png')",
            'position':'absolute',
            'left':'3%',
            'top':'35%'
        })
        self.$wheel.css({
            'width':'59px',
            'height':'87px',
            'backgroundImage':"url('img/store/lunzi0.png')",
            'position':'absolute',
            'left':'6%',
            'top':'57%'
        })


        //生成装备
        self.$container.empty();
        db.transaction(function(tx){
            tx.executeSql("select * from shop where type ='engine'",[],function(ta,result){

                for(var i=0;i<result.rows.length;i++){
                    self.$div=$("<div></div>");
                    self.$div.css({
                        'width':'140px',
                        'height':'204px',
                        'backgroundImage':"url('img/store/woodbg.png')",
                        'float':'left',
                        'margin-left':'13px',
                        'position':'relative',
                        'margin-top':'15px'
                    })
                    self.$img=$("<div></div>");
                    self.$img.css({
                        'width':'76px',
                        'height':'80px',
                        'backgroundImage':"url('"+result.rows.item(i).src+"')",
                        'position':'absolute',
                        'top':'15%',
                        'left':'22%'
                    })
                    self.$div.append(self.$img);
                    self.$coin=$("<div></div>");
                    self.$coin.css({
                        'width':'32px',
                        'height':'33px',
                        'backgroundImage':"url('img/store/coins.png')",
                        'position':'absolute',
                        'top':'60%',
                        'left':'15%'
                    })
                    self.$div.append(self.$coin);
                    self.$coin_amount=$("<div></div>");
                    self.$coin_amount.css({
                        'width':'32px',
                        'height':'33px',
                        'position':'absolute',
                        'top':'60%',
                        'left':'40%',
                        'font-size':'27px',
                        'font-weight':'bold',
                        'font-family':'微软雅黑'
                    })
                    self.$coin_amount.html(result.rows.item(i).price);
                    self.$div.append(self.$coin_amount);
                    self.$buy=$("<input name='"+i+"' type='button'>");
                    self.$buy.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/buybtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'2%'
                    })
                    self.$div.append(self.$buy);

                    //购买
                    self.$buy.click(function(){
                        var bought_shop=result.rows.item(this.name).src;
                        var bought_view=result.rows.item(this.name).src1;
                        var type=result.rows.item(this.name).type;
                        var name=localStorage.user;
                        var self1=this;
                        //查询金币
                        db.transaction(function(tx){
                            tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                                money=result.rows.item(0).coin;
                                tx.executeSql("select * from shop where type ='person'",[],function(ta,result){
                                    //对比余额
                                    console.log(money)
                                    if(money-result.rows.item(self1.name).price>=0){
                                        var nowmoney=money-result.rows.item(self1.name).price;
                                        self.insertInfo(name,bought_shop,bought_view,type,function(a){
                                            if(a==1){
                                                alert("购买成功");
                                                //更新余额
                                                self.update(nowmoney,name);
                                                self.$coins.html(nowmoney);
                                            }else{
                                                alert("已经购买");
                                            }
                                        })
                                    }
                                    else{
                                        alert("余额不足请充值");
                                    }
                                })
                            })
                        })
                    })
                    self.$look=$("<input name='"+i+"' type='button'>");
                    self.$look.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/lookbtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'5%',
                        'left':'49%'
                    })
                    self.$div.append(self.$look);
                    self.$container.append(self.$div);

                    self.$look.click(function(){
                        self.$view.empty();
                        self.$engine1=$("<div></div>");
                        self.$engine1.css({
                            'width':'76px',
                            'height':'80px',
                            'position':'absolute',
                            'backgroundImage':"url('"+result.rows.item(this.name).src+"')",
                            'bottom':'0%',
                            'left':'0%'
                        })
                        self.$view.append(self.$engine1);
                        self.$man=$("<div></div>");
                        self.$man.css({
                            'width':'72px',
                            'height':'92px',
                            'position':'absolute',
                            'backgroundImage':"url('"+player+"')",
                            'top':'20%',
                            'left':'39%',
                            'z-index':'100'
                        })
                        self.$view.append(self.$man);
                        self.$motor1=$("<div></div>");
                        self.$motor1.css({
                            'width':'120px',
                            'height':'43px',
                            'position':'absolute',
                            'backgroundImage':"url('"+motor+"')",
                            'top':'43%',
                            'left':'26%',
                            'z-index':'10'
                        })
                        self.$view.append(self.$motor1);
                        self.$wheel_1=$("<div></div>");
                        self.$wheel_1.css({
                            'width':'110px',
                            'height':'39px',
                            'position':'absolute',
                            'backgroundImage':"url('"+wheel+"')",
                            'top':'50%',
                            'left':'30%'
                        })
                        self.$view.append(self.$wheel_1);
                        engine=result.rows.item(this.name).src;
                    })
                }
            })
        })
    })


    var top=0;

    //上下页
    this.$right.click(function(){
        if(top==-438){
            alert("已是最后一页");
        }
        else{
            top-=438;
            self.$container.css({
                'top': top+'px'
            })
        }
    })
    this.$left.click(function(){
        if(top==0){
            alert("已是第一页");
        }
        else{
            top+=438;
            self.$container.css({
                'top': top+'px'
            })
        }
    })

    //充值
    this.$topup_div1=$("<div id='out'></div>");
    this.$topup_div2=$("<div id='in'></div>");
    this.$close=$("<input type='button' value='关闭'>");
    this.$topupinput=$("<input type='text' placeholder='请输入金额'>");
    this.$topupbtn=$("<input type='button' value='确定'>");
    this.$topup_div1.css({
        'width': '100%',
        'height': '100%',
        'background': 'rgba(123,123,123,0.5)',
        'position': 'fixed',
        'display': 'none'
    })
    this.$topup_div2.css({
        'width':'300px',
        'height':'300px',
        'background':'greenyellow',
        'left': '45%',
        'position': 'absolute'
    })
    this.$topupinput.css({
        'font-size':'25px',
        'width':'200px',
        'height':'40px',
        'position': 'absolute',
        'top':'30%',
        'left':'18%'
    })
    this.$close.css({
        'position': 'absolute',
        'right':'0',
        'top':'0'
    })
    this.$topupbtn.css({
        'position': 'absolute',
        'right':'40%',
        'top':'70%'
    })
    this.$topup_div2.append(this.$topupbtn);
    this.$topup_div2.append(this.$topupinput);
    this.$topup_div2.append(this.$close);
    this.$topup_div1.append(this.$topup_div2);
    this.$mainBody.append(this.$topup_div1);

    this.$topupbtn.click(function(){

        //查询金币
        db.transaction(function(tx){
            tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                var money1=self.$topupinput.val();
                money=result.rows.item(0).coin;
                var nowmoney;
                nowmoney=parseInt(money1)+money;
                alert("充值成功");
                self.update(nowmoney,name);
                self.$coins.html(nowmoney);
            })
        })
    })
    this.$topup.click(function(){
        $("#out").fadeIn("slow");
        $("#in").animate({top:'35%'},1000)
    })
    this.$close.click(function(){
        $("#out").fadeOut("slow");
        $("#in").animate({top:'0%'},1000);
    })


    //我的车库
    this.$mygarage.click(function(){
        self.fun("garage");
    })
}