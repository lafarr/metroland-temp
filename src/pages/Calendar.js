import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Search } from 'lucide-react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { musicData } from '../util/utils';

const MobileCalendar = (props) => {
	const tmpDate = new Date();
	const [selectedDate, setSelectedDate] = useState(new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()));
	const [weekDates, setWeekDates] = useState([]);
	const [showAllEvents, setShowAllEvents] = useState(false);
	const [bevents, setEvents] = useState(null);
	const [filteredEvents, setFilteredEvents] = useState(null);
	const [displayedEvents, setDisplayedEvents] = useState(null);

	const events = props.events;

	useEffect(() => {
		// const stateEvents = [];
		// let i = 0;
		// axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/events`)
		// 	.then(res => {
		// 		const data = res.data.events;
		// 		for (const event of data) {
		// 			const eventCopy = { ...event };
		// 			let [month, day, year] = eventCopy.Date.split('/');
		// 			day = day.length === 1 ? '0' + day : day;
		// 			month = month.length === 1 ? '0' + month : month;
		// 			eventCopy.date = `20${year}-${month}-${day}`
		// 			stateEvents.push({ id: i++, ...eventCopy });
		// 		}
		setEvents(events);
		let fEvents = events.filter((event) => {
			const [month, day, year] = event.date.split("/");
			const tmp = new Date(parseInt('20' + year), parseInt(month) - 1, parseInt(day));
			return tmp.getMonth() === selectedDate.getMonth() && tmp.getDate() === selectedDate.getDate() && tmp.getFullYear() === selectedDate.getFullYear();
		});
		sortEvents(fEvents);
		setFilteredEvents(fEvents);
		setDisplayedEvents(showAllEvents ? fEvents : fEvents.slice(0, 4));
	}, [selectedDate, showAllEvents]);

	useEffect(() => {
		const dates = getWeekDates(selectedDate);
		setWeekDates(dates);
		setShowAllEvents(false);
	}, [selectedDate]);

	const getWeekDates = (date) => {
		const week = [];
		for (let i = 0; i < 7; i++) {
			const day = new Date(date);
			day.setDate(date.getDate() - date.getDay() + i);
			week.push(day);
		}
		return week;
	};

	const handlePrevWeek = () => {
		const newDate = new Date(selectedDate);
		newDate.setDate(selectedDate.getDate() - 7);
		setSelectedDate(newDate);
	};

	const handleNextWeek = () => {
		const newDate = new Date(selectedDate);
		newDate.setDate(selectedDate.getDate() + 7);
		setSelectedDate(newDate);
	};

	const formatDate = (date) => {
		return date.toISOString().split('T')[0];
	};

	function sortEvents(events) {
		events.sort((a, b) => {
			const pattern = /(\d\d?)[;:](\d\d)[ ]?(\w\w)/;
			let aMilitaryTime = a.time;
			let [,aHours, aMins, aTimeOfDay] = aMilitaryTime.match(pattern);
			aTimeOfDay = aTimeOfDay.toLowerCase();
			if (aTimeOfDay === 'pm' && aHours === '12') {
				aHours = 12;
			} else {
				aHours = aTimeOfDay === "am" ? parseInt(aHours) : parseInt(aHours) + 12;
			}
			aMilitaryTime = (aHours * 100) + aMins;

			let bMilitaryTime = b.time;
			let [,bHours,bMins,bTimeOfDay] = bMilitaryTime.match(pattern);
			bTimeOfDay = bTimeOfDay.toLowerCase();
			//let [bHours, bMins] = bMilitaryTime.split(" ")[0].split(":");
			//let bTimeOfDay = bMilitaryTime.split(" ")[1].toLowerCase();
			if (bTimeOfDay === 'pm' && bHours === '12') {
				bHours = 12;
			} else {
				bHours = bTimeOfDay === "am" ? parseInt(bHours) : parseInt(bHours) + 12;
			}
			bMilitaryTime = (bHours * 100) + bMins;

			return aMilitaryTime > bMilitaryTime ? 1 : (aMilitaryTime < bMilitaryTime ? -1 : 0);
		})
	}

	return (
		<div className="min-h-screen max-w-2xl mx-auto p-4 bg-[#2a2727]">
			<h3 className="text-center text-[#faff00] block font-semibold mb-2">{selectedDate.toLocaleString('default', { month: 'long' })}</h3>
			<div className="flex items-center justify-between mb-4">
				<button onClick={handlePrevWeek} className="p-2 text-[#faff00] hover:bg-[#faff00] hover:bg-opacity-20 rounded-full transition-colors duration-200">
					<ChevronLeft className="w-6 h-6" />
				</button>
				<div className="flex space-x-1 sm:space-x-2 overflow-x-auto">
					{weekDates.map((date) => (
						<button
							key={date.toISOString()}
							onClick={() => setSelectedDate(date)}
							className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-center text-xs sm:text-sm font-medium transition-colors duration-200 ${selectedDate.toDateString() === date.toDateString()
								? 'bg-[#faff00] text-black'
								: 'bg-transparent text-gray-200 border-2 border-[#faff00] hover:bg-[#faff00] hover:bg-opacity-20'
								}`}
						>
							<span>{date.getDate()}</span>
						</button>
					))}
				</div>
				<button onClick={handleNextWeek} className="p-2 text-[#faff00] hover:bg-[#faff00] hover:bg-opacity-20 rounded-full transition-colors duration-200">
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
			<div className="p-4 text-center">
				{displayedEvents?.map((event) => (
					<div key={event.id} className="mb-2 p-2">
						<p className="font-semibold text-[#faff00] cursor-pointer hover:opacity-80" onClick={() => window.open(event.link, '_blank')}>{event.artist.toLowerCase()}</p>
						<p className="text-sm text-gray-200" onClick={() => window.open(event.link, '_blank')}>{event.venue.toLowerCase()}</p>
						<p className="text-sm text-gray-200" onClick={() => window.open(event.link, '_blank')}>{event.time.toLowerCase()}</p>
					</div>
				))}
				{filteredEvents && filteredEvents.length > 4 && !showAllEvents && (
					<button
						onClick={() => setShowAllEvents(true)}
						className="mt-2 w-3/4 py-2 bg-[#faff00] text-black rounded-md hover:bg-opacity-80 transition-colors duration-200"
					>
						Show More
					</button>
				)}
			</div>
		</div>
	);
};


const localizer = momentLocalizer(moment);

export default function DesktopCalendar() {
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
	const [events, setEvents] = useState(musicData);
	const [filteredEvents, setFilteredEvents] = useState(musicData);
	const handleFilter = useCallback((e) => {
		const val = e.target.value;

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
		const dbEvents = musicData;
		const calendarEvents = [];
		for (let i = 0; i < dbEvents.length; ++i) {
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
	}, []);

	const CustomToolbar = ({ date, onNavigate }) => (
		<div className="custom-toolbar">
			<div className="input-container">
				<Search className="search-icon" />
				<input type="text" ref={inputRef} className="search-input focus:outline-none" value={filterValue} onChange={handleFilter} key={1} />
			</div>
			{<div className="calendar-type">
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
			<span onClick={() => history.push(`/events/${moment(currentDate).format('MM').length === 2 && moment(currentDate).format('MM').startsWith('0') ? moment(currentDate).format('MM').charAt(1) : moment(currentDate).format('MM')}-${date.getDate()}-${moment(currentDate).format('YYYY')}?eventType=music`)} className="month-name">{date.getDate()}</span>
		</div>
	);

	const CustomMonthHeader = ({ date, label }) => (
		<div className="custom-month-header">
			{label}
		</div>
	);

	const CustomEvent = ({ event }) => (
		<div onClick={() => window.open(event.link, '_blank')} style={{ fontWeight: 'bold', color: 'lightgray' }} className="custom-event">
			{showingMonthly ? <p className="weekly">{`${event.title.toLowerCase()} @ ${event.venue.toLowerCase()}`}</p> : <><p className="weekly weekly-artist">{event.artist.toLowerCase()}</p><p className="weekly">{event.time.toLowerCase()}</p><p className="weekly">{event.venue.toLowerCase()}</p><p className="weekly">{event.town.toLowerCase()}</p></>}
		</div>
	);

	return (
		<>
			<div className="hidden md:block events-calendar">
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
							onShowMore={(blah) => { history.push(`/events/${blah[0].start.getMonth() + 1}-${blah[0].start.getDate()}-${blah[0].start.getFullYear().toString()}?eventType=music`); }}
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

	.events-calendar .rbc-calendar { overflow: auto; }

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
			{filteredEvents && <div className="md:hidden"><MobileCalendar events={filteredEvents} /></div>}
		</>
	);
};
