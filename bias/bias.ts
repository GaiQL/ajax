
/*

      三斜线指令：

        三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。

        ------三斜线指令仅可放在包含它的文件的最顶端。
              一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。
              如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。

              /// <reference path="..." />  它用于声明文件间的 依赖。引用自己会报错

              如果指定了  --noResolve   编译选项，三斜线引用会被忽略；它们不会增加新文件，也不会改变给定文件的顺序。

              /// <reference types="..." />  声明了对某个包的依赖。

              对这些包的名字的解析与在 import语句里对模块名的解析类似。
              可以简单地把三斜线类型引用指令当做 import声明的包。

              /// <reference no-default-lib="true"/>  这个指令告诉编译器在编译过程中不要包含这个默认库。这与在命令行上使用 --noLib相似。

              当传递了--skipDefaultLibCheck时，编译器只会忽略检查带有/// <reference no-default-lib="true"/>的文件。

              /// <amd-module />   指令允许给编译器传入一个可选的模块名：

              /// <amd-dependency path="x" />告诉编译器有一个非TypeScript模块依赖需要被注入，做为目标模块require调用的一部分。
              amd-dependency指令也可以带一个可选的name属性；它允许我们为amd-dependency传入一个可选名字：

*/
