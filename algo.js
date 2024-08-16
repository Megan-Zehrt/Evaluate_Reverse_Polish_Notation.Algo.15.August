// 150. Evaluate Reverse Polish Notation



// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.



/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    let stack = []

    for(let token of tokens){

        if(!isNaN(token)){
            
            stack.push(parseInt(token))
        }else{

            let second = stack.pop()
            let first = stack.pop()

            if(token == "+"){

                let sum = first + second
                stack.push(sum)
            }else if(token == "*"){
                let sum = first * second
                stack.push(sum)
            }else if(token == "-"){
                let sum = first - second
                stack.push(sum)
            }else{
                let sum = Math.trunc(first / second)
                stack.push(sum)
            }
        }
    }

    return stack
};