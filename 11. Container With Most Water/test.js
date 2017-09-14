function(){
//
var test = function(height) {
	var max = 0;
    var i = 0, j = height.length - 1; 
    while(i < j){
        if(height[i] < height[j]){
            max = Math.max(max, height[i] * (j-i) );
            i++;
        }
        else{
            max = Math.max(max, height[j] * (j-i) );
            j--;
        }
    }
    return max;

};

console.log("final result:"+ 
            test() 
            );
}();