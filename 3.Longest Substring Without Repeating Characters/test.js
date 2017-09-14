function(){
//
var test = function(s) {
	var start = 0;
    var len = 0;
    var max_len = 0;
    for(var i = 0; i < s.length; i++){
        //check current substring
        for( var j = start; j < i; j++){
            if(s[j] == s[i]){
                //get current longest substring
                if( max_len < len ) max_len = len;
                //start
                start = j+1;
                break;
            }
        }
        len = i-start+1;
    }
    return (max_len<len ?len:max_len);

};

console.log("final result:"+ 
            test() 
            );
}();