export const convertdateToHuman = (shittydate) => {
	let [year, month, day] = shittydate.split('-');

	year = year.substring(2);
	month = month.length === 2 && month.charAt(0) === '0' ? month.charAt(1) : month;
	day = day.length === 2 && day.charAt(0) === '0' ? day.charAt(1) : day;

	return `${month}/${day}/${year}`;
};

export const musicData =
	[
		{
			"artist": "Fire Pit Friday feat. Weird Phishes",
			"venue": "Brewery Ommegang",
			"date": "10/4/24",
			"time": "6:00 PM",
			"town": "Cooperstown",
			"link": "https://www.ommegang.com/events/fire-pit-friday-featuring-weird-phishes/"
		},
		{
			"artist": "The Garcia Project with Acoustically Speaking",
			"venue": "Cohoes Music Hall",
			"date": "10/4/24",
			"time": "7:00 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "Dueling Pianos",
			"venue": "NaNola",
			"date": "10/4/24",
			"time": "7:00 PM",
			"town": "Malta",
			"link": "https://www.nanolarestaurant.com/calender"
		},
		{
			"artist": "Pile / Oceanator / Bruiser & Bicycle",
			"venue": "No Fun",
			"date": "10/4/24",
			"time": "7:00 PM",
			"town": "Troy",
			"link": "https://www.eventbrite.com/e/pile-oceanator-bruiser-bicycle-tickets-914957451367?aff=ebdsoporgprofile"
		},
		{
			"artist": "Nickopotamus",
			"venue": "The Eleven at Lark Hall",
			"date": "10/4/24",
			"time": "6:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/first-friday-happy-hour-at-the-eleven-with-nickopotamus-free-show-tickets-999836165887?aff=ebdsoporgprofile"
		},
		{
			"artist": "Live & Local at The Linda – Buggy Jive + Lennox",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/4/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/live-local-at-the-linda-buggy-jive-with-lennox-tickets-989009472957"
		},
		{
			"artist": "Blippi | Join the Band Tour",
			"venue": "The Palace Theater",
			"date": "10/4/24",
			"time": "6:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060ABD57A667B"
		},
		{
			"artist": "Rigometrics",
			"venue": "Unihog",
			"date": "10/4/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Drag Night",
			"venue": "Ophelia's on Broadway",
			"date": "10/4/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ophelias.rocks/events/drag-night"
		},
		{
			"artist": "Folk Heritage Series: The Brothers Four",
			"venue": "Caffè Lena",
			"date": "10/4/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Robert Kelly",
			"venue": "Cohoes Music Hall",
			"date": "10/5/24",
			"time": "8:00 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "Lou Gramm| One Last Look Tours",
			"venue": "The Palace Theater",
			"date": "10/5/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006099E7018066"
		},
		{
			"artist": "Kennedy",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/5/24",
			"time": "8:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116933&qty=0"
		},
		{
			"artist": "Gratefully Yours",
			"venue": "Unihog",
			"date": "10/5/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Troupe Sings Taylor Swift (Kids Show)",
			"venue": "Ophelia's on Broadway",
			"date": "10/5/24",
			"time": "1:00 PM",
			"town": "Albany",
			"link": "https://www.ophelias.rocks/events/troupe-sings-taylor-swift"
		},
		{
			"artist": "Troupe Sings Taylor Swift (Adult Show)",
			"venue": "Ophelia's on Broadway",
			"date": "10/5/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ophelias.rocks/events/troupe-sings-taylor-swift"
		},
		{
			"artist": "Tops of Trees",
			"venue": "Wolf Hollow Brewing Company",
			"date": "10/5/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/tops-of-trees-1"
		},
		{
			"artist": "Caffé Lena @ SPAC",
			"venue": "SPAC",
			"date": "10/5/24",
			"time": "12:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/spac/"
		},
		{
			"artist": "Violent By Design",
			"venue": "Empire Underground",
			"date": "10/5/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006115CE9738D2"
		},
		{
			"artist": "The Lawn Sausages: The Last Schmaltz",
			"venue": "Cohoes Music Hall",
			"date": "10/6/24",
			"time": "2:00 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "Graham Nash – More Evenings of Songs and Stories",
			"venue": "The Egg",
			"date": "10/6/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116633"
		},
		{
			"artist": "Rick Wakeman ñ Final Solo Tour",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/6/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117048&qty=0"
		},
		{
			"artist": "Richard Shindell",
			"venue": "Caffè Lena",
			"date": "10/6/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Graham Nash - More Evenings of Songs and Stories",
			"venue": "The Egg",
			"date": "10/6/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116633"
		},
		{
			"artist": "The Egg Presents: Bilal",
			"venue": "The Egg",
			"date": "10/7/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116691"
		},
		{
			"artist": "Victor Wooten and The Wooten Brothers",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/7/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116797&qty=0"
		},
		{
			"artist": "The Egg Presents: Bilal",
			"venue": "The Egg",
			"date": "10/7/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117747"
		},
		{
			"artist": "Taco Tuesday with Mike McMann",
			"venue": "Unihog",
			"date": "10/8/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Jazz at Caffé Lena: Chuck Lamb Trio Featuring Russell Haight",
			"venue": "Caffè Lena",
			"date": "10/8/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Public Serpents",
			"venue": "Empire Underground",
			"date": "10/9/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000611C0A3835C3"
		},
		{
			"artist": "Dirty Honey: Can't Find The Breaks Tour",
			"venue": "Empire Live",
			"date": "10/9/24",
			"time": "7:45 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060E1BC791E00"
		},
		{
			"artist": "The Egg Presents: Encanto Sing-Along Film Concert (for school groups only)",
			"venue": "The Egg",
			"date": "10/9/24",
			"time": "10:00 AM",
			"town": "Albany",
			"link": "https://www.theegg.org/events/"
		},
		{
			"artist": "The Egg Presents: Encanto Sing-Along Film Concert",
			"venue": "The Egg",
			"date": "10/9/24",
			"time": "6:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117637"
		},
		{
			"artist": "Shred Flintstone / Zookraught / Cheesy Snacks / Canella",
			"venue": "No Fun",
			"date": "10/10/24",
			"time": "7:00 PM",
			"town": "Troy",
			"link": "https://www.eventbrite.com/e/shred-flinstone-zookraught-cheesy-snacks-canella-tickets-998497552057?aff=ebdsoporgprofile"
		},
		{
			"artist": "Three Dog Night",
			"venue": "The Egg",
			"date": "10/10/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116421"
		},
		{
			"artist": "Victor Wainwright & The Train",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/10/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/victor-wainwright-the-train-tickets-923099454317"
		},
		{
			"artist": "Momentum Series: Vanessa Collier - Album Release",
			"venue": "Caffè Lena",
			"date": "10/10/24",
			"time": "5:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Momentum Series: Vanessa Collier - Album Release",
			"venue": "Caffè Lena",
			"date": "10/10/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Chase Matthew",
			"venue": "Empire Live",
			"date": "10/10/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060B49DD11D97"
		},
		{
			"artist": "Mac Saturn",
			"venue": "Empire Underground",
			"date": "10/10/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000612D19706FCE"
		},
		{
			"artist": "Three Dog Night",
			"venue": "The Egg",
			"date": "10/10/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116421"
		},
		{
			"artist": "Fire Pit Friday feat. Hop City Hellcats",
			"venue": "Brewery Ommegang",
			"date": "10/11/24",
			"time": "6:00 PM",
			"town": "Cooperstown",
			"link": "https://www.ommegang.com/events/fire-pit-friday-featuring-hop-city-hellcats/"
		},
		{
			"artist": "Live and Let Die: The Music of Paul McCartney",
			"venue": "Cohoes Music Hall",
			"date": "10/11/24",
			"time": "7:30 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "The Figgs",
			"venue": "No Fun",
			"date": "10/11/24",
			"time": "7:00 PM",
			"town": "Troy",
			"link": "https://www.nofuntroy.com/events"
		},
		{
			"artist": "Blush",
			"venue": "The Eleven at Lark Hall",
			"date": "10/11/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/blush-at-the-eleven-at-lark-hall-free-show-tickets-999766176547?aff=ebdsoporgprofile"
		},
		{
			"artist": "Stephane Wrembel Sextet",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/11/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/stephane-wrembel-sextet-tickets-923113556497"
		},
		{
			"artist": "Kathleen Madigan",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/11/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116322&qty=0"
		},
		{
			"artist": "Faith Kelly",
			"venue": "Unihog",
			"date": "10/11/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Glass Pony with Ernie & The Band",
			"venue": "Ophelia's on Broadway",
			"date": "10/11/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ophelias.rocks/events/glass-pony-with-ernie-the-band"
		},
		{
			"artist": "The Brooklyn Holdouts 'n Autumn Highlights",
			"venue": "The Cock 'n Bull",
			"date": "10/11/24",
			"time": "7:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/the-brooklyn-holdouts-n-autumn-highlights/"
		},
		{
			"artist": "The Schmooze",
			"venue": "Centre Street Pub",
			"date": "10/11/24",
			"time": "9:00 PM",
			"town": "Schenectady",
			"link": ""
		},
		{
			"artist": "Melissa Ferrick with opener Sweet Petunia",
			"venue": "Caffè Lena",
			"date": "10/11/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Skeletal Remains & Bewitcher",
			"venue": "Empire Underground",
			"date": "10/11/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060D402E232C1"
		},
		{
			"artist": "Sleepy Hallow & Sheff G",
			"venue": "Empire Live",
			"date": "10/11/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060FA09E33A75"
		},
		{
			"artist": "The Mountain Goats",
			"venue": "The Egg",
			"date": "10/11/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117627"
		},
		{
			"artist": "Who's Next: The Ultimate Trivute to The Who",
			"venue": "Cohoes Music Hall",
			"date": "10/12/24",
			"time": "7:30 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "Elton Undressed: Todd Alsup Sings Elton John",
			"venue": "Lark Hall",
			"date": "10/12/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/elton-undressed-todd-alsup-sings-elton-john-tickets-925507396537?aff=ebdsoporgprofile"
		},
		{
			"artist": "Home Body",
			"venue": "No Fun",
			"date": "10/12/24",
			"time": "7:00 PM",
			"town": "Troy",
			"link": "https://www.eventbrite.com/e/home-body-tickets-999558615727?aff=ebdsoporgprofile"
		},
		{
			"artist": "Richard Thompson Electric Trio",
			"venue": "The Egg",
			"date": "10/12/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116925"
		},
		{
			"artist": "Little Saints",
			"venue": "The Park Theatre",
			"date": "10/12/24",
			"time": "4:00 PM",
			"town": "Glens Falls",
			"link": "https://www.parktheatergf.com/upcoming-events/#/events/112948"
		},
		{
			"artist": "Little Lies: A Fleetwood Mac Tribute",
			"venue": "Ophelia's on Broadway",
			"date": "10/12/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ophelias.rocks/events/little-lies-a-fleetwood-mac-tribute"
		},
		{
			"artist": "Big Radio",
			"venue": "Wolf Hollow Brewing Company",
			"date": "10/12/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/big-radio-1-y6mya"
		},
		{
			"artist": "Ill Funk Ensemble",
			"venue": "Centre Street Pub",
			"date": "10/12/24",
			"time": "9:00 PM",
			"town": "Schenectady",
			"link": ""
		},
		{
			"artist": "Jeffrey Gaines",
			"venue": "Caffè Lena",
			"date": "10/12/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Kakos",
			"venue": "Empire Underground",
			"date": "10/12/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060C3EAE62595"
		},
		{
			"artist": "Bop To The Top",
			"venue": "Empire Live",
			"date": "10/12/24",
			"time": "9:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060F1913215E4"
		},
		{
			"artist": "Richard Thompson: Ship To Shore",
			"venue": "The Egg",
			"date": "10/12/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116925"
		},
		{
			"artist": "The Troupe Sings Taylor",
			"venue": "Wolf Hollow Brewing Company",
			"date": "10/13/24",
			"time": "2:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/the-troupe-sings-taylor"
		},
		{
			"artist": "Millstone Rounders",
			"venue": "The Cock 'n Bull",
			"date": "10/13/24",
			"time": "6:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/millstone-rounders/"
		},
		{
			"artist": "Emilie-Claire Barlow",
			"venue": "Caffè Lena",
			"date": "10/13/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Ricky Montgomery - The Rick Tour: One Rick to Rule Them All",
			"venue": "Empire Live",
			"date": "10/13/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006088B7D817A5"
		},
		{
			"artist": "The California Honeydrops",
			"venue": "Lark Hall",
			"date": "10/14/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/the-california-honeydrops-fall-in-love-again-tour-2024-tickets-895576392097?aff=ebdsoporgprofile"
		},
		{
			"artist": "Fozzy",
			"venue": "Empire Live",
			"date": "10/14/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006075DDD4213C"
		},
		{
			"artist": "Taco Tuesday with Pocket Vinyl",
			"venue": "Unihog",
			"date": "10/15/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Rochmon Record Club Listening Party - The Beatles \"Let it Be",
			"venue": "Caffè Lena",
			"date": "10/15/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Jon Langston",
			"venue": "Frog Alley Brewing",
			"date": "10/17/24",
			"time": "7:00 PM",
			"town": "Schenectady",
			"link": "https://frogalleybrewing.com/events/jon-langston-live-at-frog-alley"
		},
		{
			"artist": "The Egg Presents: The Robert Cray Band",
			"venue": "The Egg",
			"date": "10/17/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116944"
		},
		{
			"artist": "Rochmon Record Club Listening Party: The Beatles' \"White Album",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/17/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/rochmon-record-club-listening-party-the-beatles-white-album-sides-34-tickets-983906239047"
		},
		{
			"artist": "Comedy Bang Bang",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/17/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117631&qty=0"
		},
		{
			"artist": "Robert Ellis",
			"venue": "Caffè Lena",
			"date": "10/17/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Dale Hollow",
			"venue": "Empire Underground",
			"date": "10/17/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060DB08F334C3"
		},
		{
			"artist": "The Egg Presents: The Robert Cray Band",
			"venue": "The Egg",
			"date": "10/17/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116944"
		},
		{
			"artist": "Noah Gundersen w/ Abby Gundersen: Ledges 10 Year Anniversary",
			"venue": "Lark Hall",
			"date": "10/18/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/noah-gundersen-wabby-gundersen-ledges-10-year-anniversary-tickets-912706057387?aff=ebdsoporgprofile"
		},
		{
			"artist": "Bee Side Fest - Everybody That Loves You, Senior Living, Retail Drugs, Service Industry",
			"venue": "No Fun",
			"date": "10/18/24",
			"time": "6:00 PM",
			"town": "Troy",
			"link": "https://www.nofuntroy.com/events"
		},
		{
			"artist": "Renaissance - In Gratitude Farewell Tour",
			"venue": "The Egg",
			"date": "10/18/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116585"
		},
		{
			"artist": "Matty Stecks",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/18/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/matty-stecks-old-friends-beckoned-new-sounds-reckoned-tickets-923116836307"
		},
		{
			"artist": "Zakir Hussain and Rahul Sharma",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/18/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117237&qty=0"
		},
		{
			"artist": "Late Night Philosophers",
			"venue": "Centre Street Pub",
			"date": "10/18/24",
			"time": "9:00 PM",
			"town": "Schenectady",
			"link": ""
		},
		{
			"artist": "Tom Paxton & the Don Juans",
			"venue": "Caffè Lena",
			"date": "10/18/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Czarface",
			"venue": "Empire Underground",
			"date": "10/18/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060F3C4FC2D70"
		},
		{
			"artist": "James Kennedy",
			"venue": "Empire Live",
			"date": "10/18/24",
			"time": "9:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000611B9E263173"
		},
		{
			"artist": "The Egg and Union College Present: Eisenhower Dance Detroit",
			"venue": "The Egg",
			"date": "10/18/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117385"
		},
		{
			"artist": "Renaissance - In Gratitude Farewell Tour",
			"venue": "The Egg",
			"date": "10/18/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116585"
		},
		{
			"artist": "Back in Black- The true AC/DC experience",
			"venue": "Cohoes Music Hall",
			"date": "10/19/24",
			"time": "7:30 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "Bee Side Fest - TAGABOW, Her New Knife, Mall Goth, CPS, Glimmer, Cigarettes After Breakfast, The Great Depression, Dumpcake, Deep Slut, Galene",
			"venue": "No Fun",
			"date": "10/19/24",
			"time": "6:00 PM",
			"town": "Troy",
			"link": "https://www.eventbrite.com/e/they-are-gutting-a-body-of-water-tickets-999595616397?aff=ebdsoporgprofile"
		},
		{
			"artist": "ZOSO: The Ultimate Led Zeppelin Experience",
			"venue": "The Egg",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116869"
		},
		{
			"artist": "San Miguel Frasier",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/san-miguel-frasier-tickets-923122884397"
		},
		{
			"artist": "Big Eyed Fish",
			"venue": "Unihog",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Flood Road",
			"venue": "Wolf Hollow Brewing Company",
			"date": "10/19/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/flood-road"
		},
		{
			"artist": "Wide Awake",
			"venue": "Centre Street Pub",
			"date": "10/19/24",
			"time": "9:00 PM",
			"town": "Schenectady",
			"link": ""
		},
		{
			"artist": "Ari Hest with opener Jacob Shipley",
			"venue": "Caffè Lena",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "BabyJake",
			"venue": "Empire Underground",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060F18B9E14A8"
		},
		{
			"artist": "Daisy Dukes & Cowboy Boots\" Tour with TVBOO",
			"venue": "Empire Live",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060F51FE728FE"
		},
		{
			"artist": "Albany Symphony Opening Night: Michael Daughtery + Tchaikovsky's First Concerto",
			"venue": "The Palace",
			"date": "10/19/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.albanysymphony.com/TheatreManager/102/online?bestavail=115412&qty=0"
		},
		{
			"artist": "Pam Tilis- Kevin Richards' Up Close Country Series",
			"venue": "Cohoes Music Hall",
			"date": "10/20/24",
			"time": "7:00 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "The Fab Four: USA Meets The Beatles!",
			"venue": "The Egg",
			"date": "10/20/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116491"
		},
		{
			"artist": "Masters of Nostalgia",
			"venue": "The Cock 'n Bull",
			"date": "10/20/24",
			"time": "5:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/masters-of-nostalgia/"
		},
		{
			"artist": "Sara Milonovich & Daisycutter",
			"venue": "Caffè Lena",
			"date": "10/20/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Rockin' Pink For Breast Cancer with Vintri Hill",
			"venue": "Empire Underground",
			"date": "10/20/24",
			"time": "5:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000610DA7CC243B"
		},
		{
			"artist": "The Egg Presents: Family Circle #2 with Veena and Devesh Chandra",
			"venue": "The Egg",
			"date": "10/20/24",
			"time": "2:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117736"
		},
		{
			"artist": "Murray's Law",
			"venue": "The Egg",
			"date": "10/20/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=118169"
		},
		{
			"artist": "The Fab Four: USA Meets The Beatles!",
			"venue": "The Egg",
			"date": "10/20/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116491"
		},
		{
			"artist": "BEAT - Belew/Vai/Levin/Carey play 80s King Crimson",
			"venue": "The Egg",
			"date": "10/21/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116420"
		},
		{
			"artist": "BEAT Belew/Vai/Levin/Carey play 80s King Crimson",
			"venue": "The Egg",
			"date": "10/21/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116420"
		},
		{
			"artist": "The Rocky Horror Picture Show",
			"venue": "The Palace",
			"date": "10/21/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006108AACD3CF6"
		},
		{
			"artist": "The Egg Presents: The Lone Bellow - BY REQUEST ONLY TOUR",
			"venue": "The Egg",
			"date": "10/22/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116948"
		},
		{
			"artist": "Australian Chamber Orchestra",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/22/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116454&qty=0"
		},
		{
			"artist": "Taco Tuesday with Peter Pashoukas",
			"venue": "Unihog",
			"date": "10/22/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "The Egg Presents: The Lone Bellow - BY REQUEST ONLY Tour",
			"venue": "The Egg",
			"date": "10/22/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116948"
		},
		{
			"artist": "Howl Story Slam",
			"venue": "Caffè Lena",
			"date": "10/23/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "JD Simo and Luther Dickinson",
			"venue": "Cohoes Music Hall",
			"date": "10/24/24",
			"time": "7:30 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "Magic Beans",
			"venue": "Lark Hall",
			"date": "10/24/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/magic-beans-with-special-guest-squeaky-feet-tickets-999310975027?aff=ebdsoporgprofile"
		},
		{
			"artist": "Christian McBride (with Ursa Major)",
			"venue": "Saratoga Performing Arts Center",
			"date": "10/24/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/christian-mcbride-and-ursa-major/"
		},
		{
			"artist": "Christian McBride and Ursa Major",
			"venue": "Spa Little Theater",
			"date": "10/24/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/christian-mcbride-and-ursa-major/book/55001/"
		},
		{
			"artist": "Bright Series: John Smith",
			"venue": "Caffè Lena",
			"date": "10/24/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Cavetown",
			"venue": "The Egg",
			"date": "10/24/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117559"
		},
		{
			"artist": "Kitchen Dwellers with Sicard Hollow",
			"venue": "Cohoes Music Hall",
			"date": "10/25/24",
			"time": "8:00 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "Byrdhouse 6th Anniversary: Mint Green / Apple Pie / Senior Living / AILA",
			"venue": "No Fun",
			"date": "10/25/24",
			"time": "7:00 PM",
			"town": "Troy",
			"link": "https://www.eventbrite.com/e/byrdhouse-6th-anniversary-mint-green-apple-pie-senior-living-aila-tickets-999563570547?aff=ebdsoporgprofile"
		},
		{
			"artist": "Paula Poundstone",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/25/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116497&qty=0"
		},
		{
			"artist": "TV Doctors",
			"venue": "Wolf Hollow Brewing Company",
			"date": "10/25/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/tv-doctors-1"
		},
		{
			"artist": "Keith Pray Trio",
			"venue": "The Cock 'n Bull",
			"date": "10/25/24",
			"time": "6:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/keith-pray-trio-2024-10-25/"
		},
		{
			"artist": "Reese Fulmer & The Carriage House Band Album Relese",
			"venue": "Caffè Lena",
			"date": "10/25/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Eighteen Visions",
			"venue": "Empire Underground",
			"date": "10/25/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060C499450E95"
		},
		{
			"artist": "The Hot Mess Show with Diary of a Wimpy Kid Author Jeff Kinney",
			"venue": "The Egg",
			"date": "10/25/24",
			"time": "6:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=118167"
		},
		{
			"artist": "The Weight Band",
			"venue": "The Egg",
			"date": "10/25/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117628"
		},
		{
			"artist": "An Evening with Jon Stewart",
			"venue": "The Palace",
			"date": "10/25/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006134BE1C5D37"
		},
		{
			"artist": "Halloween's Metal Maddness",
			"venue": "Cohoes Music Hall",
			"date": "10/26/24",
			"time": "7:30 PM",
			"town": "Cohoes",
			"link": "https://www.thecohoesmusichall.org/events"
		},
		{
			"artist": "Beethoven with the Calidore Quartet",
			"venue": "Saratoga Performing Arts Center",
			"date": "10/26/24",
			"time": "3:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/cms-10-26/"
		},
		{
			"artist": "The Big Takeover",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/26/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/the-big-takeover-tickets-923885675927"
		},
		{
			"artist": "Spacetrash and Tumblestop",
			"venue": "Unihog",
			"date": "10/26/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Professor Louie & The Crowmatix",
			"venue": "Caffè Lena",
			"date": "10/26/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Carnifex w/ Cryptopsy, Mental Cruelty, Organectomy, Heavy//Hitter",
			"venue": "Empire Live",
			"date": "10/26/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060B0EACE213A"
		},
		{
			"artist": "Warren Miller's 75: A New Chapter",
			"venue": "The Egg",
			"date": "10/26/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/albany-ny-warren-millers-75-730-pm-tickets-995501891957"
		},
		{
			"artist": "PhanArt At the Palace Theatre",
			"venue": "The Palace",
			"date": "10/26/24",
			"time": "12:00 PM",
			"town": "Albany",
			"link": "https://www.palacealbany.org/events/detail/phanart-at-the-palace-theatre"
		},
		{
			"artist": "The Egg Presents: Craig Ferguson: Pants on Fire",
			"venue": "The Egg",
			"date": "10/27/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117049"
		},
		{
			"artist": "The Lovestruck Balladeers",
			"venue": "Caffè Lena",
			"date": "10/27/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Punk Rock Flea Market",
			"venue": "Empire Live",
			"date": "10/27/24",
			"time": "11:00 AM",
			"town": "Albany",
			"link": "https://empirelivealbany.com/"
		},
		{
			"artist": "The Egg Presents: Craig Ferguson Pants on Fire",
			"venue": "The Egg",
			"date": "10/27/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117049"
		},
		{
			"artist": "Taco Tuesday with Shannon Roy",
			"venue": "Unihog",
			"date": "10/29/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Anatomy of Exile",
			"venue": "Caffè Lena",
			"date": "10/29/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Set It Off: The Deathless Tour Part 2",
			"venue": "Empire Live",
			"date": "10/29/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060BD9D591C87"
		},
		{
			"artist": "The Last Ten Seconds Of Life & Cell",
			"venue": "Empire Underground",
			"date": "10/29/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060DEFDEC3312"
		},
		{
			"artist": "Lena Go Round- Songwriter Showcase with Erin Harkes",
			"venue": "Caffè Lena",
			"date": "10/30/24",
			"time": "7:30 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Halloween with Fungkshui & the TV Doctors",
			"venue": "Lark Hall",
			"date": "10/31/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/lark-hall-presents-halloween-with-fungkshui-the-tv-doctors-tickets-991245531067?aff=ebdsoporgprofile"
		},
		{
			"artist": "Deadgrass",
			"venue": "Caffè Lena",
			"date": "10/31/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Trick-or-Treat At The Palace!",
			"venue": "The Palace",
			"date": "10/31/24",
			"time": "4:00 PM",
			"town": "Albany",
			"link": "https://www.palacealbany.org/events/detail/trick-or-treat-at-the-palace"
		},
		{
			"artist": "Day of the Deadbeats: Celebrating 30 years of Playing Dead in Albany, NY",
			"venue": "Lark Hall",
			"date": "11/1/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/day-of-the-deadbeats-celebrating-30-years-of-playing-dead-in-albany-ny-tickets-991259883997?aff=ebdsoporgprofile"
		},
		{
			"artist": "Guerilla Toss / Abyssmals / 100 Psychic Dreams",
			"venue": "No Fun",
			"date": "11/1/24",
			"time": "7:00 PM",
			"town": "Troy",
			"link": "https://www.eventbrite.com/e/guerilla-toss-abyssmals-100-psychic-dreams-tickets-984432643537?aff=ebdsoporgprofile"
		},
		{
			"artist": "Monkey & the Crowbar",
			"venue": "The Eleven at Lark Hall",
			"date": "11/1/24",
			"time": "6:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/happy-hour-with-monkey-the-crowbar-at-the-eleven-free-show-tickets-999835273217?aff=ebdsoporgprofile"
		},
		{
			"artist": "Live & Local at The Linda - Angelina Valente + Ryan Leddick",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/1/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/live-local-at-the-linda-presents-angelina-valente-and-ryan-leddick-tickets-989028148817"
		},
		{
			"artist": "The Lox | 30th Anniversary Tour",
			"venue": "The Palace Theater",
			"date": "11/1/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060B5F0FC9232"
		},
		{
			"artist": "Bright Series: Maya de Vitry",
			"venue": "Caffè Lena",
			"date": "11/1/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Overkill",
			"venue": "Empire Live",
			"date": "11/1/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000611ECF303FCD"
		},
		{
			"artist": "The Charlie Parti",
			"venue": "Empire Underground",
			"date": "11/1/24",
			"time": "9:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006129EA80463C"
		},
		{
			"artist": "The Lox",
			"venue": "The Palace",
			"date": "11/1/24",
			"time": "8;00pm",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060B5F0FC9232"
		},
		{
			"artist": "Misty Blues: I'm Too Old For Games - Album Release & Live Tribute to Odetta",
			"venue": "Caffè Lena",
			"date": "11/2/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "An Evening With Justin Furstenfeld of Blue October – “Open Book”",
			"venue": "The Egg",
			"date": "11/2/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117051"
		},
		{
			"artist": "Eddie B",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/2/24",
			"time": "8:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117433&qty=0"
		},
		{
			"artist": "Narrow North",
			"venue": "Wolf Hollow Brewing Company",
			"date": "11/2/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/narrow-north-1"
		},
		{
			"artist": "The Phoenix and The Raven",
			"venue": "Empire Underground",
			"date": "11/2/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060C4A43911F0"
		},
		{
			"artist": "GWAR",
			"venue": "Empire Live",
			"date": "11/2/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060CD8C6D0E7A"
		},
		{
			"artist": "Curvention Presents: The Election",
			"venue": "The Egg",
			"date": "11/2/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/online?performance=118244"
		},
		{
			"artist": "An Evening with Justin Furstenfeld of Blue October - \"Open Book'",
			"venue": "The Egg",
			"date": "11/2/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117051"
		},
		{
			"artist": "Sawyer Fredericks & Cassandra Kubinski",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/3/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/sawyer-fredericks-cassandra-kubinski-tickets-995296036237"
		},
		{
			"artist": "Orpheus Chamber Orchestra with Maxim Vengerov",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/3/24",
			"time": "3:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116455&qty=0"
		},
		{
			"artist": "Jacob Jolliff Band",
			"venue": "The Cock 'n Bull",
			"date": "11/3/24",
			"time": "6:30 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/jacob-jolliff-band/"
		},
		{
			"artist": "Christopher Paul Stelling",
			"venue": "Caffè Lena",
			"date": "11/3/24",
			"time": "19:00",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Metal & Music Mixer",
			"venue": "Empire Live",
			"date": "11/3/24",
			"time": "1:00 PM",
			"town": "Albany",
			"link": "https://empirelivealbany.com/"
		},
		{
			"artist": "Drew Lynch",
			"venue": "The Egg",
			"date": "11/3/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117386"
		},
		{
			"artist": "The HU with Special Guest The Funeral Portrait",
			"venue": "Empire Live",
			"date": "11/4/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006109DCE9339C"
		},
		{
			"artist": "Taco Tuesday with Will Pedicone",
			"venue": "Unihog",
			"date": "11/5/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "The Egg Presents: Cold Case Live",
			"venue": "The Egg",
			"date": "11/6/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116918"
		},
		{
			"artist": "Nick Carter",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/6/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116265&qty=0"
		},
		{
			"artist": "The Egg Presents: Cold Case Live",
			"venue": "The Egg",
			"date": "11/6/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116918"
		},
		{
			"artist": "The Crossword Show with Zach Sherwin",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/7/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/the-crossword-show-with-zach-sherwin-tickets-993575169077"
		},
		{
			"artist": "Michael McDermott",
			"venue": "Caffè Lena",
			"date": "11/7/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Ringling Bros. and Barnum & Bailey presents The Greatest Show On Earth",
			"venue": "MVP Arena",
			"date": "11/8/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1154"
		},
		{
			"artist": "Caleb Caudle & The Sweet Critters",
			"venue": "The Park Theatre",
			"date": "11/8/24",
			"time": "8:00 PM",
			"town": "Glens Falls",
			"link": "https://www.parktheatergf.com/upcoming-events/#/events/106288"
		},
		{
			"artist": "Magic of Motown",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/8/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116584&qty=0"
		},
		{
			"artist": "Castro and the Fidelities",
			"venue": "Wolf Hollow Brewing Company",
			"date": "11/8/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/castro-and-the-fidelities-3"
		},
		{
			"artist": "Drank the Gold",
			"venue": "The Cock 'n Bull",
			"date": "11/8/24",
			"time": "6:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/drank-the-gold-3/"
		},
		{
			"artist": "Jim Gaudet and the Railroad Boys",
			"venue": "Caffè Lena",
			"date": "11/8/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Dexter and The Moonrocks",
			"venue": "Empire Underground",
			"date": "11/8/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060F3BC5C29E0"
		},
		{
			"artist": "Pigeons Playing Ping Pong",
			"venue": "Empire Live",
			"date": "11/8/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060EFF2EB1EF4"
		},
		{
			"artist": "Cash For Coats - Palace Sessions Live With The NolaNauts",
			"venue": "The Palace",
			"date": "11/8/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.universe.com/events/cash-for-coats-palace-sessions-live-with-the-nolanauts-tickets-DSY0T2"
		},
		{
			"artist": "LaMP ( Russ Lawton, Scott Metzger, Ray Paczkowski)",
			"venue": "Lark Hall",
			"date": "11/9/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/lamp-russ-lawton-scott-metzger-ray-paczkowski-tickets-945261812527?aff=ebdsoporgprofile"
		},
		{
			"artist": "Ringling Bros. and Barnum & Bailey presents The Greatest Show On Earth",
			"venue": "MVP Arena",
			"date": "11/9/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1155"
		},
		{
			"artist": "A.I.M. by Kyle Abraham",
			"venue": "Saratoga Performing Arts Center",
			"date": "11/9/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/a-i-m-by-kyle-abraham/"
		},
		{
			"artist": "Running on Jackson - The Premier Jackson Brown Tribute Concert",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/9/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/running-on-jackson-the-premier-jackson-brown-tribute-concert-tickets-923892044977"
		},
		{
			"artist": "Still Rockin' in the Free World: A Tribute to Neil Young",
			"venue": "Caffè Lena",
			"date": "11/9/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Spread Eagle",
			"venue": "Empire Underground",
			"date": "11/9/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060A1D784210C"
		},
		{
			"artist": "Pop Evil/Bad Wolves: The Animals Instinct Tour",
			"venue": "Empire Live",
			"date": "11/9/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006112A2552D2F"
		},
		{
			"artist": "The Egg Presents: David Cross - The End of The Beginning of The End",
			"venue": "The Egg",
			"date": "11/9/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116605"
		},
		{
			"artist": "Ringling Bros. and Barnum & Bailey presents The Greatest Show On Earth",
			"venue": "MVP Arena",
			"date": "11/10/24",
			"time": "9:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1156"
		},
		{
			"artist": "A.I.M. by Kyle Abraham",
			"venue": "Saratoga Performing Arts Center",
			"date": "11/10/24",
			"time": "2:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/a-i-m-by-kyle-abraham/"
		},
		{
			"artist": "Ryanhood",
			"venue": "Caffè Lena",
			"date": "11/10/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Vertical Horizon: Everything You Want 25th Anniversary Tour",
			"venue": "Empire Live",
			"date": "11/10/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060FA0ECB3B8D"
		},
		{
			"artist": "Ringling Bros. and Barnum & Bailey presents The Greatest Show On Earth",
			"venue": "MVP Arena",
			"date": "11/11/24",
			"time": "10:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1157"
		},
		{
			"artist": "Taco Tuesday with Peter Anello",
			"venue": "Unihog",
			"date": "11/12/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Jazz at Caffé Lena: Chuck Lamb Trio Featuring Stanley Jordan",
			"venue": "Caffè Lena",
			"date": "11/12/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Glenn Miller Orchestra",
			"venue": "The Egg",
			"date": "11/12/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117630"
		},
		{
			"artist": "EMBARGOED Steve Solomon",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/13/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117633&qty=0"
		},
		{
			"artist": "Skidmore Jazz Students",
			"venue": "Caffè Lena",
			"date": "11/13/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Haley Heyenderickx w/ Kalia Vandever",
			"venue": "The Egg",
			"date": "11/13/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117431"
		},
		{
			"artist": "Christine Lenée with opener Ryan David Green",
			"venue": "Caffè Lena",
			"date": "11/14/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Odie Leigh: Carrier Pigeon Tour",
			"venue": "Lark Hall",
			"date": "11/15/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/odie-leigh-carrier-pigeon-tour-tickets-912688625247?aff=ebdsoporgprofile"
		},
		{
			"artist": "MercyMe / TobyMac Tour",
			"venue": "MVP Arena",
			"date": "11/15/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006074971A251D"
		},
		{
			"artist": "The Chicago Experience: Featuring Chicago Transit",
			"venue": "The Egg",
			"date": "11/15/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=115919"
		},
		{
			"artist": "Jo Koy | Just Being Koy Tour",
			"venue": "The Palace Theater",
			"date": "11/15/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/0000609ACAA47BB0"
		},
		{
			"artist": "Dana Cooper - Album Release",
			"venue": "Caffè Lena",
			"date": "11/15/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "The Emo Night Tour, 18+ w/ ID ONLY. No Exceptions",
			"venue": "Empire Live",
			"date": "11/15/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000613BD3CD42E7"
		},
		{
			"artist": "The Chicago Experience: Featuring Chicago Transit",
			"venue": "The Egg",
			"date": "11/15/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=115919"
		},
		{
			"artist": "Jo Koy: Just Being Koy Tour",
			"venue": "The Palace",
			"date": "11/15/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/0000609ACAA47BB0"
		},
		{
			"artist": "The National Reserve",
			"venue": "Unihog",
			"date": "11/16/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Sahara 4 (Head Sound)",
			"venue": "Wolf Hollow Brewing Company",
			"date": "11/16/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/sahara-4"
		},
		{
			"artist": "TrueSongs 2024: Lyrics of Life at the Spa Little Theater",
			"venue": "Caffè Lena",
			"date": "11/16/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/truesongs/"
		},
		{
			"artist": "St. Catherine's Center for Children Presents: Elvis: Good Rockin' Tonight",
			"venue": "The Egg",
			"date": "11/16/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117389"
		},
		{
			"artist": "The Egg Presents: Bill Frisell Trio featuring Luke Bergman & Rudy Royston",
			"venue": "The Egg",
			"date": "11/16/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=118234"
		},
		{
			"artist": "Nick Swardson: Toilet Head",
			"venue": "The Egg",
			"date": "11/17/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116671"
		},
		{
			"artist": "The Beathes Caffé",
			"venue": "Caffè Lena",
			"date": "11/17/24",
			"time": "3:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Exodus and Havok with special guest Candy and Dead Heat",
			"venue": "Empire Live",
			"date": "11/17/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006131F0C0429E"
		},
		{
			"artist": "The Egg Presents: Family Circle #3 with Veena and Devesh Chandra",
			"venue": "The Egg",
			"date": "11/17/24",
			"time": "2:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117737"
		},
		{
			"artist": "Nick Swardson: Toilet Head",
			"venue": "The Egg",
			"date": "11/17/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116671"
		},
		{
			"artist": "The Egg Presents: Abdullah Ibrahim Trio / Sandhi Trio",
			"venue": "The Egg",
			"date": "11/17/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117429"
		},
		{
			"artist": "Taco Tuesday with Ian Losz",
			"venue": "Unihog",
			"date": "11/19/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Jim Gaudet & The Railroad Boys",
			"venue": "The Cock 'n Bull",
			"date": "11/20/24",
			"time": "7:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/jim-gaudet-the-railroad-boys/"
		},
		{
			"artist": "Rochmon Record Club Listening Party: Bob Dylan's \"Blood on the Tracks",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/21/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/rochmon-record-club-listening-party-bob-dylan-blood-on-the-tracks-tickets-983913901967"
		},
		{
			"artist": "An Acoustic Evening with MATISYAHU",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/21/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117434&qty=0"
		},
		{
			"artist": "Dorado Schmitt and Sons: Django Festival All Stars",
			"venue": "Saratoga Performing Arts Center",
			"date": "11/22/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/dorado-schmitt-and-sons-django-festival-all-stars/"
		},
		{
			"artist": "Two Planets Away",
			"venue": "The Eleven at Lark Hall",
			"date": "11/22/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/two-planets-away-at-the-eleven-at-lark-hall-free-show-tickets-1001592689697?aff=ebdsoporgprofile"
		},
		{
			"artist": "Caligula Blushed - A Visceral Live Experience for Smiths & Morrissey Fans",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/22/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/caligula-blushed-a-visceral-live-experience-for-smiths-morrissey-fans-tickets-923897892467"
		},
		{
			"artist": "High Noon: A Tribute to Lynyrd Skynyrd and Southern Rock",
			"venue": "The Park Theatre",
			"date": "11/22/24",
			"time": "8:00 PM",
			"town": "Glens Falls",
			"link": "https://www.parktheatergf.com/upcoming-events/#/events/100785"
		},
		{
			"artist": "Tame the Rooster",
			"venue": "Unihog",
			"date": "11/22/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Lucy Kaplansky",
			"venue": "Caffè Lena",
			"date": "11/22/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Ekoh - Drag Me From Hell Tour",
			"venue": "Empire Underground",
			"date": "11/22/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000612912D14C6A"
		},
		{
			"artist": "Brain Regan",
			"venue": "The Egg",
			"date": "11/23/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116582"
		},
		{
			"artist": "The Slambovian Circus of Dreams",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/23/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/the-slambovian-circus-of-dreams-tickets-923900640687"
		},
		{
			"artist": "Renaissance Quartet",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/23/24",
			"time": "4:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116456&qty=0"
		},
		{
			"artist": "Midnight Choir",
			"venue": "Wolf Hollow Brewing Company",
			"date": "11/23/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/midnight-choir"
		},
		{
			"artist": "Darlingside",
			"venue": "Caffè Lena",
			"date": "11/23/24",
			"time": "2:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Annie & The Hedonists",
			"venue": "Caffè Lena",
			"date": "11/23/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Thanksgiving Metal Throwdown Food Drive",
			"venue": "Empire Underground",
			"date": "11/23/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060E3C73E2495"
		},
		{
			"artist": "Brian Regan (EARLY SHOW)",
			"venue": "The Egg",
			"date": "11/23/24",
			"time": "5:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117604"
		},
		{
			"artist": "Brian Regan",
			"venue": "The Egg",
			"date": "11/23/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116582"
		},
		{
			"artist": "Micro All-Star Mania: Midget Wrestling!",
			"venue": "Frog Alley Brewing",
			"date": "11/24/24",
			"time": "8:00 PM",
			"town": "Schenectady",
			"link": "https://www.universe.com/events/micro-all-stars-midget-wrestling-tickets-YL9ZPX"
		},
		{
			"artist": "Dorado Schmitt and Sons: Django Festival All Stars with Special Guest Hot Club Saratoga",
			"venue": "Spa Little Theater",
			"date": "11/24/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/dorado-schmitt-and-the-django-festival-allstars/book/55201/"
		},
		{
			"artist": "Rocky Mountain High Experience: A John Denver Christmas",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/24/24",
			"time": "3:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116934&qty=0"
		},
		{
			"artist": "Momentum Series: Jazzmeia Horn",
			"venue": "Caffè Lena",
			"date": "11/24/24",
			"time": "4:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Momentum Series: Jazzmeia Horn",
			"venue": "Caffè Lena",
			"date": "11/24/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Taco Tuesday with Belle Skinner",
			"venue": "Unihog",
			"date": "11/26/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Jonathan Greene aand The Grand Boubousse",
			"venue": "Caffè Lena",
			"date": "11/26/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Gillian Welch & David Rawlings",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/27/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117390&qty=0"
		},
		{
			"artist": "DeeJay Element presents An Underground Thanksgiving",
			"venue": "Empire Underground",
			"date": "11/27/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300061291A5B4EB5"
		},
		{
			"artist": "Ladies Love R&B",
			"venue": "MVP Arena",
			"date": "11/29/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/0000606F99892E8B"
		},
		{
			"artist": "Keith Pray Trio",
			"venue": "The Cock 'n Bull",
			"date": "11/29/24",
			"time": "6:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/keith-pray-trio-2024-11-29/"
		},
		{
			"artist": "Frank Solivan and Jillian Lea",
			"venue": "Caffè Lena",
			"date": "11/29/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "He$h: Anarchy Tour",
			"venue": "Empire Underground",
			"date": "11/29/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060F7BC7A4316"
		},
		{
			"artist": "The Egg & BenDeLaCreme Present: The Jinkx & DeLa Holiday Show",
			"venue": "The Egg",
			"date": "11/29/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117230"
		},
		{
			"artist": "Bellas Bartok",
			"venue": "Unihog",
			"date": "11/30/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Steve Oill",
			"venue": "Wolf Hollow Brewing Company",
			"date": "11/30/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/8b4akglr8kent79gj5h9jfn47as5bm"
		},
		{
			"artist": "Arlen Roth Band",
			"venue": "Caffè Lena",
			"date": "11/30/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Holiday Rhymes",
			"venue": "Empire Underground",
			"date": "11/30/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006133E73447F6"
		},
		{
			"artist": "Alan Cumming Uncut",
			"venue": "Troy Savings Bank Music Hall",
			"date": "12/1/24",
			"time": "7:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116828&qty=0"
		},
		{
			"artist": "Fred Small",
			"venue": "Caffè Lena",
			"date": "12/1/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Fearless: The Taylor Swift Experience",
			"venue": "The Egg",
			"date": "12/1/24",
			"time": "4:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=118224"
		},
		{
			"artist": "The Rock Orchestra by Candlelight | Mega Events Presents",
			"venue": "The Palace Theater",
			"date": "12/2/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060CC8C1B312E"
		},
		{
			"artist": "Trevor Wallace and Michael Blaustein Present: Stiff Socks Live",
			"venue": "The Egg",
			"date": "12/2/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=118164"
		},
		{
			"artist": "The Rock Orchestra By Candlelight",
			"venue": "The Palace",
			"date": "12/2/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006075978822A1"
		},
		{
			"artist": "Nutcracker! Magical Christmas Ballet!",
			"venue": "The Palace Theater",
			"date": "12/3/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006075978822A1"
		},
		{
			"artist": "Nutcracker! Magical Christmas Ballet!",
			"venue": "The Palace",
			"date": "12/3/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006075978822A1"
		},
		{
			"artist": "Giggly Squad live: Club Giggly",
			"venue": "Troy Savings Bank Music Hall",
			"date": "12/4/24",
			"time": "7:30 PM (sold out), 9:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116586&qty=0"
		},
		{
			"artist": "Jason Bonham's Led Zeppelin Evening",
			"venue": "The Palace",
			"date": "12/4/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006114A2C22A4A"
		},
		{
			"artist": "Anthony Green",
			"venue": "Empire Underground",
			"date": "12/5/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000610DB1232D5C"
		},
		{
			"artist": "Circque Dreams Holidaze",
			"venue": "The Palace",
			"date": "12/5/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006131D1F262B8"
		},
		{
			"artist": "Jenna Nicholls",
			"venue": "The Eleven at Lark Hall",
			"date": "12/6/24",
			"time": "6:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/jenna-nicholls-live-at-the-eleven-free-show-tickets-969605073877?aff=ebdsoporgprofile"
		},
		{
			"artist": "Eileen Ivers",
			"venue": "Troy Savings Bank Music Hall",
			"date": "12/6/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117634&qty=0"
		},
		{
			"artist": "Brother Junction",
			"venue": "Wolf Hollow Brewing Company",
			"date": "12/6/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/brother-junction"
		},
		{
			"artist": "SIRSY",
			"venue": "Caffè Lena",
			"date": "12/6/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "The Acacia Strain: Tune Low Die Slow Ho Ho!",
			"venue": "Empire Live",
			"date": "12/6/24",
			"time": "12:45 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060F825093523"
		},
		{
			"artist": "The Snow Queen",
			"venue": "The Palace",
			"date": "12/6/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006108DC497EC2"
		},
		{
			"artist": "Boston Early Music Festival presents Telemann's Don Quichotte",
			"venue": "Troy Savings Bank Music Hall",
			"date": "12/7/24",
			"time": "8:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116903&qty=0"
		},
		{
			"artist": "SIRSY",
			"venue": "Caffè Lena",
			"date": "12/7/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "The Acacia Strain: Tune Low Die Slow Ho Ho!",
			"venue": "Empire Live",
			"date": "12/7/24",
			"time": "1:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300060F8256D352A"
		},
		{
			"artist": "Screaming Orphans Christmas Show",
			"venue": "The Egg",
			"date": "12/7/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117263"
		},
		{
			"artist": "SIRSY",
			"venue": "Caffè Lena",
			"date": "12/8/24",
			"time": "3:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "The Egg Presents: Family Circle #4 with Veena and Devesh Chandra",
			"venue": "The Egg",
			"date": "12/8/24",
			"time": "2:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117738"
		},
		{
			"artist": "Albany Symphony: Magic Of Christmas",
			"venue": "The Palace",
			"date": "12/8/24",
			"time": "3:00 PM",
			"town": "Albany",
			"link": "https://tickets.albanysymphony.com/TheatreManager/102/online?bestavail=115400&qty=0"
		},
		{
			"artist": "Taco Tuesday with Live Bait",
			"venue": "Unihog",
			"date": "12/10/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Tony Trischka's Holiday Show",
			"venue": "The Cock 'n Bull",
			"date": "12/10/24",
			"time": "7:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/tony-trischkas-holiday-show-featuring-tim-eriksen-with-jared-engel-hannah-read-and-sean-trischka/"
		},
		{
			"artist": "Jazz at Caffé Lena: Chuck Lamb Trio Featured Artist TBA",
			"venue": "Caffè Lena",
			"date": "12/10/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "An Evening with Shakey Graves & Buffalo Hunt",
			"venue": "Empire Live",
			"date": "12/11/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000612A285F51A3"
		},
		{
			"artist": "Beatles VS. Stones: A Musical Showdown",
			"venue": "The Egg",
			"date": "12/11/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117238"
		},
		{
			"artist": "The Wynotte Sisters Christmas Show",
			"venue": "The Cock 'n Bull",
			"date": "12/12/24",
			"time": "7:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/the-wynotte-sisters-christmas-show/"
		},
		{
			"artist": "Cyrille Aimée",
			"venue": "Caffè Lena",
			"date": "12/12/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Mr Good Vybz presents An Evening with The Refrigerators",
			"venue": "Empire Underground",
			"date": "12/12/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/30006132CB044018"
		},
		{
			"artist": "Sleeping Beauty",
			"venue": "The Palace",
			"date": "12/12/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060FBBA285EAE"
		},
		{
			"artist": "Drank the Gold",
			"venue": "The Cock 'n Bull",
			"date": "12/13/24",
			"time": "6:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/drank-the-gold-2/"
		},
		{
			"artist": "The Empty Pockets Mistletunes Holiday Tour",
			"venue": "Caffè Lena",
			"date": "12/13/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Joann Sifo",
			"venue": "Wolf Hollow Brewing Company",
			"date": "12/14/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/joann-sifo"
		},
		{
			"artist": "Peter Yarrow, of Peter, Paul & Mary, and Mustard's Retreat",
			"venue": "Caffè Lena",
			"date": "12/14/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Holiday Vibes Toy Drive",
			"venue": "Empire Underground",
			"date": "12/14/24",
			"time": "6:30 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/3000610DB43C2DDB"
		},
		{
			"artist": "The McKrells Christmas",
			"venue": "The Egg",
			"date": "12/14/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=118350"
		},
		{
			"artist": "Peter Yarrow, of Peter, Paul & Mary, and Mustard's Retreat",
			"venue": "Caffè Lena",
			"date": "12/15/24",
			"time": "3:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Finding Christmas",
			"venue": "The Palace",
			"date": "12/15/24",
			"time": "2:00 PM",
			"town": "Albany",
			"link": ""
		},
		{
			"artist": "The Egg Presents: Samara Joy; A Joyful Holiday (feat. The McLendon Family)",
			"venue": "The Egg",
			"date": "12/16/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117384"
		},
		{
			"artist": "The McKrells' Christmas Show",
			"venue": "The Cock 'n Bull",
			"date": "12/18/24",
			"time": "7:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/the-mckrells-christmas-show/"
		},
		{
			"artist": "The McKrells' Christmas Show",
			"venue": "The Cock 'n Bull",
			"date": "12/19/24",
			"time": "7:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/the-mckrells-christmas-show-2/"
		},
		{
			"artist": "The Grand Kyiv Ballet Presents: The Nutcracker",
			"venue": "The Egg",
			"date": "12/19/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117905"
		},
		{
			"artist": "Rees Shad & The Conversations",
			"venue": "Caffè Lena",
			"date": "12/20/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "The Grand Kyiv Ballet Presents: The Nutcracker",
			"venue": "The Egg",
			"date": "12/20/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117906"
		},
		{
			"artist": "Neon Avenue",
			"venue": "Unihog",
			"date": "12/21/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "Nefesh Mountain: The Love & Light Tour",
			"venue": "Caffè Lena",
			"date": "12/21/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "“Christmas Spectacular” featuring Tim Wechgelaer, Chris Carey ‘n Drank the Gold",
			"venue": "The Cock 'n Bull",
			"date": "12/22/24",
			"time": "6:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/christmas-spectacular-featuring-tim-wechgelaer-chris-carey-n-drank-the-gold/"
		},
		{
			"artist": "A Joyful Noise!\" Gospel Dinner led by soulist Garland Nelson",
			"venue": "Caffè Lena",
			"date": "12/22/24",
			"time": "5:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Keith Pray Trio",
			"venue": "The Cock 'n Bull",
			"date": "12/27/24",
			"time": "6:00 PM",
			"town": "Galway",
			"link": "https://thecocknbull.com/events/keith-pray-trio-2024-12-27/"
		},
		{
			"artist": "Stephen Kellogg",
			"venue": "Caffè Lena",
			"date": "12/27/24",
			"time": "5:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Stephen Kellogg",
			"venue": "Caffè Lena",
			"date": "12/27/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "A Live Conversation With Chevy Chase",
			"venue": "The Palace",
			"date": "12/27/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060E2D2EA83AD"
		},
		{
			"artist": "The Trojan Horns",
			"venue": "Wolf Hollow Brewing Company",
			"date": "12/28/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/the-trojan-horns"
		},
		{
			"artist": "New American Cuisine",
			"venue": "Caffè Lena",
			"date": "12/28/24",
			"time": "4:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "New American Cuisine",
			"venue": "Caffè Lena",
			"date": "12/28/24",
			"time": "19:00",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
		},
		{
			"artist": "Joe Gatto: Let's Get Into It Featuring Mark Jigarjian",
			"venue": "The Palace Theater",
			"date": "12/29/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060CDBE254778"
		},
		{
			"artist": "Joe Gatto: Let's Get Into It",
			"venue": "The Palace",
			"date": "12/29/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060CDBE254778"
		},
		{
			"artist": "Zakk Sabbath: King of the Monstours",
			"venue": "Empire Live",
			"date": "12/30/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/300061290C474B03"
		},
		{
			"artist": "Branford Marsalis",
			"venue": "Troy Savings Bank Music Hall",
			"date": "1/16/25",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117608&qty=0"
		},
		{
			"artist": "Steven Isserlis",
			"venue": "Troy Savings Bank Music Hall",
			"date": "2/4/25",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116457&qty=0"
		},
		{
			"artist": "Alfredo Rodriguez Trio | Part of McCormack Jazz Series",
			"venue": "Spa Little Theater",
			"date": "4/5/25",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/alfredo-rodriguez-trio/book/54801/"
		},
		{
			"artist": "Veronica Swift",
			"venue": "Spa Little Theater",
			"date": "5/1/25",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://spac.org/events/veronica-swift/book/54601/"
		}
	];

export const theaterData = [
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

export const artData = [
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
