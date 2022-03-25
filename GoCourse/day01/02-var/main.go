package main

import "fmt"

//声明变量
//var name string
//var age int
//var isOk bool

//批量声明
var (
	name string // ""
	age  int    // 0
	isOk bool   // false
)

func main() {
	name = "滑稽"
	age = 16
	isOk = true
	// Go语言中变量声明必须使用
	// %s:占位符  使用name这个变量的值去替换占位符
	fmt.Printf("name:%s", name)

	//声明变量同时赋值
	var s1 string = "whb"
	fmt.Println(s1)

	// 类型推导(根据值判断该变量是什么类型)
	var s2 = "20"
	fmt.Println(s2)

	//简短变量声明 只能在函数里面用
	s3 := "火车王"
	fmt.Println(s3)

	//同一个作用域({}) 中不能重复声明同名的变量
	//匿名变量是一个特殊的变量
	// s1 := "10"

}
