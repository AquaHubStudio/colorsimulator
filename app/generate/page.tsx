"use client";

import generateColors from "@/helpers/generateColors";
import { redirect } from "next/navigation";

export default function Generate() {
	const route = generateColors();

	redirect(route);
}
