# es5 2014之前
1.  支持"strict mode"严格模式；
2.  引入了Array的一些新方法（例如forEach、map、filter等）；
3.  引入了Object的一些新方法（例如defineProperty、keys等）；
4.  支持JSON对象，提供了JSON.stringify和JSON.parse方法；
5.  支持Function.prototype.bind方法，用于改变函数的上下文；
6.  提供了try-catch语句，用于异常处理；
7.  支持原型链继承；
8.  引入了Function.prototype.call和Function.prototype.apply方法，用于改变函数的上下文。
# es6 2015
1.  引入了let和const关键字，用于定义块级作用域的变量；
2.  引入了模板字符串，用于更方便的拼接字符串；
3.  引入了箭头函数，简化了函数的书写方式；
4.  引入了默认参数和剩余参数（Rest parameters）；
5.  支持解构赋值，提供了更方便的变量赋值方式；
6.  引入了class关键字，用于更方便的定义类和继承；
7.  引入了Promise对象，用于更方便的异步编程；
8.  引入了模块化，可以方便地组织代码；
9.  引入了Symbol类型，提供了一种新的原始数据类型。
# es7 2016
1.  Array.prototype.includes：添加了一个用于判断一个数组是否包含某个元素的方法，返回一个布尔值；
2.  指数运算符：引入了一个双星号（**）运算符，用于计算指数；
3.  函数参数的默认值可以引用之前的参数：可以使用之前的参数作为后续参数的默认值；
4.  Array.prototype.flat：添加了一个用于将多维数组“展平”的方法；
5.  Array.prototype.flatMap：添加了一个用于对数组进行映射和“展平”操作的方法；
6.  Object.entries：返回一个对象自身可枚举属性的键值对数组；
7.  Object.values：返回一个对象自身可枚举属性的值的数组；
8.  Async Functions：使用async和await关键字可以更方便地进行异步编程。
# es2017
1.  异步函数：ES8的async/await更进一步，新增了异步迭代器（async iterators）和异步生成器（async generators），可以更方便地进行异步编程；
2.  Object.values()和Object.entries()方法返回的顺序和属性枚举的顺序一致；
3.  字符串填充方法：引入了padStart()和padEnd()方法，可以使用指定的字符填充字符串的开头或结尾；
4.  对象属性描述符：引入了Object.getOwnPropertyDescriptors()方法，可以获取一个对象的所有自身属性的描述符；
5.  SharedArrayBuffer和Atomics：引入了SharedArrayBuffer和Atomics对象，用于支持多线程编程；
6.  函数参数列表和调用中的尾逗号：ES8允许在函数参数列表和函数调用中使用尾逗号，方便修改和维护代码。
# es2018
1.  异步迭代器（Asynchronous Iterators）：ES2018允许异步迭代器的出现，这意味着可以使用async/await实现异步迭代，简化异步编程；
2.  Promise.finally()方法：引入了Promise.finally()方法，可以指定一个函数，不管Promise对象的状态是fulfilled还是rejected，都会执行该函数；
3.  Rest/Spread Properties：引入了Rest/Spread Properties语法，可以使用...语法来收集和展开对象和数组。
# es2019
1.  异步生成器（Asynchronous Generators）：ES2019允许异步生成器的出现，这意味着可以使用async/await实现异步生成器，简化异步编程；
2.  Promise.allSettled()方法：引入了Promise.allSettled()方法，可以等待所有的Promise对象都执行完毕，不管是fulfilled还是rejected，都会返回结果；
3.  新增了Array.prototype.{flat,flatMap}()方法：引入了Array.prototype.flat()和Array.prototype.flatMap()方法，用来处理多维数组和数组的映射。
# es2020
1.  动态导入（Dynamic Import）：ES2020允许在模块中使用动态导入语法，可以根据需要动态加载模块；
2.  可选链操作符（Optional Chaining）：引入了可选链操作符（?.），可以在对象的属性或方法不存在时，避免出现错误，代码更加简洁易读；
3.  空值合并操作符（Nullish Coalescing）：引入了空值合并操作符（??），可以在变量为null或undefined时，设置默认值，代码更加简洁易读；
4.  Promise.allSettled()方法：ES2020将Promise.allSettled()方法正式纳入规范，可以等待所有的Promise对象都执行完毕，不管是fulfilled还是rejected，都会返回结果。
# es2021
1.  逻辑赋值运算符（Logical Assignment Operators）：ES2021引入了三个逻辑赋值运算符（&&=、 ||= 和 ??=），可以在赋值的同时执行逻辑运算，简化代码；
2.  数字分隔符（Numeric Separators）：引入了数字分隔符（_），可以在数字常量中插入分隔符，提高数字的可读性；
3.  Promise.any()方法：ES2021引入了Promise.any()方法，可以等待多个Promise对象中有一个对象变为fulfilled，就立即返回该结果，提高异步编程的效率；
4.  String.prototype.replaceAll()方法：ES2021引入了String.prototype.replaceAll()方法，可以替换所有匹配的子字符串，类似于正则表达式中的/g标志。
# es2022
