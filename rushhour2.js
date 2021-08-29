var board = Array(Array(0,0,0,0,0,0),Array(0,0,0,0,0,0),Array(0,0,0,0,0,0),Array(0,0,0,0,0,0),Array(0,0,0,0,0,0),Array(0,0,0,0,0,0),Array(7,7,7,7));
var tableID = Array(Array("00","01","02","03","04","05"),Array("10","11","12","13","14","15"),Array("20","21","22","23","24","25"),Array("30","31","32","33","34","35"),Array("40","41","42","43","44","45"),Array("50","51","52","53","54","55"),Array("60","61","62","63"));
var score;
var i0=2;//red
var j0=0;
var i1=1;//yellowgreen
var j1=5;
var i2=3;//purple
var j2=5;
var i3=3;//orange
var j3=0;
var i4=5;//blue
var j4=0;
var i5=1;//yellow
var j5=2;
var i6=3;//skyblue
var j6=3;
//var i7=5;//mint
//var j7=2;
var i8=4;//pink
var j8=1;
var i9=4;//violet
var j9=3;
var i10=4;//green
var j10=4;


function moveit(num){
    if(col==2){
        if(num==3){
            if(board[i1+2][j1]==0)
            i1++;
        }
        else if(num==1){
            if(board[i1-1][j1]==0)
            i1--;
        }
        movecar();
    }
    else if(col==4){
        if(num==3){
            if(board[i2+3][j2]==0)
            i2++;
        }
        else if(num==1){
            if(board[i2-1][j2]==0)
            i2--;
        }
        movecar();
    }
    else if(col==8){
        if(num==3){
            if(board[i3+2][j3]==0)
            i3++;
        }
        else if(num==1){
            if(board[i3-1][j3]==0)
            i3--;
        }
        movecar();
    }
    else if(col==16){
        if(num==4){
            if(board[i4][j4+3]===0){
                j4++;
            }
        }
        else if(num==2){
            if(board[i4][j4-1]===0){
                j4--;
            }
        }
        movecar();
    }
    else if(col==32){
        if(num==3){
            if(board[i5+3][j5]==0)
            i5++;
        }
        else if(num==1){
            if(board[i5-1][j5]==0)
            i5--;
        }
        movecar();
    }
    if(col==64){
        if(num==4){
            if(board[i6][j6+2]===0){
                j6++;
            }
        }
        else if(num==2){
            if(board[i6][j6-1]===0){
                j6--;
            }
        }
        movecar();
    }
    if(col==128){
        if(num==4){
            if(board[i7][j7+3]===0){
                j7++;
            }
        }
        else if(num==2){
            if(board[i7][j7-1]===0){
                j7--;
            }
        }
        movecar();
    }
    if(col==256){
        if(num==4){
            if(board[i8][j8+2]===0){
                j8++;
            }
        }
        else if(num==2){
            if(board[i8][j8-1]===0){
                j8--;
            }
        }
        movecar();
    }
    else if(col==512){
        if(num==3){
            if(board[i9+2][j9]==0)
            i9++;
        }
        else if(num==1){
            if(board[i9-1][j9]==0)
            i9--;
        }
        movecar();
    }
    else if(col==1024){
        if(num==3){
            if(board[i10+2][j10]==0)
            i10++;
        }
        else if(num==1){
            if(board[i10-1][j10]==0)
            i10--;
        }
        movecar();
    }
    if(col==2048){
        if(num==4){
            if(board[i0][j0+2]===0){
                j0++;
            }
        }
        else if(num==2){
            if(board[i0][j0-1]===0){
                j0--;
            }
        }
        movecar();
        if(j0==4)
        clear();
    }
}

function clear(){
    alert('STAGE 2 CLEAR!');
}

function movecar(){
    init();
    car1();
    car2();
    car3();
    car4();
    car5();
    car6();
    //car7();
    car8();
    car9();
    car10();
    car0();
}

