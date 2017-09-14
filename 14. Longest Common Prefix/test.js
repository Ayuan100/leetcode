function(){
//
var test = function(strs) {
	if(strs === null || strs.length === 0) return "";
    for( var i = 0; i < strs[0].length ; i++){
        for( var j = 1; j < strs.length; j++){
            if(strs[j][i] !== strs[0][i]) return strs[0].substring(0,i);
        }
    }
    return strs[0].substring(0,i);

};

console.log("final result:"+ 
            test() 
            );
}();