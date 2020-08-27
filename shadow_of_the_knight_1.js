const [W, H] = readline().split(' ').map(x => +x);
const N = +readline();
let [batX, batY] = readline().split(' ').map(x => +x);

let above = 0;
let left = 0;
let below = H - 1;
let right = W - 1;
while (true) {
    const BOMB_DIR = readline();
    BOMB_DIR.includes('L') && (right = batX - 1);
    BOMB_DIR.includes('R') && (left = batX + 1);
    BOMB_DIR.includes('U') && (below = batY - 1);
    BOMB_DIR.includes('D') && (above = batY + 1);
    batX = Math.floor((right + left) / 2);
    batY = Math.floor((above + below) / 2);
    
    print(batX, batY);
}
