import React from "react";

const Controls = ({ isRunning, onStart, onPause, onReset }) => {
	return (
		<div className="flex gap-4 justify-center mt-4">
			{!isRunning ? (
				<button
					onClick={onStart}
					className="bg-green-500 px-4 py-2 rounded text-white"
				>
					Start
				</button>
			) : (
				<button
					onClick={onPause}
					className="bg-yellow-500 px-4 py-2 rounded text-white"
				>
					Pause
				</button>
			)}
			<button
				onClick={onReset}
				className="bg-red-500 px-4 py-2 rounded text-white"
			>
				Reset
			</button>
		</div>
	);
};

export default Controls;
