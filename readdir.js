/**
 * Created by dingyl on 2017/2/26.miaov19
 */
var fs=require('fs')
fs.readdir('../js', function(err,fileList){
    /*console.log(fileList);*/
    fileList.forEach(function(f){
       fs.stat(f, function(err,info){
           /*console.log(arguments);*/
           switch (info.mode){
               case 16822:
                   console.log('[文件夹]'+f);
                   break;
               case 33206:
                   console.log('[文件]'+f);
                   break;
               default:
                   console.log('[其他类型]'+f);
                   break;
           }
       })
    })
})
