
//10.给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

    //创建一个整数数组 nums
    let nums = [2,7,11,15];

    //创建目标值
    let target = 18;

    //创建新数组
    let newArr = [];

    //创建循环嵌套  遍历两次数组
    for(var i = 0 ; i < nums.length; i++){
        for(var j = 0 ; j < i ; j++){
            //如果 遍历两次的数组元素相同  则继续执行下一次循环
            if(nums[i] == nums[j]){

                continue;
                //如果不相同  则 两个元素相加  判断是否等于 目标值
            }else if(nums[i] + nums[j] == target){
                //如果等于  将 两个 索引 添加到 新数组中
                newArr[newArr.length] = i;
                newArr[newArr.length] = j;
            }
        }
    }
    //打印新数组
    console.log(newArr);
    


