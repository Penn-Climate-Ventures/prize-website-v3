import React, { useState, useEffect } from "react";
import "./styles.css";

const COUNTDOWN_TARGET = new Date("2025-04-25T23:59:59");

const getTimeLeft = () => {
	const totalTimeLeft =0;
	// const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	// const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	// const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	// const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	const days = Math.floor(0);
	const hours = Math.floor(0);
	const minutes = Math.floor(0);
	const seconds = Math.floor(0);
	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='countdown'>
			<div className='content'>
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1];
					return (
						<div className='box' key={label}>
							<div className='value'>
								<span>{value}</span>
								<span className='label'>{label.toUpperCase()}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Countdown;
