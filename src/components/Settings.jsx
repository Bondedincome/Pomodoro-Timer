import React from "react";

const Settings = ({ workTime, shortBreak, longBreak, onChange }) => {
	return (
		<div className="flex flex-col gap-2 mt-4 w-140 h-130 bg-amber-300 p-10 rounded-4xl text-3xl font-bold text-white">
			<label className="bg-blue-950 rounded-lg md:box-border h-30 p-5">
				Work Time (minutes):
				<input
					className="bg-blue-400 rounded-lg pl-3"
					type="number"
					value={workTime}
					onChange={(e) => onChange("work", e.target.value)}
				/>
			</label>
			<label className="bg-blue-950 rounded-lg md:box-border h-30 p-5">
				Short Break (minutes):
				<input
					className="bg-blue-400 rounded-lg pl-3"
					type="number"
					value={shortBreak}
					onChange={(e) => onChange("shortBreak", e.target.value)}
				/>
			</label>
			<label className="bg-blue-950 rounded-lg md:box-border h-30 p-5">
				Long Break (minutes):
				<input
					className="bg-blue-400 rounded-lg pl-3"
					type="number"
					value={longBreak}
					onChange={(e) => onChange("longBreak", e.target.value)}
				/>
			</label>
		</div>
	);
};

export default Settings;
