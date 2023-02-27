#d 用于表示文本。字符串必须使用引号括起来，可以使用单引号或双引号
#e 例如：`'hello'`、`"world"` 等。
#c 常用属性  String.length
#c 常用方法
### trim()、trimStart()、trimEnd()------去空格

### toUpperCase()、toLowerCase()、toLocalUpperCase(local?)、toLocalLowerCase(local?)-----转换大、小写字母

### substring 返回开始下标，结束下标之间的字符，不包括结束下标处字符
```js
substring(startIndex)
substring(startIndex,endIndex)
```

### slice开始和最后下标，不包括结束下标，负值为 length+负值--或倒数
```js
slice(beginIndex)
slice(beginIndex,endIndex)
```

### split 分割符分成数组，可选长度
```js
split(separator)
split(separator，limit)
```

### padStart、padEnd  返回 填充字符 达到 目标长度 的新字符串
```js
padStart(targetLength)
padStart(targetLength, padString) 
```

### repeat( count ) 返回重复 count 后的副本

### indexof 返回指定子字符串第一次出现的索引,   无则 -1
```js
indexOf(searchString)
indexOf(searchString, position) //可指定开始搜索位置
```
### includes 返回是否包含指定字符  true or false
```js
includes(searchString)
includes(searchString, position)
```
### concat 将一个或多个字符串拼接
```js
str.concat(str2, [, ...strN])
```

### stratsWith、endsWith 判断是否以给定字符串开始或结束
```js
str.endsWith(searchString)
str.endsWith(searchString,length)
```

### str.at 返回指定下标的字符，可为负数
```js
str.at(-1); // 倒数第一个字符；超出范围 undefined
```
