function start() {
    var text = document.getElementById('start').value
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
    return number
}

/*
    start()
    a function that reads a graph with fields
    example
    5 5,
    1 2,
    2 3,
    3 4,
    4 2,
    4 5
 */
var degvplus =[];
var degvminus =[];
/*
    in degvplus
    written in half the output power
    in degvminus
    written in half the input power
 */

function outputstep() {
    let number = start();
    degvplus =[];
    degvminus =[];

    var text = document.getElementById('step');
    text.value = '';
    for (var i = 1; i <= number[0][0][0]; i++) {
        var degplus = 0;
        for (var j = 1; j < number.length; j++) {
            if (number[j][0][0] == i) {
                degplus++
            }
        }
        degvplus.push(degplus)
    }
    for (var i = 1; i <= number[0][0][0]; i++) {
        var degminus = 0;
        for (var j = 1; j < number.length; j++) {
            if (number[j][0][1] == i) {
               degminus++
            }
        }
        degvminus.push(degminus)
    }
    for (var i = 0; i < degvplus.length; i++) {
        text.value += "Степінь виходу вершини " + (i + 1)+"--"+ + degvplus[i] +'\n';
    }
    text.value +="\n"
    for (var i = 0; i < degvminus.length; i++) {
        text.value += "Степінь заходу вершини " + (i + 1)+"--"+ + degvminus[i] +'\n';
    }
}
/*
  outputstep()
  the function outputs the degree of output and input
 */

function outputvusazi(){
    function output(degvplus,degvminus) {
        var text = document.getElementById('vusazi');
        text.value = '';
        for(var i = 0; i < degvplus.length;i++){
            if(degvplus[i] + degvminus[i] == 0){
                text.value += "Ізольована вершина " + (i+1)
                text.value += "\n"
            }else if(degvplus[i] + degvminus[i] == 1){
                text.value += "Висяча вершина " + (i+1)
                text.value += "\n"
            }
        }
    }
    output(degvplus,degvminus)
}
