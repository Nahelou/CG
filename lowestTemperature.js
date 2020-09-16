//The goal here is to have the tiniest code length
readline();
let t=readline().split(' ').map(Number).reduce(function(p, c){
  return(Math.abs(c)<Math.abs(p)?c:(Math.abs(c)==Math.abs(p)&&(c>0||p>0))?Math.abs(c):p
        )});
if(t){console.log(t)}else{console.log(0)}
