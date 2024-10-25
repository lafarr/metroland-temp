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
			"artist": "Robert Ellis",
			"venue": "Caffè Lena",
			"date": "10/17/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Ari Hest with opener Jacob Shipley",
			"venue": "Caffè Lena",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Howl Story Slam",
			"venue": "Caffè Lena",
			"date": "10/23/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Reese Fulmer & The Carriage House Band Album Relese",
			"venue": "Caffè Lena",
			"date": "10/25/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "The Lovestruck Balladeers",
			"venue": "Caffè Lena",
			"date": "10/27/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Lena Go Round- Songwriter Showcase with Erin Harkes",
			"venue": "Caffè Lena",
			"date": "10/30/24",
			"time": "7:30 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Bright Series: Maya de Vitry",
			"venue": "Caffè Lena",
			"date": "11/1/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Christopher Paul Stelling",
			"venue": "Caffè Lena",
			"date": "11/3/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Jim Gaudet and the Railroad Boys",
			"venue": "Caffè Lena",
			"date": "11/8/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Ryanhood",
			"venue": "Caffè Lena",
			"date": "11/10/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Skidmore Jazz Students",
			"venue": "Caffè Lena",
			"date": "11/13/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Dana Cooper - Album Release",
			"venue": "Caffè Lena",
			"date": "11/15/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "The Beathes Caffé",
			"venue": "Caffè Lena",
			"date": "11/17/24",
			"time": "3:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Jonathan Greene aand The Grand Boubousse",
			"venue": "Caffè Lena",
			"date": "11/26/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Arlen Roth Band",
			"venue": "Caffè Lena",
			"date": "11/30/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "SIRSY",
			"venue": "Caffè Lena",
			"date": "12/6/24",
			"time": "8:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "SIRSY",
			"venue": "Caffè Lena",
			"date": "12/8/24",
			"time": "3:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Cyrille Aimée",
			"venue": "Caffè Lena",
			"date": "12/12/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Peter Yarrow, of Peter, Paul & Mary, and Mustard's Retreat",
			"venue": "Caffè Lena",
			"date": "12/14/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "Rees Shad & The Conversations",
			"venue": "Caffè Lena",
			"date": "12/20/24",
			"time": "7:00 PM",
			"town": "Saratoga Springs",
			"link": "https://www.caffelena.org/live-events/"
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
			"artist": "A Joyful Noise!\" Gospel Dinner led by soulist Garland Nelson\tCaffè Lena\t12/22/24\t5:00 PM\tSaratoga Springs\thttps://www.caffelena.org/live-events/\nStephen Kellogg\tCaffè Lena\t12/27/24\t5:00 PM\tSaratoga Springs\thttps://www.caffelena.org/live-events/\nStephen Kellogg\tCaffè Lena\t12/27/24\t8:00 PM\tSaratoga Springs\thttps://www.caffelena.org/live-events/\nNew American Cuisine\tCaffè Lena\t12/28/24\t4:00 PM\tSaratoga Springs\thttps://www.caffelena.org/live-events/\nNew American Cuisine\tCaffè Lena\t12/28/24\t7:00 PM\tSaratoga Springs\thttps://www.caffelena.org/live-events/\nThe Legend of Sleepy Hollow\tCapital Repertory Theatre\t10/19/24\t11:00 AM\tAlbany\thttps://attherep.org/event/the-legend-of-sleepy-hollow-2/\nWide Awake\tCentre Street Pub\t10/19/24\t9:00 PM\tSchenectady\t\nBack in Black- The true AC/DC experience\tCohoes Music Hall\t10/19/24\t7:30 PM\tCohoes\thttps://www.thecohoesmusichall.org/events\nPam Tilis- Kevin Richards' Up Close Country Series\tCohoes Music Hall\t10/20/24\t7:00 PM\tCohoes\thttps://www.thecohoesmusichall.org/events\nJD Simo and Luther Dickinson\tCohoes Music Hall\t10/24/24\t7:30 PM\tCohoes\thttps://www.thecohoesmusichall.org/events\nKitchen Dwellers with Sicard Hollow\tCohoes Music Hall\t10/25/24\t8:00 PM\tCohoes\thttps://www.thecohoesmusichall.org/events\nHalloween's Metal Maddness\tCohoes Music Hall\t10/26/24\t7:30 PM\tCohoes\thttps://www.thecohoesmusichall.org/events\nJames Kennedy\tEmpire Live\t10/18/24\t9:00 PM\tAlbany\thttps://www.ticketmaster.com/event/3000611B9E263173\nDaisy Dukes & Cowboy Boots\" Tour with TVBOO\tEmpire Live\t10/19/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060F51FE728FE\nCarnifex w/ Cryptopsy, Mental Cruelty, Organectomy, Heavy//Hitter\tEmpire Live\t10/26/24\t6:30 PM\tAlbany\thttps://www.ticketmaster.com/event/300060B0EACE213A\nPunk Rock Flea Market\tEmpire Live\t10/27/24\t11:00 AM\tAlbany\thttps://empirelivealbany.com/\nSet It Off: The Deathless Tour Part 2\tEmpire Live\t10/29/24\t6:30 PM\tAlbany\thttps://www.ticketmaster.com/event/300060BD9D591C87\nOverkill\tEmpire Live\t11/1/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/3000611ECF303FCD\nGWAR\tEmpire Live\t11/2/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060CD8C6D0E7A\nMetal & Music Mixer\tEmpire Live\t11/3/24\t1:00 PM\tAlbany\thttps://empirelivealbany.com/\nThe HU with Special Guest The Funeral Portrait\tEmpire Live\t11/4/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/30006109DCE9339C\nPigeons Playing Ping Pong\tEmpire Live\t11/8/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060EFF2EB1EF4\nPop Evil/Bad Wolves: The Animals Instinct Tour\tEmpire Live\t11/9/24\t19:00\tAlbany\thttps://www.ticketmaster.com/event/30006112A2552D2F\nVertical Horizon: Everything You Want 25th Anniversary Tour\tEmpire Live\t11/10/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060FA0ECB3B8D\nThe Emo Night Tour, 18+ w/ ID ONLY. No Exceptions\tEmpire Live\t11/15/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/3000613BD3CD42E7\nExodus and Havok with special guest Candy and Dead Heat\tEmpire Live\t11/17/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/30006131F0C0429E\nThe Acacia Strain: Tune Low Die Slow Ho Ho!\tEmpire Live\t12/6/24\t12:45 PM\tAlbany\thttps://www.ticketmaster.com/event/300060F825093523\nThe Acacia Strain: Tune Low Die Slow Ho Ho!\tEmpire Live\t12/7/24\t1:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060F8256D352A\nAn Evening with Shakey Graves & Buffalo Hunt\tEmpire Live\t12/11/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/3000612A285F51A3\nZakk Sabbath: King of the Monstours\tEmpire Live\t12/30/24\t7:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300061290C474B03\nDale Hollow\tEmpire Underground\t10/17/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060DB08F334C3\nCzarface\tEmpire Underground\t10/18/24\t6:30 PM\tAlbany\thttps://www.ticketmaster.com/event/300060F3C4FC2D70\nBabyJake\tEmpire Underground\t10/19/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060F18B9E14A8\nRockin' Pink For Breast Cancer with Vintri Hill\tEmpire Underground\t10/20/24\t5:30 PM\tAlbany\thttps://www.ticketmaster.com/event/3000610DA7CC243B\nEighteen Visions\tEmpire Underground\t10/25/24\t6:30 PM\tAlbany\thttps://www.ticketmaster.com/event/300060C499450E95\nThe Last Ten Seconds Of Life & Cell\tEmpire Underground\t10/29/24\t6:30 PM\tAlbany\thttps://www.ticketmaster.com/event/300060DEFDEC3312\nThe Charlie Parti\tEmpire Underground\t11/1/24\t9:00 PM\tAlbany\thttps://www.ticketmaster.com/event/30006129EA80463C\nThe Phoenix and The Raven\tEmpire Underground\t11/2/24\t6:30 PM\tAlbany\thttps://www.ticketmaster.com/event/300060C4A43911F0\nDexter and The Moonrocks\tEmpire Underground\t11/8/24\t7:30 PM\tAlbany\thttps://www.ticketmaster.com/event/300060F3BC5C29E0\nSpread Eagle\tEmpire Underground\t11/9/24\t6:30 PM\tAlbany\thttps://www.ticketmaster.com/event/300060A1D784210C\nEkoh - Drag Me From Hell Tour\tEmpire Underground\t11/22/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/3000612912D14C6A\nThanksgiving Metal Throwdown Food Drive\tEmpire Underground\t11/23/24\t7:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060E3C73E2495\nDeeJay Element presents An Underground Thanksgiving\tEmpire Underground\t11/27/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300061291A5B4EB5\nHe$h: Anarchy Tour\tEmpire Underground\t11/29/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/300060F7BC7A4316\nHoliday Rhymes\tEmpire Underground\t11/30/24\t7:30 PM\tAlbany\thttps://www.ticketmaster.com/event/30006133E73447F6\nAnthony Green\tEmpire Underground\t12/5/24\t7:30 PM\tAlbany\thttps://www.ticketmaster.com/event/3000610DB1232D5C\nMr Good Vybz presents An Evening with The Refrigerators\tEmpire Underground\t12/12/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/30006132CB044018\nHoliday Vibes Toy Drive\tEmpire Underground\t12/14/24\t6:30 PM\tAlbany\thttps://www.ticketmaster.com/event/3000610DB43C2DDB\nJon Langston\tFrog Alley Brewing\t10/17/24\t7:00 PM\tSchenectady\thttps://frogalleybrewing.com/events/jon-langston-live-at-frog-alley\nMicro All-Star Mania: Midget Wrestling!\tFrog Alley Brewing\t11/24/24\t8:00 PM\tSchenectady\thttps://www.universe.com/events/micro-all-stars-midget-wrestling-tickets-YL9ZPX\nNoah Gundersen w/ Abby Gundersen: Ledges 10 Year Anniversary\tLark Hall\t10/18/24\t8:00 PM\tAlbany\thttps://www.eventbrite.com/e/noah-gundersen-wabby-gundersen-ledges-10-year-anniversary-tickets-912706057387?aff=ebdsoporgprofile\nMagic Beans\tLark Hall\t10/24/24\t8:00 PM\tAlbany\thttps://www.eventbrite.com/e/magic-beans-with-special-guest-squeaky-feet-tickets-999310975027?aff=ebdsoporgprofile\nHalloween with Fungkshui & the TV Doctors\tLark Hall\t10/31/24\t8:00 PM\tAlbany\thttps://www.eventbrite.com/e/lark-hall-presents-halloween-with-fungkshui-the-tv-doctors-tickets-991245531067?aff=ebdsoporgprofile\nDay of the Deadbeats: Celebrating 30 years of Playing Dead in Albany, NY\tLark Hall\t11/1/24\t8:00 PM\tAlbany\thttps://www.eventbrite.com/e/day-of-the-deadbeats-celebrating-30-years-of-playing-dead-in-albany-ny-tickets-991259883997?aff=ebdsoporgprofile\nLaMP ( Russ Lawton, Scott Metzger, Ray Paczkowski)\tLark Hall\t11/9/24\t8:00 PM\tAlbany\thttps://www.eventbrite.com/e/lamp-russ-lawton-scott-metzger-ray-paczkowski-tickets-945261812527?aff=ebdsoporgprofile\nOdie Leigh: Carrier Pigeon Tour\tLark Hall\t11/15/24\t8:00 PM\tAlbany\thttps://www.eventbrite.com/e/odie-leigh-carrier-pigeon-tour-tickets-912688625247?aff=ebdsoporgprofile\nLucid Street ‘Potential Redemption’ Single Release Party\tLost + Found\t11/2/24\t8:00 PM\tAlbany\thttps://facebook.com/events/s/lucid-streets-potential-redemp/515714637636393/?\nOmnium Circus \tMainStage at Proctors\t11/1/24\t6:30 PM\tSchenectady \thttps://www.atproctors.org/event/omnium/\nGNA Secret Star\tMainStage at Proctors\t11/6/24\t7:00 PM\tSchenectady \thttps://www.atproctors.org/event/107-7-gnas-secret-star-acoustic-jam-2/\nTheresa Caputo Live! The Experience\tMainStage at Proctors\t11/12/24\t7:30 PM\tSchenectady \thttps://www.atproctors.org/event/theresa-caputo-live-the-experience/\nLife is a Carnival: Last Waltz Tour 24\tMainStage at Proctors\t11/14/24\t7:30 PM\tSchenectady \thttps://www.atproctors.org/event/the-last-waltz-2/\nWorld Ballet Company: Swan Lake\tMainStage at Proctors\t11/20/24\t7:00 PM\tSchenectady \thttps://www.atproctors.org/event/world-ballet-series-swan-lake/\nRingling Bros. and Barnum & Bailey presents The Greatest Show On Earth\tMVP Arena\t11/8/24\t7:00 PM\tAlbany\thttps://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1154\nRingling Bros. and Barnum & Bailey presents The Greatest Show On Earth\tMVP Arena\t11/9/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1155\nRingling Bros. and Barnum & Bailey presents The Greatest Show On Earth\tMVP Arena\t11/10/24\t9:00 PM\tAlbany\thttps://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1156\nRingling Bros. and Barnum & Bailey presents The Greatest Show On Earth\tMVP Arena\t11/11/24\t10:00 PM\tAlbany\thttps://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1157\nMercyMe / TobyMac Tour\tMVP Arena\t11/15/24\t7:00 PM\tAlbany\thttps://www.ticketmaster.com/event/00006074971A251D\nLadies Love R&B\tMVP Arena\t11/29/24\t8:00 PM\tAlbany\thttps://www.ticketmaster.com/event/0000606F99892E8B\nBee Side Fest - Everybody That Loves You, Senior Living, Retail Drugs, Service Industry\tNo Fun\t10/18/24\t6:00 PM\tTroy\thttps://www.nofuntroy.com/events\nBee Side Fest - TAGABOW, Her New Knife, Mall Goth, CPS, Glimmer, Cigarettes After Breakfast, The Great Depression, Dumpcake, Deep Slut, Galene\tNo Fun\t10/19/24\t6:00 PM\tTroy\thttps://www.eventbrite.com/e/they-are-gutting-a-body-of-water-tickets-999595616397?aff=ebdsoporgprofile\nByrdhouse 6th Anniversary: Mint Green / Apple Pie / Senior Living / AILA\tNo Fun\t10/25/24\t7:00 PM\tTroy\thttps://www.eventbrite.com/e/byrdhouse-6th-anniversary-mint-green-apple-pie-senior-living-aila-tickets-999563570547?aff=ebdsoporgprofile\nGuerilla Toss / Abyssmals / 100 Psychic Dreams\tNo Fun\t11/1/24\t7:00 PM\tTroy\thttps://www.eventbrite.com/e/guerilla-toss-abyssmals-100-psychic-dreams-tickets-984432643537?aff=ebdsoporgprofile\nHayley Jane Band\tOphelia's\t12/21/24\t8:00 PM\tAlbany\thttps://www.eventbrite.com/e/hayley-jane-band-tickets-1032910712747?aff=efbevent&fbclid=IwY2xjawFzvYJleHRuA2FlbQIxMAABHXfeAx0U64QGddV3hJiCiO4YbKuBZdCY_jwYUyYsUOEN0mXWD4zKc5E0Hw_aem_XYpWIbV0SNA__E1zXZBxZg\nDavid Nihill: Shelf Help Tour \tProctors\t10/18/24\t7:30 PM\tSchenectady \thttps://www.atproctors.org/event/david-nihill/\nStraight No Chaser\tProctors\t10/19/24\t8:00 PM\tSchenectady \thttps://www.atproctors.org/event/straight-no-chaser/\nMatt Mathews: Boujee On A Budget \tProctors\t10/25/24\t7:00 PM\tSchenectady \thttps://www.atproctors.org/event/matt-mathews/\nDisney Jr Live on Tour: Let's Play!\tProctors\t10/26/24\t12 PM & 4 PM\tSchenectady \thttps://www.atproctors.org/event/disney-jr-live/\nTwas a Girls Night Before Christmas\tProctors\t12/14/24\t7:00 PM\tSchenectedy\thttps://www.atproctors.org/event/twas-a-girls-night-before-christmas/\nThorgy Does Christmas\tProctors\t12/20/24\t7:30 PM\tSchenectedy\thttps://www.atproctors.org/event/thorgy-does-christmas/\nIt's a Jazzy Christmas\tProctors\t12/21/24\t7:30 PM\tSchenectedy\thttps://www.atproctors.org/event/its-a-jazzy-christmas-4/\nChristian McBride (with Ursa Major)\tSaratoga Performing Arts Center\t10/24/24\t7:00 PM\tSaratoga Springs\thttps://spac.org/events/christian-mcbride-and-ursa-major/\nBeethoven with the Calidore Quartet\tSaratoga Performing Arts Center\t10/26/24\t3:00 PM\tSaratoga Springs\thttps://spac.org/events/cms-10-26/\nA.I.M. by Kyle Abraham\tSaratoga Performing Arts Center\t11/9/24\t7:00 PM\tSaratoga Springs\thttps://spac.org/events/a-i-m-by-kyle-abraham/\nA.I.M. by Kyle Abraham\tSaratoga Performing Arts Center\t11/10/24\t2:00 PM\tSaratoga Springs\thttps://spac.org/events/a-i-m-by-kyle-abraham/\nDorado Schmitt and Sons: Django Festival All Stars\tSaratoga Performing Arts Center\t11/22/24\t7:00 PM\tSaratoga Springs\thttps://spac.org/events/dorado-schmitt-and-sons-django-festival-all-stars/\nChristian McBride and Ursa Major\tSpa Little Theater\t10/24/24\t7:00 PM\tSaratoga Springs\thttps://spac.org/events/christian-mcbride-and-ursa-major/book/55001/\nDorado Schmitt and Sons: Django Festival All Stars with Special Guest Hot Club Saratoga\tSpa Little Theater\t11/24/24\t7:00 PM\tSaratoga Springs\thttps://spac.org/events/dorado-schmitt-and-the-django-festival-allstars/book/55201/\nAlfredo Rodriguez Trio | Part of McCormack Jazz Series\tSpa Little Theater\t4/5/25\t7:00 PM\tSaratoga Springs\thttps://spac.org/events/alfredo-rodriguez-trio/book/54801/\nVeronica Swift\tSpa Little Theater\t5/1/25\t7:00 PM\tSaratoga Springs\thttps://spac.org/events/veronica-swift/book/54601/\nMasters of Nostalgia\tThe Cock 'n Bull\t10/20/24\t5:00 PM\tGalway\thttps://thecocknbull.com/events/masters-of-nostalgia/\nKeith Pray Trio\tThe Cock 'n Bull\t10/25/24\t6:00 PM\tGalway\thttps://thecocknbull.com/events/keith-pray-trio-2024-10-25/\nJacob Jolliff Band\tThe Cock 'n Bull\t11/3/24\t6:30 PM\tGalway\thttps://thecocknbull.com/events/jacob-jolliff-band/\nDrank the Gold\tThe Cock 'n Bull\t11/8/24\t6:00 PM\tGalway\thttps://thecocknbull.com/events/drank-the-gold-3/\nJim Gaudet & The Railroad Boys\tThe Cock 'n Bull\t11/20/24\t7:00 PM\tGalway\thttps://thecocknbull.com/events/jim-gaudet-the-railroad-boys/\nKeith Pray Trio\tThe Cock 'n Bull\t11/29/24\t6:00 PM\tGalway\thttps://thecocknbull.com/events/keith-pray-trio-2024-11-29/\nTony Trischka's Holiday Show\tThe Cock 'n Bull\t12/10/24\t7:00 PM\tGalway\thttps://thecocknbull.com/events/tony-trischkas-holiday-show-featuring-tim-eriksen-with-jared-engel-hannah-read-and-sean-trischka/\nThe Wynotte Sisters Christmas Show\tThe Cock 'n Bull\t12/12/24\t7:00 PM\tGalway\thttps://thecocknbull.com/events/the-wynotte-sisters-christmas-show/\nDrank the Gold\tThe Cock 'n Bull\t12/13/24\t6:00 PM\tGalway\thttps://thecocknbull.com/events/drank-the-gold-2/\nThe McKrells' Christmas Show\tThe Cock 'n Bull\t12/18/24\t7:00 PM\tGalway\thttps://thecocknbull.com/events/the-mckrells-christmas-show/\nThe McKrells' Christmas Show\tThe Cock 'n Bull\t12/19/24\t7:00 PM\tGalway\thttps://thecocknbull.com/events/the-mckrells-christmas-show-2/\n“Christmas Spectacular” featuring Tim Wechgelaer, Chris Carey ‘n Drank the Gold\tThe Cock 'n Bull\t12/22/24\t6:00 PM\tGalway\thttps://thecocknbull.com/events/christmas-spectacular-featuring-tim-wechgelaer-chris-carey-n-drank-the-gold/\nKeith Pray Trio\tThe Cock 'n Bull\t12/27/24\t6:00 PM\tGalway\thttps://thecocknbull.com/events/keith-pray-trio-2024-12-27/\nThe Egg Presents: The Robert Cray Band\tThe Egg\t10/17/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116944\nThe Egg Presents: The Robert Cray Band\tThe Egg\t10/17/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116944\nRenaissance - In Gratitude Farewell Tour\tThe Egg\t10/18/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116585\nThe Egg and Union College Present: Eisenhower Dance Detroit\tThe Egg\t10/18/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117385\nRenaissance - In Gratitude Farewell Tour\tThe Egg\t10/18/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116585\nZOSO: The Ultimate Led Zeppelin Experience\tThe Egg\t10/19/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116869\nThe Fab Four: USA Meets The Beatles!\tThe Egg\t10/20/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116491\nThe Egg Presents: Family Circle #2 with Veena and Devesh Chandra\tThe Egg\t10/20/24\t2:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117736\nMurray's Law\tThe Egg\t10/20/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=118169\nThe Fab Four: USA Meets The Beatles!\tThe Egg\t10/20/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116491\nBEAT - Belew/Vai/Levin/Carey play 80s King Crimson\tThe Egg\t10/21/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116420\nBEAT Belew/Vai/Levin/Carey play 80s King Crimson\tThe Egg\t10/21/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116420\nThe Egg Presents: The Lone Bellow - BY REQUEST ONLY TOUR\tThe Egg\t10/22/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116948\nThe Egg Presents: The Lone Bellow - BY REQUEST ONLY Tour\tThe Egg\t10/22/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116948\nCavetown\tThe Egg\t10/24/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117559\nThe Hot Mess Show with Diary of a Wimpy Kid Author Jeff Kinney\tThe Egg\t10/25/24\t6:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=118167\nThe Weight Band\tThe Egg\t10/25/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117628\nWarren Miller's 75: A New Chapter\tThe Egg\t10/26/24\t7:30 PM\tAlbany\thttps://www.eventbrite.com/e/albany-ny-warren-millers-75-730-pm-tickets-995501891957\nThe Egg Presents: Craig Ferguson: Pants on Fire\tThe Egg\t10/27/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117049\nThe Egg Presents: Craig Ferguson Pants on Fire\tThe Egg\t10/27/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117049\nAn Evening With Justin Furstenfeld of Blue October – “Open Book”\tThe Egg\t11/2/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117051\nCurvention Presents: The Election\tThe Egg\t11/2/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/online?performance=118244\nAn Evening with Justin Furstenfeld of Blue October - \"Open Book'\tThe Egg\t11/2/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117051\nDrew Lynch\tThe Egg\t11/3/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117386\nThe Egg Presents: Cold Case Live\tThe Egg\t11/6/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116918\nThe Egg Presents: Cold Case Live\tThe Egg\t11/6/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116918\nThe Egg Presents: David Cross - The End of The Beginning of The End\tThe Egg\t11/9/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116605\nGlenn Miller Orchestra\tThe Egg\t11/12/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117630\nHaley Heyenderickx w/ Kalia Vandever\tThe Egg\t11/13/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117431\nThe Chicago Experience: Featuring Chicago Transit\tThe Egg\t11/15/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=115919\nThe Chicago Experience: Featuring Chicago Transit\tThe Egg\t11/15/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=115919\nSt. Catherine's Center for Children Presents: Elvis: Good Rockin' Tonight\tThe Egg\t11/16/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117389\nThe Egg Presents: Bill Frisell Trio featuring Luke Bergman & Rudy Royston\tThe Egg\t11/16/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=118234\nNick Swardson: Toilet Head\tThe Egg\t11/17/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116671\nThe Egg Presents: Family Circle #3 with Veena and Devesh Chandra\tThe Egg\t11/17/24\t2:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117737\nNick Swardson: Toilet Head\tThe Egg\t11/17/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116671\nThe Egg Presents: Abdullah Ibrahim Trio / Sandhi Trio\tThe Egg\t11/17/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117429\nBrain Regan\tThe Egg\t11/23/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116582\nBrian Regan (EARLY SHOW)\tThe Egg\t11/23/24\t5:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117604\nBrian Regan\tThe Egg\t11/23/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=116582\nThe Egg & BenDeLaCreme Present: The Jinkx & DeLa Holiday Show\tThe Egg\t11/29/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117230\nFearless: The Taylor Swift Experience\tThe Egg\t12/1/24\t4:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=118224\nTrevor Wallace and Michael Blaustein Present: Stiff Socks Live\tThe Egg\t12/2/24\t8:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=118164\nScreaming Orphans Christmas Show\tThe Egg\t12/7/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117263\nThe Egg Presents: Family Circle #4 with Veena and Devesh Chandra\tThe Egg\t12/8/24\t2:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117738\nBeatles VS. Stones: A Musical Showdown\tThe Egg\t12/11/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117238\nThe McKrells Christmas\tThe Egg\t12/14/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=118350\nThe Egg Presents: Samara Joy; A Joyful Holiday (feat. The McLendon Family)\tThe Egg\t12/16/24\t7:30 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117384\nThe Grand Kyiv Ballet Presents: The Nutcracker\tThe Egg\t12/19/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117905\nThe Grand Kyiv Ballet Presents: The Nutcracker\tThe Egg\t12/20/24\t7:00 PM\tAlbany\thttps://tickets.theegg.org/TheatreManager/98/login&performance=117906\nMonkey & the Crowbar\tThe Eleven at Lark Hall\t11/1/24\t6:00 PM\tAlbany\thttps://www.eventbrite.com/e/happy-hour-with-monkey-the-crowbar-at-the-eleven-free-show-tickets-999835273217?aff=ebdsoporgprofile\nTwo Planets Away\tThe Eleven at Lark Hall\t11/22/24\t7:30 PM\tAlbany\thttps://www.eventbrite.com/e/two-planets-away-at-the-eleven-at-lark-hall-free-show-tickets-1001592689697?aff=ebdsoporgprofile\nJenna Nicholls\tThe Eleven at Lark Hall\t12/6/24\t6:00 PM\tAlbany\thttps://www.eventbrite.com/e/jenna-nicholls-live-at-the-eleven-free-show-tickets-969605073877?aff=ebdsoporgprofile\nThe Jagaloons LP Release w/The Sound Minds, Sci-Flies, Shortwave Radioband\tThe Hangar on the Hudson\t11/9/24\t6:00 PM\tTroy\t\nSeth Rosenbloom Live @ The Linda\tThe Linda\t11/8/24\t8:00 PM\tAlbany\thttps://www.eventbrite.com/e/seth-rosenbloom-tickets-1010142041037\nRochmon Record Club Listening Party: The Beatles' \"White Album",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/17/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/rochmon-record-club-listening-party-the-beatles-white-album-sides-34-tickets-983906239047"
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
			"artist": "San Miguel Frasier",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/san-miguel-frasier-tickets-923122884397"
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
			"artist": "Live & Local at The Linda - Angelina Valente + Ryan Leddick",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/1/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/live-local-at-the-linda-presents-angelina-valente-and-ryan-leddick-tickets-989028148817"
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
			"artist": "The Crossword Show with Zach Sherwin",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/7/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/the-crossword-show-with-zach-sherwin-tickets-993575169077"
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
			"artist": "Rochmon Record Club Listening Party: Bob Dylan's \"Blood on the Tracks\"",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/21/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/rochmon-record-club-listening-party-bob-dylan-blood-on-the-tracks-tickets-983913901967"
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
			"artist": "The Slambovian Circus of Dreams",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/23/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/the-slambovian-circus-of-dreams-tickets-923900640687"
		},
		{
			"artist": "Seth Rosenbloom",
			"venue": "The Linda - WAMC Performing Arts Studio",
			"date": "11/8/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.eventbrite.com/e/seth-rosenbloom-tickets-1010142041037"
		},
		{
			"artist": "Sonny and Perley Swing band",
			"venue": "The Linda at WAMC",
			"date": "11/13/24",
			"time": "7:30 PM",
			"town": "Albany",
			"link": ""
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
			"artist": "The Rocky Horror Picture Show",
			"venue": "The Palace",
			"date": "10/21/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006108AACD3CF6"
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
			"artist": "PhanArt At the Palace Theatre",
			"venue": "The Palace",
			"date": "10/26/24",
			"time": "12:00 PM",
			"town": "Albany",
			"link": "https://www.palacealbany.org/events/detail/phanart-at-the-palace-theatre"
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
			"artist": "The Lox",
			"venue": "The Palace",
			"date": "11/1/24",
			"time": "8;00pm",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060B5F0FC9232"
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
			"artist": "Jo Koy: Just Being Koy Tour",
			"venue": "The Palace",
			"date": "11/15/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/0000609ACAA47BB0"
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
			"venue": "The Palace",
			"date": "12/3/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006075978822A1"
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
			"artist": "Circque Dreams Holidaze",
			"venue": "The Palace",
			"date": "12/5/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006131D1F262B8"
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
			"artist": "Albany Symphony: Magic Of Christmas",
			"venue": "The Palace",
			"date": "12/8/24",
			"time": "3:00 PM",
			"town": "Albany",
			"link": "https://tickets.albanysymphony.com/TheatreManager/102/online?bestavail=115400&qty=0"
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
			"artist": "Finding Christmas",
			"venue": "The Palace",
			"date": "12/15/24",
			"time": "2:00 PM",
			"town": "Albany",
			"link": ""
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
			"artist": "Joe Gatto: Let's Get Into It",
			"venue": "The Palace",
			"date": "12/29/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/000060CDBE254778"
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
			"artist": "Jo Koy | Just Being Koy Tour",
			"venue": "The Palace Theater",
			"date": "11/15/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/0000609ACAA47BB0"
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
			"artist": "Nutcracker! Magical Christmas Ballet!",
			"venue": "The Palace Theater",
			"date": "12/3/24",
			"time": "7:00 PM",
			"town": "Albany",
			"link": "https://www.ticketmaster.com/event/00006075978822A1"
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
			"artist": "Caleb Caudle & The Sweet Critters",
			"venue": "The Park Theatre",
			"date": "11/8/24",
			"time": "8:00 PM",
			"town": "Glens Falls",
			"link": "https://www.parktheatergf.com/upcoming-events/#/events/106288"
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
			"artist": "Opal Essence's New Year's Eve Dragtacular!",
			"venue": "theREP",
			"date": "12/31/24",
			"time": "8:00 PM",
			"town": "Albany",
			"link": "https://attherep.org/event/opal-essences-new-years-eve-dragtacular-2/"
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
			"artist": "Zakir Hussain and Rahul Sharma",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/18/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117237&qty=0"
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
			"artist": "Paula Poundstone",
			"venue": "Troy Savings Bank Music Hall",
			"date": "10/25/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116497&qty=0"
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
			"artist": "Orpheus Chamber Orchestra with Maxim Vengerov",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/3/24",
			"time": "3:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116455&qty=0"
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
			"artist": "Magic of Motown",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/8/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116584&qty=0"
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
			"artist": "An Acoustic Evening with MATISYAHU",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/21/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117434&qty=0"
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
			"artist": "Rocky Mountain High Experience: A John Denver Christmas",
			"venue": "Troy Savings Bank Music Hall",
			"date": "11/24/24",
			"time": "3:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116934&qty=0"
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
			"artist": "Alan Cumming Uncut",
			"venue": "Troy Savings Bank Music Hall",
			"date": "12/1/24",
			"time": "7:00 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116828&qty=0"
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
			"artist": "Eileen Ivers",
			"venue": "Troy Savings Bank Music Hall",
			"date": "12/6/24",
			"time": "7:30 PM",
			"town": "Troy",
			"link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117634&qty=0"
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
			"artist": "Big Eyed Fish",
			"venue": "Unihog",
			"date": "10/19/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
			"artist": "Spacetrash and Tumblestop",
			"venue": "Unihog",
			"date": "10/26/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
			"artist": "Taco Tuesday with Will Pedicone",
			"venue": "Unihog",
			"date": "11/5/24",
			"time": "7:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
			"artist": "The National Reserve",
			"venue": "Unihog",
			"date": "11/16/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
			"artist": "Tame the Rooster",
			"venue": "Unihog",
			"date": "11/22/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
			"artist": "Bellas Bartok",
			"venue": "Unihog",
			"date": "11/30/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
			"artist": "Neon Avenue",
			"venue": "Unihog",
			"date": "12/21/24",
			"time": "8:00 PM",
			"town": "Hoosick Falls",
			"link": "https://www.facebook.com/p/Unihog-100063697897711/"
		},
		{
			"artist": "STARSHIP Featuring Mickey Thomas",
			"venue": "Universal Preservation Hall",
			"date": "10/18/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/starship-featuring-mickey-thomas/"
		},
		{
			"artist": "Celebrating Meatloaf",
			"venue": "Universal Preservation Hall",
			"date": "10/19/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/celebrating-meat-loaf/"
		},
		{
			"artist": "Drag Me to Brunch",
			"venue": "Universal Preservation Hall",
			"date": "10/20/24",
			"time": "10 AM & 1:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/drag-me-to-brunch/"
		},
		{
			"artist": "The Legend of Sleepy Hollow",
			"venue": "UPH",
			"date": "11/2/24",
			"time": "11:00 AM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/the-legend-of-sleepy-hollow/"
		},
		{
			"artist": "Salsa Night with Alex Torres and His Latin Orchestra",
			"venue": "UPH",
			"date": "11/2/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/salsa-night-with-alex-torres-and-his-latin-orchestra/"
		},
		{
			"artist": "Women Aren't Funny - Carolyn Plummer",
			"venue": "UPH",
			"date": "11/6/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/women-arent-funny-5/"
		},
		{
			"artist": "The Bengsons",
			"venue": "UPH",
			"date": "11/8/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/the-bengsons/"
		},
		{
			"artist": "Saratoga Stomp: Country Line Workshop",
			"venue": "UPH",
			"date": "11/9/24",
			"time": "2:00 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/saratoga-stomp-hosted-by-kevin-richards-dan-kelly-albro-and-conrad-farnham-leavitt/"
		},
		{
			"artist": "LeAnn Rimes",
			"venue": "UPH",
			"date": "11/10/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/leann-rimes/"
		},
		{
			"artist": "Some Enchanted Evening ",
			"venue": "UPH",
			"date": "11/14/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/some-enchanted-evening/"
		},
		{
			"artist": "Grunge Night with The LedBetters and Superunknown",
			"venue": "UPH",
			"date": "11/16/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/grunge-night-with-the-ledbetters-superunknown/"
		},
		{
			"artist": "Women Aren't Funny",
			"venue": "UPH",
			"date": "12/4/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/women-arent-funny-6/"
		},
		{
			"artist": "Merry Swift-ness",
			"venue": "UPH",
			"date": "12/6/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/merry-swift-mas-taylor-swift-holiday-dance-party/"
		},
		{
			"artist": "It's a Jazzy Christmas",
			"venue": "UPH",
			"date": "12/20/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/its-a-jazzy-christmas-3/"
		},
		{
			"artist": "The Gibson Brothers Christmas Show",
			"venue": "UPH",
			"date": "12/21/24",
			"time": "7:30 PM",
			"town": "Saratoga",
			"link": "https://atuph.org/event/the-gibson-brothers-christmas-show/"
		},
		{
			"artist": "Tofu and Tease Brunchlesque",
			"venue": "Wizard Burger",
			"date": "10/27/24",
			"time": "11:00 AM",
			"town": "Albany",
			"link": "https://www.ticketleap.events/tickets/persephonepommepresents/wizard-brunchlesque"
		},
		{
			"artist": "Head Sound",
			"venue": "Wolf Hollow Brewing",
			"date": "11/16/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/"
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
			"artist": "TV Doctors",
			"venue": "Wolf Hollow Brewing Company",
			"date": "10/25/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/tv-doctors-1"
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
			"artist": "Castro and the Fidelities",
			"venue": "Wolf Hollow Brewing Company",
			"date": "11/8/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/castro-and-the-fidelities-3"
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
			"artist": "Midnight Choir",
			"venue": "Wolf Hollow Brewing Company",
			"date": "11/23/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/midnight-choir"
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
			"artist": "Brother Junction",
			"venue": "Wolf Hollow Brewing Company",
			"date": "12/6/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/brother-junction"
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
			"artist": "The Trojan Horns",
			"venue": "Wolf Hollow Brewing Company",
			"date": "12/28/24",
			"time": "6:00 PM",
			"town": "Schenectady",
			"link": "https://www.wolfhollowbrewing.com/events/the-trojan-horns"
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
