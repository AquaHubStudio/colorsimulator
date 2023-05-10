"use client";

import useColorStore from "@/stores/colors";
import { updateColor } from "../helpers/updateColor";
import updateRoute from "../helpers/updateRoute";
import { useEffect, useState } from "react";

export default function ColorPicker({
	name,
	property,
	index,
}: {
	name: string;
	property: string;
	index: number;
}) {
	const colors = useColorStore((state) => state.colors);

	const [color, setColor] = useState("#" + colors[index]);

	useEffect(() => {
		setColor("#" + colors[index]);
	}, [colors]);

	useEffect(() => {
		updateColor(`--${property}`, color);
	}, [color]);

	return (
		<div className="border-b border-neutral-300  pb-4">
			<p className="font-bold text-neutral-600 mb-1">{name}</p>
			<div className="flex items-center gap-2">
				{/* onBlur is for listenting to event where color picker closes */}
				<input
					type="color"
					className="bg-transparent"
					value={color}
					onChange={(e) => setColor(e.target.value)}
					onBlur={() => updateRoute(color, colors, index)}
				/>
				<input
					type="text"
					className="py-1 px-2 rounded-sm outline-none"
					placeholder="Color code"
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
			</div>
		</div>
	);
}
