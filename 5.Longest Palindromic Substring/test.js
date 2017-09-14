function(){
//我的土方法，以sum为回文字符串的中心查找，性能还不错
var test = function(nums1, nums2) {
  if(s === null || s.length <= 1) return s;
    
    var len = s.length;
    
    var result = 1; //max size
    var max_start = 0;
    
    var size = 0; //current size
    var max_size = 0; //max size for this sum
    var start, end;
    
    for(var sum = 1; ; sum++){
        //var temp = sum/2;
        //console.log("trying sum:" + sum + " with string:" + s.slice(0,temp+0.5)+(s[temp]===undefined ? "|" : ("\("+s[temp]+"\)"))+s.slice(temp+1)+" ---------------------");
        
        //1. check max_size > result
        //console.log("   1. check max_size:" + max_size + " and result:" + result);
        max_size = sum < len ? sum+1 : len*2-sum-1;
        
        if(max_size <= result) break;
        
        //2. check if this sum can do better than result
        //if result & sum is not the same even/odd, then the string is the same even/odd
        if((sum-result)%2 !==0 ) size = result + 2;
        else size = result + 1;
        //if sum=odd, size=even, x:x+1, 5,2,2:3
        //if sum=even, size=odd, x-1:x+1, 6,3,2:4
        start = sum/2-size/2+0.5;
        end = sum-start;
        //console.log("   2. trying size:"+size+" (result:"+result+") string:"+s.slice(start,end+1));
        if(s[start] == s[end]){
            //3. check the biggest size for this sum
            //from size 2/3 to get biggest size
            //1+3=4, 1+2=3
            start = sum/2+sum%2/2-1;
            end = sum-start;
            size = end-start+1;
            //console.log("   3. check biggest size, trying from:" + s.slice(start, end+1) + " with size:" + size);
            while(size<=max_size){
                if(s[start]==s[end]){
                    start--;
                    end++;
                    size += 2;
                    //console.log("      check biggest size, try getting bigger to:"+s.slice(start,end+1) + " with size:" + size);
                }
                else break;
            }

            start++;
            end--;
            size -= 2;

            //console.log("      check biggest size, best size sum:"+sum+" can do is "+size+"--"+s.slice(start,end+1));
            
            if(size > result){
                //4. update max result
                //console.log("   4. update max result to:" + s.slice(start, start+size) + " with size:" + size);
                result = size;
                max_start = start;
            }
        }
    }
    return s.slice(max_start, max_start + result);  

};

console.log("final result:"+ 
            test() 
            );
}();