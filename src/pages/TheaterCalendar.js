import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Search } from 'lucide-react';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import './theater-styles.css';

const localizer = momentLocalizer(moment);


const CustomEvent = ({ event }) => (
	<div onClick={() => window.open(event.link, '_blank')} style={{ width: '100%', color: 'black' }} className="custom-event cursor-pointer">
		{<p className="weekly w-full overflow-hidden text-ellipsis" style={window.screen.width < 780 ? { display: 'none' } : {}}><span className="italic">{event.title.split("@")[0].toLowerCase()}</span> @ {event.title.split("@")[1].substring(1)}</p>}
	</div>
);


const MobileCalendar = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [weekDates, setWeekDates] = useState([]);
	const [showAllEvents, setShowAllEvents] = useState(false);
	const [bevents, setEvents] = useState(null);
	const [filteredEvents, setFilteredEvents] = useState(null);
	const [displayedEvents, setDisplayedEvents] = useState(null);

	const events = [
		{
			start: new Date(2024, 10, 1),
			end: new Date(2024, 10, 3),
			title: "Villain Cabaret Prop Drive",
			location: "Albany High Theater Ensemble",
			link: "https://www.albanyschools.org/schools/albanyhigh/theater"
		},
		{
			start: new Date(2024, 9, 26),
			end: new Date(2024, 10, 4),
			title: "Centuries",
			location: "Ancram Center For The Arts",
			link: "https://www.ancramcenter.org/"
		},
		{
			start: new Date(2024, 9, 30),
			end: new Date(2024, 9, 31),
			title: "Whispering Bones",
			location: "Bennington Theatre",
			link: "https://benningtontheater.org/"
		},
		{
			start: new Date(2024, 9, 17),
			end: new Date(2024, 9, 28),
			title: "Berta, Berta",
			location: "Black Theatre Troupe of Upstate NY @ theREP",
			link: "https://attherep.org/"
		},
		{
			start: new Date(2024, 10, 14),
			end: new Date(2024, 10, 25),
			title: "Discord",
			location: "Bridge Street Theatre",
			link: "https://bridgest.org/"
		},
		{
			start: new Date(2024, 9, 25),
			end: new Date(2024, 9, 28),
			title: "Peter Samelson: Magic, Love, Mystery!",
			location: "Bridge Street Theatre",
			link: "https://bridgest.org/"
		},
		{
			start: new Date(2024, 10, 14),
			end: new Date(2024, 10, 18),
			title: "Legally Blonde",
			location: "Broadway Upstate",
			link: "https://www.broadwayupstate.com/shows/"
		},
		{
			start: new Date(2024, 10, 15),
			end: new Date(2024, 10, 25),
			title: "Valley Song",
			location: "BTTUNY @ Hubbard Hall Center for Arts & Education",
			link: "https://hubbardhall.org/event/valley-song-a-play-in-partnership-with-black-theatre-troupe-3/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 18),
			title: "The Mousetrap",
			location: "Bunbury Players @ The Edison Club",
			link: "https://www.facebook.com/BunburyPlayers2020/"
		},
		{
			start: new Date(2024, 10, 3),
			end: new Date(2024, 10, 4),
			title: "Playwrights Jam",
			location: "Caffe Lena",
			link: "https://www.caffelena.org/"
		},
		{
			start: new Date(2024, 10, 22),
			end: new Date(2024, 11, 23),
			title: "A Sherlock Carol",
			location: "Capital Reperatory Theatre",
			link: "https://attherep.org/"
		},
		{
			start: new Date(2024, 9, 11),
			end: new Date(2024, 9, 28),
			title: "Bat Boy: The Musical",
			location: "Center for Performing Arts at Rhinebeck",
			link: "https://www.centerforperformingarts.org/"
		},
		{
			start: new Date(2024, 10, 13),
			end: new Date(2024, 10, 25),
			title: "Comic Potential",
			location: "Circle Theatre Players",
			link: "https://www.slca-ctp.org/"
		},
		{
			start: new Date(2024, 9, 27),
			end: new Date(2024, 9, 27),
			title: "CAST Party to Benefit CRFT",
			location: "Cohoes Music Hall",
			link: "https://www.thecohoesmusichall.org/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 18),
			title: "Sussical Jr",
			location: "Colonial Little Theatre",
			link: "https://coloniallittletheatre.org/"
		},
		{
			start: new Date(2024, 10, 15),
			end: new Date(2024, 10, 24),
			title: "Psalm 91",
			location: "Creative Action Unlimited",
			link: "https://capartscenter.org/"
		},
		{
			start: new Date(2024, 9, 24),
			end: new Date(2024, 10, 11),
			title: "Gaslight",
			location: "Curtain Call Theatre",
			link: "https://www.curtaincalltheatre.com/"
		},
		{
			start: new Date(2024, 9, 25),
			end: new Date(2024, 9, 28),
			title: "The Addams Family",
			location: "Debuts Theatre Company",
			link: "https://www.mydebuts.com/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 17),
			title: "Six: The Musical Teen Edition",
			location: "Fallen Chandelier Productions",
			link: "https://www.facebook.com/fallenchandelierproductions/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 11),
			title: "Our Town",
			location: "Fort Salem Theatre",
			link: "https://www.fortsalem.com/"
		},
		{
			start: new Date(2024, 10, 23),
			end: new Date(2024, 10, 25),
			title: "The Lion King Jr",
			location: "Galway Players",
			link: "https://www.galwayplayers.org/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 11),
			title: "9 to 5: The Musical",
			location: "Glens Falls Community Theatre",
			link: "https://www.gfcommunitytheatre.org/"
		},
		{
			start: new Date(2024, 10, 7),
			end: new Date(2024, 10, 17),
			title: "Into the Breeches!",
			location: "Harbinger @ Albany Barn",
			link: "https://albanybarn.org/"
		},
		{
			start: new Date(2024, 9, 26),
			end: new Date(2024, 9, 27),
			title: "The Dinner Detective",
			location: "Hilton Garden Inn",
			link: "https://www.thedinnerdetective.com/albany/"
		},
		{
			start: new Date(2024, 9, 26),
			end: new Date(2024, 9, 27),
			title: "Whispering Bones",
			location: "Hubbard Hall Center for Arts & Education",
			link: "https://hubbardhall.org/"
		},
		{
			start: new Date(2024, 9, 18),
			end: new Date(2024, 9, 28),
			title: "The Musical of Musicals",
			location: "Not So Common Players @ The Edison Club",
			link: "http://www.notsocommonplayers.org/"
		},
		{
			start: new Date(2024, 11, 3),
			end: new Date(2024, 11, 9),
			title: "MJ",
			location: "Proctors Theatre",
			link: "https://www.atproctors.org/"
		},
		{
			start: new Date(2024, 11, 14),
			end: new Date(2024, 11, 17),
			title: "Northeast Ballet's Annual The Nutcracker",
			location: "Proctors Theatre",
			link: "https://www.atproctors.org/"
		},
		{
			start: new Date(2024, 9, 31),
			end: new Date(2024, 10, 1),
			title: "Whispering Bones",
			location: "Proctors Theatre",
			link: "https://www.atproctors.org/"
		},
		{
			start: new Date(2024, 9, 18),
			end: new Date(2024, 9, 28),
			title: "Little Shop of Horrors",
			location: "R'ville Stage Creations",
			link: "https://rville-stage-creations.square.site/"
		},
		{
			start: new Date(2024, 10, 15),
			end: new Date(2024, 10, 25),
			title: "Moon for the Misbegotten",
			location: "Schenectady Civic Players",
			link: "https://www.civicplayers.org/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 18),
			title: "Mean Girls",
			location: "Schenectady Light Opera Company",
			link: "https://sloctheater.org/"
		},
		{
			start: new Date(2024, 10, 1),
			end: new Date(2024, 10, 4),
			title: "Play On!",
			location: "Schuylerville Community Theatre",
			link: "https://www.scttheater.org/"
		},
		{
			start: new Date(2024, 10, 14),
			end: new Date(2024, 10, 24),
			title: "Guys & Dolls",
			location: "Siena Creative Arts",
			link: "https://www.siena.edu/departments/creative-arts/"
		},
		{
			start: new Date(2024, 10, 22),
			end: new Date(2024, 11, 8),
			title: "Black Super Hero Magic Mama",
			location: "Skidmore College Theatre",
			link: "https://theater.skidmore.edu/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 18),
			title: "The 25th Annual Putnam County Spelling B",
			location: "Steamer No 10 Theatre",
			link: "https://steamer10theatre.org/"
		},
		{
			start: new Date(2024, 10, 2),
			end: new Date(2024, 10, 24),
			title: "Fool Me Once",
			location: "The Addy Theatre at Proctors",
			link: "https://www.atproctors.org/"
		},
		{
			start: new Date(2024, 9, 25),
			end: new Date(2024, 10, 4),
			title: "Into the Woods",
			location: "Theatre Intitute at Sage Teens",
			link: "https://theatre.sage.edu/"
		},
		{
			start: new Date(2024, 9, 23),
			end: new Date(2024, 9, 28),
			title: "Machinal",
			location: "UAlbany Theatre",
			link: "https://www.albany.edu/musicandtheatre"
		},
		{
			start: new Date(2024, 10, 20),
			end: new Date(2024, 10, 25),
			title: "Mary Shelley Meets Frankenstein",
			location: "UAlbany Theatre",
			link: "https://www.albany.edu/musicandtheatre"
		},
		{
			start: new Date(2024, 9, 30),
			end: new Date(2024, 10, 4),
			title: "7 Plays / 7 Days",
			location: "Union College Theatre",
			link: "https://www.union.edu/theater-dance"
		},
		{
			start: new Date(2024, 9, 26),
			end: new Date(2024, 9, 26),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 2),
			end: new Date(2024, 10, 2),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 9),
			end: new Date(2024, 10, 9),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 16),
			end: new Date(2024, 10, 16),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 23),
			end: new Date(2024, 10, 23),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 30),
			end: new Date(2024, 10, 30),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
	];

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
		// console.log(stateEvents);
		console.log(formatDate(selectedDate))
		const fEvents = events.filter((event) => event.start <= selectedDate && event.end >= selectedDate);
		setFilteredEvents(fEvents);
		setDisplayedEvents(showAllEvents ? fEvents : fEvents.slice(0, 4));
		// })
		// .catch(err => console.log(err));
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
						<p className="font-semibold text-[#faff00] cursor-pointer hover:opacity-80" onClick={() => window.open(event.link, '_blank')}>{event.title.toLowerCase()}</p>
						<p className="text-sm text-gray-200" onClick={() => window.open(event.link, '_blank')}>{event.location.toLowerCase()}</p>
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


