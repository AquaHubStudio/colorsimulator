import { redirect } from "next/navigation";

export default function updateRoute(
	color: string,
	colors: string[],
	index: number,
) {
	colors[index] = color.replace("#", "");
	const route = "/" + colors.join("-");

	window.history.replaceState(null, "", route);

	return route;
}

export function updateFullRoute(colors: string[]) {
	if (colors.length !== 6) {
		redirect("/");
	}

	colors.forEach((color, index) => {
		colors[index] = color.replace("#", "");
	});

	redirect("/" + colors.join("-"));
}
