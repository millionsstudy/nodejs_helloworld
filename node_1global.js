//console.log(global) //查看全局属性
//console.log(__dirname)//当前文件绝对路径
//console.log(__filename)//当前文件绝对路径加文件名

//console.log('this is log');//可用‘文件名 >log.txt’重定向或‘文件名 1>log.txt’
//console.error('this is err');//可用‘文件名 2>err.txt’重定向
//console.info('this is info');//可用‘文件名 >log.txt’重定向或‘文件名 1>log.txt’
//console.warn('this is warn');//可用‘文件名 2>err.txt’重定向

//console.time('test');//计算代码执行时间，放在中间
//for(var i = 0; i<1000000000; i++){};
//console.timeEnd('test');

//输出
//process.stdout ->standard output
//process.stdout.write('this is stdout');
//process.stderr ->standard error
//process.stderr.write('this is stderr');

//读取输入
//process.stdin.setEncoding('utf-8');//先设置编码，纯文本为utf-8
//process.stdin.on('data',function(data){//启动监听，回调函数
//   console.log(data) ;//将用户的输入打印
//});

//读取输入2
//process.stdin.setEncoding('utf-8');
//process.stdin.on('readable',function(){
//    var data = process.stdin.read();
// console.log(data) ;});

//console.log(process.cwd());//文件执行目录

//process.on('exit', function(){
//    console.log('this is a exit');//程序正常结束时触发
//})

//process.on('SIGINT', function(){
//    console.log('this is a sight');//程序打断时被触发
   // process.exit();
//})

//var sum = require('./sum.js');
//console.log(sum.sum (10));

//console.log(process.argv);//输出数组，第一项和最后一项时node路径和本文件路径，中间包括输入所有的内容