export default function TheaterCalendar() {
	const history = useHistory();
	const [currentDate, setCurrentDate] = useState(new Date());

	const CustomMonthDateHeader = ({ date }) => (
		<div style={{ fontSize: '16px', color: '#faff00', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }} className="custom-date-header">
			<span onClick={() => history.push(`/events/${moment(currentDate).format('MM').length === 2 && moment(currentDate).format('MM').startsWith('0') ? moment(currentDate).format('MM').charAt(1) : moment(currentDate).format('MM')}-${date.getDate()}-${moment(currentDate).format('YYYY')}?eventType=theater`)} className="month-name">{date.getDate()}</span>
		</div>
	);
	const events = [
		{
			start: new Date(2024, 10, 1),
			end: new Date(2024, 10, 3),
			title: "Villain Cabaret Prop Drive",
			location: "Albany High Theater Ensemble",
			link: "https://www.albanyschools.org/schools/albanyhigh/theater"
		},
		{
			start: new Date(2024, 9, 26),
			end: new Date(2024, 10, 4),
			title: "Centuries",
			location: "Ancram Center For The Arts",
			link: "https://www.ancramcenter.org/"
		},
		{
			start: new Date(2024, 9, 30),
			end: new Date(2024, 9, 31),
			title: "Whispering Bones",
			location: "Bennington Theatre",
			link: "https://benningtontheater.org/"
		},
		{
			start: new Date(2024, 9, 17),
			end: new Date(2024, 9, 28),
			title: "Berta, Berta",
			location: "Black Theatre Troupe of Upstate NY @ theREP",
			link: "https://attherep.org/"
		},
		{
			start: new Date(2024, 10, 14),
			end: new Date(2024, 10, 25),
			title: "Discord",
			location: "Bridge Street Theatre",
			link: "https://bridgest.org/"
		},
		{
			start: new Date(2024, 9, 25),
			end: new Date(2024, 9, 28),
			title: "Peter Samelson: Magic, Love, Mystery!",
			location: "Bridge Street Theatre",
			link: "https://bridgest.org/"
		},
		{
			start: new Date(2024, 10, 14),
			end: new Date(2024, 10, 18),
			title: "Legally Blonde",
			location: "Broadway Upstate",
			link: "https://www.broadwayupstate.com/shows/"
		},
		{
			start: new Date(2024, 10, 15),
			end: new Date(2024, 10, 25),
			title: "Valley Song",
			location: "BTTUNY @ Hubbard Hall Center for Arts & Education",
			link: "https://hubbardhall.org/event/valley-song-a-play-in-partnership-with-black-theatre-troupe-3/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 18),
			title: "The Mousetrap",
			location: "Bunbury Players @ The Edison Club",
			link: "https://www.facebook.com/BunburyPlayers2020/"
		},
		{
			start: new Date(2024, 10, 3),
			end: new Date(2024, 10, 4),
			title: "Playwrights Jam",
			location: "Caffe Lena",
			link: "https://www.caffelena.org/"
		},
		{
			start: new Date(2024, 10, 22),
			end: new Date(2024, 11, 23),
			title: "A Sherlock Carol",
			location: "Capital Reperatory Theatre",
			link: "https://attherep.org/"
		},
		{
			start: new Date(2024, 9, 11),
			end: new Date(2024, 9, 28),
			title: "Bat Boy: The Musical",
			location: "Center for Performing Arts at Rhinebeck",
			link: "https://www.centerforperformingarts.org/"
		},
		{
			start: new Date(2024, 10, 13),
			end: new Date(2024, 10, 25),
			title: "Comic Potential",
			location: "Circle Theatre Players",
			link: "https://www.slca-ctp.org/"
		},
		{
			start: new Date(2024, 9, 27),
			end: new Date(2024, 9, 27),
			title: "CAST Party to Benefit CRFT",
			location: "Cohoes Music Hall",
			link: "https://www.thecohoesmusichall.org/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 18),
			title: "Sussical Jr",
			location: "Colonial Little Theatre",
			link: "https://coloniallittletheatre.org/"
		},
		{
			start: new Date(2024, 10, 15),
			end: new Date(2024, 10, 24),
			title: "Psalm 91",
			location: "Creative Action Unlimited",
			link: "https://capartscenter.org/"
		},
		{
			start: new Date(2024, 9, 24),
			end: new Date(2024, 10, 11),
			title: "Gaslight",
			location: "Curtain Call Theatre",
			link: "https://www.curtaincalltheatre.com/"
		},
		{
			start: new Date(2024, 9, 25),
			end: new Date(2024, 9, 28),
			title: "The Addams Family",
			location: "Debuts Theatre Company",
			link: "https://www.mydebuts.com/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 17),
			title: "Six: The Musical Teen Edition",
			location: "Fallen Chandelier Productions",
			link: "https://www.facebook.com/fallenchandelierproductions/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 11),
			title: "Our Town",
			location: "Fort Salem Theatre",
			link: "https://www.fortsalem.com/"
		},
		{
			start: new Date(2024, 10, 23),
			end: new Date(2024, 10, 25),
			title: "The Lion King Jr",
			location: "Galway Players",
			link: "https://www.galwayplayers.org/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 11),
			title: "9 to 5: The Musical",
			location: "Glens Falls Community Theatre",
			link: "https://www.gfcommunitytheatre.org/"
		},
		{
			start: new Date(2024, 10, 7),
			end: new Date(2024, 10, 17),
			title: "Into the Breeches!",
			location: "Harbinger @ Albany Barn",
			link: "https://albanybarn.org/"
		},
		{
			start: new Date(2024, 9, 26),
			end: new Date(2024, 9, 27),
			title: "The Dinner Detective",
			location: "Hilton Garden Inn",
			link: "https://www.thedinnerdetective.com/albany/"
		},
		{
			start: new Date(2024, 9, 26),
			end: new Date(2024, 9, 27),
			title: "Whispering Bones",
			location: "Hubbard Hall Center for Arts & Education",
			link: "https://hubbardhall.org/"
		},
		{
			start: new Date(2024, 9, 18),
			end: new Date(2024, 9, 28),
			title: "The Musical of Musicals",
			location: "Not So Common Players @ The Edison Club",
			link: "http://www.notsocommonplayers.org/"
		},
		{
			start: new Date(2024, 11, 3),
			end: new Date(2024, 11, 9),
			title: "MJ",
			location: "Proctors Theatre",
			link: "https://www.atproctors.org/"
		},
		{
			start: new Date(2024, 11, 14),
			end: new Date(2024, 11, 17),
			title: "Northeast Ballet's Annual The Nutcracker",
			location: "Proctors Theatre",
			link: "https://www.atproctors.org/"
		},
		{
			start: new Date(2024, 9, 31),
			end: new Date(2024, 10, 1),
			title: "Whispering Bones",
			location: "Proctors Theatre",
			link: "https://www.atproctors.org/"
		},
		{
			start: new Date(2024, 9, 18),
			end: new Date(2024, 9, 28),
			title: "Little Shop of Horrors",
			location: "R'ville Stage Creations",
			link: "https://rville-stage-creations.square.site/"
		},
		{
			start: new Date(2024, 10, 15),
			end: new Date(2024, 10, 25),
			title: "Moon for the Misbegotten",
			location: "Schenectady Civic Players",
			link: "https://www.civicplayers.org/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 18),
			title: "Mean Girls",
			location: "Schenectady Light Opera Company",
			link: "https://sloctheater.org/"
		},
		{
			start: new Date(2024, 10, 1),
			end: new Date(2024, 10, 4),
			title: "Play On!",
			location: "Schuylerville Community Theatre",
			link: "https://www.scttheater.org/"
		},
		{
			start: new Date(2024, 10, 14),
			end: new Date(2024, 10, 24),
			title: "Guys & Dolls",
			location: "Siena Creative Arts",
			link: "https://www.siena.edu/departments/creative-arts/"
		},
		{
			start: new Date(2024, 10, 22),
			end: new Date(2024, 11, 8),
			title: "Black Super Hero Magic Mama",
			location: "Skidmore College Theatre",
			link: "https://theater.skidmore.edu/"
		},
		{
			start: new Date(2024, 10, 8),
			end: new Date(2024, 10, 18),
			title: "The 25th Annual Putnam County Spelling B",
			location: "Steamer No 10 Theatre",
			link: "https://steamer10theatre.org/"
		},
		{
			start: new Date(2024, 10, 2),
			end: new Date(2024, 10, 24),
			title: "Fool Me Once",
			location: "The Addy Theatre at Proctors",
			link: "https://www.atproctors.org/"
		},
		{
			start: new Date(2024, 9, 25),
			end: new Date(2024, 10, 4),
			title: "Into the Woods",
			location: "Theatre Intitute at Sage Teens",
			link: "https://theatre.sage.edu/"
		},
		{
			start: new Date(2024, 9, 23),
			end: new Date(2024, 9, 28),
			title: "Machinal",
			location: "UAlbany Theatre",
			link: "https://www.albany.edu/musicandtheatre"
		},
		{
			start: new Date(2024, 10, 20),
			end: new Date(2024, 10, 25),
			title: "Mary Shelley Meets Frankenstein",
			location: "UAlbany Theatre",
			link: "https://www.albany.edu/musicandtheatre"
		},
		{
			start: new Date(2024, 9, 30),
			end: new Date(2024, 10, 4),
			title: "7 Plays / 7 Days",
			location: "Union College Theatre",
			link: "https://www.union.edu/theater-dance"
		},
		{
			start: new Date(2024, 9, 26),
			end: new Date(2024, 9, 26),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 2),
			end: new Date(2024, 10, 2),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 9),
			end: new Date(2024, 10, 9),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 16),
			end: new Date(2024, 10, 16),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 23),
			end: new Date(2024, 10, 23),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
		{
			start: new Date(2024, 10, 30),
			end: new Date(2024, 10, 30),
			title: "Spontaneous Broadway",
			location: "MOPCO Theater on Jay Street",
			link: "https://www.mopco.org/"
		},
	];
	const realEvents = [];
	for (const e of events) {
		const tmpE = e;
		tmpE.title = `${e.title} @ ${e.location}`
		realEvents.push(e);
	}
	const handlePrevMonth = () => {
		setCurrentDate(prevDate => moment(prevDate).subtract(1, 'month').toDate());
	};

	const handleNextMonth = () => {
		setCurrentDate(prevDate => moment(prevDate).add(1, 'month').toDate());
	};

	useEffect(() => {
		document.body.style = "background: #2a2727;";
	}, [])

	return (
		<>
			<div className="hidden md:block theater">
				<div className="calendar-container">
					<div className="left-column">
						<button
							className="arrow-button"
							aria-label="Previous month"
							onClick={handleNextMonth}
						>
							<ChevronUp />
						</button>
						<div className="month-container">
							<div className="top-left-month">
								{moment(currentDate).format('MMMM').toLowerCase()}
							</div>
						</div>
						<button
							className="arrow-button"
							aria-label="Next month"
							onClick={handlePrevMonth}
						>
							<ChevronDown />
						</button>
					</div>
					<div className="w-full">
						<Calendar
							date={currentDate}
							components={{ month: { dateHeader: CustomMonthDateHeader }, event: CustomEvent, toolbar: () => null }} views={['month']} defaultDate={new Date()} localizer={localizer} events={realEvents}
							onShowMore={(_, x) => {
								history.push(`/events/${x.toLocaleString().split(',')[0].replaceAll('/', '-')}?eventType=theater`)
							}}
							formats={{
								monthHeaderFormat: 'MMMM',
							}}
						/>
					</div>
				</div>
			</div>
			<MobileCalendar className="md:hidden" />
		</>
	)
}
