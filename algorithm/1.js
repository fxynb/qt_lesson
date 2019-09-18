const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';
//JS
function isBalanced(exp){
  const reg = /{}/g
  let len;
  do {
    len = exp.length;
    console.log(len)
    exp = exp.replace(reg,"")
    console.log(exp)
  } while(len != exp.length)

  return exp.length === 0;
}
console.log(isBalanced(expressionFalse))