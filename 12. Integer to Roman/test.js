function(){
//
var test = function(num) {
	var chars = [ 
        ["","I","II","III","IV","V","VI","VII","VIII","IX"],
        ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
        ["","M","MM","MMM"]
    ];
    return chars[3][~~(num/1000)]
                      + chars[2][(~~(num/100)) %10]
                      + chars[1][~~(num/10) % 10]
                      + chars[0][num%10];

};

console.log("final result:"+ 
            test() 
            );
}();