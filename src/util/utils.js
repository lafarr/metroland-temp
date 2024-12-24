export const convertdateToHuman = (shittydate) => {
	let [year, month, day] = shittydate.split('-');

	year = year.substring(2);
	month = month.length === 2 && month.charAt(0) === '0' ? month.charAt(1) : month;
	day = day.length === 2 && day.charAt(0) === '0' ? day.charAt(1) : day;

	return `${month}/${day}/${year}`;
};

export const musicData = [
  {
    "artist": "Dan Devita, Shannon Tehya, and Northern Borne",
    "venue": "Argyle Brewing Company",
    "date": "12/21/24",
    "time": "6:00:00 PM",
    "town": "Cambridge",
    "link": "https://www.argylebrewing.com/event-details/shannon-tehya-and-northern-borne"
  },
  {
    "artist": "Brunch with Bob with Special Guests",
    "venue": "Argyle Brewing Company",
    "date": "12/22/24",
    "time": "1:00:00 PM",
    "town": "Cambridge",
    "link": "https://www.argylebrewing.com/event-details/brunch-with-bob-with-special-guests"
  },
  {
    "artist": "Nefesh Mountain: The Love & Light Tour",
    "venue": "Caffè Lena",
    "date": "12/21/24",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/live-events/"
  },
  {
    "artist": "A Joyful Noise! Gospel Dinner led by soulist Garland Nelson",
    "venue": "Caffè Lena",
    "date": "12/22/24",
    "time": "5:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/live-events/"
  },
  {
    "artist": "Open Mic Night",
    "venue": "Caffè Lena",
    "date": "12/23/24",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/open-mic/"
  },
  {
    "artist": "Racquette River Rounders Annual Boxing Day Reunion Show",
    "venue": "Caffè Lena",
    "date": "12/26/24",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/racquette-river-rounders-annual-boxing-day-reunion-show-tickets-1071208897649"
  },
  {
    "artist": "Stephen Kellogg",
    "venue": "Caffè Lena",
    "date": "12/27/24",
    "time": "5:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/live-events/"
  },
  {
    "artist": "Stephen Kellogg",
    "venue": "Caffè Lena",
    "date": "12/27/24",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/live-events/"
  },
  {
    "artist": "New American Cuisine",
    "venue": "Caffè Lena",
    "date": "12/28/24",
    "time": "4:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/live-events/"
  },
  {
    "artist": "New American Cuisine",
    "venue": "Caffè Lena",
    "date": "12/28/24",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/live-events/"
  },
  {
    "artist": "Lost Leaders",
    "venue": "Caffè Lena",
    "date": "12/29/24",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/lost-leaders-tickets-1045350079227"
  },
  {
    "artist": "Open Mic Night",
    "venue": "Caffè Lena",
    "date": "12/30/24",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/open-mic/"
  },
  {
    "artist": "Los Sugar Kings: Free with Saratoga New Year Badge: Hot Sounds of the Caribbean",
    "venue": "Caffè Lena",
    "date": "12/31/24",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/saratoga-new-years-eve/"
  },
  {
    "artist": "Los Sugar Kings: Free with Saratoga New Year Badge: Hot Sounds of the Caribbean",
    "venue": "Caffè Lena",
    "date": "12/31/24",
    "time": "9:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/saratoga-new-years-eve/"
  },
  {
    "artist": "The Nields ",
    "venue": "Caffè Lena",
    "date": "1/3/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/the-nields-tickets-1060395484439"
  },
  {
    "artist": "Little Folks: The Nields",
    "venue": "Caffè Lena",
    "date": "1/4/25",
    "time": "1:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/little-folks-the-nields-tickets-1016552625267"
  },
  {
    "artist": "Five Decades at Caffè Lena: The Joe Deuel Photo Collection",
    "venue": "Caffè Lena",
    "date": "1/4/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/five-decades-at-caffe-lena-the-joe-deuel-photo-collection-tickets-1113899586649"
  },
  {
    "artist": "Super 400",
    "venue": "Caffè Lena",
    "date": "1/5/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/super-400-tickets-1099419827299"
  },
  {
    "artist": "Storytelling Open Mic Featuring Claire Nolan",
    "venue": "Caffè Lena",
    "date": "1/7/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/storytelling-open-mic/"
  },
  {
    "artist": "Folk Club Kids! New Time For 2025 Dance Tunes, Sing Alongs, & Stories! Free / Infants - Pre K",
    "venue": "Caffè Lena",
    "date": "1/8/25",
    "time": "10:30:00 AM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/folk-club-kids/"
  },
  {
    "artist": "Poetry Open Mic Featuring Susan Oringel",
    "venue": "Caffè Lena",
    "date": "1/8/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/poetry-night/"
  },
  {
    "artist": "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    "venue": "Caffè Lena",
    "date": "1/9/25",
    "time": "1:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    "artist": "Gareth Pearson",
    "venue": "Caffè Lena",
    "date": "1/9/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/gareth-pearson-tickets-1099353368519"
  },
  {
    "artist": "Allison Lupton, Shane Cook, and Kyle Waymouth",
    "venue": "Caffè Lena",
    "date": "1/10/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/allison-lupton-shane-cook-and-kyle-waymouth-tickets-1046478614707"
  },
  {
    "artist": "Transformative Songcraft Workshop With CB Smith",
    "venue": "Caffè Lena",
    "date": "1/11/25",
    "time": "10:00:00 AM",
    "town": "Saratoga Springs",
    "link": "https://campscui.active.com/orgs/CaffeLenaSchoolofMusic#/selectSessions/3568234/filter/session=64662846"
  },
  {
    "artist": "Peak Jazz Series: Old Firends Beckoned, New Sounds Reckoned",
    "venue": "Caffè Lena",
    "date": "1/11/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/peak-jazz-series-old-friends-beckonednew-sounds-reckoned-tickets-1014556845837"
  },
  {
    "artist": "Ellis Paul",
    "venue": "Caffè Lena",
    "date": "1/12/25",
    "time": "4:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/65th-anniversary-folk-heritage-series-ellis-paul-tickets-1024411942697"
  },
  {
    "artist": "Singing with Judy Wlye ~ 10 Weeks ~ In Person!",
    "venue": "Caffè Lena",
    "date": "1/13/25",
    "time": "1:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://campscui.active.com/orgs/CaffeLenaSchoolofMusic#/selectSessions/3568234/filter/session=64549234"
  },
  {
    "artist": "Jazz at Caffè Lena: The Chuck Lamb Duo With Special Guest Joe Locke",
    "venue": "Caffè Lena",
    "date": "1/14/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/jazz-at-caffe-lena-the-chuck-lamb-duo-with-special-guest-joe-locke-tickets-1115893630889"
  },
  {
    "artist": "Folk Club Kids! New Time For 2025 Dance Tunes, Sing Alongs, & Stories! Free / Infants - Pre K",
    "venue": "Caffè Lena",
    "date": "1/15/25",
    "time": "10:30:00 AM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/event/folk-club-kids-new-time-for-2025-dance-tunes-sing-alongs-stories-free-infants-pre-k/"
  },
  {
    "artist": "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    "venue": "Caffè Lena",
    "date": "1/16/25",
    "time": "1:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    "artist": "Blake Christiana ",
    "venue": "Caffè Lena",
    "date": "1/16/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/blake-christiana-tickets-1046620298487"
  },
  {
    "artist": "Nordlys Global Voices: Fränder",
    "venue": "Caffè Lena",
    "date": "1/17/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/event/nordlys-global-voices-frander/"
  },
  {
    "artist": "Bright Series: Jenna Nicholls",
    "venue": "Caffè Lena",
    "date": "1/18/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/bright-series-jenna-nicholls-tickets-1020329441827"
  },
  {
    "artist": "Misty Blues: MLK Weekend Live Tribute to Odetta",
    "venue": "Caffè Lena",
    "date": "1/19/25",
    "time": "4:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/misty-blues-mlk-weekend-live-tribute-to-odetta-tickets-1099447760849"
  },
  {
    "artist": "Rochmon Record Club Listening Party: Pink Floyd's Wish You Were Here",
    "venue": "Caffè Lena",
    "date": "1/21/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/rochmon-record-club-listening-party-pink-floyds-wish-you-were-here-tickets-1114256955549"
  },
  {
    "artist": "Folk Club Kids! New Time For 2025 Dance Tunes, Sing Alongs, & Stories! Free / Infants - Pre K",
    "venue": "Caffè Lena",
    "date": "1/22/25",
    "time": "10:30:00 AM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/folk-club-kids/"
  },
  {
    "artist": "NY Focus Presents Journalism In Challenging Times",
    "venue": "Caffè Lena",
    "date": "1/22/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/ny-focus-presents-journalism-in-challenging-times-tickets-1089120882879"
  },
  {
    "artist": "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    "venue": "Caffè Lena",
    "date": "1/23/25",
    "time": "1:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    "artist": "Nate Sabat & Rakish ",
    "venue": "Caffè Lena",
    "date": "1/24/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/nate-sabat-rakish-tickets-1033120971637"
  },
  {
    "artist": "Eastbound Jesus - Benefit For Comfort Food Community",
    "venue": "Caffè Lena",
    "date": "1/25/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/eastbound-jesus-benefit-for-comfort-food-community-tickets-1046493418987"
  },
  {
    "artist": "The Michael Mills Magic Show",
    "venue": "Caffè Lena",
    "date": "1/28/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/the-michael-mills-magic-show-tickets-1099479766579"
  },
  {
    "artist": "Folk Club Kids! New Time For 2025 Dance Tunes, Sing Alongs, & Stories! Free / Infants - Pre K",
    "venue": "Caffè Lena",
    "date": "1/29/25",
    "time": "10:30:00 AM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/folk-club-kids/"
  },
  {
    "artist": "Lena Go Round - Songwriter Showcase with Erin Harkes",
    "venue": "Caffè Lena",
    "date": "1/29/25",
    "time": "7:30:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/lena-go-round-songwriter-showcase-with-erin-harkes-tickets-1096787323409"
  },
  {
    "artist": "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    "venue": "Caffè Lena",
    "date": "1/30/25",
    "time": "8:00:00 AM",
    "town": "Saratoga Springs",
    "link": "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    "artist": "Lee Dewyze ",
    "venue": "Caffè Lena",
    "date": "1/30/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/lee-dewyze-tickets-1045346779357"
  },
  {
    "artist": "Momentum Series: The Suitcase Junket",
    "venue": "Caffè Lena",
    "date": "1/31/25",
    "time": "8:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.eventbrite.com/e/momentum-series-the-suitcase-junket-tickets-1015294532277"
  },
  {
    "artist": "A 'Classic' Christmas with Lee & Friends",
    "venue": "Charles Wood Theater",
    "date": "12/22/24",
    "time": "3:00:00 PM",
    "town": "Glens Falls",
    "link": "https://ci.ovationtix.com/35085/production/1206534?performanceId=11500070"
  },
  {
    "artist": "Wood Theater Workshops: Acting [Jan '25]",
    "venue": "Charles Wood Theater",
    "date": "1/9/25",
    "time": "6:30:00 PM",
    "town": "Glens Falls",
    "link": "https://ci.ovationtix.com/35085/production/1216657?performanceId=11537999"
  },
  {
    "artist": "Big Gay Drag Show",
    "venue": "Charles Wood Theater",
    "date": "1/11/25",
    "time": "7:00:00 PM",
    "town": "Glens Falls",
    "link": "https://ci.ovationtix.com/35085/production/1217518?performanceId=11542309"
  },
  {
    "artist": "Moochie The Dumpster Cat",
    "venue": "Charles Wood Theater",
    "date": "1/12/25",
    "time": "3:00:00 PM",
    "town": "Glens Falls",
    "link": "https://ci.ovationtix.com/35085/production/1219382?performanceId=11551591"
  },
  {
    "artist": "COLORWORLD LIVE!",
    "venue": "Charles Wood Theater",
    "date": "1/25/25",
    "time": "2:00:00 PM",
    "town": "Glens Falls",
    "link": "https://ci.ovationtix.com/35085/production/1219586?performanceId=11554654"
  },
  {
    "artist": "COLORWORLD LIVE!",
    "venue": "Charles Wood Theater",
    "date": "1/25/25",
    "time": "6:00:00 PM",
    "town": "Glens Falls",
    "link": "https://ci.ovationtix.com/35085/production/1219586?performanceId=11554654"
  },
  {
    "artist": "COLORWORLD LIVE!",
    "venue": "Charles Wood Theater",
    "date": "1/26/25",
    "time": "2:00:00 PM",
    "town": "Glens Falls",
    "link": "https://ci.ovationtix.com/35085/production/1219586?performanceId=11554654"
  },
  {
    "artist": "Start Making Sense: A Tribute To Talking Heads",
    "venue": "Cohoes Music Hall",
    "date": "12/29/24",
    "time": "7:30:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events/2024/start-making-sense-a-tribute-to-talking-heads"
  },
  {
    "artist": "Lez Zepplin Performs Physical Graffiti & More",
    "venue": "Cohoes Music Hall",
    "date": "1/10/25",
    "time": "7:30:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events/2025/lez-zep"
  },
  {
    "artist": "Crystal Ship: A Tribute To The Doors",
    "venue": "Cohoes Music Hall",
    "date": "1/11/25",
    "time": "7:30:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events/2025/crystal-ship"
  },
  {
    "artist": "The The Band Band",
    "venue": "Cohoes Music Hall",
    "date": "1/17/25",
    "time": "7:30:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events/2025/ttbb"
  },
  {
    "artist": "Run Rabbit Run: Celebrating 50 Years Of Wish You Were Here",
    "venue": "Cohoes Music Hall",
    "date": "1/18/25",
    "time": "7:30:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events/2025/run-rabbit-run"
  },
  {
    "artist": "512: The Selena Experience",
    "venue": "Cohoes Music Hall",
    "date": "1/24/25",
    "time": "7:30:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events/2025/selena-experience"
  },
  {
    "artist": "A Few Good Men Presented By Creative License ",
    "venue": "Cohoes Music Hall",
    "date": "1/31/25",
    "time": "7:30:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events/2025/few-good-men"
  },
  {
    "artist": "Alan Goldberg",
    "venue": "Emack & Bolio's",
    "date": "12/27/24",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ebalbany.com/music"
  },
  {
    "artist": "Pearl",
    "venue": "Emack & Bolio's",
    "date": "12/28/24",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ebalbany.com/music"
  },
  {
    "artist": "Dan Bernstein",
    "venue": "Emack & Bolio's",
    "date": "1/4/25",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ebalbany.com/music"
  },
  {
    "artist": "Slingshot",
    "venue": "Emack & Bolio's",
    "date": "1/11/25",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ebalbany.com/music"
  },
  {
    "artist": "Duck n Du",
    "venue": "Emack & Bolio's",
    "date": "1/17/25",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ebalbany.com/music"
  },
  {
    "artist": "Alan Goldberg",
    "venue": "Emack & Bolio's",
    "date": "1/18/25",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ebalbany.com/music"
  },
  {
    "artist": "Pearl",
    "venue": "Emack & Bolio's",
    "date": "1/25/25",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ebalbany.com/music"
  },
  {
    "artist": "Hark the Glad Sound, Presented by the Emmanuel Singers; Michael Clement, director and pianist",
    "venue": "Emmanuel Baptist Church",
    "date": "12/22/24",
    "time": "1:00:00 PM",
    "town": "Albany",
    "link": "https://www.emmanuelalbany.net/"
  },
  {
    "artist": "Zakk Sabbath: King of the Monstours",
    "venue": "Empire Live",
    "date": "12/30/24",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/300061290C474B03"
  },
  {
    "artist": "Empire State Youth Orchestra: Percussion Ensembles Holiday Concert",
    "venue": "GE Theatre at Proctors",
    "date": "12/22/24",
    "time": "7:30:00 PM",
    "town": "Schenectady",
    "link": "https://esyo.org/news-concerts/910-percussion-ensembles-holiday-concert-2042"
  },
  {
    "artist": "Rotating Live Music",
    "venue": "Henry's Irish Tavern",
    "date": "12/21/24",
    "time": "5:00:00 PM",
    "town": "Ballston Spa",
    "link": "https://henrysirishtavern.com/events/rotating-live-music/"
  },
  {
    "artist": "Live Music with Jeff Brisbin",
    "venue": "Henry's Irish Tavern",
    "date": "12/27/24",
    "time": "5:00:00 PM",
    "town": "Ballston Spa",
    "link": "https://henrysirishtavern.com/events/live-music-with-jeff-brisbin/"
  },
  {
    "artist": "Rotating Live Music",
    "venue": "Henry's Irish Tavern",
    "date": "12/28/24",
    "time": "5:00:00 PM",
    "town": "Ballston Spa",
    "link": "https://henrysirishtavern.com/events/rotating-live-music/"
  },
  {
    "artist": "Big Sky Country",
    "venue": "Lake George Beach Club",
    "date": "12/21/24",
    "time": "9:00:00 PM",
    "town": "Lake George",
    "link": "https://www.lakegeorgebeachclub.com/"
  },
  {
    "artist": "Ill Funk Ensemble",
    "venue": "Lake George Beach Club",
    "date": "12/28/24",
    "time": "9:00:00 PM",
    "town": "Lake George",
    "link": "https://www.lakegeorgebeachclub.com/"
  },
  {
    "artist": "Hark",
    "venue": "Lake George Beach Club",
    "date": "12/31/24",
    "time": "10:00:00 PM",
    "town": "Lake George",
    "link": "https://www.lakegeorgebeachclub.com/"
  },
  {
    "artist": "Hark",
    "venue": "Lake George Beach Club",
    "date": "1/1/25",
    "time": "12:00:00 PM",
    "town": "Lake George",
    "link": "https://www.lakegeorgebeachclub.com/"
  },
  {
    "artist": "Lucid Street",
    "venue": "Lake George Beach Club",
    "date": "1/30/25",
    "time": "8:00:00 PM",
    "town": "Lake George",
    "link": "https://www.lakegeorgebeachclub.com/"
  },
  {
    "artist": "Skeeter Creek",
    "venue": "Lake George Beach Club",
    "date": "1/31/25",
    "time": "9:00:00 PM",
    "town": "Lake George",
    "link": "https://www.lakegeorgebeachclub.com/"
  },
  {
    "artist": "Skeeter Creek",
    "venue": "Lake George Beach Club",
    "date": "2/1/25",
    "time": "9:00:00 PM",
    "town": "Lake George",
    "link": "https://www.lakegeorgebeachclub.com/"
  },
  {
    "artist": "Ill Funk Ensemble",
    "venue": "Lake George Beach Club",
    "date": "2/2/25",
    "time": "1:00 PM",
    "town": "Lake George",
    "link": "https://www.lakegeorgebeachclub.com/"
  },
  {
    "artist": "Lark Hall presents Steely Dead",
    "venue": "Lark Hall",
    "date": "12/27/24",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/lark-hall-presents-steely-dead-tickets-1054130275029?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile"
  },
  {
    "artist": "The Eleven Presents Happy Hour with 10:01 (FREE SHOW)",
    "venue": "Lark Hall",
    "date": "1/10/25",
    "time": "6:00:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-eleven-presents-happy-hour-with-1001-free-show-tickets-1100026070589?aff=ebdsoporgprofile"
  },
  {
    "artist": "The Wheel performs Pembroke Pines 5/22/77",
    "venue": "Lark Hall",
    "date": "1/10/25",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-wheel-performs-pembroke-pines-52277-tickets-1095197698799?aff=ebdsoporgprofile"
  },
  {
    "artist": "The Pine Boys at The Eleven at Lark Hall (FREE SHOW)",
    "venue": "Lark Hall",
    "date": "1/11/25",
    "time": "6:00:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-pine-boys-at-the-eleven-at-lark-hall-free-show-tickets-1109606596199?aff=ebdsoporgprofile"
  },
  {
    "artist": "Old TP's Birthday Bash feat. The Deadbeats, Raisinhead and Vinnie Amico",
    "venue": "Lark Hall",
    "date": "1/11/25",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/old-tps-birthday-bash-feat-the-deadbeats-raisinhead-and-vinnie-amico-tickets-1088692321039?aff=ebdsoporgprofile"
  },
  {
    "artist": "The Frank White Experience with special guests The EBlock",
    "venue": "Lark Hall",
    "date": "1/17/25",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-frank-white-experience-with-special-guests-the-eblock-tickets-1096184891519?aff=ebdsoporgprofile"
  },
  {
    "artist": "Dave Geoghegan's 60th Birthday Bash feat. Moon Boot Lover",
    "venue": "Lark Hall",
    "date": "1/19/25",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/dave-geoghegans-60th-birthday-bash-feat-moon-boot-lover-tickets-1111712856079?aff=ebdsoporgprofile"
  },
  {
    "artist": "Caity Gallagher Residency",
    "venue": "Lark Hall",
    "date": "2/5/25",
    "time": "6:00:00 PM",
    "town": "Albany",
    "link": "https://larkhallalbany.com/"
  },
  {
    "artist": "Femininomenon - Live Sing-a-Long",
    "venue": "Lost & Found",
    "date": "12/27/24",
    "time": "9:00:00 PM",
    "town": "Albany",
    "link": "FREE"
  },
  {
    "artist": "Pony in the Pancake Holiday Show w/ Los Espejos / Haley Moley / Electric Turtle / Cooper's Hawk / Rabid Children / The A.M.'s / Huntress Wizard / Nathan Meltz",
    "venue": "No Fun",
    "date": "12/21/24",
    "time": "7:00:00 PM",
    "town": "Troy",
    "link": "https://www.nofuntroy.com/events/pony-in-the-pancake-holiday-show-3"
  },
  {
    "artist": "Everybody That Loves You / Happy Birthday James / G.O.L.E.M. / No Coincidence",
    "venue": "No Fun",
    "date": "12/28/24",
    "time": "7:00:00 PM",
    "town": "Troy",
    "link": "https://www.nofuntroy.com/events/everybody-that-loves-you-happy-birthday-james-golem-no-coincidence"
  },
  {
    "artist": "Caity Gallagher",
    "venue": "Northway Brewing",
    "date": "12/29/24",
    "time": "1:00:00 PM",
    "town": "Queensbury",
    "link": "https://northwaybrewingco.com/events/"
  },
  {
    "artist": "Hayley Jane Band",
    "venue": "Ophelia's",
    "date": "12/21/24",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/hayley-jane-band-tickets-1032910712747?aff=efbevent&fbclid=IwY2xjawFzvYJleHRuA2FlbQIxMAABHXfeAx0U64QGddV3hJiCiO4YbKuBZdCY_jwYUyYsUOEN0mXWD4zKc5E0Hw_aem_XYpWIbV0SNA__E1zXZBxZg"
  },
  {
    "artist": "Travis Rockenstire",
    "venue": "Peddlers Bar and Bistro",
    "date": "12/26/24",
    "time": "6:30:00 PM",
    "town": "Clifton Park",
    "link": "https://peddlersbarandbistro.com/events/"
  },
  {
    "artist": "Coverups Duo",
    "venue": "Peddlers Bar and Bistro",
    "date": "12/27/24",
    "time": "6:30:00 PM",
    "town": "Clifton Park",
    "link": "https://peddlersbarandbistro.com/events/"
  },
  {
    "artist": "Matt Evans",
    "venue": "Power's Inn & Pub",
    "date": "12/21/24",
    "time": "6:00:00 PM",
    "town": "Clifton Park",
    "link": "https://www.powersinnandpub.com/"
  },
  {
    "artist": "Doc Orloff",
    "venue": "Power's Inn & Pub",
    "date": "12/27/24",
    "time": "6:00:00 PM",
    "town": "Clifton Park",
    "link": "https://www.powersinnandpub.com/"
  },
  {
    "artist": "Chuck Kelsey",
    "venue": "Power's Inn & Pub",
    "date": "12/28/24",
    "time": "6:00:00 PM",
    "town": "Clifton Park",
    "link": "https://www.powersinnandpub.com/"
  },
  {
    "artist": "Lewis and Clark",
    "venue": "Power's Inn & Pub",
    "date": "12/31/24",
    "time": "8:00:00 PM",
    "town": "Clifton Park",
    "link": "https://www.powersinnandpub.com/"
  },
  {
    "artist": "Pat Decker",
    "venue": "Prime At Saratoga National",
    "date": "12/21/24",
    "time": "6:00:00 PM",
    "town": "Saratoga",
    "link": "https://primeatsaratoganational.com/wp-content/uploads/2021/09/LiveMusic_Oct_Dec2024-2-scaled.jpg"
  },
  {
    "artist": "Rich Ortiz",
    "venue": "Prime At Saratoga National",
    "date": "12/26/24",
    "time": "6:00:00 PM",
    "town": "Saratoga",
    "link": "https://primeatsaratoganational.com/wp-content/uploads/2021/09/LiveMusic_Oct_Dec2024-2-scaled.jpg"
  },
  {
    "artist": "Maggie Doherty Duo",
    "venue": "Prime At Saratoga National",
    "date": "12/27/24",
    "time": "6:00:00 PM",
    "town": "Saratoga",
    "link": "https://primeatsaratoganational.com/wp-content/uploads/2021/09/LiveMusic_Oct_Dec2024-2-scaled.jpg"
  },
  {
    "artist": "Rafa Picon",
    "venue": "Prime At Saratoga National",
    "date": "12/28/24",
    "time": "6:00:00 PM",
    "town": "Saratoga",
    "link": "https://primeatsaratoganational.com/wp-content/uploads/2021/09/LiveMusic_Oct_Dec2024-2-scaled.jpg"
  },
  {
    "artist": "“It’s a Jazzy Christmas!”",
    "venue": "Proctors GE Theater",
    "date": "12/21/24",
    "time": "7:30:00 PM",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/its-a-jazzy-christmas-4/"
  },
  {
    "artist": "Family Tree",
    "venue": "Putnam Place",
    "date": "12/23/24",
    "time": "7:00:00 PM",
    "town": "Saratoga",
    "link": "https://putnamplace.com/events/family-tree-12-23-24/"
  },
  {
    "artist": "Dogs in a Pile w/ Annie in the Water",
    "venue": "Putnam Place",
    "date": "12/28/24",
    "time": "9:00:00 PM",
    "town": "Saratoga",
    "link": "https://putnamplace.com/events/dogs-in-a-pile-12-28-24/"
  },
  {
    "artist": "Dogs in a Pile w/ Consider the Source",
    "venue": "Putnam Place",
    "date": "12/29/24",
    "time": "8:00:00 PM",
    "town": "Saratoga",
    "link": "https://putnamplace.com/events/dogs-in-a-pile-12-29-24/"
  },
  {
    "artist": "Dogs in a Pile w/ Hilltop",
    "venue": "Putnam Place",
    "date": "12/30/24",
    "time": "8:00:00 PM",
    "town": "Saratoga",
    "link": "https://putnamplace.com/events/dogs-in-a-pile-12-30-24/"
  },
  {
    "artist": "Dogs in a Pile NYE Celebration",
    "venue": "Putnam Place",
    "date": "12/31/24",
    "time": "9:00:00 PM",
    "town": "Saratoga",
    "link": "https://putnamplace.com/events/dogs-in-a-pile-12-31-24/"
  },
  {
    "artist": "Matty Deez NutsCracker Spectacular",
    "venue": "Rustic Barn Pub",
    "date": "12/21/24",
    "time": "7:00:00 PM",
    "town": "Troy",
    "link": "https://www.facebook.com/rusticbarnpub/"
  },
  {
    "artist": "Christmas Eve w/ Rockin' Rob",
    "venue": "Rustic Barn Pub",
    "date": "12/24/24",
    "time": "4:00:00 PM",
    "town": "Troy",
    "link": "https://www.facebook.com/rusticbarnpub/"
  },
  {
    "artist": "The Underdawgs",
    "venue": "Rustic Barn Pub",
    "date": "12/27/24",
    "time": "7:00:00 PM",
    "town": "Troy",
    "link": "https://www.facebook.com/rusticbarnpub/"
  },
  {
    "artist": "Wreckless Duo",
    "venue": "Saratoga Winery",
    "date": "12/27/24",
    "time": "5:30:00 PM",
    "town": "Saratoga",
    "link": "https://www.thesaratogawinery.com/events/rk26rzx5jlf6w3k-6jwdf-542wl-9pent-56yxe"
  },
  {
    "artist": "Stephen Thriolle Trio",
    "venue": "Saratoga Winery",
    "date": "1/3/25",
    "time": "5:30:00 PM",
    "town": "Saratoga",
    "link": ""
  },
  {
    "artist": "David Wong",
    "venue": "Saratoga Winery",
    "date": "1/10/25",
    "time": "5:30:00 PM",
    "town": "Saratoga",
    "link": ""
  },
  {
    "artist": "Harmonic Duo",
    "venue": "Saratoga Winery",
    "date": "1/17/25",
    "time": "6:00:00 PM",
    "town": "Saratoga",
    "link": ""
  },
  {
    "artist": "Deadbeats",
    "venue": "Saratoga Winery",
    "date": "1/24/25",
    "time": "6:00:00 PM",
    "town": "Saratoga",
    "link": ""
  },
  {
    "artist": "Steve Candlen",
    "venue": "Saratoga Winery",
    "date": "1/31/25",
    "time": "5:00:00 PM",
    "town": "Saratoga",
    "link": ""
  },
  {
    "artist": "Alfredo Rodriguez Trio | Part of McCormack Jazz Series",
    "venue": "Spa Little Theater",
    "date": "4/5/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "Book Tickets | Saratoga Performing Arts Center"
  },
  {
    "artist": "Veronica Swift",
    "venue": "Spa Little Theater",
    "date": "5/1/25",
    "time": "7:00:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/veronica-swift/book/54601/"
  },
  {
    "artist": "Chad McLoughlin Trio",
    "venue": "Stella Pasta Bar & Bistro",
    "date": "12/21/24",
    "time": "6:00:00 PM",
    "town": "Schenectady",
    "link": "Free Admission"
  },
  {
    "artist": "Jenny Marie",
    "venue": "Stella Pasta Bar & Bistro",
    "date": "12/28/24",
    "time": "6:00:00 PM",
    "town": "Schenectady",
    "link": "Free Admission"
  },
  {
    "artist": "Bohdan Kinal Quartet",
    "venue": "Stella Pasta Bar & Bistro",
    "date": "1/4/25",
    "time": "6:00:00 PM",
    "town": "Schenectady",
    "link": "Free Admission"
  },
  {
    "artist": "Sonny & Perley Trio",
    "venue": "Stella Pasta Bar & Bistro",
    "date": "1/11/25",
    "time": "6:00:00 PM",
    "town": "Schenectady",
    "link": "Free Admission"
  },
  {
    "artist": "Michael Benedict's Jazz Vibes Trio",
    "venue": "Stella Pasta Bar & Bistro",
    "date": "1/18/25",
    "time": "6:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.stellapastabar.com/calendar"
  },
  {
    "artist": "The Arch Stanton Trio",
    "venue": "Stella Pasta Bar & Bistro",
    "date": "1/25/25",
    "time": "6:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.stellapastabar.com/calendar"
  },
  {
    "artist": "“Christmas Spectacular” featuring Tim Wechgelaer, Chris Carey ‘n Drank the Gold",
    "venue": "The Cock 'n Bull",
    "date": "12/22/24",
    "time": "6:00:00 PM",
    "town": "Galway",
    "link": "https://thecocknbull.com/events/christmas-spectacular-featuring-tim-wechgelaer-chris-carey-n-drank-the-gold/"
  },
  {
    "artist": "Keith Pray Trio",
    "venue": "The Cock 'n Bull",
    "date": "12/27/24",
    "time": "6:00:00 PM",
    "town": "Galway",
    "link": "https://thecocknbull.com/events/keith-pray-trio-2024-12-27/"
  },
  {
    "artist": "Matt Flinner 'n Joe K. Walsh",
    "venue": "The Cock 'n Bull",
    "date": "1/9/25",
    "time": "7:00:00 PM",
    "town": "Galway",
    "link": "https://thecocknbull.com/events/matt-flinner-n-joe-k-walsh/"
  },
  {
    "artist": "George Boone Blues Band",
    "venue": "The Glove Theatre",
    "date": "12/21/24",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-george-boone-blues-band"
  },
  {
    "artist": "Orange Velour",
    "venue": "The Glove Theatre",
    "date": "12/27/24",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-orange-velour"
  },
  {
    "artist": "Dead-Zep",
    "venue": "The Glove Theatre",
    "date": "12/28/24",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/deadzep-a-tribute-to-the-grateful-dead-and-led-zepplin"
  },
  {
    "artist": "Strange Magic NY: The ELO Experience",
    "venue": "The Glove Theatre",
    "date": "1/4/25",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/strange-magic-ny-the-elo-experiencve"
  },
  {
    "artist": "The 518 Concert Series Presents: Luke Pavlus",
    "venue": "The Glove Theatre",
    "date": "1/10/25",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-luke-pavlus"
  },
  {
    "artist": "The 518 Concert Series Presents: A Tribute to Taylor Swift",
    "venue": "The Glove Theatre",
    "date": "1/11/25",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-13-a-tribute-to-taylor-swift"
  },
  {
    "artist": "The 518 Concert Series Presents: Big Sky Country",
    "venue": "The Glove Theatre",
    "date": "1/18/25",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-big-sky-country-1"
  },
  {
    "artist": "The 518 Concert Series Presents: The TS Ensemble",
    "venue": "The Glove Theatre",
    "date": "1/25/25",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-the-ts-ensemble"
  },
  {
    "artist": "The 518 Concert Series Presents: Get Zep!",
    "venue": "The Glove Theatre",
    "date": "1/31/25",
    "time": "7:00:00 PM",
    "town": "Gloversville",
    "link": "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-get-zep"
  },
  {
    "artist": "Josh Clevenstine",
    "venue": "The Grateful Den",
    "date": "12/21/24",
    "time": "7:00:00 PM",
    "town": "Glens Falls",
    "link": "https://www.facebook.com/thegratefulden/"
  },
  {
    "artist": "New Year's Bash with Seize Atlantis",
    "venue": "The Grateful Den",
    "date": "12/31/24",
    "time": "8:00:00 PM",
    "town": "Glens Falls",
    "link": "https://www.facebook.com/thegratefulden/"
  },
  {
    "artist": "David Bennett Cohen",
    "venue": "The Linda",
    "date": "12/21/24",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.thelinda.org/event/david-bennett-cohen-2/"
  },
  {
    "artist": "Sound+Vision:Music at the Movies",
    "venue": "The Linda",
    "date": "1/7/25",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.thelinda.org/event/soundvisionmusic-at-the-movies/"
  },
  {
    "artist": "Rochmon Record Club Listening Party - The Cars The Cars",
    "venue": "The Linda",
    "date": "1/16/25",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.thelinda.org/event/rochmon-record-club-listening-party-the-cars-the-cars/"
  },
  {
    "artist": "Django Reinhardt Birthday Show 2025!",
    "venue": "The Linda",
    "date": "1/23/25",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.thelinda.org/event/django-reinhardt-birthday-show-2025/"
  },
  {
    "artist": "Harvest & Rust",
    "venue": "The Linda",
    "date": "1/25/25",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.thelinda.org/event/harvest-rust-unplugged/"
  },
  {
    "artist": "A Live Conversation With Chevy Chase",
    "venue": "The Palace",
    "date": "12/27/24",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/000060E2D2EA83AD"
  },
  {
    "artist": "Joe Gatto: Let's Get Into It",
    "venue": "The Palace",
    "date": "12/29/24",
    "time": "7:00:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/000060CDBE254778"
  },
  {
    "artist": "New Year's Eve Dinner & Comedy Show ft. Sean Donnelly",
    "venue": "The Park Theater",
    "date": "12/31/24",
    "time": "8:00:00 PM",
    "town": "Glens Falls, NY",
    "link": "https://www.venuepilot.co/events/nye-dinner-comedy-show-650a93/orders/new"
  },
  {
    "artist": "Ariel Posen - The Solo Tour II",
    "venue": "The Park Theater",
    "date": "1/10/25",
    "time": "7:00:00 PM",
    "town": "Glens Falls, NY",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events/117287"
  },
  {
    "artist": "Tyler Giroux ft. Matt Niedbalski, Rob Lindquist & Dylan Perrillo",
    "venue": "The Park Theater",
    "date": "1/16/25",
    "time": "7:30:00 PM",
    "town": "Glens Falls, NY",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events/124402"
  },
  {
    "artist": "Adam Mamawala",
    "venue": "The Park Theater",
    "date": "1/31/25",
    "time": "8:00:00 PM",
    "town": "Glens Falls, NY",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events/122574"
  },
  {
    "artist": "Rock This Town Orchestra",
    "venue": "The Strand Theatre",
    "date": "12/21/24",
    "time": "7:30:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2024/12/21/rock-this-town-orchestra"
  },
  {
    "artist": "A Tribute to Kris Kristofferson",
    "venue": "The Strand Theatre",
    "date": "1/3/25",
    "time": "7:30:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/3/a-tribute-to-kris-kristofferson"
  },
  {
    "artist": "Rush Tribute with Run For Cover wsg Better Off Led",
    "venue": "The Strand Theatre",
    "date": "1/4/25",
    "time": "8:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2024/4/6/rush-tribute-with-run-for-cover"
  },
  {
    "artist": "The Newells",
    "venue": "The Strand Theatre",
    "date": "1/5/25",
    "time": "3:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/5/the-newells"
  },
  {
    "artist": "Lobby Concert: Art-n-Shawna Trio",
    "venue": "The Strand Theatre",
    "date": "1/6/25",
    "time": "7:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2024/12/9/lobby-concert-art-shawna-trio"
  },
  {
    "artist": "Broken Clovers wsg Faith Anne",
    "venue": "The Strand Theatre",
    "date": "1/10/25",
    "time": "8:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/10/broken-clovers-wsg-faith-anne"
  },
  {
    "artist": "Back in Black -  AC/DC Tribute!",
    "venue": "The Strand Theatre",
    "date": "1/11/25",
    "time": "8:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/11/back-in-black-acdc-tribute"
  },
  {
    "artist": "Uncle Samm - the music of Metallica, Megadeth, Slayer, Anthrax",
    "venue": "The Strand Theatre",
    "date": "1/18/25",
    "time": "7:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/18/uncle-samm-the-music-of-metallica-megadeath-slayer-anthrax"
  },
  {
    "artist": "Albert Lee",
    "venue": "The Strand Theatre",
    "date": "1/19/25",
    "time": "3:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/19/albert-lee"
  },
  {
    "artist": "Lucid Street wsg Lounge Act",
    "venue": "The Strand Theatre",
    "date": "1/24/25",
    "time": "8:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/24/lucid-street-wsg-lounge-act"
  },
  {
    "artist": "Forever Seger",
    "venue": "The Strand Theatre",
    "date": "1/25/25",
    "time": "8:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/25/forever-seeger"
  },
  {
    "artist": "Shannon Tehya and The Troupe wsg Studio Chrome",
    "venue": "The Strand Theatre",
    "date": "1/26/25",
    "time": "3:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/26/the-troupe"
  },
  {
    "artist": "The Proudest Monkeys Band - Dave Matthews  Band Tribute",
    "venue": "The Strand Theatre",
    "date": "1/31/25",
    "time": "8:00:00 PM",
    "town": "Hudson Falls",
    "link": "https://www.mystrandtheater.org/events/2025/1/31/the-proudest-monkeys-band-dave-matthews-band-tribute"
  },
  {
    "artist": "Opal Essence's New Year's Eve Dragtacular!",
    "venue": "theREP",
    "date": "12/31/24",
    "time": "8:00:00 PM",
    "town": "Albany",
    "link": "https://attherep.org/event/opal-essences-new-years-eve-dragtacular-2/"
  },
  {
    "artist": "Bach at New Year's: The Six 'Brandenburg Concertos'",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/1/25",
    "time": "3:00:00 PM",
    "town": "Troy",
    "link": "https://www.troymusichall.org/events/2831/bach-at-new-year-s-the-six-brandenburg-concertos-/"
  },
  {
    "artist": "Lift Series: Doom Dogs",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/8/25",
    "time": "6:00:00 PM",
    "town": "Troy",
    "link": "https://www.troymusichall.org/events/2855/doom-dogs/"
  },
  {
    "artist": "Daniel Roumain + Beethoven's Pastoral",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/11/25",
    "time": "7:30:00 PM",
    "town": "Troy",
    "link": "https://www.troymusichall.org/events/2909/daniel-roumain-beethoven-s-pastoral/"
  },
  {
    "artist": "Daneil Roumain + Beethoven;s Pastoral | Matinee",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/12/25",
    "time": "3:00:00 PM",
    "town": "Troy",
    "link": "https://www.troymusichall.org/events/2910/daniel-roumain-beethoven-s-pastoral-matinee/"
  },
  {
    "artist": "Michael Century",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/14/25",
    "time": "12:00:00 PM",
    "town": "Troy",
    "link": "https://www.troymusichall.org/events/2914/michael-century/"
  },
  {
    "artist": "Branford Marsalis",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/16/25",
    "time": "7:30:00 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117608&qty=0"
  },
  {
    "artist": "Almost Queen: A Tribute To QUEEN",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/18/25",
    "time": "8:00:00 PM",
    "town": "Troy",
    "link": "https://www.troymusichall.org/events/2919/almost-queen/"
  },
  {
    "artist": "Vince Herman & Sam Grisman Duo",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/23/25",
    "time": "7:30:00 PM",
    "town": "Troy",
    "link": "https://www.troymusichall.org/events/2921/vince-herman-sam-grisman-duo/"
  },
  {
    "artist": "Lights Out: A Tribute to Frankie Valli and The Four Seasons",
    "venue": "Troy Savings Bank Music Hall",
    "date": "1/25/25",
    "time": "7:30:00 PM",
    "town": "Troy",
    "link": "https://www.troymusichall.org/events/2878/a-tribute-to-frankie-valli-and-the-four-seasons/"
  },
  {
    "artist": "Steven Isserlis",
    "venue": "Troy Savings Bank Music Hall",
    "date": "2/4/25",
    "time": "7:30:00 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116457&qty=0"
  },
  {
    "artist": "Neon Avenue",
    "venue": "Unihog",
    "date": "12/21/24",
    "time": "8:00:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "The Gibson Brothers Christmas Show",
    "venue": "UPH",
    "date": "12/21/24",
    "time": "7:30:00 PM",
    "town": "Saratoga",
    "link": "https://atuph.org/event/the-gibson-brothers-christmas-show/"
  },
  {
    "artist": "Code Groove",
    "venue": "Van Slycks at Rivers",
    "date": "12/21/24",
    "time": "9:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/code-groove-6-14"
  },
  {
    "artist": "Carla Page ",
    "venue": "Van Slycks at Rivers",
    "date": "12/25/24",
    "time": "2:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/live-music-carla-page"
  },
  {
    "artist": "Jukebox Rebellion",
    "venue": "Van Slycks at Rivers",
    "date": "12/27/24",
    "time": "9:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/jukebox-rebellion-10-13"
  },
  {
    "artist": "Ten Most Wanted",
    "venue": "Van Slycks at Rivers",
    "date": "12/28/24",
    "time": "9:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/live-music-ten-most-wanted"
  },
  {
    "artist": "Grand Central Station",
    "venue": "Van Slycks at Rivers",
    "date": "12/31/24",
    "time": "9:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/grand-central-station-2024"
  },
  {
    "artist": "The Rogues",
    "venue": "Van Slycks at Rivers",
    "date": "1/1/25",
    "time": "2:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/live-music-the-rogues2025"
  },
  {
    "artist": "Country Weekends With The Gary Frost Band",
    "venue": "Van Slycks at Rivers",
    "date": "1/3/25",
    "time": "8:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/country-weekends-with-gary-frost-band"
  },
  {
    "artist": "Country Weekends With Big Sky Country",
    "venue": "Van Slycks at Rivers",
    "date": "1/4/25",
    "time": "8:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/country-weekends-with-big-sky-country"
  },
  {
    "artist": "Carla Page ",
    "venue": "Van Slycks at Rivers",
    "date": "1/8/25",
    "time": "2:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/live-music-carla-page2025"
  },
  {
    "artist": "Hijacked",
    "venue": "Van Slycks at Rivers",
    "date": "1/10/25",
    "time": "8:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/hijacked"
  },
  {
    "artist": "Cryin' Out Loud",
    "venue": "Van Slycks at Rivers",
    "date": "1/11/25",
    "time": "9:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/cryin-out-loud"
  },
  {
    "artist": "Joe's Boys",
    "venue": "Van Slycks at Rivers",
    "date": "1/15/25",
    "time": "2:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/Joesboys2025"
  },
  {
    "artist": "TS Ensemble",
    "venue": "Van Slycks at Rivers",
    "date": "1/17/25",
    "time": "8:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/TSEEnsemble"
  },
  {
    "artist": "Ten Most Wanted",
    "venue": "Van Slycks at Rivers",
    "date": "1/18/25",
    "time": "9:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/live-music-ten-most-wanted"
  },
  {
    "artist": "Roxy And The Rollers",
    "venue": "Van Slycks at Rivers",
    "date": "1/22/25",
    "time": "2:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/roxy-and-the-rollers2025"
  },
  {
    "artist": "Hit N Run",
    "venue": "Van Slycks at Rivers",
    "date": "1/24/25",
    "time": "9:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/hit-n-run"
  },
  {
    "artist": "Scars N' Stripes",
    "venue": "Van Slycks at Rivers",
    "date": "1/25/25",
    "time": "9:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/scars-n-stripes"
  },
  {
    "artist": "Roadhouse 60s",
    "venue": "Van Slycks at Rivers",
    "date": "1/29/25",
    "time": "2:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.riverscasino.com/schenectady/entertainment/van-slycks/roadhouse-60s2025"
  },
  {
    "artist": "Ten Most Wanted",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "12/21/24",
    "time": "8:00:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/ten-most-wanted-3/"
  },
  {
    "artist": "The Refrigerators",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "12/27/24",
    "time": "8:00:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/the-refrigerators/"
  },
  {
    "artist": "80s & 90s Party with DJ NPG",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "12/28/24",
    "time": "8:00:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/80s-90s-dance-party-with-dj-npg-2/"
  },
  {
    "artist": "New Year's Celebrations with The Accents & Big Sky Country",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "12/31/24",
    "time": "8:30:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/new-years-eve-celebration/"
  },
  {
    "artist": "80s & 90s Party With DJ NPG",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "1/4/25",
    "time": "8:00:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/80s-90s-dance-party-with-npg/"
  },
  {
    "artist": "The Refrigerators",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "1/10/25",
    "time": "8:30:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/the-refrigerators-3/"
  },
  {
    "artist": "Skeeter Creek",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "1/11/25",
    "time": "8:30:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/skeeter-creek-2/"
  },
  {
    "artist": "That 80s Band",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "1/17/25",
    "time": "8:30:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/that-80s-band/"
  },
  {
    "artist": "Totally 2000s With DJ NPG",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "1/18/25",
    "time": "8:00:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/totally-2000s-with-dj-npg/"
  },
  {
    "artist": "Big Sky Country",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "1/24/25",
    "time": "8:30:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/big-sky-country-2/"
  },
  {
    "artist": "Aquanett",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "1/25/25",
    "time": "8:30:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/tommy-v-live/"
  },
  {
    "artist": "Electric Rodeo",
    "venue": "Vapor Nightclub at Saratoga Casino",
    "date": "1/31/25",
    "time": "8:30:00 PM",
    "town": "Saratoga",
    "link": "https://saratogacasino.com/event/electric-rodeo/"
  },
  {
    "artist": "The Trojan Horns",
    "venue": "Wolf Hollow Brewing Company",
    "date": "12/28/24",
    "time": "6:00:00 PM",
    "town": "Schenectady",
    "link": "https://www.wolfhollowbrewing.com/events/the-trojan-horns"
  }
];


