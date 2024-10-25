import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Search } from 'lucide-react';
import moment from 'moment';
import './styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


const CustomEvent = ({ event }) => (
	<div style={{ width: '100%', color: 'black' }} className="custom-event">
		{<p className="weekly w-full overflow-hidden text-ellipsis" style={window.screen.width < 780 ? { display: 'none' } : {}}>{event.title.toLowerCase()}</p>}
	</div>
);


export default function ArtCalendar() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const events = [
		{
			title: "Albany Center Gallery's All Hallow E'en Art Path",
			organizer: "Albany Center Gallery",
			start: new Date(2024, 9, 1),
			end: new Date(2024, 10, 1),
			details: "Venture along the All Hallow E'en Art Path in Downtown Albany, curated by Albany Center Gallery. MAIDEN LANE ARTISTS: Raina Briggs, Bailey Brown, Olivia Deep, Kayla Ek, Casey Simonds. QUACKENBUSH SQUARE ARTISTS: Alicia Barton, Ramiro Davaro-Comas, Toxic Dreams, Nevaeh Hairston, Stephanie Levay, Julia Rodriquez, Shae, Carl Warren",
			cost: "free",
			time: "24/7"
		},
		{
			title: "Familiars",
			organizer: "The Arts Center of the Capital Region",
			start: new Date(2024, 9, 21),
			end: new Date(2024, 10, 27),
			details: "Familiars is a solo exhibition featuring new work by artist Kate Wolford. Mystical and surreal, this body of work delves into themes of mythology, fantasy, nostalgia, animalia, and self-identity. Blurring the lines between painting and sculpture, Wolford's small-scale, intricate pieces are painted in egg tempera or acrylic on panel and displayed in unique, hand-built custom frames. Drawing on the wonder of childhood memories, her work explores creatures in dream-like settings and her own internal myth-making.",
			cost: "free",
			time: "6 - 8pm"
		},
		{
			title: "NOT FOR THE FAINT OF ART!",
			organizer: "The Arts Center of the Capital Region",
			start: new Date(2024, 9, 25),
			end: new Date(2024, 9, 31),
			details: "Fear not your creativity… Leave that to him & his “THE BLACK BOX” Clover, a brilliant, but misunderstood artist, finds solitude in his creations. Some of which can be found right in the heart of Troy, New York. 5 unique, yet haunting realms developed from his imagination and isolation. Clover welcomes you to his wonderfully, complex & meandering mind. Very few can see his point of view, but he dares you to try “THE BLACK BOX” He must warn you it is “ NOT FOR THE FAINT OF ART!”",
			cost: "$15 - $20",
			time: "7 - 11pm"
		},
		{
			title: "ORT Project presents Dark Lux",
			organizer: "J. Gernon Frame & Art",
			start: new Date(2024, 9, 25),
			end: new Date(2024, 9, 25),
			details: "Ort Project is the collaborative union of artists Anna Noelle Rockwell and Oona Nelson, whose lush installations, photographs and interactive gestures explore and critique aspects of consumption, abundance, and decay. Their point of reference is the table, a site of dining and display, which they use as a staging platform for painterly nature morte tableaux in which the artists create ephemeral installations and photographs of edible and inedible subjects. Their work takes on the implications of food beyond that of nourishment, instead ORT marinates the more insidious, but visually rich implications—poisonous, gluttonous or hedonistic—to offer intoxicating critiques of social attitudes with collective perils. Within their work Ort blends the influence of art history, the contemporary cult of convenience and abundance, along with the corresponding environmental threats and distorted value systems, into uncommon balances of the grotesque and the beautiful.",
			cost: "free",
			time: "6:00 PM"
		},
		{
			title: "Prove your humanity by notpaulsimon",
			organizer: "Collar Works",
			start: new Date(2024, 9, 25),
			end: new Date(2024, 9, 25),
			details: "Artist Reception at Window Works. Drawing upon gestures borne of the digital age, Prove your humanity aims to rekindle the physical, igniting the human desire for longing, desire, and connection. The wandering lines of notpaulsimon’s light sculptures weave and swipe through space unmediated: wires exposed and tubes bundled. Foregoing digital fabrication techniques in favor of direct material manipulation, the work recovers the sense of humanity that is lost in digital mediation. In a world where our movement is tracked, monitored, and commodified, prove your humanity aims to reclaim the gestures that make us human.",
			cost: "free",
			time: "5 - 6pm, After Party @ Rare Form Brewing, 6 - 8pm"
		},
		{
			title: "It's Only the River",
			organizer: "Two Selves Gallery",
			start: new Date(2024, 9, 27),
			end: new Date(2024, 9, 27),
			details: "Please join us for a curated art experience celebrating artwork inspired by live music! This group show will be sure to complement your live music experience as Phish plays a weekend run to benefit the Divided Sky Foundation. Over the river and just 10 minutes away in Troy, we will host a group of artists and show pieces in myriad mediums.",
			cost: "free",
			time: "Noon"
		},
		{
			title: "OPEN SEW",
			organizer: "Collar Works x ChaShaMa",
			start: new Date(2024, 9, 27),
			end: new Date(2024, 9, 27),
			details: "OPEN SEW is a regular meet up for artists to work on their soft projects together. organizer two artists-in-residence at Collar Works, Victoria van der Laan & Dustin Loveland. Drop in at 50 4th Street in Troy with your project and sewing machine or hand tools.\tfree\tNoon - 4pm\nJames Casebere and Danny Goodwin – In Conversation\tUniversity Art Museum\t10/29/24\tArtist James Casebere will be in conversation with artist and UAlbany Professor Danny Goodwin discussing their shared interest in constructed photography, as well as themes related to social control, power structures, and institutional mythologies in their respective work. For the last 30 years, James Casebere has been at the forefront of artists working with constructed photography, creating photographs of his table-sized models based on architectural, art historical, and cinematic sources. Goodwin’s work spanning over 20 years has explored the US intelligence community and related issues of surveillance, secrecy, and violence. Goodwin’s photography and videos are currently on view in “Job Security: Voices and Views from the American Security Industry.”\tfree\t4:30 PM\nLiberty Street Studio Open House\tLiberty Street Studio\t11/1/24\tStudio artists: Naomi Lewis, Gary Maggio, Laura Mandelson and Arnela Mahmutovic. Snacks and beverages will be served. Enter the door with the big #8.\tfree\t6 - 9pm\nNell Stokes: Stories of an Education Advocate\tAlbany Institute of History & Art\t11/1/24\tReception with special guest Nell Stokes, local activist and the subject of our current exhibition \"Nell Stokes: Stories of an Education Advocate\" displayed on the museum's first floor. The exhibition represents the breadth of Stokes' network and her commitment to community through photographs, pamphlets, and other ephemera drawn from the Nell Stokes Manuscript Collection. Meet Stokes, see the exhibition during its final months on view.\tfree\t6 - 8pm\nPop-up ProjectART\tAlbany Center Gallery\t11/1/24\tJoin ACG for a one night event of live projection art by FAR EYE and live music by Nate Mars, along with some light refreshments! Artists FAR EYE and Nate Mars will curate a unique visual and audio immersive experience complete with surrounding patterns and formations coming together.\tfree\t5 - 8pm\nListen and Learn: The Neighborhood That Disappeared\tBethlehem Public Library\t11/1/24\tThe Neighborhood That Disappeared documents the destruction of an entire neighborhood in Albany, when a massive urban renewal project in 1962 displaced 8% of the city’s population and closed more than 350 businesses. Watch a screening of the 2014 documentary followed by a Q&A with the film’s director, Mary Paley.\tfree\t10am - 12:15pm\nTroy Glow 2024\tThe Arts Center of the Capital Region and Troy Public Art\t11/1/24-11/11/24\tProduced by the Arts Center of the Capital Region, Troy Glow 2024 is a dazzling 10-day festival that will light up downtown Troy, November 1st to 10th, 2024. Visitors can experience 10 light art installations on a 15 minute walk through Troy’s historic streets. Visitors can explore on their own, come to our three festival events, or join guided tours.\tfree\tdifferent dates and times\nBUILT: First Peek Artist Award Ceremony Holiday Shop\tHistoric Albany Foundation\t11/1/24-11/3/24\tA weekend of festivities all centered around some of the best local art in the Capital Region representing our renowned architecture! Proceeds from Built support the mission of Historic Albany Foundation.\tSome events free/tickets\t5:30 - 8:30 pm\nPantheon- A Solo Exhibition by Artist In Residence, Aly Parrott\tArlene's Artist Materials, Inc.\t11/1/24-11/31/24\tExplore the world of Pantheon, a solo exhibition by artist in residence Aly Parrott at Arlene’s Artist Materials. This show features Aly's unique multimedia artworks inspired by Greco-Roman mythology and fantasy. Her process combines watercolor, stitching, and needle felting to create characters that tell stories and invite you into a new world. Pantheon marks the foundational series of a functional, playable world that Aly is dedicated to developing further through illustration, written narratives, and collaborative storytelling.\tfree\t4:30 - 5:30pm\nThe Voracious Eye\tOpalka Gallery\t11/1/24-12/7/24\tCurated by Joan Grubin with artists Molly Heron, Nancy Shaver & Wolf, Ilene Sunshine, Christopher Werner, and Allan Wexler. Through discrete installations, each artist’s work is presented in dialogue with artifacts rich with personal meaning that they’ve curated from their private lives, offering a glimpse into each artist’s visual thinking.\tfree\t5:30, Reception 6:00pm to 7:30pm\nHoliday Salon\tThe Blooming Artist Gallery\t11/8/24\tShowcasing work by: Amy Bergeron, Liz Coleman, Patricia Collins, Maria DeAngelo, Karen Elem, Kathleen M. Gallagher, Janine Gibson, Brianna Guerra, Frederick Holman, Kristine Kelly, Barb Lennox, Kris Gregson Moss, Susan Nowogrodzki Dorothea Osbon,Dave Ostrowski, Tracey Pagano, Pat Posillico, Paul Andrew Schultz, Gary Shankman, Pamela Stendardi, Diane Swanson,  Terry Teitelbaum, Gregory Wing, Karen Woodin, Leslie Yolen.\tfree\t6 - 8pm"
		},
	];

	const realEvents = [];
	for (const e of events) {
		const tmpE = e;
		tmpE.title = `${e.title} organized by ${e.organizer}`
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
	)
}

