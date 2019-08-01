var ProceesStdIn =process.stdin;
ProceesStdIn.setEncoding('utf-8');
ProceesStdIn.on('data',function(data){
    if(data){
        ans =data;
        PrintPermutation(data);
        process.exit();
    }
 });
function PrintPermutation(S,Ans){
    if(  S.length==0){
        Ans = S;
        console.log(Ans+" ");
        return;
    }
    for(var i=0;i<S.length;i++){
        var FirstChar = S.charAt(i);
        var s1 = S.substring(0,i) + S.substring(i+1);
        PrintPermutation(s1,Ans);
    }
}
