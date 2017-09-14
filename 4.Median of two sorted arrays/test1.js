function(){
//1. O(m+n))
var test = function(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    
    var dest = (len1 + len2) / 2; //pointer for medium
    var flag = (len1 + len2) % 2; //odd or even
    var medium = nums1[0];
      
    //go through the first half of nums1+nums2
    for(var count = 0, i = 0, j = 0; count < dest && i < len1 && j < len2; count++){
         // console.log("i:"+i +" j:"+j+" count:"+count+" dest:"+dest+" nums1[i]:"+nums1[i]+" nums2[j]:"+nums2[j]+" medium:"+medium);        
        if(nums1[i] < nums2[j] ){
            medium = nums1[i];
            i++;   
        }
        else{
            medium = nums2[j];
            j++;
        }
        
    }
     
     // console.log("END: i:"+i +" j:"+j+" count:"+count+" dest:"+dest+" nums1[i]:"+nums1[i]+" nums2[j]:"+nums2[j]+" medium:"+medium);
    
    //only nums2 left
    if(i == len1){
        if(count < dest) return flag == 1 ? nums2[dest-i-0.5] : (nums2[dest-i-1] + nums2[dest-i])/2;
        return flag == 1 ? medium : (medium + nums2[dest-i])/2;
    }
    //only nums1 left
    if(j == len2){
        if(count < dest) return flag == 1 ? nums1[dest-j-0.5] : (nums1[dest-j-1] + nums1[dest-j])/2;
        return flag == 1 ? medium : (medium + nums1[dest-j])/2;
    }

    return flag == 1 ? medium : (medium + (nums1[i] < nums2[j] ? nums1[i] : nums2[j]) )/2;


};

console.log("test1 final result:"+ test([1,2,5],[3,4,6]));
}();