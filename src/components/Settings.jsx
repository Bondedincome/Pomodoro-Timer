import React from "react";

const Settings = ({ workTime, shortBreak, longBreak, onChange }) => {
	return (
		<div className="flex flex-col gap-2 mt-4">
			<label className="bg-blue-950 rounded-lg text-white md:box-border">
				Work Time (minutes):
				<input
					className="bg-blue-400 rounded-lg text-white"
					type="number"
					value={workTime}
					onChange={(e) => onChange("work", e.target.value)}
				/>
			</label>
			<label >
				Short Break (minutes):
				<input
					type="number"
					value={shortBreak}
					onChange={(e) => onChange("shortBreak", e.target.value)}
				/>
			</label>
			<label>
				Long Break (minutes):
				<input
					type="number"
					value={longBreak}
					onChange={(e) => onChange("longBreak", e.target.value)}
				/>
			</label>
		</div>
	);
};

export default Settings;
