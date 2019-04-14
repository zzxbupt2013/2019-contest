G = {
    level: [
        {
            //0是空的地图
            //1是板砖
            //3是目标点
            state:[
                [0,0,1,1,1,0,0,0,0],
                [0,1,1,3,3,1,0,0,0],
                [0,1,0,0,0,0,1,0,0],
                [0,1,0,0,0,0,1,0,0],
                [0,1,1,1,1,1,1,0,0]
            ],
            person: {x : 2, y : 2},
            box: [{x:3, y : 2},{x:4,y:2}]
        },
        //第二关
        {
            //0是空的地图
            //1是板砖
            //3是目标点
            state:[
                [0,1,1,1,1,1,0,0],
                [0,1,0,0,1,1,1,0],
                [0,1,0,0,0,0,1,0],
                [1,1,1,0,1,0,1,1],
                [1,3,1,0,1,0,0,1],
                [1,3,0,0,0,1,0,1],
                [1,3,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1]
            ],
            person: {x : 2, y : 2},
            box: [{x:3, y : 2}, {x:2,y:5} ,{x:5, y:6}]
            /*
            box : [
              {x:3, y : 1},
              {x:4, y : 1},
              {x:4, y : 2},
              {x:5, y : 5}
            ]
            */
        },
        //第三关
        {
            //0是空的地图
            //1是板砖
            //3是目标点
            state:[
                [0,0,0,1,1,1,1,1,1,0],
                [0,1,1,1,0,0,0,0,1,0],
                [1,1,3,0,0,1,1,0,1,1],
                [1,3,3,0,0,0,0,0,0,1],
                [1,3,3,0,0,0,0,0,1,1],
                [1,1,1,1,1,1,0,0,1,0],
                [0,0,0,0,0,1,1,1,1,0]
            ],
            person: {x : 8, y : 3},
            box: [{x:4, y : 2}, {x:3,y:3} ,{x:4, y:4},{x:5, y:3},{x:6, y:4}]
        },
        //第四关
        {
            //0是空的地图
            //1是板砖
            //3是目标点
            state:[
                [0,1,1,1,1,1,1,1,0,0],
                [0,1,0,0,0,0,0,1,1,1],
                [1,1,0,1,1,1,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,3,3,1,0,0,0,1,1],
                [1,1,3,3,1,0,0,0,1,0],
                [0,1,1,1,1,1,1,1,1,0]
            ],
            person: {x : 2, y : 3},
            box: [{x:2, y : 2}, {x:4,y:3} ,{x:6, y:4},{x:7, y:3},{x:6, y:4}]
        },
        //第五关
        {
            //0是空的地图
            //1是板砖
            //3是目标点
            state:[
                [0,0,1,1,1,1,0,0],
                [0,0,1,3,3,1,0,0],
                [0,1,1,0,3,1,1,0],
                [0,1,0,0,0,3,1,0],
                [1,1,0,0,0,0,1,1],
                [1,0,0,1,0,0,0,1],
                [1,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1]
            ],
            person: {x : 4, y : 6},
            box: [{x:4, y : 3}, {x:3,y:4} ,{x:4, y:5}, {x:5,y:5}]
            /*
             box : [
             {x:3, y : 1},
             {x:4, y : 1},
             {x:4, y : 2},
             {x:5, y : 5}
             ]
             */
        },
        //第六关
        {
            //0是空的地图
            //1是板砖
            //3是目标点
            state:[
                [0,0,0,0,1,1,1,1,1,1,1,0],
                [0,0,0,0,1,0,0,1,0,0,1,0],
                [0,0,0,0,1,0,0,0,0,0,1,0],
                [1,1,1,1,1,0,0,1,0,0,1,0],
                [3,3,3,1,1,0,0,0,0,0,1,1],
                [3,0,0,1,0,0,0,0,1,0,0,1],
                [3,0,0,0,0,0,0,0,0,0,0,1],
                [3,0,0,1,0,0,0,0,1,0,0,1],
                [3,3,3,1,1,1,0,1,0,0,1,1],
                [1,1,1,1,1,0,0,0,0,0,1,0],
                [0,0,0,0,1,0,0,1,0,0,1,0],
                [0,0,0,0,1,1,1,1,1,1,1,0]
            ],
            person: {x : 5, y : 10},
            box: [
                {x:5, y:6},
                {x:6, y:3},
                {x:6, y:5},
                {x:6, y:7},
                {x:6, y:9},
                {x:7, y:2},
                {x:8, y:2},
                {x:9, y:6}
            ]
        }
    ],
    //map data
    mapData : (function() {
        var data = {};
        return {
            get: function () {
                return data;
            },
            set: function (arg) {
                data = arg;
            },
            //传进来的数据在界面中是否存在;
            collision: function (x, y) {
                if( data.state[y][x] === 1)return true;
                return false;
            },
            collisionBox : function(x,y) {
                for(var i= 0, len= data.box.length; i< len; i++) {
                    if( data.box[i].x === x&& data.box[i].y === y)return data.box[i];
                };
                return false;
            }
        }
    })(),
    view : {
        initMap : function(map) {
            document.getElementById("house").innerHTML = Handlebars.compile( document.getElementById("tpl").innerHTML )( map );
        },
        initPerson : function(personXY) {
            var per = document.createElement("div");
            per.id = "person";
            G.per = per;
            document.getElementById("house").appendChild(per);
            per.style.left = 50* personXY.x+"px";
            per.style.top = 50* personXY.y+"px";
        },
        initBox : function(boxs) {
            for(var i=0;i<boxs.length; i++) {
                var box = document.createElement("div");
                box.className = "box";
                G.box = box;
                document.getElementById("house").appendChild(box);
                box.style.left = boxs[i].x*50 + "px";
                box.style.top = boxs[i].y*50 + "px";
            };
        },
        deleteBox : function() {
            var eBoxs = document.getElementsByClassName("box");
            var len = eBoxs.length;
            while( len-- ) {
                eBoxs[len].parentNode.removeChild( eBoxs[len] );
            };
        }
    },
    /*
    * 0;向上
    * 1:向右
    * 2:向下
    * 3:向左
    * */
    direction : 0,
    step : function(xy) {
        //这里面要做很多判断
        /*包括：
         用户当前的方向和以前是否一样，如果不一样要先转头；
         如果一样的话，判断前面是否有石头， 是否有箱子；
           如果前面有墙壁或者
           前面有箱子，而且箱子前面有墙壁就return
         把人物往前移动
         如果人物的位置上有一个箱子，把箱子也移动一下;
         */
        var mapData = this.mapData.get();
        //对参数进行处理;
        if ( typeof xy === "string" ) {
            var x = 0, y = 0, xx = 0, yy = 0;
            switch( xy ) {
                case "left" :
                    if(this.direction==0){
                        x = -1;
                        xx = -2;
                    }else{
                        x = 0;
                    };
                    this.direction = 0;
                    break;
                case "top" :
                    if(this.direction===1){
                        y = -1;
                        yy = -2
                    }else{
                        y = 0;
                    };
                    this.direction = 1;
                    break;
                case "right" :
                    if(this.direction === 2) {
                        x = 1;
                        xx = 2;
                    }else{
                        x = 0;
                    };
                    this.direction = 2;
                    break;
                case "bottom" :
                    if(this.direction ===3 ) {
                        y = 1;
                        yy = 2;
                    }else{
                        y = 0;
                    };
                    this.direction = 3;
            };
            //如果是墙壁就不能走
            if( this.mapData.collision(mapData.person.x + x, mapData.person.y+y) ) {
                return;
            };
            //如果碰到的是箱子, 而且箱子前面是墙壁, 就return
            if( this.mapData.collisionBox(mapData.person.x+x, mapData.person.y+y) && this.mapData.collision(mapData.person.x+xx, mapData.person.y+yy)) {
                return;
            };
            if( this.mapData.collisionBox(mapData.person.x+x, mapData.person.y+y) && this.mapData.collisionBox(mapData.person.x+xx, mapData.person.y+yy)) {
                return
            }
            //mapData.x+xx, mapData.y+yy
            mapData.person.x = mapData.person.x + x;
            mapData.person.y = mapData.person.y + y;

            this.per.style.left = 50* mapData.person.x+"px";
            this.per.style.top = 50* mapData.person.y+"px";
            this.per.className = {
                0:"up",
                1:"right",
                2:"bottom",
                3:"left"
            }[this.direction];
            var theBox = {};
            if(theBox = this.mapData.collisionBox(mapData.person.x, mapData.person.y)) {
                theBox.x = mapData.person.x+x;
                theBox.y = mapData.person.y+y;
                this.view.deleteBox();
                this.view.initBox(mapData.box);
                this.testSuccess();
            };
            //如果碰到了箱子，而且箱子前面不能走就return， 否则就走箱子和人物;
        };
    },
    /*
    * return Boolean;
    * */
    //遍历所有的box，如果在box中的所有x，y在地图中对应的值为3，全部通过就返回true
    testSuccess : function() {
        var mapData = this.mapData.get();
        for(var i=0; i<mapData.box.length; i++) {
            if(mapData.state[mapData.box[i].y][mapData.box[i].x] != 3) {
                return false;
            };
        };
        $.dialog({
            content : '游戏成功!',
            title : '提示',
            ok : function() {
                reloadGame();
            },
            lock : true
        });
    },
    //这里面需要处理 map， 人物数据， box数据
    init : function() {
        //更新地图;
        //this.level[0].state
        this.view.initMap( this.mapData.get().state );
        this.view.initPerson( this.mapData.get().person );
        this.view.initBox( this.mapData.get().box );
        //this.person = this.factory.Person(0,0);
        //this.box = this.factory.Box([{x:0,y:1},{x:1,y:1},{x:0,y:2},{x:1,y:2}]);
        if( this.hasBind ) {
            return
        };
        this.hasBind = true;
        this.controller();
    },
    controller : function() {
        function mobileDOM() {
            var mobileDOMString = '\
            <div class="navbar-fixed-bottom height20percent operate-bar" >\
              <div class="container height100percent">\
                <div class="row text-center height100percent">\
                  <div class="height40percent arrow-up">\
                    <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>\
                  </div>\
                  <div class="height30percent">\
                    <div class="col-xs-6 arrow-left">\
                      <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>\
                    </div>\
                    <div class="col-xs-6 arrow-right">\
                      <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>\
                    </div>\
                  </div>\
                  <div class="height30percent arrow-down">\
                    <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>\
                  </div>\
                </div>\
              </div>\
            </div>\
            ';
            +function addDOM() {
                $("#game").append( mobileDOMString );
            }();
        };
        var _this = this;
        if( window.util.isMobile() ) {
            $(window).on("swipeLeft",function() {
                _this.step("left");
            }).on("swipeRight",function() {
                _this.step("right");
            }).on("swipeUp",function() {
                _this.step("top");
            }).on("swipeDown",function() {
                _this.step("bottom");
            });
            mobileDOM();

            $(".arrow-up").tap(function() {
                _this.step("top");
            });
            $(".arrow-down").tap(function() {
                _this.step("bottom");
            });
            $(".arrow-left").tap(function() {
                _this.step("left");
            });
            $(".arrow-right").tap(function() {
                _this.step("right");
            });
        }else{
            $(window).on("keydown", function(ev) {
                var state = "";
                switch( ev.keyCode ) {
                    case 37 :
                        state = "left";
                        break;
                    case 39 :
                        state = "right";
                        break;
                    case 38 :
                        state = "top";
                        break;
                    case 40 :
                        state = "bottom";
                        break;
                };
                _this.step(state)
            });
        };
    }
};

function start( level ) {
    G.now = level;
    G.mapData.set(G.level[level] );
    G.init();
    $("#game").show();
    $("#select").hide();
};

function init() {
    var level = $("#checked").val() || 0;
    start( level );
};
$("#start").click(function() {
    init();
});
String.prototype.repeat = String.prototype.repeat || function(num) {
    return (new Array(num+1)).join( this.toString() );
};
function reloadGame(){
    $("#game").hide();
    $("#select").show();
}
