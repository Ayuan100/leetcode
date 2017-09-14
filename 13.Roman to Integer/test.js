function(){
//
var test = function(s) {
    var chars = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    var result = 0;
    var len = s.length;
    var next = chars[s[0]];
    var c;
    for(var i = 0; i < len; i++){
        c = next;
        next = chars[s[i+1]];
        if(next> c ) result -= c;
        else result += c;
        
    }
    
    return result;

};

console.log("final result:"+ 
            test() 
            );
}();