init();
function init(){
    score=0;
    for(var i=0;i<6;i++)
        for(var j=0;j<6;j++){
            board[i][j]=0;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car0();
function car0(){
    for(var i=i0;i<i0+1;i++)
        for(var j=j0;j<j0+2;j++){
            board[i][j]=2048;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car1();
function car1(){
    for(var i=i1;i<i1+2;i++)
        for(var j=j1;j<j1+1;j++){
            board[i][j]=2;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car2();
function car2(){
    for(var i=i2;i<i2+3;i++)
        for(var j=j2;j<j2+1;j++){
            board[i][j]=4;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car3();
function car3(){
    for(var i=i3;i<i3+2;i++)
        for(var j=j3;j<j3+1;j++){
            board[i][j]=8;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car4();
function car4(){
    for(var i=i4;i<i4+1;i++)
        for(var j=j4;j<j4+3;j++){
            board[i][j]=16;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car5();
function car5(){
    for(var i=i5;i<i5+3;i++)
        for(var j=j5;j<j5+1;j++){
            board[i][j]=32;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car6();
function car6(){
    for(var i=i6;i<i6+1;i++)
        for(var j=j6;j<j6+2;j++){
            board[i][j]=64;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

/*car7();
function car7(){
    for(var i=i7;i<i7+1;i++)
        for(var j=j7;j<j7+3;j++){
            board[i][j]=128;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}*/

car8();
function car8(){
    for(var i=i8;i<i8+1;i++)
        for(var j=j8;j<j8+2;j++){
            board[i][j]=256;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car9();
function car9(){
    for(var i=i9;i<i9+2;i++)
        for(var j=j9;j<j9+1;j++){
            board[i][j]=512;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

car10();
function car10(){
    for(var i=i10;i<i10+2;i++)
        for(var j=j10;j<j10+1;j++){
            board[i][j]=1024;
            var cell = document.getElementById(tableID[i][j]);
            cell.innerHTML = board[i][j]==0?"":board[i][j];
            coloring(cell);
        }
}

//[y][x]
var col=999;
function select(num){
    
    col=board[parseInt(num/6)][num%6];
    //alert(judge(num));
    //alert(col);
    if(col==2||col==16||col==64||col==256||col==2048){//가로
        document.getElementById(tableID[6][1]).style.background="#FFFFFF";
        document.getElementById(tableID[6][3]).style.background="#FFFFFF";
        document.getElementById(tableID[6][0]).style.background="#a5a5a5";
        document.getElementById(tableID[6][2]).style.background="#a5a5a5";
    }
    else if(col==4||col==8||col==32||col==128||col==512||col==1024){
        document.getElementById(tableID[6][0]).style.background="#FFFFFF";
        document.getElementById(tableID[6][2]).style.background="#FFFFFF";
        document.getElementById(tableID[6][1]).style.background="#a5a5a5";
        document.getElementById(tableID[6][3]).style.background="#a5a5a5";
    }
    else{
        document.getElementById(tableID[6][1]).style.background="#a5a5a5";
        document.getElementById(tableID[6][3]).style.background="#a5a5a5";
        document.getElementById(tableID[6][0]).style.background="#a5a5a5";
        document.getElementById(tableID[6][2]).style.background="#a5a5a5";
    }
    colorupdate(num);
}


function colorupdate(num){
    var cell = document.getElementById(tableID[parseInt(num/6)][num%6]);
    document.getElementById("recentcolor").style.background=cell.style.background
}


// 칸 색칠
function coloring(cell){
    var cellNum = parseInt(cell.innerHTML);
    switch(cellNum){
        case 2:
            cell.style.color="#20ff93";
            cell.style.background="#20ff93";
            break;
        case 4:
            cell.style.color="#dc92f7";
            cell.style.background="#dc92f7";
            break;
        case 8:
            cell.style.color="#E78F24";
            cell.style.background="#E78F24";
            break;
        case 16:
            cell.style.color="#0526ff";
            cell.style.background="#0526ff";
            break;
        case 32:
            cell.style.color="#fbff00";
            cell.style.background="#fbff00";
            break;
        case 64:
            cell.style.color="#4ac9ff";
            cell.style.background="#4ac9ff";
            break;
        case 128:
            cell.style.color="#3ce4d9";
            cell.style.background="#3ce4d9";
            break;
        case 256:
            cell.style.color="#ff9abc";
            cell.style.background="#ff9abc";
            break;
        case 512:
            cell.style.color="#53006c";
            cell.style.background="#53006c";
            break;
        case 1024:
            cell.style.color="#0c630b";
            cell.style.background="#0c630b";
            break;
        case 2048:
            cell.style.color="#E83232";
            cell.style.background="#E83232";
            break;
        default:
            if(cellNum>2048){
                cell.style.color="#FFFFFF";
                cell.style.background="#E51A1A";
            }
            else{
                cell.style.color="#684A23";
                cell.style.background="#a5a5a5";
            }
            break;
    }
}
