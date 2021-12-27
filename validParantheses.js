/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

*/

// your function goes here.

function valid(s){
  const stack = [];
  const openSet = new Set(["(","{","["]);
  const closeMap = new Map([[")","("],["}","{"],["]","["]]);
  for (let i = 0; i < s.length; i++){
    if(openSet.has(s[i])){
      stack.push(s[i])
    }else{
      const pop = stack.pop()
      if(pop !== closeMap.get(s[i])){
        return false
      }
    }
  }
  return stack.length === 0;
}
console.log(valid('[]'))
console.log(valid('{[]}'))