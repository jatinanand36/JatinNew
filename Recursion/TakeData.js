var ProceesStdIn =process.stdin;
ProceesStdIn.setEncoding('utf-8');

const TakeDataObj={
    TakeInt:function(){
        var ans='';
        ProceesStdIn.on('data',function(data){
            if(data){
                ans =data;
                process.exit();
            }
         });
         return parseInt(data);
    },
    TakeFloat:function(){
        var ans='';
        ProceesStdIn.on('data',function(data){
            if(data){
                ans =data;
                process.exit();
            }
         });
         return parseFloat(data);
    },
    TakeLine:function(){
        var ans='';
        ProceesStdIn.on('data',function(data){
            if(data){
                ans =data;
                process.exit();
            }
         });
         return data;
    }
};
module.export = TakeDataObj;