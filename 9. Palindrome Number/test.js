function(){
//
var test = function(x) {
	    if(x < 0) return false;
	    
	    var count = 0;
	    var temp = x;
	    
	    while(temp >= 10){
	        count++;js
	        temp /= 10; 
	    }
	    while(count > 0){
	        var base = Math.pow(10,count);
	        if(parseInt(x/base) != (x % 10) ) return false;
	        x %= base;
	        x = parseInt(x/10);
	        count -= 2;
	    }
	    return true;
};

console.log("final result:"+ 
            test(458) 
            );
}();