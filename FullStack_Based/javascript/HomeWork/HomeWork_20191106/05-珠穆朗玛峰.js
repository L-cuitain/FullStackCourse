//5.一张纸的厚度大约是0.08mm，对折多少次之后能达到珠穆朗玛峰的高度（8848.13米）？

var paper = 0.08;

var count = 0;

while(paper <= 8848.13){

    paper*=2;

    count++;
}

console.log(count);
