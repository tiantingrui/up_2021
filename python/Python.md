# Python



Python 是面向对象的语言



### Python认知



编译型语言（C、C++）运行效率快、开发效率低

解释性语言（JavaScript、Python）运行效率高、开发效率高



#### python 用途

1. 爬虫
2. 大数据与数据分析（Spark）
3. 自动化运维与自动化测试
4. web开发（Flask、Django）
5. 机器学习（Tensor Flow）
6. 胶水语言：能够把用其他语言制作的各种模块（尤其是C/C++）联结在一起



当你遇到问题时，随手拿起python，编写一个工具，这才是Python 正确的打开方式



#### 书籍推荐

《流畅的python》



#### 习题

python oj



#### 后续学习内容

数据库，选择框架 Web Django Flask



#### 数据分析

数学模型（数学 功底）



#### AI



## Python 基本数据类型

> type() 查询数据类型

### 数字

整数：int

浮点数：float



```py
1/2
// 0.5

1//2
// 0
```



#### Python 中如何表示 2进制、8进制、16进制

二进制：

0b10: 2

0b11:  3

0b100: 4

0b101: 5



8进制：

0o10: 8

0o11: 9



16进制：

0x10: 16

0x1F：31



##### 进制转换：

转换为二进制：

```python
bin(10) // 0b1010
bin(0o7) // 0b111
bin(0xE) // 0b1110
```



转换为10进制

```python
int(0b111) // 7
int(0o77) // 63
```



转换为16进制

```python
hex(888) // 0x378
hex(0o7777) // 0xfff
```



转换为8进制

```python
oct(0b111) //0o7
oct(0x777) // 0o3567
```





### Number: 数字

+ int
+ float
+ bool 布尔类型：表示真假
+ complex  复数 - 带`j`
  + type(36j)   (<class 'complex'>)



#### 布尔类型

```python
int(True) # 1
int(False) # 0

bool(1) # True
bool(0) # False
bool(0b0) # False
bool(0b1) # True

bool(None) #False
bool([]) # False
bool({}) # False
```



### str 字符串

如何表示 字符串

单引号、双引号、三引号





### 列表 - list(相对于js 中的数组)

> 可变类型

+ 两个列表相加

  ```python
  [1, 2, 3, 4] + [5, 6]
  # [1,2,3,4,5,6]
  ```

  



### 元祖 - tuple（js 中不存在此数据类型）

> 不可变类型

（1，2，3，4）



##### 序列（str list tuple）共有属性

+ 下标
+ 切片（步长）
+ in \ not in (2 in [1,2, 3])
+ len()
+ max([1,2,3]) min() sum()



> ord() 转换为 ASCII 码
>
> ord('d' ) - 100





### 集合 - set

> 无序
>
> 去重

+ len({1, 2, 3})  
+ 1 in {1, 2, 3}



#### 场景

+ 删除集合中重复的元素

  ```python
  {1, 2, 3, 4, 5, 6} - {3, 4}
  ```

+ 两个集合中共有的元素

  ```python
  {1, 2, 3, 4, 5, 6} & {3,4}
  # {3, 4}
  ```

+ 合并两个集合

  ```python
  {1, 2, 3, 4, 5, 6, 7} | {3, 4, 7}
  # {1, 2, 3, 4, 5, 6, 7}
  ```

  

#### 定义一个空集合

`set()`





### 字典 - dict

> 不能有重复的 key ，会去重
>
> key 必须是不可变类型

{key: val}



### 总结基本数据类型

![image-20210119160214496](/Users/terry/typero-image/image-20210119160214496.png)





## 变量

### 值类型 & 引用类型

值类型： int  str  tuple (不可变)

引用类型： list set dict（可变）

> id() 查看内存地址





### 列表的可变与元组的不可变



```python
a = (1,2,[3, 4])
a[1] = '3' # 报错
a[2][1] = '6' 成功
```





### 运算符

+ 算术运算符
  + +
  + -
  + *
  + /
  + //（保留整数的除法）
  + %（取余）
  + ** （幂方）
+ 赋值运算符
  + =
  + +=
  + -=
  + *=
  + /=
  + %=
  + **=
  + //=
+ 比较运算符
  + `>`
  + <
  + `>=`
  + <=
  + == （只比较取值是否相等）

+ 逻辑运算符

  + and  (js 中的 &&)
  + or (js ||)
  + not (js !)

+ 身份运算符

  + is  (比较的是两个变量的内存地址是否相等)
  + is not

+ 位运算符

  + &

  + |

  + ^

  + ~

  + <<

  + `>>`

    

> a = 'aa'
>
> isinstance(a, str)
>
> isinstance(a,(int, str, float))
>
> 



**对象的三个特征：id 、 value 、type**

is  == isinstance





## 分支、循环、条件与枚举



+ if 
+ if else
+ If elif else
+ for
+ while