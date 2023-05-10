export function getCssValue(val: string) {
	return getComputedStyle(document.documentElement).getPropertyValue(val);
}
