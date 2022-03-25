package main

import "fmt"

//浮点数
// 布尔类型变量默认值位false
// Go语言不允许将整形强制转换为布尔值
// 布尔型无法参与数值运算 也无法与其他类型进行转换

func main() {
	// math.MaxFloat32
	f1 := 1.23456
	//默认Go语言小数位float64类型
	fmt.Println("%T\n", f1)

	f2 := float32(1.23456)
	fmt.Println("%T\n", f2)
}
