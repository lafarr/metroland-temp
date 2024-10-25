import styles from '../styles/EventList.module.css';
import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { data } from '../util/utils';

const EventList = () => {
    const { id } = useParams();
    const [events, setEvents] = useState(null);
    const history = useHistory();
    const [month, day, year] = id.split('-');
    const tempDate = new Date(year, month - 1, day);
    const properDate = `${tempDate.toLocaleString('default', { weekday: 'long' })}, ${tempDate.toLocaleString('default', { month: 'long' })} ${tempDate.getDate()}, ${tempDate.getFullYear()}`;

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
        console.log('Here is the date: ' + date);
        const filteredEvents = data.filter(event => event.date === date);
        setEvents(filteredEvents);
        console.log(data);
    }, [id])

    return (
        <>
            <ArrowBackIcon className={styles.arrow} onClick={() => history.push('/calendar')} style={{ color: 'lightgray', fontSize: '60px' }} />
            <div className={styles.container}>
                <header>
                    <h1><span className={styles.musicNote}>🎵</span>Events</h1>
                    <div className={styles.date} id="currentDate">{properDate}</div>
                </header>
                <div className={styles.eventsContainer} id="eventsContainer">
                    {events && generateSortedEvents(events)}
                </div>
            </div>
        </>
    )
};

export default EventList;
