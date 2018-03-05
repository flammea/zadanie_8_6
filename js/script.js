var a = 2,
	b = 3,
	value;
value = (a * a) - (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
	} else {
    console.log('wynik ujemny');
	}

value = 0 ? 'tak' : 'nie';
console.log(value);