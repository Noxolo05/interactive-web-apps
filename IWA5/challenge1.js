const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let shoes = '300 * 1'
let toys = '100 * 5'
let shirts = 150 * 'NONE_SELECTED'
let batteries = '35 * 2'
let pens = 5 * 'NONE_SELECTED' 

let subtotal = 300 + 500 + 0 + 70 + 0;
let shipping = null;
let currency = 'R';

if (location === 'RSA') { shipping === 400 && currency === 'R' }

if (location === 'NAM') {
shipping = 600 } 
else {shipping = 800}

if (subtotal > 1000) {
	if (location === 'NAM' && customers < 2) {
			if (location === 'RSA') {
		    shipping = 0 || shipping;
		}
	}
}

if (shipping === 400 && customers !== 1) { console.log(FREE_WARNING) }
else {if (location === 'NAM') {
	shipping = 600;
} else { 
	shipping = 800;
}
}

if (location === 'NK' ) {console.log(BANNED_WARNING);
}
let totalCost = subtotal + shipping;
console.log('Total Cost:' + currency + totalCost);