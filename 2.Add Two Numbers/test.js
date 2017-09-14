function(){
//
var test = function(l1, l2) {
	var result = new ListNode(null);
    var pivot = result;
    var carry = 0;
    var sum = 0;
    for(var node1=l1, node2=l2; node1 || node2 ;){
        
        sum = carry;
        if(node1){
            sum += node1.val;
            node1 = node1.next;
        }
        if(node2){
            sum += node2.val;
            node2 = node2.next;
        }
        
        if( sum >= 10 ){
            carry = 1;
            sum = sum - 10;
        }
        else carry = 0;
        
        pivot.next = new ListNode(sum);
        pivot = pivot.next;
    }
    
    if(carry == 1) pivot.next = new ListNode(1);
    
    return result.next;

};

console.log("final result:"+ 
            test() 
            );
}();