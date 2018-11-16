const ops = {
	'+': (a, b) => { return a+b },
	'*': (a, b) => { return a*b },
	'-': (a, b) => { return b-a },
	'/': (a, b) => { return b/a },
	'%': (a, b) => { return b%a }
}

let current = ''
let expr = []
let operations = ['(']

const operate = c => {
	if ( c === '(' ) {
		operations.push(c)
	} else if ( c === ')' ) {
		let ex = operations.pop()
		while ( ex !== '(' && ex !== null  ) {
			const a = expr.pop()
			const b = expr.pop()
			expr.push(ops[ex](a, b))
			ex = operations.pop()
		}
	} else if ( operations.length >= 0 && (operations[operations.length - 1]) >= precedence(c) ) {
		const a = expr.pop()
		const b = expr.pop()
		console.log(expr.push(ops[operations.pop()](a, b)))
		operations.push(c)
	} else {
		operations.push(c)
	}
}

const fun = (str) => {
	const operators = ['+', '-', '*', '/',  '^', '%', '(', ')']

	str.split('').forEach(c => {
		if ( operators.indexOf(c) >= 0 ) {
			if ( current !== '' ) {
				let num = parseFloat(current)
				expr.push(num)
				current = ''
			}
			operate(c)
		} else {
			current = current+c
		}
	})
	let num = parseFloat(current)
	expr.push(num)
	operate(')')
	let v = expr.pop()
	current = ''
    expr = []
    operations = ['(']
    return (isNaN(v))?'Error':v 
}

const precedence = c => {
	if ( c === '(' || c === ')' ) return 5
	if ( c === '^' ) return 4
	if ( c === '/') return 3
	if ( c === '*') return 2
	if ( c === '%') return 1
	if ( c === '+' || c === '-' ) return 0
}

export default fun