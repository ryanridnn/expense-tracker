const NumberFormatter = new Intl.NumberFormat('en-us')

export const formatter = (num) => {
	if(num === null) return '0.00'
	const [digit, fraction] = num.toString().split('.')
	if(!fraction) return `${NumberFormatter.format(digit)}.00`
	return `${NumberFormatter.format(digit)}.${fraction}`
}
