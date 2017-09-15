/**
 * Created by casillas on 2016/10/17.
 */
var db;
if(window.openDatabase){
    db=openDatabase("userdata",1.0,"fuck",1024*1024,function(){});
}
else{
    alert("不支持");
}
function creatTable(){
    db.transaction(function(tx){
        //登录注册
        tx.executeSql("create table if not exists tbname(id integer primary key autoincrement,name text,key text)");
        //商店
        tx.executeSql("create table if not exists shop(id integer primary key autoincrement,type text,name text unique,price integer,src text,src1 text)");

        //金币
        tx.executeSql("create table if not exists money(id integer primary key autoincrement,idname text,coin integer)");
    })
}

//插入数据
function insertInfo(type,name,price,src,src1){
    db.transaction(function(tx){
        tx.executeSql("insert into shop(type,name,price,src,src1)values(?,?,?,?,?)",[type,name,price,src,src1],
            function(ta,result){

            }),
            function(ta,error){

            }
    })
}
creatTable();
//人物
insertInfo("person","player1","200","img/store/equipment/c1s.png","img/store/equipment/Biker01-1.png");
insertInfo("person","player2","300","img/store/equipment/c2s.png","img/store/equipment/Biker02-1.png");
insertInfo("person","player3","400","img/store/equipment/c3s.png","img/store/equipment/Biker03-1.png");
insertInfo("person","player4","500","img/store/equipment/c4s.png","img/store/equipment/Biker04-1.png");
insertInfo("person","player5","600","img/store/equipment/c5s.png","img/store/equipment/Biker05-1.png");
insertInfo("person","player6","700","img/store/equipment/c6s.png","img/store/equipment/Biker06-1.png");
insertInfo("person","player7","800","img/store/equipment/c7s.png","img/store/equipment/Biker07-1.png");
insertInfo("person","player8","900","img/store/equipment/c8s.png","img/store/equipment/Biker08-1.png");
//摩托
insertInfo("motor","motor1","200","img/store/equipment/m1s.png","img/store/equipment/m1.png");
insertInfo("motor","motor2","300","img/store/equipment/m2s.png","img/store/equipment/m2.png");
insertInfo("motor","motor3","400","img/store/equipment/m3s.png","img/store/equipment/m3.png");
insertInfo("motor","motor4","500","img/store/equipment/m4s.png","img/store/equipment/m4.png");
//车轮
insertInfo("wheel","wheel1","200","img/store/equipment/w2s.png","img/store/equipment/w1.png");
insertInfo("wheel","wheel2","300","img/store/equipment/w5s.png","img/store/equipment/w5.png");
insertInfo("wheel","wheel3","400","img/store/equipment/w6s.png","img/store/equipment/w6.png");
//引擎
insertInfo("engine","engine1","200","img/store/50.png");
insertInfo("engine","engine2","300","img/store/52.png");
insertInfo("engine","engine3","400","img/store/53.png");


/*db.transaction(function(tx){
    tx.executeSql("drop table shop")
})*/
