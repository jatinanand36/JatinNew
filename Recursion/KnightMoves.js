var ProceesStdIn =process.stdin;
ProceesStdIn.setEncoding('utf-8');
function printBoard(Board,n){
    console.log("Final Board is");
    console.log(Board);
    process.exit();
//    for(var i=0;i<n;i++){
//     //    for(var j=0;j<n;j++){
//            console.log(Board[i]);
//     //    }
//     //    console.log();
//    }

}
function canPlace(board,n,r,c){
   return r >= 0 && r < n && c >=0 && c < n && board[r][c]==0;   
}
function isAllCellsMovebyKnight(n,board,r,c,moveNumber){
    if(moveNumber==n*n){
        return true;
    }
    var RowsofTwoAndHalf =[2,1,-1,-2,-2,-1,1,2];
    var ColumnsofTwoAndHalf =[1,2,2,1,-1,-2,-2,-1];
    for(var i=0;i<8;i++){
        var NextRow = r+RowsofTwoAndHalf[i];
        var NextCol = c+ColumnsofTwoAndHalf[i];
        if(canPlace(board,n,NextRow,NextCol)){
            board[NextRow][NextCol] = moveNumber+1;
            if(isAllCellsMovebyKnight(n,board,NextRow,NextCol,moveNumber+1)){
                return true;
            }
            board[NextRow][NextCol]=0;
        }
    }
    return false;

}
function isKnightMove(n){
       var Dimension =n;
       var Board =new Array(8);
       for(var i=0;i<Board.length;i++){
           Board[i] = new Array(8);
           for(var j=0;j<Board[i].length;j++){
               Board[i][j]=0;
           }
       }
       ;
       console.log('Board is');
       console.log(Board);
       var moveNumber=1;
       Board[0][0]=1;
       if(isAllCellsMovebyKnight(Dimension,Board,0,0,moveNumber)){
           printBoard(Board,Dimension);
       }
       else{
           console.log('You can not reach all cells of board!!');
       }
}
ProceesStdIn.on('data',function(data){
    if(data){
        ans =data;
        isKnightMove(data);
        process.exit();
    }
 });
