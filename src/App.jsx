import React, { useState, useEffect } from "react";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import Settings from "./components/Settings";

const App = () => {
	const [timeLeft, setTimeLeft] = useState(25 * 60);
	const [isRunning, setIsRunning] = useState(false);
	const [sessionType, setSessionType] = useState("Work");
	const [workTime, setWorkTime] = useState(25);
	const [shortBreak, setShortBreak] = useState(5);
	const [longBreak, setLongBreak] = useState(15);
	const [sessionCount, setSessionCount] = useState(0);

	useEffect(() => {
		let timer;
		if (isRunning && timeLeft > 0) {
			timer = setInterval(() => {
				setTimeLeft((prev) => prev - 1);
			}, 1000);
		} else if (timeLeft === 0) {
			// Play Sound
			new Audio("/alarm.mp3").play();

			if (sessionType === "Work") {
				setSessionCount(sessionCount + 1);
				setSessionType(sessionCount % 4 === 0 ? "Long Break" : "Short Break");
				setTimeLeft(sessionCount % 4 === 0 ? longBreak * 60 : shortBreak * 60);
			} else {
				setSessionType("Work");
				setTimeLeft(workTime * 60);
			}
		}
		return () => clearInterval(timer);
	}, [isRunning, timeLeft]);

	const handleStart = () => setIsRunning(true);
	const handlePause = () => setIsRunning(false);
	const handleReset = () => {
		setIsRunning(false);
		setSessionType("Work");
		setTimeLeft(workTime * 60);
	};

	const handleSettingsChange = (type, value) => {
		if (type === "work") setWorkTime(value);
		if (type === "shortBreak") setShortBreak(value);
		if (type === "longBreak") setLongBreak(value);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[#E7D9C9]">
			<h1 className="text-3xl font-bold font-sans">Pomodoro Timer</h1>
			<TimerDisplay
				minutes={Math.floor(timeLeft / 60)}
				seconds={timeLeft % 60}
				sessionType={sessionType}
			/>
			<Controls
				onStart={handleStart}
				onPause={handlePause}
				onReset={handleReset}
				isRunning={isRunning}
			/>
			<Settings
				workTime={workTime}
				shortBreak={shortBreak}
				longBreak={longBreak}
				onChange={handleSettingsChange}
			/>
		</div>
	);
};

export default App;
