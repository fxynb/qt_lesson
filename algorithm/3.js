const expression = '{}';
const expressionFalse = '{}{{}';

const isBalanced = (str) => {
  // [{()}]
  // es6 新的数据结构 hashmap 映射
  const map = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);
  // console.log([...map.values()].includes("}"));
  // for (let [key, val] of map) {
  //   console.log(key, val);
  // }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let node = str[i];
    console.log(node, '--------------');
    // 入栈
    // 出栈
    console.log(...map.values(),node,[...map.values()].includes(node), '?????');
    if (map.has(node)) {
      stack.push(node);
    } else if ([...map.values()].includes(node)) {
      // 右边的， values之中的一个,  跟栈顶的元素匹配
      // key   value 反找key
      // console.log(log, '--------------');
      let key = stack[stack.length - 1]
      if (map.get(key) != node) {
        console.log('-------');
        return false;
      }
      stack.splice(stack.length-1, 1);
    }
    // console.log(stack, '+++++');
  }
  return stack.length === 0
  // map.set
}
console.log(isBalanced(expression));
