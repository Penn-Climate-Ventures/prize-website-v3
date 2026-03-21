import React, { useState, useEffect } from "react";
import "./styles.css";

const getTimeLeft = (targetDate) => {
	const totalTimeLeft = targetDate - new Date();
	if (totalTimeLeft <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds };
};

const Countdown = ({ targetDate = new Date("2026-03-21T23:59:00") }) => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(targetDate));
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [targetDate]);

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