export const theaterData = [
	{
		start: new Date(24, 10, 1),
		end: new Date(24, 10, 3),
		title: "Villain Cabaret Prop Drive",
		location: "Albany High Theater Ensemble",
		link: "https://www.albanyschools.org/schools/albanyhigh/theater"
	},
	{
		start: new Date(24, 9, 26),
		end: new Date(24, 10, 4),
		title: "Centuries",
		location: "Ancram Center For The Arts",
		link: "https://www.ancramcenter.org/"
	},
	{
		start: new Date(24, 9, 30),
		end: new Date(24, 9, 31),
		title: "Whispering Bones",
		location: "Bennington Theatre",
		link: "https://benningtontheater.org/"
	},
	{
		start: new Date(24, 9, 17),
		end: new Date(24, 9, 28),
		title: "Berta, Berta",
		location: "Black Theatre Troupe of Upstate NY @ theREP",
		link: "https://attherep.org/"
	},
	{
		start: new Date(24, 10, 14),
		end: new Date(24, 10, 25),
		title: "Discord",
		location: "Bridge Street Theatre",
		link: "https://bridgest.org/"
	},
	{
		start: new Date(24, 9, 25),
		end: new Date(24, 9, 28),
		title: "Peter Samelson: Magic, Love, Mystery!",
		location: "Bridge Street Theatre",
		link: "https://bridgest.org/"
	},
	{
		start: new Date(24, 10, 14),
		end: new Date(24, 10, 18),
		title: "Legally Blonde",
		location: "Broadway Upstate",
		link: "https://www.broadwayupstate.com/shows/"
	},
	{
		start: new Date(24, 10, 15),
		end: new Date(24, 10, 25),
		title: "Valley Song",
		location: "BTTUNY @ Hubbard Hall Center for Arts & Education",
		link: "https://hubbardhall.org/event/valley-song-a-play-in-partnership-with-black-theatre-troupe-3/"
	},
	{
		start: new Date(24, 10, 8),
		end: new Date(24, 10, 18),
		title: "The Mousetrap",
		location: "Bunbury Players @ The Edison Club",
		link: "https://www.facebook.com/BunburyPlayers2020/"
	},
	{
		start: new Date(24, 10, 3),
		end: new Date(24, 10, 4),
		title: "Playwrights Jam",
		location: "Caffe Lena",
		link: "https://www.caffelena.org/"
	},
	{
		start: new Date(24, 10, 22),
		end: new Date(24, 11, 23),
		title: "A Sherlock Carol",
		location: "Capital Reperatory Theatre",
		link: "https://attherep.org/"
	},
	{
		start: new Date(24, 9, 11),
		end: new Date(24, 9, 28),
		title: "Bat Boy: The Musical",
		location: "Center for Performing Arts at Rhinebeck",
		link: "https://www.centerforperformingarts.org/"
	},
	{
		start: new Date(24, 10, 13),
		end: new Date(24, 10, 25),
		title: "Comic Potential",
		location: "Circle Theatre Players",
		link: "https://www.slca-ctp.org/"
	},
	{
		start: new Date(24, 9, 27),
		end: new Date(24, 9, 27),
		title: "CAST Party to Benefit CRFT",
		location: "Cohoes Music Hall",
		link: "https://www.thecohoesmusichall.org/"
	},
	{
		start: new Date(24, 10, 8),
		end: new Date(24, 10, 18),
		title: "Sussical Jr",
		location: "Colonial Little Theatre",
		link: "https://coloniallittletheatre.org/"
	},
	{
		start: new Date(24, 10, 15),
		end: new Date(24, 10, 24),
		title: "Psalm 91",
		location: "Creative Action Unlimited",
		link: "https://capartscenter.org/"
	},
	{
		start: new Date(24, 9, 24),
		end: new Date(24, 10, 11),
		title: "Gaslight",
		location: "Curtain Call Theatre",
		link: "https://www.curtaincalltheatre.com/"
	},
	{
		start: new Date(24, 9, 25),
		end: new Date(24, 9, 28),
		title: "The Addams Family",
		location: "Debuts Theatre Company",
		link: "https://www.mydebuts.com/"
	},
	{
		start: new Date(24, 10, 8),
		end: new Date(24, 10, 17),
		title: "Six: The Musical Teen Edition",
		location: "Fallen Chandelier Productions",
		link: "https://www.facebook.com/fallenchandelierproductions/"
	},
	{
		start: new Date(24, 10, 8),
		end: new Date(24, 10, 11),
		title: "Our Town",
		location: "Fort Salem Theatre",
		link: "https://www.fortsalem.com/"
	},
	{
		start: new Date(24, 10, 23),
		end: new Date(24, 10, 25),
		title: "The Lion King Jr",
		location: "Galway Players",
		link: "https://www.galwayplayers.org/"
	},
	{
		start: new Date(24, 10, 8),
		end: new Date(24, 10, 11),
		title: "9 to 5: The Musical",
		location: "Glens Falls Community Theatre",
		link: "https://www.gfcommunitytheatre.org/"
	},
	{
		start: new Date(24, 10, 7),
		end: new Date(24, 10, 17),
		title: "Into the Breeches!",
		location: "Harbinger @ Albany Barn",
		link: "https://albanybarn.org/"
	},
	{
		start: new Date(24, 9, 26),
		end: new Date(24, 9, 27),
		title: "The Dinner Detective",
		location: "Hilton Garden Inn",
		link: "https://www.thedinnerdetective.com/albany/"
	},
	{
		start: new Date(24, 9, 26),
		end: new Date(24, 9, 27),
		title: "Whispering Bones",
		location: "Hubbard Hall Center for Arts & Education",
		link: "https://hubbardhall.org/"
	},
	{
		start: new Date(24, 9, 18),
		end: new Date(24, 9, 28),
		title: "The Musical of Musicals",
		location: "Not So Common Players @ The Edison Club",
		link: "http://www.notsocommonplayers.org/"
	},
	{
		start: new Date(24, 11, 3),
		end: new Date(24, 11, 9),
		title: "MJ",
		location: "Proctors Theatre",
		link: "https://www.atproctors.org/"
	},
	{
		start: new Date(24, 11, 14),
		end: new Date(24, 11, 17),
		title: "Northeast Ballet's Annual The Nutcracker",
		location: "Proctors Theatre",
		link: "https://www.atproctors.org/"
	},
	{
		start: new Date(24, 9, 31),
		end: new Date(24, 10, 1),
		title: "Whispering Bones",
		location: "Proctors Theatre",
		link: "https://www.atproctors.org/"
	},
	{
		start: new Date(24, 9, 18),
		end: new Date(24, 9, 28),
		title: "Little Shop of Horrors",
		location: "R'ville Stage Creations",
		link: "https://rville-stage-creations.square.site/"
	},
	{
		start: new Date(24, 10, 15),
		end: new Date(24, 10, 25),
		title: "Moon for the Misbegotten",
		location: "Schenectady Civic Players",
		link: "https://www.civicplayers.org/"
	},
	{
		start: new Date(24, 10, 8),
		end: new Date(24, 10, 18),
		title: "Mean Girls",
		location: "Schenectady Light Opera Company",
		link: "https://sloctheater.org/"
	},
	{
		start: new Date(24, 10, 1),
		end: new Date(24, 10, 4),
		title: "Play On!",
		location: "Schuylerville Community Theatre",
		link: "https://www.scttheater.org/"
	},
	{
		start: new Date(24, 10, 14),
		end: new Date(24, 10, 24),
		title: "Guys & Dolls",
		location: "Siena Creative Arts",
		link: "https://www.siena.edu/departments/creative-arts/"
	},
	{
		start: new Date(24, 10, 22),
		end: new Date(24, 11, 8),
		title: "Black Super Hero Magic Mama",
		location: "Skidmore College Theatre",
		link: "https://theater.skidmore.edu/"
	},
	{
		start: new Date(24, 10, 8),
		end: new Date(24, 10, 18),
		title: "The 25th Annual Putnam County Spelling B",
		location: "Steamer No 10 Theatre",
		link: "https://steamer10theatre.org/"
	},
	{
		start: new Date(24, 10, 2),
		end: new Date(24, 10, 24),
		title: "Fool Me Once",
		location: "The Addy Theatre at Proctors",
		link: "https://www.atproctors.org/"
	},
	{
		start: new Date(24, 9, 25),
		end: new Date(24, 10, 4),
		title: "Into the Woods",
		location: "Theatre Intitute at Sage Teens",
		link: "https://theatre.sage.edu/"
	},
	{
		start: new Date(24, 9, 23),
		end: new Date(24, 9, 28),
		title: "Machinal",
		location: "UAlbany Theatre",
		link: "https://www.albany.edu/musicandtheatre"
	},
	{
		start: new Date(24, 10, 20),
		end: new Date(24, 10, 25),
		title: "Mary Shelley Meets Frankenstein",
		location: "UAlbany Theatre",
		link: "https://www.albany.edu/musicandtheatre"
	},
	{
		start: new Date(24, 9, 30),
		end: new Date(24, 10, 4),
		title: "7 Plays / 7 Days",
		location: "Union College Theatre",
		link: "https://www.union.edu/theater-dance"
	},
	{
		start: new Date(24, 9, 26),
		end: new Date(24, 9, 26),
		title: "Spontaneous Broadway",
		location: "MOPCO Theater on Jay Street",
		link: "https://www.mopco.org/"
	},
	{
		start: new Date(24, 10, 2),
		end: new Date(24, 10, 2),
		title: "Spontaneous Broadway",
		location: "MOPCO Theater on Jay Street",
		link: "https://www.mopco.org/"
	},
	{
		start: new Date(24, 10, 9),
		end: new Date(24, 10, 9),
		title: "Spontaneous Broadway",
		location: "MOPCO Theater on Jay Street",
		link: "https://www.mopco.org/"
	},
	{
		start: new Date(24, 10, 16),
		end: new Date(24, 10, 16),
		title: "Spontaneous Broadway",
		location: "MOPCO Theater on Jay Street",
		link: "https://www.mopco.org/"
	},
	{
		start: new Date(24, 10, 23),
		end: new Date(24, 10, 23),
		title: "Spontaneous Broadway",
		location: "MOPCO Theater on Jay Street",
		link: "https://www.mopco.org/"
	},
	{
		start: new Date(24, 10, 30),
		end: new Date(24, 10, 30),
		title: "Spontaneous Broadway",
		location: "MOPCO Theater on Jay Street",
		link: "https://www.mopco.org/"
	},
];

