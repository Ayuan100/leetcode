function(){
//O(log(min(m,n)))
var test = function(nums1, nums2) {
    var long = nums1,
        short = nums2;
    //find long and short array
    if(nums1.length < nums2.length){
        long = nums2;
        short = nums1;
    }

    // long:   ---x|x+1--- 
    // short:---y-1|y--- 
    var x = Math.floor((long.length+short.length-1)/2),
        y = 0,
        step = short.length;
    //try to insert y into the biferated list
    while(step > 0){

        console.log("long: "+ long.slice(0,x+1) + " *|* " + long.slice(x+1),
            "short: " + short.slice(0,y) + " *|* " + short.slice(y),
            "long[x]=long[" + x + "]: " + long[x],
            "long[x+1]=long[" + (x+1) + "]: " + long[x+1] + " len=" + long.length,
            "short[y]=short[" + y + "]: " + short[y],
            "short[y-1]=short[" + (y-1) + "]: " + short[y-1] + " len=" + short.length,
            "step: " + step);
     
        if( y + step <= short.length && short[y] < long[x] ){
            y += step;
            x -= step;
        }
        else if( y - step >=0 && short[y-1] > long[x+1] ){
            y -= step;
            x += step;
        }
        else break;
        step = Math.ceil(step/2);
        
    }
    console.log("result ****** ",
            "long: "+ long.slice(0,x+1) + " | " + long.slice(x+1) ,
            "short: " + short.slice(0,y) + " | " + short.slice(y),
            "long[x]=long[" + x + "]: " + long[x] + " len=" + long.length,
            "short[y]=short[" + y + "]: " + short[y] + " len=" + short.length,
            "step: " + step);
    
    console.log(Math.max(short[y-1]||long[x], long[x]||short[y-1]));
    console.log(Math.min(short[y]||long[x+1], long[x+1]||short[y]));


    if( (long.length+short.length)%2 == 1) 
        return Math.max(short[y-1]||long[x], long[x]||short[y-1]);


    return ( Math.max(short[y-1]||long[x], long[x]||short[y-1])
           + Math.min(short[y]||long[x+1], long[x+1]||short[y])
           )/2;

};

console.log("test final result:"+ test([1,2,5],[3,4,6]));
}();