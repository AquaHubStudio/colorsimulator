import colors from "@/config/colors";

export function updateColor(property: string, color: string) {
	document.documentElement.style.setProperty(property, color);
}

/**
 * It's important that the colors are in the same hierarchy as the norm
 */
// The colors parameter must consist of 6 numbers
export function updateAllColors(
	newColors: [string, string, string, string, string, string],
) {
	colors.forEach((color, index) => {
		updateColor(`--${color.name}`, `#${newColors[index]}`);
	});
}
