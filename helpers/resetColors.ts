import colors from "@/config/colors";
import { updateFullRoute } from "./updateRoute";
import { updateAllColors } from "./updateColor";
import useColorStore from "@/stores/colors";

export default function resetColors() {
	const colorsArr = colors.map((color) => {
		return color.default;
	}) as [string, string, string, string, string, string];

	useColorStore.setState({ colors: colorsArr });
	updateAllColors(colorsArr);
	return updateFullRoute(colorsArr);
}
