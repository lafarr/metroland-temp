import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { data } from '../util/utils';


const localizer = momentLocalizer(moment);

const CustomCalendar = () => {
	const customStyles = `
		.events-calendar .rbc-time-view {
    border: none;
  }
		.events-calendar .rbc-time-header {
    display: none;
  }
		.events-calendar .rbc-time-content {
    border: none;
  }
		.events-calendar .rbc-day-slot {
    border: none !important;
  }
`;

	// Custom TimeGutterHeader component that renders nothing
	const CustomTimeGutterHeader = () => null;

	// Custom TimeGutter component that renders nothing
	const CustomTimeGutter = () => null;
	const [showingMonthly, setShowingMonthly] = useState(true);
	const [showingWeekly, setShowingWeekly] = useState(false);
	const [view, setView] = useState('month');
	const [currentDate, setCurrentDate] = useState(new Date());
	const [filterValue, setFilterValue] = useState('');
	const [events, setEvents] = useState(data);
	const [filteredEvents, setFilteredEvents] = useState(data);
	const handleFilter = useCallback((e) => {
		const val = e.target.value;
		console.log('Val: ' + val);

		setFilterValue(val);

		setFilteredEvents(prevEvents =>
			events.filter(event => event.title.toLowerCase().includes(val.toLowerCase()))
		);
	}, [events, setFilteredEvents]);


	const handlePrevMonth = () => {
		setCurrentDate(prevDate => moment(prevDate).subtract(1, 'month').toDate());
	};

	const handlePrevWeek = () => {
		setCurrentDate(prevDate => moment(prevDate).subtract(1, 'week').toDate());
	};

	const handleNextMonth = () => {
		setCurrentDate(prevDate => moment(prevDate).add(1, 'month').toDate());
	};

	const handleNextWeek = () => {
		setCurrentDate(prevDate => moment(prevDate).add(1, 'week').toDate());
	};

	const handleNavigate = (newDate) => {
		setCurrentDate(newDate);
	};
	const history = useHistory();

	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	});

	useEffect(() => {
		// axios.get('http://localhost:5140/api/events')
		//     .then(res => {
		const dbEvents = data;
		const calendarEvents = [];
		for (let i = 0; i < dbEvents.length; ++i) {
			console.log(dbEvents[i]);
			let [month, day, year] = dbEvents[i].date.split('/');
			month = parseInt(month);
			day = parseInt(day);
			year = parseInt('20' + year);
			const [time, timeOfDay] = dbEvents[i].time.split(' ');
			let [hours, minutes] = time.split(':');

			calendarEvents.push({
				...dbEvents[i],
				id: i,
				title: dbEvents[i].artist,
				start: new Date(year, month - 1, day),
				end: new Date(year, month - 1, day),
				link: dbEvents[i].link,
				venue: dbEvents[i].venue
			})
		}
		setEvents(calendarEvents);
		setFilteredEvents(calendarEvents);
		// console.log(JSON.stringify(res.data));
		// })
		// .catch(err => console.log(err));
	}, []);

	const CustomToolbar = ({ date, onNavigate }) => (
		<div className="custom-toolbar">
			<div className="input-container">
				<Search className="search-icon" />
				<input type="text" ref={inputRef} className="search-input" value={filterValue} onChange={handleFilter} key={1} />
			</div>
			{window.screen.width > 780 && <div className="calendar-type">
				<button style={{ fontSize: '20px', color: '#faff00' }} onClick={() => { setShowingMonthly(true); setShowingWeekly(false); setView('month'); }} className={`view-button ${view === 'month' ? 'active' : ''}`}>monthly</button>
				<span style={{ color: '#faff00' }}>|</span>
				<button style={{ fontSize: '20px', color: '#faff00' }} onClick={() => { setShowingWeekly(true); setShowingMonthly(false); setCurrentDate(new Date()); setView('week') }} className={`view-button ${view === 'week' ? 'active' : ''}`}>weekly</button>
			</div>}
		</div>
	);

	const customDayPropGetter = (date) => ({
		className: 'custom-day-bg',
	});

	const CustomMonthDateHeader = ({ date }) => (
		<div style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }} className="custom-date-header">
			<span onClick={() => history.push(`/events/${moment(currentDate).format('MM').length === 2 && moment(currentDate).format('MM').startsWith('0') ? moment(currentDate).format('MM').charAt(1) : moment(currentDate).format('MM')}-${date.getDate()}-${moment(currentDate).format('YYYY')}`)} className="month-name">{date.getDate()}</span>
		</div>
	);

	const CustomMonthHeader = ({ date, label }) => (
		<div className="custom-month-header">
			{label}
		</div>
	);

	const CustomEvent = ({ event }) => (
		<div onClick={() => window.open(event.link, '_blank')} style={{ fontWeight: 'bold', color: 'lightgray' }} className="custom-event">
			{showingMonthly ? <p className="weekly" style={window.screen.width < 780 ? { display: 'none' } : {}}>{`${event.title.toLowerCase()} @ ${event.venue.toLowerCase()}`}</p> : <><p className="weekly weekly-artist">{event.artist.toLowerCase()}</p><p className="weekly">{event.time.toLowerCase()}</p><p className="weekly">{event.venue.toLowerCase()}</p><p className="weekly">{event.town.toLowerCase()}</p></>}
		</div>
	);

	return (
		<div className="events-calendar">
			<div className="calendar-container">
				<div className="left-column">
					<button
						// onClick={onPrevMonth}
						className="arrow-button"
						aria-label="Previous month"
						onClick={showingMonthly ? handleNextMonth : handleNextWeek}
					>
						<ChevronUp />
					</button>
					<div className="month-container">
						<div className="top-left-month">
							{moment(currentDate).format('MMMM').toLowerCase()}
						</div>
					</div>
					<button
						// onClick={onNextMonth}
						className="arrow-button"
						aria-label="Next month"
						onClick={showingMonthly ? handlePrevMonth : handlePrevWeek}
					>
						<ChevronDown />
					</button>
				</div>
				{filteredEvents && <div className="main-calendar">
					<CustomToolbar />
					<Calendar
						localizer={localizer}
						events={filteredEvents}
						startAccessor="start"
						endAccessor="end"
						style={{ flex: 1 }}
						views={['month', 'week']}
						view={view}
						onView={setView}
						date={currentDate}
						onNavigate={handleNavigate}
						onShowMore={(blah) => { console.log(blah); history.push(`/events/${blah[0].start.getMonth() + 1}-${blah[0].start.getDate()}-${blah[0].start.getFullYear().toString()}`); }}
						components={{
							toolbar: () => null,
							timeGutterHeader: CustomTimeGutterHeader,
							timeGutter: CustomTimeGutter,
							month: {
								dateHeader: CustomMonthDateHeader,
								header: CustomMonthHeader,
							},
							event: CustomEvent,
						}}
						dayPropGetter={customDayPropGetter}
						formats={{
							monthHeaderFormat: 'MMMM',
						}}
					/>
				</div>}
				<style jsx global>{`
					.events-calendar .month-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
	.events-calendar .arrow-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #faff00;
  background-color: #333;
}

// .arrow-button:hover {
//   background-color: #444;
//   transform: scale(1.1);
// }

// .arrow-button:active {
//   background-color: #555;
//   transform: scale(0.95);
// }

// .arrow-button:focus {
//   outline: none;
//   box-shadow: 0 0 0 2px rgba(250, 255, 0, 0.5);
// }

	.events-calendar .arrow-button svg {
  width: 28px;
  height: 28px;
}

// .arrow-button:hover {
//   background-color: #e0e0e0;
//   transform: scale(1.1);
// }

// .arrow-button:active {
//   background-color: #d0d0d0;
//   transform: scale(0.95);
// }

// .arrow-button:focus {
//   outline: none;
//   box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
// }

	.events-calendar .arrow-button svg {
  width: 24px;
  height: 24px;
}
	.events-calendar .calendar-container {
          height: 100vh;
          background-color: #2a2727;
          padding: 20px;
          display: flex;
          overflow: hidden;
            box-sizing: border-box;
        }
	.events-calendar .left-column {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
  height: 40%; /* Adjust as needed */
  width: 60px; /* Set a fixed width */
  margin: auto;
}
	.events-calendar .top-left-month {
  color: #faff00;
  font-size: 36px;
  font-weight: bold;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  height: 200px;
  letter-spacing: 0px;
  margin: 15px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
	.events-calendar .main-calendar {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background-color: #2a2727;
        }
	.events-calendar .custom-toolbar {
          display: flex;
          justify-content: right;
          align-items: center;
          padding: 10px 0;
        }
        // .search-input {
        //   background-color: #333;
        //   color: #fff;
        //   border: 1px solid lightgray;
        //   padding: 5px 75px;
        //   margin-right: 10vw;
        //   border-radius: 20px;
        // }
	.events-calendar .view-button {
          color: #888;
          background: none;
          border: none;
          cursor: pointer;
          margin: 0 5px;
        }
	.events-calendar .view-button.active {
          color: #faff00;
        font-weight: bolder;
        }
	.events-calendar .custom-day-bg {
          background-color: #2a2727;
          color: #faff00;
          border: 1px solid #faff00;
        }
	.events-calendar .custom-date-header {
          text-align: left;
          padding: 5px;
          color: #faff00;
          font-size: 14px;
        }
	.events-calendar .custom-date-header:hover {
          opacity: .5;
          }
	.events-calendar .custom-month-header {
          color: #faff00;
          text-transform: uppercase;
          font-weight: bold;
          padding: 5px;
        }
	.events-calendar .custom-event {
          font-size: 12px;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
	.events-calendar .custom-event:hover {
            opacity: .5;
        }
	.events-calendar .rbc-event {
          border: none !important;
          background-color: transparent;
        //   padding: 0 !important;
          margin: 0 auto !important;
          width: 90%;
        }
	.events-calendar .rbc-event-content {
            color: black;
            text-align: center;
        }
	.events-calendar .rbc-button-link {
            margin: auto;
        }
	.events-calendar .rbc-button-link:hover {
            opacity: .5;
        }
	.events-calendar .rbc-day-bg {
          display: flex !important;
          flex-direction: column !important;
        }
	.events-calendar .rbc-events-container {
          flex: 1 !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: flex-start !important;
          overflow: hidden !important;
        }
	.events-calendar .rbc-row-content {
          flex: 1 !important;
          display: flex !important;
          flex-direction: column !important;
        }
	.events-calendar .rbc-time-content {
            display: none;
        }
	.events-calendar .rbc-allday-cell {
            // height: 90vh
        }
	.events-calendar .rbc-time-header {
            height: auto;
            width: 100%;
        }
	.events-calendar .rbc-calendar.* {
            box-sizing: border-box;
        }
	.events-calendar .rbc-time-header-content {
            width: auto;
                min-height: 50vh;
            }
	.events-calendar .rbc-time-view {
            overflow-y: auto;
                overflow-x: auto
            padding: 5vw;
            border: none;
            }
	.events-calendar .rbc-label {
            display: none;
        }
	.events-calendar .weekly {
           margin: 0;
        }
	.events-calendar .weekly-artist {
        color: #faff00;
        }
	.events-calendar .rbc-row-content-scroll-container {
          flex: 1 !important;
          display: flex !important;
          flex-direction: column !important;
        }
	.events-calendar .rbc-row-segment {
          flex: 0 0 auto !important;
        }
	.events-calendar .input-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: right;
            margin-right: 10vw;
           }

	.events-calendar .search-input {
  border: 1px solid lightgray;
  border-radius: 20px;
  font-size: 16px;
          padding: 5px 55px;
          background-color: inherit;
          color: lightgray;
}

	.events-calendar .search-icon {
  position: absolute;
  left: 10px;
  color: lightgray;
  pointer-events: none; /* Prevent the icon from blocking input interaction */
}

	.events-calendar .rbc-header {
border: 1px solid #faff00;
}
	.events-calendar .rbc-show-more {
          font-size: 12px !important;
          background-color: transparent !important;
          color: lightgray !important;
        }
	.events-calendar .rbc-selected {
        background-color: transparent !important;
        }
	.events-calendar .weekly {
            overflow: hidden;
            text-overflow: ellipsis;
        }
	.events-calendar .rbc-show-more-hover {
        color: lightgray;
        }
	.events-calendar .rbc-month-view, .rbc-time-view {
          background-color: #2a2727;
        }

	.events-calendar .rbc-row-segment {
            width: 90%;
        }
        @media (max-width: 768px) {
			.events-calendar .rbc-event {
            // display: none;
          }
				.events-calendar .rbc-button-link {
            display: none;
          }
				.events-calendar .calendar-container {
            flex-direction: column;
            padding: 10px;
          }
				.events-calendar .left-column {
            width: 100%;
            margin-right: 0;
            margin-bottom: 10px;
          }
				.events-calendar .top-left-month {
            writing-mode: horizontal-tb;
            transform: none;
            height: auto;
            text-align: center;
          }
				.events-calendar .custom-toolbar {
            flex-direction: column;
            align-items: stretch;
          }
				.events-calendar .custom-toolbar > div {
            margin-bottom: 10px;
          }
				.events-calendar .rbc-calendar {
            font-size: 12px;
          }
				.events-calendar .rbc-btn-group {
            display: none;
          }
				.events-calendar .input-container {
          display: none;
            }
				.events-calendar .calendar-type {
          margin: auto;
          }
				.events-calendar .month-name {
          text-align: center;
          }
				.events-calendar .left-column {
          height: 30%;
          }
        }
      `}</style>
			</div>
		</div>
	);
};

export default CustomCalendar;
