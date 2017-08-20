//non-recursive
var test = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while(start <= end){
        var middle = Math.floor( (start + end) / 2 );
        if(nums[middle] == target){
            return middle;
        }
        else if( target > nums[middle] ){
            start = middle + 1;
        }
        else{
            end = middle - 1;
        }
    }
    return null;

};
//recursive
var test1 = function(nums, target) {
    return binarySearch(nums, 0, nums.length, target);
    function binarySearch(array, start, end, target){
        if(start > end) return null;
        var middle = Math.floor( (start + end) / 2 );
        if(array[middle] == target) return middle;
        if(array[middle] < target) return binarySearch(array, middle+1, end, target);
        if(array[middle] > target) return binarySearch(array,start, middle-1, target);
    }
};
console.log("final result-----------------",
            "non recursive: " + test([1,3,5,8,10],5),
            "recursive: " + test1([1,3,5,8,10],5)
            );