/**
 * Created by m0114072 on 2016/07/01.
 */

function myFunc(){
    myTbl = new Array("日","月","火","水","木","金","土");
    myD = new Date();

    myYear = myD.getFullYear();
    myMonth = myD.getMonth() + 1;
    myDate = myD.getDate();
    myDay = myD.getDay();
    
    myMess1 = myYear + "年" + myMonth + "月" + myDate + "日";
    myMess2 = myTbl[myDay] + "曜日";

    myMess = myMess1 + " " + myMess2 + " " ;
    document.write( myMess );
}