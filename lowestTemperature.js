readline();
let t = readline().split(' ').map(Number).reduce(function(p, c) {
  return (Math.abs(c) < Math.abs(p) ? c : Math.abs(c) == Math.abs(p)? Math.abs(c) : p);
});
(function(){
    return t ? console.log(t) : console.log(0);
})()
