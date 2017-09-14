function(){
//
var test = function(nums, target) {
    var i,j,remainder;
    for(i = 0; i < nums.length; i++){
    	remainder = target - nums[i];
        for (j = i+1; j < nums.length; j++){
        	if(nums[j] == remainder) return [i,j];
        }
    }
    return null;
};

console.log("final result:"+ 
            test() 
            );
}();