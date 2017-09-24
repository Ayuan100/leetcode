(function(){
	//
	var test = function(nums, target) {
	};

	var bubbleSort = function(nums){
		if(nums){
			if(nums.length > 1){
				for(var i = 0; i < nums.length; i++){
					for(var j = 0; j+1 < nums.length-i; j++){
						if(nums[j] > nums[j+1]){
							var temp = nums[j];
							nums[j] = nums[j+1];
							nums[j+1] = temp;
						}
					}
				}
			}
		}
		return nums;
	}
	console.log("final result:"+ 
	            bubbleSort([4,6,2,7,5]) 
	            );
})();