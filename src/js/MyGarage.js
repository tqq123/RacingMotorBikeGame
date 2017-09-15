/**
 * Created by casillas on 2016/10/21.
 */
function MyGarage(fun){
    this.fun=fun;
    this.$bg= $("<div></div>");
    this.$bgm=$("<div></div>");
    this.$mainBody=$("<div></div>");
    this.$rside=$("<div></div>");
    this.$lside=$("<div></div>");
    this.$view=$("<div></div>");
    this.$username=$("<div></div>");
    this.$speed=$("<div>速度：40</div>");
    this.$acceleration=$("<div>加速度：20</div>");
    this.$container=$("<div></div>");
    this.$container_view=$("<div></div>");
    this.$left=$("<input type='button'>");               //上下页�
    this.$right=$("<input type='button'>");
    this.$back=$("<input type='button'>");

    var pause=false;
    var self = this;
    var player;
    var motor;
    var wheel;
    var engine;
    var top=0;
    var page=0;
    var name=localStorage.user;      //用户名

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
            'backgroundImage':"url('img/Warehouse/rsidebg.png')",
            'position':'absolute',
            'left':'40%',
            'top':'8%'
        })
        this.$mainBody.append(this.$rside);
        this.$lside.css({
            'width':'291px',
            'height':'584px',
            'backgroundImage':"url('img/Warehouse/lsidebg.png')",
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
        this.$username.css({
            'font-size':'25px',
            'font-weight':'bold',
            'font-family':'微软雅黑',
            'position':'absolute',
            'left':'34%',
            'top':'61%'
        })
        this.$username.html(name);
        this.$speed.css({
            'font-size':'35px',
            'font-weight':'bold',
            'font-family':'微软雅黑',
            'position':'absolute',
            'left':'24%',
            'top':'71%'
        })
        this.$lside.append(this.$speed);
        this.$acceleration.css({
            'font-size':'35px',
            'font-weight':'bold',
            'font-family':'微软雅黑',
            'position':'absolute',
            'left':'24%',
            'top':'81%'
        })
        this.$lside.append(this.$acceleration);
        this.$lside.append(this.$username);
        this.$mainBody.append(this.$lside);

        this.$container.css({
            'width':'468px',
            'height':'450px',
            'position':'absolute'
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


        db.transaction(function(tx){
            //查询数据库
            tx.executeSql("select * from "+name+"",[],function(ta,result){
                //输出用户已购买装备�
                page=result.rows.length;
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




                    self.$look=$("<input name='"+i+"' type='button'>");
                    self.$look.css({
                        'width':'64px',
                        'height':'31px',
                        'backgroundImage':"url('img/store/lookbtn.png')",
                        'border-radius':'45px',
                        'position':'absolute',
                        'bottom':'12%',
                        'left':'26%'
                    })
                    self.$div.append(self.$look);
                    self.$container.append(self.$div);


                    self.$look.click(function(){
                        self.$view.empty();
                        //人物
                        if(result.rows.item(this.name).type=="person"){
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
                            localStorage.player=player;
                            if(player=="img/store/equipment/Biker01-1.png"){
                                localStorage.winner="img/store/equipment/cha1.png";
                            }
                            else if(player=="img/store/equipment/Biker02-1.png"){
                                localStorage.winner="img/store/equipment/cha2.png";
                            }
                            else if(player=="img/store/equipment/Biker03-1.png"){
                                localStorage.winner="img/store/equipment/cha3.png";
                            }
                            else if(player=="img/store/equipment/Biker04-1.png"){
                                localStorage.winner="img/store/equipment/cha4.png";
                            }
                            else if(player=="img/store/equipment/Biker05-1.png"){
                                localStorage.winner="img/store/equipment/cha5.png";
                            }
                            else if(player=="img/store/equipment/Biker06-1.png"){
                                localStorage.winner="img/store/equipment/cha6.png";
                            }
                            else if(player=="img/store/equipment/Biker07-1.png"){
                                localStorage.winner="img/store/equipment/cha7.png";
                            }
                            else if(player=="img/store/equipment/Biker08-1.png"){
                                localStorage.winner="img/store/equipment/cha8.png";
                            }
                        }
                        //摩托
                        if(result.rows.item(this.name).type=="motor"){
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
                            localStorage.motor=motor;
                        }
                        //轮子
                        if(result.rows.item(this.name).type=="wheel"){
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
                            localStorage.wheel=wheel;
                        }
                        //引擎
                        if(result.rows.item(this.name).type=="engine"){
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
                        }
                    })
                }
            })


        })
    }
    this.createUI();


    //返回
    this.$back.click(function(){
        self.fun("shop");
    })

    //上下页

    this.$right.click(function(){
        var page1=Math.floor(page/6);
        if(page%6==0&&top==-438*(page1-1)){
            alert("已是第一页");
        }
        else if(top==-438*page1){
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
}