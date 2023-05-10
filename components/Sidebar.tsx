import resetColors from "@/helpers/resetColors";
import ColorPicker from "./ColorPicker";
import generateColors from "@/helpers/generateColors";

export default function Sidebar() {
	return (
		<aside className="h-screen w-max border-r border-neutral-300 sticky top-0 bg-stone-100 p-5 flex flex-col justify-between gap-5">
			<div className="flex flex-col gap-5">
				<p className="text-3xl font-bold text-neutral-600">Colors</p>
				<ColorPicker
					name="Primary Color"
					property="primary"
					index={0}
				/>
				<ColorPicker
					name="Secondary Color"
					property="secondary"
					index={1}
				/>
				<ColorPicker
					name="Background Primary"
					property="bgPrimary"
					index={2}
				/>
				<ColorPicker
					name="Background Secondary"
					property="bgSecondary"
					index={3}
				/>
				<ColorPicker
					name="Text Primary"
					property="textPrimary"
					index={4}
				/>
				<ColorPicker
					name="Text Secondary"
					property="textSecondary"
					index={5}
				/>
			</div>
			<div>
				<div>
					<button onClick={() => generateColors()}>Generate</button>
				</div>
				<div>
					<button onClick={() => resetColors()}>Reset</button>
				</div>
				{/* <div>
					<button onClick={() => setMenuOpenState(true)}>
						Export
					</button>
					<Menu state={menuOpenState} func={setMenuOpenState} />
				</div> */}
			</div>
		</aside>
	);
}
