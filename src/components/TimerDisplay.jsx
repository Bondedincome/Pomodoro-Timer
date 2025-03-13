import React from "react";

const TimerDisplay = ({ minutes, seconds, sessionType }) => {
	return (
		<div className="text-center">
			<h2 className="text-2xl font-bold">{sessionType}</h2>
			<div className="relative flex items-center justify-center w-50 h-50 bg-red-500 rounded-full border-4 border-red-700 shadow-lg">
				<div className="absolute inset-0 flex justify-center items-center w-full h-full rounded-full border-[8px] border-dotted border-white">
				<h1
					className="text-white font-bold text-3xl"
				>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</h1>
				</div>
				
			</div>
		</div>
	);
};

export default TimerDisplay;
