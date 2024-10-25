import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Search } from 'lucide-react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const css = `
.theater > .month-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.theater > .rbc-calendar {
	height: 100%;
}

.theater > .calendar-container {
    height: 100vh;
    background-color: #2a2727;
    padding: 20px;
    display: flex;
    overflow-x: hidden;
    /* overflow-y: auto; */
    box-sizing: border-box;
}


.theater > .custom-toolbar {
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 10px 0;
}

.theater > .input-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 10vw;
}

.theater > .search-icon {
    position: absolute;
    left: 10px;
    color: lightgray;
    pointer-events: none;
    /* Prevent the icon from blocking input interaction */
}

.theater > .search-input {
    border: 1px solid lightgray;
    border-radius: 20px;
    font-size: 16px;
    padding: 5px 55px;
    background-color: inherit;
    color: lightgray;
	outline: none;
}

.theater > .rbc-button-link {
	color: #faff00 !important;
	font-weight: bold !important;
	cursor: default !important;
}

.theater > .rbc-off-range-bg {
	background-color: inherit !important;
}

.theater > .rbc-today {
	background-color: inherit !important;
}

.theater > .rbc-header {
	border: 1px solid #faff00;
}

.theater > .rbc-header > span[role="columnheader"] {
	color: #faff00 !important;
	font-weight: bold;
	text-transform: uppercase;
}

.theater > .rbc-day-bg {
	border: 1px solid #faff00;
}

.theater > .left-column {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 22px;
    border-radius: 15px;
    height: 40%;
    /* Adjust as needed */
    width: 80px;
    /* Set a fixed width */
	margin: auto;
}

.theater > .arrow-button {
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

.theater > .top-left-month {
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

.theater > .rbc-event {
	background-color: #faff00 !important;
	cursor: default !important;
}

.theater > .rbc-show-more {
	background: none !important;
	cursor: default !important;
}
`;

const localizer = momentLocalizer(moment);


const CustomEvent = ({ event }) => (
	<div onClick={() => window.open(event.link, '_blank')} style={{ width: '100%', color: 'black' }} className="custom-event">
		{<p className="weekly w-full overflow-hidden text-ellipsis" style={window.screen.width < 780 ? { display: 'none' } : {}}><span className="italic">{event.title.split("@")[0].toLowerCase()}</span> @ {event.title.split("@")[1].substring(1)}</p>}
	</div>
);


export default function TheaterCalendar() {
	const [currentDate, setCurrentDate] = useState(new Date());
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
		<div className="theater">
		<style>{css}</style>
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
				<Calendar date={currentDate} components={{ event: CustomEvent, toolbar: () => null }} views={['month']} defaultDate={new Date()} localizer={localizer} events={realEvents} />
			</div>
		</div>
		</div>
	)
}
