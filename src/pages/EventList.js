import styles from '../styles/EventList.module.css';
import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { musicData, artData, theaterData } from '../util/utils';

// TODO: Put the events for theater  and art as an export in utils, pull from there, and don't (no times) sort the theater and sort for the art crap

const EventList = () => {
	const { id } = useParams();
	const [events, setEvents] = useState(null);
	const location = new URLSearchParams(useLocation().search);
	const isMusic = location.get("eventType") === "music";
	const isArt = location.get("eventType") === "art";
	const isTheater = location.get("eventType") === "theater";
	const history = useHistory();
	const [month, day, year] = id.split('-');
	const tempDate = new Date(year, month - 1, day);
	const properDate = `${tempDate.toLocaleString('default', { weekday: 'long' })}, ${tempDate.toLocaleString('default', { month: 'long' })} ${tempDate.getDate()}, ${tempDate.getFullYear()}`;

	const goBack = () => {
		if (isMusic) {
			history.push("/calendar");
		} else if (isArt) {
			history.push("/art-calendar");
		} else if (isTheater) {
			history.push("/theater-calendar");
		}
	};

	const generateSortedEvents = (events) => {
		events = events.sort((a, b) => {
			console.log(a.time);
			let [aTime, aMorningOrNight] = a.time.split(' ');
			let [aHours, aMinutes] = aTime.split(':');
			aHours = parseInt(aHours);
			aMinutes = parseInt(aMinutes);
			if (aMorningOrNight === 'PM') {
				aHours += 12;
			}

			let [bTime, bMorningOrNight] = b.time.split(' ');
			let [bHours, bMinutes] = bTime.split(':');
			bHours = parseInt(bHours);
			bMinutes = parseInt(bMinutes);
			if (bMorningOrNight === 'PM') {
				bHours += 12;
			}

			if (aHours === bHours && aMinutes === bMinutes) {
				return 0;
			} else if (aHours < bHours || (aHours === bHours && aMinutes < bMinutes)) {
				return -1;
			}
			return 1;
		})

		return (
			events?.map(event => {
				return (
					<div className={styles.eventCard} key={event.id}>
						<div className={styles.eventTime}>{event.time}</div>
						<div className={styles.eventTitle}>{event.artist}</div>
						<div className={styles.eventTitle}>{event.venue}</div>
						<button onClick={() => window.open(event.link, '_blank')} className={`${styles.linkButton}`}>View Tickets/Venue</button>
					</div>
				)
			})
		)
	};

	useEffect(() => {
		const [month, day, year] = id.replaceAll('-', '/').split('/');
		const date = `${month}/${day}/${year.substring(2)}`;
		let filteredEvents = null;
		console.log("the date", date);
		if (isMusic) {
			filteredEvents = musicData.filter(event => event.date === date);
		} else if (isArt) {
			const newDate = new Date(date);
			filteredEvents = artData.filter(event => event.start <= newDate && event.end >= newDate);
		} else if (isTheater) {
			const newDate = new Date(date);
			filteredEvents = theaterData.filter(event => event.start <= newDate && event.end >= newDate);
		}

		setEvents(filteredEvents);
		console.log("FILTERED EVENTS", filteredEvents);
	}, [id])

	return (
		<>
			<ArrowBackIcon className={styles.arrow} onClick={goBack} style={{ color: 'lightgray', fontSize: '60px' }} />
			<div className={styles.container}>
				<header>
					<h1>Events</h1>
					<div className={styles.date} id="currentDate">{properDate}</div>
				</header>
				<div className={styles.eventsContainer} id="eventsContainer">
					{isMusic && events && generateSortedEvents(events)}
					{(isTheater || isArt) && events?.map(event => {
						return (
							<div className={styles.eventCard} key={event.id}>
								<div className={styles.eventTitle}>{event.title}</div>
								<div className={styles.eventTitle}>Organized By {event.organizer}</div>
								<div className={styles.eventTitle}>{event.location}</div>
							{isArt && <div className={styles.eventTitle}>Time: {event.time}</div>}
							{isTheater && <button onClick={() => window.open(event.link, '_blank')} className={`${styles.linkButton}`}>View Tickets/Venue</button>}
							</div>

						)
					})}
				</div>

			</div>
		</>
	)
};

export default EventList;
