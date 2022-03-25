package main

import "fmt"

// 常量
// 定义常量后不能修改
// 在程序运行期间不会改变的量
const pi = 3.1415926535

// 批量声明常量
const (
	statusOK = 200
	notFound = 404
)

// 批量声明常量时 , 如果某一行声明后没有赋值 默认就和上一行一致
const (
	a1 = 100
	a2
	a3
)

// iota  常量计数器 只能在常量的表达式中使用
// iota 在const关键字出现时将被重置为 0  const中每新增一行常量声明 将使iota计数一次

const (
	n1 = iota //0
	n2        //1
	n3        //2
)

const (
	b1 = iota //0
	b2 = 100  //100
	b3 = iota //2
)

//多常量声明一行
const (
	d1, d2 = iota + 1, iota + 2 //1
	d3, d4 = iota + 1, iota + 2 //2
)

//定于数量级  << 向左移动位数
const (
	_  = iota
	KB = 1 << (10 * iota)
	MB = 1 << (10 * iota)
	GB = 1 << (10 * iota)
	TB = 1 << (10 * iota)
	PB = 1 << (10 * iota)
)

func main() {
	//pi = 123
	fmt.Println("n1:", n1)
	fmt.Println("n2:", n2)
	fmt.Println("n3", n3)
	fmt.Println()
	fmt.Println("a1:", a1)
	fmt.Println("a2:", a2)
	fmt.Println("a3", a3)
	fmt.Println()
	fmt.Println("b1:", b1)
	fmt.Println("b2:", b2)
	fmt.Println("b3:", b3)
	fmt.Println()
	fmt.Println("d1:", d1)
	fmt.Println("d2:", d2)
	fmt.Println("d3:", d3)
	fmt.Println("d4:", d4)
}
