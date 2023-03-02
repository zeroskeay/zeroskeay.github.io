## 变量声明
新增 let、const  
1. let---------变量
2. const-------常量(固定不变时，全大写命名，如生日；后续改变的，使用变量命名，如年龄)
   
解决 var 引发的变量提升等问题。  

## 模块化
使用 export 导出变量 或方法。
需要使用时，使用 import xx from xx 方式导入

```js
// main.js
export const BIRTHDAY = '1991-01-01';

// other.js
import BIRTHDAY from './main.js';
```
## 解构
1. 从数组取值
```js
// 取值时，对应位置即可，解构失败则返回 undefined 
const arr = [1,2,3,4,5];
// 取前两项的值
let [a,b] = arr; 
// 取1，4项的值
let [a, , ,b] = arr
```
2. 从对象中取值
```js
const obj ={
  a:1,
  b:2,
  c:3,
  d:4
}
// 使用对象的key取值
let {a,c} = obj; 
// 使用 key + 冒号 修改默认变量名称
let{a:newa,c:otherC} = obj;
// newa = obj.a; otherC = obj.c
```
3. 应用场景
4. 
   1. 交换两个变量值
   ```js
   let a = 1,b =2;
   [a,b] = [b,a]
   ```

   2. 扩展运算符
   ```js
   // 拷贝数组
   let arr = [1,2,3];
   let arr1 = [...arr];
   // 合并数组
   let arr2 =[...arr, ...arr1];
   // 扩展后放到数组的任意位置
   let arr3 =[1,2,3, ...arr, 4, ...arr1];
   
   <!-- 将数组扩展为函数参数 -->
   function sum(a,b,c){
    return a+b+c;
   }
   const numbers = [1,2,3,4];
   sum(...numbers);

   <!-- 克隆对象、合并对象 -->
   let  obj = {a:1, b:2};
   let  obj1 = {c:3, d:4};
   let obj2 = {...obj};
   let obj3 = {...obj, obj1};
   
   <!-- 排除属性 -->
   let params = {
    name:'zhangsan',
    age:18,
    type: 1
   }
   let {type, ...userInfo} = params;
   // userInfo   ----- {name:'zhangsan',age:18}
   ```

   3. 参数默认值
   ```js
   function user(name = 'zhang',age = 18){}
   ```

   4. 对象属性简写
   ```js
   // 当对象属性值 和 值变量名称相同时，可省略变量值
   let name = 'zhang',age =18 , type =1;
   const userInfo ={
    name,
    age,
    type,
    gender:'3'
   }
   ```
   5. async、await---调用异步代码，就像写同步代码一样
   6. array ---- includes--- 方法，返回true false
   7. ** 指数运算符  如：2的10次方    2 ** 10;
   8. Object.keys---key集合、Object.values----value集合、Object.entries----key:value 集合
   9. null 传导运算符----?.   判断运算符---- ??
   10. 模板字符串,且可计算
   ```js
   const name = 'zhang',age = 18;
   let userInfo = `名字是${name},年龄${age}岁，明年 ${age+1} 岁`
   // 名字是zhang，年龄18岁，明年19岁
   ```


   


