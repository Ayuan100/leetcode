function(){
//
var test = function(str) {
	if(str === null) return 0;
    if(str.length === 0) return 0;
    
    var result = 0;
    var minus = 0;
    var flag = 0; //0-start, 1-during intepretion, 2-end
    
    for(var i = 0; i < str.length && flag !== 2; i++){
        switch(str[i]){
            case ' ': 
                if(flag === 1) flag = 2;
                break;
            case '-':
                if(flag === 0) minus = 1;
            case '+':
                flag++;
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                flag = 1;
                result *= 10;
                result += parseInt(str[i]);
                break;
            default:
                flag = 2;
        }     
        if(flag === 2) break;
    }
    if(minus === 1) result = 0-result;
    if(result > 2147483647) return 2147483647;
    if(result < -2147483648) return -2147483648;
    return result;

};

console.log("final result:"+ 
            test() 
            );
}();