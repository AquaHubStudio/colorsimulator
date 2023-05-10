"use client";

import Sidebar from "@/components/Sidebar";
import { updateFullRoute } from "@/helpers/updateRoute";
import { validHexColors } from "@/helpers/validColors";
import useColorStore from "@/stores/colors";
import Error from "next/error";

export default function Colors({ params }: { params: { colors: string } }) {
	const queryColors = params.colors.split("-");

	if (!validHexColors(queryColors) || queryColors.length !== 6) {
		return <Error statusCode={404} />;
	}

	useColorStore.setState({ colors: queryColors });
	updateFullRoute(queryColors);

	return (
		<main className="flex">
			<Sidebar />
			<div className="w-full">
				<p className="bg-primary">Color Primary</p>
				<p className="bg-secondary">Color Secondary</p>
				<p className="bg-bgPrimary">Background Primary</p>
				<p className="bg-bgSecondary">Background Secondary</p>
				<p className="text-textPrimary">Text Primary</p>
				<p className="text-textSecondary">Text Secondary</p>
			</div>
		</main>
	);
}
