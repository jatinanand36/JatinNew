var Standard_Input = process.stdin;
Standard_Input.setEncoding('utf-8');
console.log('Please Enter the input...');
Standard_Input.on('data',function (data){
  if(data=='\n'){
      process.exit();
  }
  else{
      SolveTOH(data);
      process.exit();
  }
});

function SolveTOH(d){
if(d==0){
    console.log('Data : ',d,'Its End!!');
    return;
}   
if(d==1){
    console.log('Data : ',d,' Its Only One');
    return;
}
SolveTOH(d-1);
console.log('Data 1 : ',d,' After Recursive Call');
SolveTOH(d-1);
// SolveTOH(d-1);
console.log('Data 2 : ',d,' After Recursive Call');
SolveTOH(d-1);
// SolveTOH(d-1);
console.log('Data 3 : ',d,' After Recursive Call');
SolveTOH(d-1);
}