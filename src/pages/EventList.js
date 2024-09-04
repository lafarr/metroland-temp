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

    // Mon Aug 05 2024
    const cleanDate = (date) => {
        console.log('Dirty date: ' + date);
        const [dirtyDayOfWeek, dirtyMonth, dirtyDay, dirtyYear] = date.split(' ');
        let cleanedDateString = '';
        switch (dirtyDayOfWeek) {
            case 'Sun':
                cleanedDateString += 'Sunday, ';
                break;
            case 'Mon':
                cleanedDateString += 'Monday, ';
                break;
            case 'Tue':
                cleanedDateString += 'Tuesday, ';
                break;
            case 'Wed':
                cleanedDateString += 'Wednesday, ';
                break;
            case 'Thu':
                cleanedDateString += 'Thursday, ';
                break;
            case 'Fri':
                cleanedDateString += 'Friday, ';
                break;
            case 'Sat':
                cleanedDateString += 'Saturday, ';
                break;
            default:
                throw new Error('There is something going on with day of week in cleanDate()...' + dirtyDayOfWeek);
        }

        switch (dirtyMonth) {
            case 'Jan':
                cleanedDateString += 'January';
                break;
            case 'Feb':
                cleanedDateString += 'February';
                break;
            case 'Mar':
                cleanedDateString += 'March';
                break;
            case 'Apr':
                cleanedDateString += 'April';
                break;
            case 'May':
                cleanedDateString += 'May';
                break;
            case 'Jun':
                cleanedDateString += 'June';
                break;
            case 'Jul':
                cleanedDateString += 'July';
                break;
            case 'Aug':
                cleanedDateString += 'August';
                break;
            case 'Sep':
                cleanedDateString += 'September';
                break;
            case 'Oct':
                cleanedDateString += 'October';
                break;
            case 'Nov':
                cleanedDateString += 'November';
                break;
            case 'Dec':
                cleanedDateString += 'December';
                break;
            default:
                throw new Error('Something has gone horribly wrong with dirtyMonth in cleanDate()...');
        }

        if (dirtyDay.length === 2 && dirtyDay.charAt(0) === '0') {
            cleanedDateString += ' ' + dirtyDay.charAt(1) + ', ' + dirtyYear;
            console.log('Cleaned day: ' + dirtyDay.charAt(1))
        } else {
            cleanedDateString += ' ' + dirtyDay + ', ' + dirtyYear;
            console.log('Cleaned day: ' + dirtyDay);
        }
        console.log('Dirty day: ' + dirtyDay);

        return cleanedDateString
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
                    <div className={styles.date} id="currentDate">{cleanDate(new Date(id).toDateString())}</div>
                </header>
                <div className={styles.eventsContainer} id="eventsContainer">
                    {events && generateSortedEvents(events)}
                </div>
            </div>
        </>
    )
};

export default EventList;
