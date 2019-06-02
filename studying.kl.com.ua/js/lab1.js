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
        return number
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
function newArray(masif,a,b){
    var j = 0;
    for(var i = 1;i<masif.length;i++){

        if(masif[i][0][j] == a && masif[i][0][j+1] == b){
            if(a == b){
                return 2
            }else{
                return true
            }
        }else if(masif[i][0][j] == b && masif[i][0][j+1] == a){
            return -1
        }else if(i ==masif.length){
            return false
        }
    }
}
/*
    newArray()
    the function verifies whether the a-b or b-a ribs exist
    if there is a - b then returns 1
    if there is b - a then returns -1
    if there is a == b then returns 2
    if there is no a and b then returns 0
 */
function outputsum() {
    let number = start();
    function sum(number){
        var text = document.getElementById('sum');
        var n = number[0][0][0], m = number[0][0][0];
        text.value = '';
        for (var i = 0; i < m; i++){
            for (var j = 0; j < n; j++){
                if(newArray(number,i+1,j+1)==true || newArray(number,i+1,j+1) == 2  ){
                    text.value += 1 + " "
                }else{
                    text.value += 0 + " ";
                }
            }
            text.value += "\n"
        }
    }
    sum(number)
}
/*
    outputsum()
    the function outputs the adjacency matrix
 */
function outputinc() {
    let number = start();
    function inzuden(number){
        var text = document.getElementById('inc');
        text.value = '';
        var k = number[0][0][1], g = number[0][0][0];
        var matrix = [];
        for (var i = 0; i < g; i++){
            matrix[i] = [];
            for (var j = 0; j < k; j++){
                matrix[i][j] = 0;
            }
        }
        for(var i = 1;i<number.length;i++){
            try{
                if((number[i][0][0]-1)==(number[i][0][1]-1)){
                    matrix[number[i][0][0]-1][i-1] = 2;
                }else{
                    matrix[number[i][0][0]-1][i-1] = 1;
                    matrix[number[i][0][1]-1][i-1] = -1;
                }
            }catch(e){
                console.log(e.name)
            }
        }
        for (var i = 0; i < g; i++){
            for (var j = 0; j < k; j++){
                text.value += matrix[i][j] + " " ;
            }
            text.value += '\n'
        }
        return matrix
    }
    inzuden(number);
}

/*
    outputштс()
    the function outputs the matrix of the incident
 */