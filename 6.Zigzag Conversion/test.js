function(){
//
var test = function(nums, target) {
	if(numRows == 1) return s;

    var len = s.length;
    var unit = 2 * (numRows - 1);
    var half_unit = numRows - 1;
    var count = len/unit; //number of v, including 0.x
    var rest = len%unit; //items in the last v

    var result = '';
    var i = 0; //for s.length
    var j = 0; //for count


    //console.log("unit:" + unit);
    //console.log("count:" + count);
    //console.log("rest: " + rest);
    //first row
    while(i < count){
        result += s[i * unit];
        //console.log("first row - i:" + i + " s:" + unit +" result:" + result);
        i++;
    }
    //middle rows
    for(var currentRow = 1; currentRow < numRows - 1; currentRow++){
        var pointer = currentRow;
        
        var step1 = 2 * (numRows - currentRow - 1);
        var step2 = 2 * currentRow;

        //console.log("middle rows:" + currentRow + " step1:" + step1 + " step2:" + step2);
        //all the complete v
        for(j = 0; j <= count - 1; j++){
            
            result += s[pointer];
            pointer += step1;

            result += s[pointer];
            pointer += step2;

            //console.log("   v:" + j + " result:" + result);
        }
        //in the last v
        if(rest%unit > currentRow){

            result += s[pointer];
            pointer += step1;

            if(rest%unit > half_unit && rest%half_unit > (half_unit - currentRow) ){
                result += s[pointer];
            }
            //console.log("   the last v, result:" + result);
        }

    }

    //last row
    for(pointer = numRows - 1, j = 0; j <= count-1;  j++){
        result += s[pointer];
        pointer += unit;
        //console.log("last row - result:" + result);
    }
    if(rest >= numRows ) result += s[pointer];
    
    return result;

};

console.log("final result:"+ 
            test() 
            );
}();