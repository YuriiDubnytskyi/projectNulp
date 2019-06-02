function start() {
    var text = document.getElementById('start').value;
    function starting( text){
        var array = text.split(",");
        var number = [];
        var a;
        for(var i =0;i<array.length;i++){
            a = [array[i].trim().split(" ")];
            number[i] = a;
        }
        return number;
    }
    var number = starting(text);
    console.log(number)

    return number
}
/*
зчитування графу
*/
function eler() {
    var number = start();
    var numbing=document.getElementById("verA").value
    var degvplus =[];
    for (var i = 1; i <= numbing; i++) {
        var degplus = 0;
        for (var j = 0; j < number.length; j++) {
            if (number[j][0][0] == i) {
                degplus++
            }
        }
        degvplus.push(degplus)
    }
    console.log(degvplus);
    var check=0
    for(var i =0;i<degvplus.length;i++){
        if(degvplus[i]%2==0){
            check++
        }
    }
    /*
	перевіряєм чи має кожна вершина парну кількість ребер
	*/
    if(check==degvplus.length){
        elering(number,check)
    }else{
    	var texting = document.getElementById("elerValue")
        texting.value="nothing"
    }
}
function output(text,array,values){
    text.value+=values;
    for(var i = 0;i<array.length;i++){
        text.value+=array[i]+' '
    }
}
/*
вивід результату
*/

function elering(number,length) {

    var arrayLength=number.length;
    var eleringVerh=[];
    eleringVerh.push(length)
    for(var i=0;i<number.length;i++){
        for(var j =0;j<number.length;j++){
            if(number[j][0][0]==length){

                length=number[j][0][1];
                eleringVerh.push(length);

                var k = deleting(number,number[j][0][0],number[j][0][1]);
                number[j][0][0]=0
                number[j][0][1]=0
                number[k][0][0]=0
                number[k][0][1]=0
                break
            }
        }
        var texting = document.getElementById("elerValue")
        arrayLength-=2
        if(eleringVerh[0]==eleringVerh[eleringVerh.length-1]&&arrayLength==0){
            console.log('greate')
            
            //output(text,eleringVerh,"Ейлерів цикл")
            texting.value="Ейлерів цикл - "
            for(var i = 0;i<eleringVerh.length;i++){
        		texting.value+=eleringVerh[i]+' '
    		}
            console.log(eleringVerh)
            break
        }
    }

}
function deleting(array,numberFirst,numberLast) {
    for(var i=0;i<array.length;i++){
        if(array[i][0][0]==numberLast&&array[i][0][1]==numberFirst){
            return i
        }
    }
}