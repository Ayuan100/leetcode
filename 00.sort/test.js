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
	};
	var insertSort = function(nums){
		if(nums){
			if(nums.length > 1){
				for(var i = 1; i < nums.length; i++){
					var temp = nums[i];
					console.log(nums, temp, i);
					// 插入到前面数组
					for(var j = i-1; j >= 0 ; j--){
						if( temp < nums[j]){
							// 往后移
							nums[j+1] = nums[j];
						}
						else break;
					}
					nums[j+1] = temp;
				}
			}
		}
		return nums;
	};
	// O(nlogn)
	var mergeSort = function(nums){
		console.log(nums);
		if(nums){
			if(nums.length > 1){
				var mid = (nums.length - nums.length%2)/2;
				var left = mergeSort(nums.slice(0,mid));
				var right = mergeSort(nums.slice(mid));
				for( var i = 0, j = 0, k = 0; i < left.length && j < right.length; k++){
					if(left[i]<right[j])	nums[k] = left[i++];
					else  					nums[k] = right[j++]
				}
				while(i < left.length) nums[k++] = left[i++];
				while(j < right.length) nums[k++] = right[j++];
			}
		}
		return nums;
	};
	var quickSort = function(nums){
		if(nums){
			if(nums.length > 1){
				var pivot = nums[0];
				var i = 0, 
					j = nums.length; 
				while(i < j){
					// 从右往左找到小于pivot的值，挪到当前pivot所在位置
					while( i < j && nums[--j] >= pivot );
					nums[i] = nums[j];
					// 从左往右找到大于pivot的值，挪到右边空位
					while( i < j && nums[++i] <= pivot );
					nums[j] = nums[i]
				}
				// pivot放在当前位置
				nums[i] = pivot;
				console.log(nums, pivot);
				nums = quickSort(nums.slice(0,i)).concat(pivot).concat(quickSort(nums.slice(i+1)));
			}	
		}
		return nums;
	};
	var heapSort = function(nums){
		function maxHeap(nums, root, size){
			var left = 2*root + 1;
			var right = 2*root + 2;
			var max = root;
			if(left < size && nums[max] < nums[left]){
				max = left;
			}
			if(right < size && nums[max] < nums[right]){
				max = right;
			}
			if(max!=root){
				var temp = nums[root];
				nums[root] = nums[max];
				nums[max] = temp;
				maxHeap(nums, max, size);
			}
		}
		if(nums){
			if(nums.length > 1){
				for(var last = Math.floor(nums.length/2) -1; last >=0; last--){
					maxHeap(nums, last, nums.length);
					// console.log(nums);	
				}
				// console.log('max heap:',nums);
				for(var max = nums.length-1; max >0; max--){
					var temp = nums[max];
					nums[max] = nums[0];
					nums[0] = temp;
					maxHeap(nums, 0, max);
				}
				

			}
		}
		return nums;
	}
	var selectionSort = function(nums){
		if(nums){
			if(nums.length > 1){
				for(var k=0; k < nums.length; k++){
					var min = k;
					for(var i=k; i < nums.length; i++){
						if(nums[min] > nums[i]){
							min = i;
						}
					}
					var smallest = nums[min];
					nums[min] = nums[k];
					nums[k] = smallest;
				}
			}
		}
		return nums;
	};
	var shellSort = function(nums){
		if(nums){
			if(nums.length > 1){
				for( var d = Math.floor(nums.length/2); d > 0; d = Math.floor(d/2)){
					// 每个元素插入到所在组的前面
					for(var i = d; i < nums.length; i++){
						for(var j = i; j > 0; j -= d){
							if(nums[j-d]>nums[j]){
								var small = nums[j];
								nums[j] = nums[j-d];
								nums[j-d] = small;
							}
							else break;
						}
					}
				}
			}
		}
		return nums;
	};
	var nums = [4,6,2,7,5,5,3];
	// console.log("bubbleSort result:", bubbleSort(nums));
	// console.log("insertSort result:", insertSort(nums));
	// console.log("mergeSort result:", mergeSort(nums));
	// console.log("quickSort result:", quickSort(nums));
	// console.log("heapSort result:", heapSort(nums));
	// console.log("selectionSort result:", selectionSort(nums));
	console.log("shellSort result:", shellSort(nums));

})();