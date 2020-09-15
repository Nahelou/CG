var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
var inputs = readline().split(' ');
const startRow = parseInt(inputs[0]);
const startCol = parseInt(inputs[1]);
const n = parseInt(readline());
let lengthT = [];

for (let i = 0; i < n; i++) {
    let maps = {};
    for (let j = 0; j < h; j++) {
        const mapRow = readline();
        maps[j] = mapRow.split(''); 
    }
    let sd = maps[startRow][startCol];
    let sr = startRow;
    let sc = startCol;
    let length = 0;

    const dir = {
    '^': function() {
        sr = sr - 1
        },
    '>': function() {
        sc = sc + 1
        },
    '<': function() {
        sc = sc - 1
        },
    'v': function() {
        sr = sr + 1
        }
    };

    while(Object.keys(dir).indexOf(sd) >= 0) {
        dir[sd]();
        sd = maps[sr][sc];
        length = length + 1
        if(length > (w*h)) {
            break;
        }
    }

    if (sd === 'T') {
        lengthT.push(length);
    }
    else {
        lengthT.push(99999);
    }
}


if(Math.min(...lengthT) == 99999){
    console.log('TRAP');
}
else {
    console.log(lengthT.indexOf(Math.min(...lengthT)));
}


