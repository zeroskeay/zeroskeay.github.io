# 数据类型

## 动态和弱类型
#e 
动态---赋值时，重新决定变量的数据类型
```js
let foo = 42; // foo 现在是一个数值
foo = "bar"; // foo 现在是一个字符串
foo = true; // foo 现在是一个布尔值
```

弱类型----允许隐式的类型转换
```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

## 原始值

| 类型      |typeof返回值 |对象包装器|
|-----------|----------- |------|
| Null      | 'object'   |N/A|
| Undefined | 'undefined'|N/A|
| Boolean   | 'boolean'  |Boolean|
| Number    | 'number'   |Number|
| BigInt    | 'bigInt'   |BigInt|
| String    | 'string'   |String|
| Symbol    | 'symbol'   |Symbol|

## 特殊值 NaN
isNaN() 判断一个值是否为 NaN，首先将参数转换为数值，之后对转换的结果判断是否为NaN
```js
isNaN(Number.NaN);   //true
isNaN('12312'); //false
isNaN('231sfsdf'); //true   Number('231sfsdf') = NaN
```

Number.isNaN()判断一个值是否为 NaN，不转换，直接判断，更稳妥的NaN版本
```js
Number.isNaN('231sfsdf');   //false
Number.isNaN(Number('231sfsdf'));  //true
```
## Number
#d 用于表示数字。整数和浮点数都属于 Number 类型。
#e 例如：`10`、`3.14` 等。
#c 常用属性 Number.NaN
#c 常用方法
Number.isNaN()
Number.parseInt()   Number.parseFloat()
Number.isInteger()   Number.isSafeInteger()
Number.isFinite()----- 方法用来检测传入的参数是否是一个有穷数。


## String
#d 用于表示文本。字符串必须使用引号括起来，可以使用单引号或双引号

#c 详细内容
[[js数据类型-String]]

## Boolean
#d 用于表示逻辑值。只有两个取值：`true`（真）和 `false`（假）。

## Undefined 
#d 表示一个未定义的值，通常用于表示变量声明但未被初始化的情况。可以通过声明变量但不给它赋值来创建一个未定义的变量。

## Null
#d 表示一个空值或不存在的值。可以通过赋值操作将变量的值设置为 `null`。

## Symbol
#d 用于创建唯一的标识符，通常用于对象属性名的键。


## BigInt
#d 用于表示比 `Number` 类型更大的整数。在 JavaScript 中，数字的安全整数范围是 -2^53 ~ 2^53，而 `BigInt` 可以表示任意大的整数
#e 例如：`100000000000000000000000000n`。

## Object
#d 复杂数据类型，可以表示一组键值对的集合，或者是由构造函数创建的实例。对象可以包含其他对象，也可以包含函数作为方法，是 JavaScript 中最重要的数据类型之一。
### Object
#c 静态方法
1.  [x] Object.assign(target, ...sources)：用于将多个源对象的属性复制到目标对象中，返回目标对象。这个方法可以用于实现对象的浅拷贝。
    
2.  [x] Object.keys(obj)：返回对象中所有可枚举的属性的名称组成的数组。这个方法可以用于遍历对象的属性名称。
    
3.  [x] Object.values(obj)：返回对象中所有可枚举的属性的值组成的数组。这个方法可以用于遍历对象的属性值。
#c 实例方法
1.  [x] Object.prototype.toString()：返回当前对象的字符串表示，格式为 "[object type]"，其中 type 表示对象的类型。这个方法可以用来检测对象的类型。
    
2.  [x] Object.prototype.valueOf()：返回对象的原始值，一般情况下和对象本身是一样的。可以用来获取对象的原始值。
    
3.  [ ] Object.prototype.hasOwnProperty(prop)：判断对象自身是否包含某个属性，不包含继承来的属性。这个方法可以用来判断对象是否包含指定的属性。
    
4.  [ ] Object.prototype.isPrototypeOf(obj)：判断当前对象是否是 obj 对象的原型。这个方法可以用来检查一个对象是否是另一个对象的原型。
### Date  日期

### Array 索引类集合-数组
1.  [x] Array.prototype.concat()：用于连接两个或多个数组，并返回一个新数组。
    
2.  [x] Array.prototype.join()：用于将数组中的所有元素转换为一个字符串，并返回该字符串。
    
3.  [x] Array.prototype.push()：用于在数组的末尾添加一个或多个元素，并返回新的数组长度。
    
4.  [x] Array.prototype.pop()：用于删除数组的最后一个元素，并返回该元素。
    
5.  [x] Array.prototype.shift()：用于删除数组的第一个元素，并返回该元素。
    
6.  [x] Array.prototype.unshift()：用于在数组的开头添加一个或多个元素，并返回新的数组长度。
	
7.  [x] Array.prototype.splice()：用于向/从数组中添加/删除元素，并返回被删除的元素。
	```js
	splice(start)
	splice(start, deleteCount)
	splice(start, deleteCount, item1)
	splice(start, deleteCount, item1, item2, itemN)
	```

    
8.  [x] Array.prototype.slice()：用于从一个数组中截取一部分元素，并返回一个新的数组。
    ```js
    slice()
	slice(start)
	slice(start, end)
	```
9.  [x]  Array.prototype.sort()：用于对数组进行排序，返回排序后的数组。
    
10.  [x]  Array.prototype.reverse()：用于颠倒数组中元素的顺序，并返回该数组。
    
11.  [x] Array.prototype.indexOf()：用于查找数组中的元素，并返回它的下标值。
    
12.  [x] Array.prototype.lastIndexOf()：用于查找数组中的元素，并返回它的最后一个下标值。
    
13.  [x]  Array.prototype.filter()：用于过滤数组中的元素，并返回过滤后的新数组。
	 ```js
	filter((element) => { /* … */ } )
	filter((element, index) => { /* … */ } )
	filter((element, index, array) => { /* … */ } )
	``` 


14.  [x] Array.prototype.map()：用于对数组中的元素进行操作，并返回操作后的新数组。
   ```js
	map((element) => { /* … */ })
	map((element, index) => { /* … */ })
	map((element, index, array) => { /* … */ })
	``` 
   

15.  [x] Array.prototype.reduce()：用于对数组中的元素进行累加操作，并返回操作后的结果。
	 ```js
	 reduce((previousValue, currentValue) => { /* … */ } )
	 reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
	 reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )
	
	 reduce((previousValue, currentValue) => { /* … */ } , initialValue)
	 reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
	 reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)
	 ```
	 
16.  [x] Array.prototype.forEach()：用于遍历数组中的每个元素。


### Set、Map 带键的集合

### Function
1.  [x] Function.prototype.call()：用于调用一个函数，并且将一个指定的对象绑定到函数调用中的this关键字上。
	```js
	apply(thisArg)
	apply(thisArg, arg1,arg2,...arg)
	```
2.  [x] Function.prototype.apply()：用于调用一个函数，并且将一个指定的对象绑定到函数调用中的this关键字上，同时还可以传递一个数组作为函数调用的参数。
    ```js
	apply(thisArg)
	apply(thisArg, argsArray)
	```
3.  [x] Function.prototype.bind()：用于创建一个新的函数，该函数与原函数具有相同的代码体，但是this关键字会被绑定到一个指定的对象上。
    
4.  [x] Function.prototype.toString()：返回函数的源代码字符串。
    
5.  [x] Function.prototype.length：返回函数的形参个数。

### JSON
JSON.parse()
JSON.stringify()

