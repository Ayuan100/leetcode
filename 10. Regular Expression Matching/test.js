function(){
//
var test = function(s, p) {
	if(p.length === 0){
        if(s.length === 0) return true;
        else return false;
    }
    
    var splitStr = new Array();

    //s[i], p[j],splitStr[v]
    var i = 0, j = 0, v = 0;

    //1. get splitStr
    for(; j < p.length; v++){
        if(p[j] === '*'){
            console.log("invalid pattern!");
            return false;
        }
        splitStr[v] = {
        	pattern: "",
        	chars: "",
        	start: 0,
        	end: 0,
        	position: 0
        }
        //get a*b*
        while(p[j+1] === '*'){
            splitStr[v].pattern += p[j];
            j += 2;
        }
        //get abcde
        while(p[j+1] != '*' && j < p.length){
            splitStr[v].chars += p[j];
            j++;
        }
        //console.log(splitStr[v]);
    }
    //console.log("1. splitStr:");
    //console.log(splitStr);

	//2. check all regs + chars

    //regs = splitStr[v].pattern  regs[m]
    //chars = splitStr[v].chars  chars[n]
    var chars, regs;
    var m = 0, n = 0;
    //true = go ahead, false = go back
    var flag = true;

    for( v = 0, i = 0; v >= 0 && v <= splitStr.length;){
    	
    	//console.log("check v:" + v );
    	//matched all v
    	if(v === splitStr.length){
    		//console.log("	i=" + i);
    		if(i === s.length) return true;
    		v--;
    		flag = false;
    		continue;
    	}

		chars = splitStr[v].chars;
    	regs = splitStr[v].pattern;
    	//console.log("	with flag=" + flag + " on ( " + regs + "* + " + chars + " )");
    	if(flag){
    		splitStr[v].start = i;
    		splitStr[v].end = i;
    		splitStr[v].position = 0;
    	}
    	else{
    		i = splitStr[v].end;
    		//meet the end of s, go back
    		if(i === s.length){
    			v--;
    			flag = false;
    			continue;
    		}
    		//check s[i] can match in pattern
    		for( m = splitStr[v].position; m < regs.length; m++){
    			if(regs[m] === s[i] || (regs[m] === '.' && s[i] !== '\n')) break;
    		}
    		//cannot match, go back
    		if(m === regs.length){
    			//console.log("	pattern cannot match further");
    			v--;
    			flag = false;
    			continue;
    		}
    		//matched, end+1
    		else{
    			splitStr[v].end += 1;
    			splitStr[v].position = m;
    			i++;
    		}
    	}
    	//search chars from i
    	//console.log("	--search chars:" + chars + " from i=" + i);
    	for(n = 0; n < chars.length && i < s.length; n++, i++){
    		if(chars[n] !== s[i] && (chars[n] !== '.' || s[i] === '\n') ) break;
    	}
    	if(n === chars.length){
    		//console.log("		chars searched in i=" + i);
    		v++;
    		flag = true;
    	}
    	else{
    		//console.log("		chars not searched, try again");
    		flag = false;
    	}
    }
    return false;

};

console.log("final result:"+ 
            test() 
            );
}();