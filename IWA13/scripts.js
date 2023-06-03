let state = 'idle'
let user = 'John'
let calculated = '3'

// Only allowed to change below


const logCalc = () => { 
    function isString(calculated) {
        typeof calculated === 'numerical-string';
    }
    const calculatedAsNumber = isString ? calculated : parseNumber(calculated)
    calculated === calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
    calcUser
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()