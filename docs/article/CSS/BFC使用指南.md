#d 块格式化上下文（block formatting context，BFC）是web页面的可视css渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
#c 创建方式 
1. 根元素--html
2. 浮动元素
3. 绝对定位元素（fixed和absolute）
4. display----flow-root创建BFC
5. overflow值不为visible、clip的块元素
6. contain值为layout、content或paint

#c 作用 
1. 包含内部浮动
2. 排除外部浮动
3. 阻止外边距重叠
#d 边距折叠：块的上外边距 (margin-top)和下外边距 (margin-bottom)有时合并 (折叠) 为单个边距，其大小为单个边距的最大值 (或如果它们相等，则仅为其中一个)，这种行为称为边距折叠。
#c 三种情况
1. 同一层相邻元素之间
2. 没有内容将父元素和后代元素分开
3. 空的块级元素