export function validHexColor(color: string) {
	return color.match("/[0-9A-Fa-f]{6}/g");
}

export function validHexColors(colors: string[]) {
	let isValid = true;

	colors.forEach((color) => {
		if (!/[0-9A-Fa-f]{6}/g.test(color)) {
			isValid = false;
		}
	});

	return isValid;
}
