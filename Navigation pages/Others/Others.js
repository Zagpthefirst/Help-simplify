function coinFlip(){
let coinFlipResult='';
let flipDeterminer = Math.random();
if (flipDeterminer<0.5){
	coinFlipResult += 'Heads'
} else {coinFlipResult+= 'Tails'}
alert(`The result is ${coinFlipResult}`);
}