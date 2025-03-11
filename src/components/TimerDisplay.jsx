import React from "react";

const TimerDisplay = ({ minutes, seconds, sessionType }) => {
	return (
		<div className="text-center">
			<h2 className="text-2xl font-bold text-amber-900">{sessionType}</h2>
			<div className="">
				<div className="">
				<h1
					className="text-white font-bold"
				>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</h1>
				</div>
				
			</div>
		</div>
	);
};

export default TimerDisplay;