export const artData = [
	{
		title: "Albany Center Gallery's All Hallow E'en Art Path",
		organizer: "Albany Center Gallery",
		start: new Date(24, 9, 1),
		end: new Date(24, 10, 1),
		details: "Venture along the All Hallow E'en Art Path in Downtown Albany, curated by Albany Center Gallery. MAIDEN LANE ARTISTS: Raina Briggs, Bailey Brown, Olivia Deep, Kayla Ek, Casey Simonds. QUACKENBUSH SQUARE ARTISTS: Alicia Barton, Ramiro Davaro-Comas, Toxic Dreams, Nevaeh Hairston, Stephanie Levay, Julia Rodriquez, Shae, Carl Warren",
		cost: "free",
		time: "24/7"
	},
	{
		title: "Familiars",
		organizer: "The Arts Center of the Capital Region",
		start: new Date(24, 9, 21),
		end: new Date(24, 10, 27),
		details: "Familiars is a solo exhibition featuring new work by artist Kate Wolford. Mystical and surreal, this body of work delves into themes of mythology, fantasy, nostalgia, animalia, and self-identity. Blurring the lines between painting and sculpture, Wolford's small-scale, intricate pieces are painted in egg tempera or acrylic on panel and displayed in unique, hand-built custom frames. Drawing on the wonder of childhood memories, her work explores creatures in dream-like settings and her own internal myth-making.",
		cost: "free",
		time: "6 - 8pm"
	},
	{
		title: "NOT FOR THE FAINT OF ART!",
		organizer: "The Arts Center of the Capital Region",
		start: new Date(24, 9, 25),
		end: new Date(24, 9, 31),
		details: "Fear not your creativity… Leave that to him & his “THE BLACK BOX” Clover, a brilliant, but misunderstood artist, finds solitude in his creations. Some of which can be found right in the heart of Troy, New York. 5 unique, yet haunting realms developed from his imagination and isolation. Clover welcomes you to his wonderfully, complex & meandering mind. Very few can see his point of view, but he dares you to try “THE BLACK BOX” He must warn you it is “ NOT FOR THE FAINT OF ART!”",
		cost: "$15 - $20",
		time: "7 - 11pm"
	},
	{
		title: "ORT Project presents Dark Lux",
		organizer: "J. Gernon Frame & Art",
		start: new Date(24, 9, 25),
		end: new Date(24, 9, 25),
		details: "Ort Project is the collaborative union of artists Anna Noelle Rockwell and Oona Nelson, whose lush installations, photographs and interactive gestures explore and critique aspects of consumption, abundance, and decay. Their point of reference is the table, a site of dining and display, which they use as a staging platform for painterly nature morte tableaux in which the artists create ephemeral installations and photographs of edible and inedible subjects. Their work takes on the implications of food beyond that of nourishment, instead ORT marinates the more insidious, but visually rich implications—poisonous, gluttonous or hedonistic—to offer intoxicating critiques of social attitudes with collective perils. Within their work Ort blends the influence of art history, the contemporary cult of convenience and abundance, along with the corresponding environmental threats and distorted value systems, into uncommon balances of the grotesque and the beautiful.",
		cost: "free",
		time: "6 PM"
	},
	{
		title: "Prove your humanity by notpaulsimon",
		organizer: "Collar Works",
		start: new Date(24, 9, 25),
		end: new Date(24, 9, 25),
		details: "Artist Reception at Window Works. Drawing upon gestures borne of the digital age, Prove your humanity aims to rekindle the physical, igniting the human desire for longing, desire, and connection. The wandering lines of notpaulsimon’s light sculptures weave and swipe through space unmediated: wires exposed and tubes bundled. Foregoing digital fabrication techniques in favor of direct material manipulation, the work recovers the sense of humanity that is lost in digital mediation. In a world where our movement is tracked, monitored, and commodified, prove your humanity aims to reclaim the gestures that make us human.",
		cost: "free",
		time: "5 - 6pm, After Party @ Rare Form Brewing, 6 - 8pm"
	},
	{
		title: "It's Only the River",
		organizer: "Two Selves Gallery",
		start: new Date(24, 9, 27),
		end: new Date(24, 9, 27),
		details: "Please join us for a curated art experience celebrating artwork inspired by live music! This group show will be sure to complement your live music experience as Phish plays a weekend run to benefit the Divided Sky Foundation. Over the river and just 10 minutes away in Troy, we will host a group of artists and show pieces in myriad mediums.",
		cost: "free",
		time: "Noon"
	},
	{
		title: "OPEN SEW",
		organizer: "Collar Works x ChaShaMa",
		start: new Date(24, 9, 27),
		end: new Date(24, 9, 27),
		details: "OPEN SEW is a regular meet up for artists to work on their soft projects together. organizer two artists-in-residence at Collar Works, Victoria van der Laan & Dustin Loveland. Drop in at 50 4th Street in Troy with your project and sewing machine or hand tools.\tfree\tNoon - 4pm\nJames Casebere and Danny Goodwin – In Conversation\tUniversity Art Museum\t10/29/24\tArtist James Casebere will be in conversation with artist and UAlbany Professor Danny Goodwin discussing their shared interest in constructed photography, as well as themes related to social control, power structures, and institutional mythologies in their respective work. For the last 30 years, James Casebere has been at the forefront of artists working with constructed photography, creating photographs of his table-sized models based on architectural, art historical, and cinematic sources. Goodwin’s work spanning over 20 years has explored the US intelligence community and related issues of surveillance, secrecy, and violence. Goodwin’s photography and videos are currently on view in “Job Security: Voices and Views from the American Security Industry.”\tfree\t4:30 PM\nLiberty Street Studio Open House\tLiberty Street Studio\t11/1/24\tStudio artists: Naomi Lewis, Gary Maggio, Laura Mandelson and Arnela Mahmutovic. Snacks and beverages will be served. Enter the door with the big #8.\tfree\t6 - 9pm\nNell Stokes: Stories of an Education Advocate\tAlbany Institute of History & Art\t11/1/24\tReception with special guest Nell Stokes, local activist and the subject of our current exhibition \"Nell Stokes: Stories of an Education Advocate\" displayed on the museum's first floor. The exhibition represents the breadth of Stokes' network and her commitment to community through photographs, pamphlets, and other ephemera drawn from the Nell Stokes Manuscript Collection. Meet Stokes, see the exhibition during its final months on view.\tfree\t6 - 8pm\nPop-up ProjectART\tAlbany Center Gallery\t11/1/24\tJoin ACG for a one night event of live projection art by FAR EYE and live music by Nate Mars, along with some light refreshments! Artists FAR EYE and Nate Mars will curate a unique visual and audio immersive experience complete with surrounding patterns and formations coming together.\tfree\t5 - 8pm\nListen and Learn: The Neighborhood That Disappeared\tBethlehem Public Library\t11/1/24\tThe Neighborhood That Disappeared documents the destruction of an entire neighborhood in Albany, when a massive urban renewal project in 1962 displaced 8% of the city’s population and closed more than 350 businesses. Watch a screening of the 2014 documentary followed by a Q&A with the film’s director, Mary Paley.\tfree\t10am - 12:15pm\nTroy Glow 24\tThe Arts Center of the Capital Region and Troy Public Art\t11/1/24-11/11/24\tProduced by the Arts Center of the Capital Region, Troy Glow 24 is a dazzling 10-day festival that will light up downtown Troy, November 1st to 10th, 24. Visitors can experience 10 light art installations on a 15 minute walk through Troy’s historic streets. Visitors can explore on their own, come to our three festival events, or join guided tours.\tfree\tdifferent dates and times\nBUILT: First Peek Artist Award Ceremony Holiday Shop\tHistoric Albany Foundation\t11/1/24-11/3/24\tA weekend of festivities all centered around some of the best local art in the Capital Region representing our renowned architecture! Proceeds from Built support the mission of Historic Albany Foundation.\tSome events free/tickets\t5:30 - 8:30 pm\nPantheon- A Solo Exhibition by Artist In Residence, Aly Parrott\tArlene's Artist Materials, Inc.\t11/1/24-11/31/24\tExplore the world of Pantheon, a solo exhibition by artist in residence Aly Parrott at Arlene’s Artist Materials. This show features Aly's unique multimedia artworks inspired by Greco-Roman mythology and fantasy. Her process combines watercolor, stitching, and needle felting to create characters that tell stories and invite you into a new world. Pantheon marks the foundational series of a functional, playable world that Aly is dedicated to developing further through illustration, written narratives, and collaborative storytelling.\tfree\t4:30 - 5:30pm\nThe Voracious Eye\tOpalka Gallery\t11/1/24-12/7/24\tCurated by Joan Grubin with artists Molly Heron, Nancy Shaver & Wolf, Ilene Sunshine, Christopher Werner, and Allan Wexler. Through discrete installations, each artist’s work is presented in dialogue with artifacts rich with personal meaning that they’ve curated from their private lives, offering a glimpse into each artist’s visual thinking.\tfree\t5:30, Reception 6:00pm to 7:30pm\nHoliday Salon\tThe Blooming Artist Gallery\t11/8/24\tShowcasing work by: Amy Bergeron, Liz Coleman, Patricia Collins, Maria DeAngelo, Karen Elem, Kathleen M. Gallagher, Janine Gibson, Brianna Guerra, Frederick Holman, Kristine Kelly, Barb Lennox, Kris Gregson Moss, Susan Nowogrodzki Dorothea Osbon,Dave Ostrowski, Tracey Pagano, Pat Posillico, Paul Andrew Schultz, Gary Shankman, Pamela Stendardi, Diane Swanson,  Terry Teitelbaum, Gregory Wing, Karen Woodin, Leslie Yolen.\tfree\t6 - 8pm"
	},
]
