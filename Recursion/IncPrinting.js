// const TAKEDATA = require('./TakeData');
var ProceesStdIn =process.stdin;
ProceesStdIn.setEncoding('utf-8');
// var Intdata =  TAKEDATA.TakeInt();

function IncreasingNumberPrinting(d){
    if(d==0){
        return;
    }
    if(d==10){
        console.log('Num : ',d);
        return;
    }
    console.log('N : ',d);
    IncreasingNumberPrinting(d+1);
    

}
function DecreasingNumberPrinting(d){
    if(d==0){
        return;
    }
    if(d==1){
        console.log('Num : ',d);
        return;
    }
    console.log('N : ',d);
    DecreasingNumberPrinting(d-1);
    

}
function TakeInt(){
    var ans='';
    ProceesStdIn.on('data',function(data){
        if(data){
            ans =data;
            // IncreasingNumberPrinting(ans);
            DecreasingNumberPrinting(data); 
            process.exit();
        }
     });
     
} 
TakeInt();