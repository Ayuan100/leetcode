function(){
//
var test = function(x) {
	var result = 0;
    while(x!==0){
        result *= 10;
        result += x%10;
        x = parseInt(x/10);
    }
    if(result < -2147483648 || result > 2147483647) return 0;
    return result;

};

console.log("final result:"+ 
            test(456) 
            );
}();