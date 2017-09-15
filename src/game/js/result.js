/**
 * Created by TQQ on 2016/10/27.
 */
function gameresult(fun){
    this.fun=fun;
    this.$bg= $("<div></div>");
    this.$bgm=$("<div></div>");
    this.$mainBody=$("<div></div>");
    this.$first=$("<div></div>");
    this.$second=$("<div></div>");
    this.$third=$("<div></div>");
    this.$coin=$("<div></div>");
    this.$coins=$("<div></div>");
    this.$time=$("<div></div>");
    this.$time1=$("<div></div>");
    this.$player=$("<div></div>");           //玩家名次
    this.$time_1=$("<div></div>");
    this.$time1_1=$("<div></div>");
    this.$time_2=$("<div></div>");
    this.$time1_2=$("<div></div>");
    this.$restart=$("<input type='button'>");
    this.$nextstage=$("<input type='button'>");
    this.$backmenu=$("<input type='button'>");

    var pause=false;
    var self = this;

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
            'backgroundImage':"url('result/1.jpg')",
            'z-index':'-1',
            'position':'absolute',
            'background-repeat':'no-repeat',
            'background-size':'cover'
        })
        this.$mainBody.append(this.$bg);
        //重新开始
        this.$restart.css({
            'width':'263px',
            'height':'71px',
            'backgroundImage':"url('result/restart.png')",
            'position':'absolute',
            'left':'8%',
            'top':'82%',
            'border-radius':'40px'
        })
        this.$mainBody.append(this.$restart);
        //返回主菜单
        this.$backmenu.css({
            'width':'263px',
            'height':'71px',
            'backgroundImage':"url('result/backenu.png')",
            'position':'absolute',
            'left':'40%',
            'top':'82%',
            'border-radius':'40px'
        })
        this.$mainBody.append(this.$backmenu);
        //下一关
        this.$nextstage.css({
            'width':'263px',
            'height':'71px',
            'backgroundImage':"url('result/nextstage.png')",
            'position':'absolute',
            'left':'72%',
            'top':'82%',
            'border-radius':'40px'
        })
        this.$mainBody.append(this.$nextstage);
        //金币
        this.$coin.css({
            'width':'47px',
            'height':'51px',
            'backgroundImage':"url('result/2.png')",
            'position':'absolute',
            'top':'17%',
            'left':'65%'
        })
        this.$bg.append(this.$coin);
        this.$coins.css({
            'font-size':'35px',
            'font-weight':'bold',
            'color':'#fff',
            'font-family':'微软雅黑',
            'position':'absolute',
            'left':'60px',
            'top':'3px'
        })
        this.$coins.html(localStorage.coin);
        this.$coin.append(this.$coins);
        var name=localStorage.user;
        //查询金币
        /*var nowmoney=0;
        db.transaction(function(tx){
            tx.executeSql("select * from money where idname='"+name+"'",[],function(ta,result){
                money=result.rows.item(0).coin;
                console.log(money)
                nowmoney=parseInt(localStorage.coin)+money;
                localStorage.coin=0;
                console.log(nowmoney)
                self.update(nowmoney,name);
            })
        })*/
        //玩家时间
        this.$time.css({
            'width':'230px',
            'height':'68px',
            'backgroundImage':"url('play/time.png')",
            'position':'absolute'
        })
        this.$time1.css({
            'font-size':'35px',
            'font-weight':'bold',
            'font-family':'微软雅黑',
            'position':'absolute',
            'top':'30%',
            'left':'28%'
        })
        this.$player.css({
            'font-size':'26px',
            'font-weight':'bold',
            'font-family':'微软雅黑',
            'position':'absolute',
            'top':'-23px',
            'left':'100px'
        })
        this.$player.html("玩家");
        this.$time1.html(localStorage.time);
        this.$time.append(this.$time1);
        this.$time.append(this.$player);
        this.$bg.append(this.$time);


        if(localStorage.time1=="undefined"||localStorage.time2=="undefined"){
            localStorage.time1="0:39:510";
            localStorage.time2="0:43:930";
        }
        //bot1 时间
        this.$time_1.css({
            'width':'230px',
            'height':'68px',
            'backgroundImage':"url('play/time.png')",
            'position':'absolute'
        })
        this.$time1_1.css({
            'font-size':'35px',
            'font-weight':'bold',
            'font-family':'微软雅黑',
            'position':'absolute',
            'top':'30%',
            'left':'28%'
        })

        this.$time1_1.html(localStorage.time1);
        this.$time_1.append(this.$time1_1);
        this.$bg.append(this.$time_1);

        //bot2 时间
        this.$time_2.css({
            'width':'230px',
            'height':'68px',
            'backgroundImage':"url('play/time.png')",
            'position':'absolute'
        })
        this.$time1_2.css({
            'font-size':'35px',
            'font-weight':'bold',
            'font-family':'微软雅黑',
            'position':'absolute',
            'top':'30%',
            'left':'28%'
        })
        this.$time1_2.html(localStorage.time2);
        this.$time_2.append(this.$time1_2);
        this.$bg.append(this.$time_2);

        //第一名
        this.$first.css({
            'width':'128px',
            'height':'128px',
            'position':'absolute',
            'top':'53%',
            'left':'32%'
        })
        this.$bg.append(this.$first);
        //第二名
        this.$second.css({
            'width':'128px',
            'height':'128px',
            'backgroundImage':"url('img/store/equipment/cha1.png')",
            'position':'absolute',
            'top':'58%',
            'left':'16%'
        })
        this.$bg.append(this.$second);
        //第三名
        this.$third.css({
            'width':'128px',
            'height':'128px',
            'backgroundImage':"url('img/store/equipment/cha5.png')",
            'position':'absolute',
            'top':'64%',
            'left':'48%'
        })
        this.$bg.append(this.$third);
        //背景音乐
        this.$bgm.css({
            'width':'50px',
            'height':'50px',
            'backgroundImage':"url('img/1.png')",
            'position':'absolute',
            'right':'7%',
            'top':'3%'
        })
        this.$bgm.click(function(){
            if(!pause){
                $("#bgm")[0].pause();
                pause=true;
                self.$bgm.css({
                    'backgroundImage':"url('img/2.png')"
                })
            }
            else{
                $("#bgm")[0].play();
                pause=false;
                self.$bgm.css({
                    'backgroundImage':"url('img/1.png')"
                })
            }
        })
        this.$mainBody.append(this.$bgm);
    }
    this.createUI();
    //名次判断

    if(localStorage.first==1){
        this.$time.css({
            'top':'22%',
            'left':'29%'
        });
        this.$time_1.css({
            'top':'31%',
            'left':'13%'
        });

        this.$time_2.css({
            'top':'38%',
            'left':'43%'
        })
        this.$first.css({
            'backgroundImage':"url('"+localStorage.winner+"')"
        })
    }
    else if(localStorage.second==1){
        this.$time.css({
            'top':'31%',
            'left':'13%'
        });
        this.$time_1.css({
            'top':'22%',
            'left':'29%'
        });
        this.$time_2.css({
            'top':'38%',
            'left':'43%'
        });
        this.$first.css({
            'backgroundImage':"url('img/store/equipment/cha1.png')"
        })
        this.$second.css({
            'backgroundImage':"url('"+localStorage.winner+"')"
        })
    }
    else{
        this.$time.css({
            'top':'38%',
            'left':'43%'
        })
        this.$time_1.css({
            'top':'22%',
            'left':'29%'
        });
        this.$time_2.css({
            'top':'31%',
            'left':'13%'
        });
        this.$first.css({
            'backgroundImage':"url('img/store/equipment/cha1.png')"
        })
        this.$second.css({
            'backgroundImage':"url('img/store/equipment/cha5.png')"
        })
        this.$third.css({
            'backgroundImage':"url('"+localStorage.winner+"')"
        })
    }
    //重新开始
    this.$restart.click(function(){
        location.href="index.html";
    })
    //下一关
    this.$nextstage.click(function(){
        alert("暂未开放，敬请期待");
    })
    //返回主菜单
    this.$backmenu.click(function(){
        location.href="../login.html";
        localStorage.menu=1;
        localStorage.player=null;
        localStorage.motor=null;
        localStorage.wheel=null;

    })
}