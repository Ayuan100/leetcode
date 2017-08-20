function(){
// O(log(min(m,n))) in more elegant way
var test = function(nums1, nums2) {
    var long = nums1,
        short = nums2;
    //find long and short array
    if(nums1.length < nums2.length){
        long = nums2;
        short = nums1;
    }

    // long:        ---x|x+1--- 
    // short:---middle-1|middle--- 
    var x = Math.floor(long.length/2),
        start = 0,
        end = short.length - 1,
        middle;
    //try to insert y into the biferated list
    while(start <= end){
        middle = Math.floor( (start+end)/2 );
        if( short[middle] >= long[x] && short[middle-1] <= long[x+1]){
            break;
        }
        else if(short[middle] )
        
    }
    
};

console.log("test final result:"+ test([1,2,5],[3,4,6]));
}();