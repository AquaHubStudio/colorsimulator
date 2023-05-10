"use client";

import colors from "@/config/colors";
import { redirect } from "next/navigation";

export default function Home() {
	const colorsArray = colors.map((color) => {
		return color.default;
	});

	redirect("/" + colorsArray.join("-"));
}
