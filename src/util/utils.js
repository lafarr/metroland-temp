export const convertdateToHuman = (shittydate) => {
	let [year, month, day] = shittydate.split('-');

	year = year.substring(2);
	month = month.length === 2 && month.charAt(0) === '0' ? month.charAt(1) : month;
	day = day.length === 2 && day.charAt(0) === '0' ? day.charAt(1) : day;

	return `${month}/${day}/${year}`;
};

export const musicData = [
  {
    artist: "Kevin McKrell",
    venue: "6 on the Square",
    date: "3/8/25",
    time: "7:00 PM",
    town: "Oxford",
    link: "https://www.6onthesquare.org"
  },
  {
    artist: "SURROUND: Sophia Subbayya Vastek",
    venue: "Arthur Zankel Music Center",
    date: "1/26/25",
    time: "4:00 PM",
    town: "Saratoga",
    link: "https://www.tix.com/ticket-sales/zankel/7074/event/1406053"
  },
  {
    artist: "SURROUND: Niecy Blues",
    venue: "Arthur Zankel Music Center",
    date: "2/9/25",
    time: "4:00 PM",
    town: "Saratoga",
    link: "https://www.tix.com/ticket-sales/zankel/7074/event/1406344"
  },
  {
    artist: "Primal Disco",
    venue: "Avalon Lounge",
    date: "2/1/25",
    time: "9:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/primal_disco_6"
  },
  {
    artist: "Upstate Composers Orchestra",
    venue: "Avalon Lounge",
    date: "2/2/25",
    time: "7:30 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/upstate_composers_orc_1"
  },
  {
    artist: "Open Mic Night w/ Ryder Cooley",
    venue: "Avalon Lounge",
    date: "2/5/25",
    time: "6:30 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/open_mic_night_w_ryd_9"
  },
  {
    artist: "Upstairs Wednesdays: Larry Legend + David Lizmi",
    venue: "Avalon Lounge",
    date: "2/5/25",
    time: "7:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/upstairs_wednesdays"
  },
  {
    artist: "NIGHTWAVE w/ DJ Tryst",
    venue: "Avalon Lounge",
    date: "2/7/25",
    time: "9:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/nightwave_w_dj_tryst"
  },
  {
    artist: "Sam Cohen + Stuert Bogie / Ezra Feinberg / Nora Stanley",
    venue: "Avalon Lounge",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/ezra_feinberg__slow"
  },
  {
    artist: "Touriszt / Kanal Nula / Birthed / Spreaders",
    venue: "Avalon Lounge",
    date: "2/9/25",
    time: "7:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/touriszt__kanal_nula"
  },
  {
    artist: "Upstairs Wednesdays: Bram Kincheloe + Nico Soffiato",
    venue: "Avalon Lounge",
    date: "2/12/25",
    time: "7:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/upstairs_wednesdays_2"
  },
  {
    artist: "Ronnie Stone / Die Sexual / SOPDET",
    venue: "Avalon Lounge",
    date: "2/12/25",
    time: "8:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/ronnie_stone__die_se"
  },
  {
    artist: "A Gothic Valentines Day Party w/ Dust Bowl Faeries & DJ Slinky Von Moss",
    venue: "Avalon Lounge",
    date: "2/14/25",
    time: "7:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/a_gothic_valentines_p"
  },
  {
    artist: "Wrekmeister Harmonies / Mark Trecka / S3V37",
    venue: "Avalon Lounge",
    date: "2/15/25",
    time: "8:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/wrekmeister_harmonies_1"
  },
  {
    artist: "Lydia Lunch with Tim Dahl + Kevin Shea / Faccia Brutta ",
    venue: "Avalon Lounge",
    date: "2/16/25",
    time: "8:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/lydia_lunch_with_tim"
  },
  {
    artist: "Upstairs Wednesdays: Alex Topornycky",
    venue: "Avalon Lounge",
    date: "2/19/25",
    time: "7:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/upstairs_wednesdays_3"
  },
  {
    artist: "ALTADENA FUNDRAISER w/ Florist/ Babehoven/ Ben Seretan/ Zno Scot/ Alex Patrick Dyck/ SVB (DJ)/ B. A Maile (Visuals)",
    venue: "Avalon Lounge",
    date: "2/20/25",
    time: "7:30 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/altadena_fundraiser_w"
  },
  {
    artist: "Bruiser and Bicycle / Russel the Leaf / Silver Tree",
    venue: "Avalon Lounge",
    date: "2/21/25",
    time: "8:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/bruiser_and_bicycle__1"
  },
  {
    artist: "Dromedary Records Presents: WGXC Fundraiser with Dominick & the Family Band / Hush Woods / $500 / The Entire Earth",
    venue: "Avalon Lounge",
    date: "2/22/25",
    time: "8:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/wgxc_fundraiser_with"
  },
  {
    artist: "Upstairs Wednesdays: Aidan Samp + John Thayer + Alden Slack",
    venue: "Avalon Lounge",
    date: "2/26/25",
    time: "7:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/upstairs_wednesdays_4"
  },
  {
    artist: "TJ Douglas / Katy Pinke / Will Stratton",
    venue: "Avalon Lounge",
    date: "2/27/25",
    time: "8:00 PM",
    town: "Catskill",
    link: "https://www.viewcy.com/e/tj_douglas__katy_pin_1"
  },
  {
    artist: "Excelsior Vocal Ensemble presents Winter Spirits",
    venue: "Bethesda Episcopal Church, 26 Washington St, Saratoga Springs",
    date: "2/9/25",
    time: "3:00 PM",
    town: "Saratoga",
    link: "Saratoga-arts.org/events"
  },
  {
    artist: "Yale Whiffenpoofs",
    venue: "Bush Memorial Hall at Russell Sage College",
    date: "1/25/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://whiffs.ticketbud.com/the-yale-whiffenpoofs-in-troy"
  },
  {
    artist: "Kevin McKrell w/ Arlin Greene and Frank Orsini",
    venue: "Caffe Lena",
    date: "3/14/25",
    time: "8:00 PM",
    town: "Saratoga",
    link: "https://www.eventbrite.com/e/kevin-mckrell-tickets-1076231510419"
  },
  {
    artist: "Nate Sabat & Rakish ",
    venue: "Caffè Lena",
    date: "1/24/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/nate-sabat-rakish-tickets-1033120971637"
  },
  {
    artist: "Songwriting Club with Girl Blue",
    venue: "Caffè Lena",
    date: "1/25/25",
    time: "12:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/event/songwriting-club-with-girl-blue/"
  },
  {
    artist: "Eastbound Jesus - Benefit For Comfort Food Community",
    venue: "Caffè Lena",
    date: "1/25/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/eastbound-jesus-benefit-for-comfort-food-community-tickets-1046493418987"
  },
  {
    artist: "The Michael Mills Magic Show",
    venue: "Caffè Lena",
    date: "1/28/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/the-michael-mills-magic-show-tickets-1099479766579"
  },
  {
    artist: "Folk Club Kids! New time For 25 Dance Tunes, Sing Alongs, & Stories! Free / Infants - Pre K",
    venue: "Caffè Lena",
    date: "1/29/25",
    time: "10:30 AM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/folk-club-kids/"
  },
  {
    artist: "Lena Go Round - Songwriter Showcase with Erin Harkes",
    venue: "Caffè Lena",
    date: "1/29/25",
    time: "7:30 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/lena-go-round-songwriter-showcase-with-erin-harkes-tickets-1096787323409"
  },
  {
    artist: "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    venue: "Caffè Lena",
    date: "1/30/25",
    time: "8:00 AM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    artist: "Lee Dewyze ",
    venue: "Caffè Lena",
    date: "1/30/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/lee-dewyze-tickets-1045346779357"
  },
  {
    artist: "Momentum Series: The Suitcase Junket",
    venue: "Caffè Lena",
    date: "1/31/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/momentum-series-the-suitcase-junket-tickets-1015294532277"
  },
  {
    artist: "Little Folks Series featuring LITTLE ROOTS",
    venue: "Caffè Lena",
    date: "2/1/25",
    time: "3:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/little-folks-series-featuring-little-roots-tickets-1035002910567"
  },
  {
    artist: "Ryan Montbleau (Solo)",
    venue: "Caffè Lena",
    date: "2/1/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/cc/ryan-montbleau-solo-3680439"
  },
  {
    artist: "Ryan Montbleau (Solo)",
    venue: "Caffè Lena",
    date: "2/2/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/cc/ryan-montbleau-solo-3680439"
  },
  {
    artist: "Open Mic Night ",
    venue: "Caffè Lena",
    date: "2/3/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/open-mic/"
  },
  {
    artist: "Story Telling Open Mic Featuring Kent Busman",
    venue: "Caffè Lena",
    date: "2/4/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/storytelling-open-mic/"
  },
  {
    artist: "Folk Club Kids! New time For 25 Dance Tunes, Sing Alongs, & Stories! Free / Infants - Pre K",
    venue: "Caffè Lena",
    date: "2/5/25",
    time: "10:30 AM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/folk-club-kids/"
  },
  {
    artist: "Irish Music Ensemble with Oona Brady and James Gascoyne",
    venue: "Caffè Lena",
    date: "2/5/25",
    time: "12:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/event/irish-music-ensemble-with-oona-grady-and-james-gascoyne-3/"
  },
  {
    artist: "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    venue: "Caffè Lena",
    date: "2/6/25",
    time: "1:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    artist: "The Clements Brothers",
    venue: "Caffè Lena",
    date: "2/6/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/the-clements-brothers-tickets-1037199189697"
  },
  {
    artist: "Goodnight Moonshine Feat. Molly of Red Molly",
    venue: "Caffè Lena",
    date: "2/7/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/goodnight-moonshine-feat-molly-of-red-molly-tickets-1028642295797"
  },
  {
    artist: "Peak Jazz Series: Soggy Po' Boys",
    venue: "Caffè Lena",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/peak-jazz-series-soggy-po-boys-tickets-1104597433659"
  },
  {
    artist: "Open Mic Night ",
    venue: "Caffè Lena",
    date: "2/10/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/open-mic/"
  },
  {
    artist: "Folk Club Kids! New time For 25 Dance Tunes, Sing Alongs, & Stories! Free / Infants - Pre K",
    venue: "Caffè Lena",
    date: "2/12/25",
    time: "10:30 AM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/folk-club-kids/"
  },
  {
    artist: "Irish Music Ensemble with Oona Brady and James Gascoyne",
    venue: "Caffè Lena",
    date: "2/12/25",
    time: "12:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/event/irish-music-ensemble-with-oona-grady-and-james-gascoyne-3/"
  },
  {
    artist: "Yasmin Williams ",
    venue: "Caffè Lena",
    date: "2/12/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/yasmin-williams-tickets-878757777167"
  },
  {
    artist: "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    venue: "Caffè Lena",
    date: "2/13/25",
    time: "1:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    artist: "Oshima Brothers with Opener Madeleine Roger",
    venue: "Caffè Lena",
    date: "2/13/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/oshima-brothers-with-opener-madeleine-roger-tickets-1046521322447"
  },
  {
    artist: "Heather Maloney with Opener High Tea",
    venue: "Caffè Lena",
    date: "2/14/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/heather-maloney-with-opener-high-tea-tickets-1082673588849"
  },
  {
    artist: "Tom Chapin",
    venue: "Caffè Lena",
    date: "2/15/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/65th-anniversary-folk-heritage-series-tom-chapin-tickets-1046626848077"
  },
  {
    artist: "Jennifer Knapp with Opener Flamy Grant",
    venue: "Caffè Lena",
    date: "2/16/25",
    time: "2:30 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/jennifer-knapp-with-opener-flamy-grant-tickets-1046560098427"
  },
  {
    artist: "Momentum Series: Henhouse Prowlers",
    venue: "Caffè Lena",
    date: "2/16/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/momentum-series-henhouse-prowlers-tickets-1003382242297"
  },
  {
    artist: "Open Mic Night ",
    venue: "Caffè Lena",
    date: "2/17/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/open-mic/"
  },
  {
    artist: "Rochmon Record Club Listening Party: Traffic's \"John Barleycorn Must Die\"",
    venue: "Caffè Lena",
    date: "2/18/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/rochmon-record-club-listening-party-traffics-john-barleycorn-must-die-tickets-1126477938839"
  },
  {
    artist: "Irish Music Ensemble with Oona Brady and James Gascoyne",
    venue: "Caffè Lena",
    date: "2/19/25",
    time: "12:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/event/irish-music-ensemble-with-oona-grady-and-james-gascoyne-3/"
  },
  {
    artist: "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    venue: "Caffè Lena",
    date: "2/20/25",
    time: "1:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    artist: "Peter Miller & The Kindred Souls with Cassandra Kubinski",
    venue: "Caffè Lena",
    date: "2/20/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/peter-muller-the-kindred-souls-with-cassandra-kubinski-tickets-1123836468129"
  },
  {
    artist: "Mary Fahl - formerly of October Project ",
    venue: "Caffè Lena",
    date: "2/22/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/mary-fahl-formerly-of-october-project-tickets-1051324258157"
  },
  {
    artist: "A Joyful Noise! Gospel Dinner with Soulist Garland Nelson & Friends",
    venue: "Caffè Lena",
    date: "2/23/25",
    time: "5:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/a-joyful-noise-gospel-dinner-with-soulist-garland-nelson-friends-tickets-1124735356729"
  },
  {
    artist: "Open Mic Night ",
    venue: "Caffè Lena",
    date: "2/24/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/open-mic/"
  },
  {
    artist: "Irish Music Ensemble with Oona Brady and James Gascoyne",
    venue: "Caffè Lena",
    date: "2/26/25",
    time: "12:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/event/irish-music-ensemble-with-oona-grady-and-james-gascoyne-3/"
  },
  {
    artist: "Weekly Slow Jam - Folk, Bluegrass, Blues, and More!",
    venue: "Caffè Lena",
    date: "2/27/25",
    time: "1:00 PM",
    town: "Saratoga Springs",
    link: "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    artist: "Carolyn Shapiro & Band ",
    venue: "Caffè Lena",
    date: "2/28/25",
    time: "8:00 PM",
    town: "Saratoga Springs",
    link: "https://www.eventbrite.com/e/carolyn-shapiro-band-tickets-1052304510117"
  },
  {
    artist: "Derek Warfield and the Young Wolfe Tones",
    venue: "Capital District Irish American Association (CDIAA)",
    date: "3/6/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.theyoungwolfetones.com/usa/"
  },
  {
    artist: "Celebrated Emblems (Musicians of Ma'awyck)",
    venue: "Carl B. Taylor Auditorium, SUNY-Schenectady",
    date: "1/25/25",
    time: "3:00 PM",
    town: "Schenectady",
    link: "https://secure.qgiv.com/for/concertticketing/event/celebratedemblemsjanuary25/"
  },
  {
    artist: "COLORWORLD LIVE!",
    venue: "Charles Wood Theater",
    date: "1/25/25",
    time: "2:00 PM",
    town: "Glens Falls",
    link: "https://ci.ovationtix.com/35085/production/1219586?performanceId=11554654"
  },
  {
    artist: "COLORWORLD LIVE!",
    venue: "Charles Wood Theater",
    date: "1/25/25",
    time: "6:00 PM",
    town: "Glens Falls",
    link: "https://ci.ovationtix.com/35085/production/1219586?performanceId=11554654"
  },
  {
    artist: "COLORWORLD LIVE!",
    venue: "Charles Wood Theater",
    date: "1/26/25",
    time: "2:00 PM",
    town: "Glens Falls",
    link: "https://ci.ovationtix.com/35085/production/1219586?performanceId=11554654"
  },
  {
    artist: "BANFF CENTRE MOUNTAIN FILM FESTIVAL WORLD TOUR 25",
    venue: "Charles Wood Theater",
    date: "1/31/25",
    time: "7:00 PM",
    town: "Glens Falls",
    link: "https://ci.ovationtix.com/35085/production/1218086"
  },
  {
    artist: "BANFF CENTRE MOUNTAIN FILM FESTIVAL WORLD TOUR 25",
    venue: "Charles Wood Theater",
    date: "2/1/25",
    time: "7:00 PM",
    town: "Glens Falls",
    link: "https://ci.ovationtix.com/35085/production/1218086"
  },
  {
    artist: "BANFF CENTRE MOUNTAIN FILM FESTIVAL WORLD TOUR 25",
    venue: "Charles Wood Theater",
    date: "2/2/25",
    time: "7:00 PM",
    town: "Glens Falls",
    link: "https://ci.ovationtix.com/35085/production/1218086"
  },
  {
    artist: "512: The Selena Experience",
    venue: "Cohoes Music Hall",
    date: "1/24/25",
    time: "7:30 PM",
    town: "Cohoes",
    link: "https://www.thecohoesmusichall.org/events/25/selena-experience"
  },
  {
    artist: "A Few Good Men Presented By Creative License ",
    venue: "Cohoes Music Hall",
    date: "1/31/25",
    time: "7:30 PM",
    town: "Cohoes",
    link: "https://www.thecohoesmusichall.org/events/25/few-good-men"
  },
  {
    artist: "Rock 'N' Roll Women of the 80's",
    venue: "Cohoes Music Hall",
    date: "2/14/25",
    time: "7:30 PM",
    town: "Cohoes",
    link: "https://www.thecohoesmusichall.org/events/25/rock-n-roll-women-of-the-80s"
  },
  {
    artist: "Best Friends Girl: America's Favorite Cars Experience",
    venue: "Cohoes Music Hall",
    date: "2/15/25",
    time: "7:30 PM",
    town: "Cohoes",
    link: "https://www.thecohoesmusichall.org/events/25/best-friends-girl"
  },
  {
    artist: "ABBA Revisited",
    venue: "Cohoes Music Hall",
    date: "2/16/25",
    time: "3:00 PM",
    town: "Cohoes",
    link: "https://www.thecohoesmusichall.org/events/25/abba-revisited"
  },
  {
    artist: "A Night of Simon & Garfunkel",
    venue: "Cohoes Music Hall",
    date: "3/22/25",
    time: "8:00 PM",
    town: "Cohoes",
    link: "https://www.thecohoesmusichall.org/events/25/a-night-of-simon-and-garfunkel"
  },
  {
    artist: "Superdark Presents: Candy Ambulance / Dauber /Asa Morris",
    venue: "Desperate Annie's",
    date: "2/3/25",
    time: "8:00 PM",
    town: "Saratoga",
    link: "Instagram.com/superdarkcollective"
  },
  {
    artist: "Superdark Presents: E.R.I.E., Toriendofstory, God's Not Buying a Horse Today",
    venue: "Desperate Annie's",
    date: "2/10/25",
    time: "8:00 PM",
    town: "Saratoga",
    link: "Instagram.com/superdarkcollective"
  },
  {
    artist: "Pearl",
    venue: "Emack & Bolio's",
    date: "1/25/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.ebalbany.com/music"
  },
  {
    artist: "Dan Bernstein",
    venue: "Emack & Bolio's",
    date: "2/8/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.ebalbany.com/music"
  },
  {
    artist: "Pearl",
    venue: "Emack & Bolio's",
    date: "2/15/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.ebalbany.com/music"
  },
  {
    artist: "Alan Goldberg",
    venue: "Emack & Bolio's",
    date: "2/22/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.ebalbany.com/music"
  },
  {
    artist: "Atmosphere - Imagine The Fun Tour",
    venue: "Empire Live",
    date: "2/7/25",
    time: "7:30 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/30006159C49F3FC0"
  },
  {
    artist: "Hippo Campus - Flood Tour",
    venue: "Empire Live",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/3000611DC41835C5"
  },
  {
    artist: "Big Head Todd & The Monsters 40th Anniversary Tour",
    venue: "Empire Live",
    date: "2/13/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/3000611EE3E8420A"
  },
  {
    artist: "Lauren Mayberry - Viscious Creature Tour",
    venue: "Empire Live",
    date: "2/14/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/30006158E7C44CB9"
  },
  {
    artist: "The Get Up Kids - 25 Years of Something To Write Home About",
    venue: "Empire Live",
    date: "2/18/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/30006165A0D13894"
  },
  {
    artist: "Sheer Terror",
    venue: "Empire Underground",
    date: "1/25/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/3000615785E419B8"
  },
  {
    artist: "Gimme Gimme Disco",
    venue: "Empire Underground",
    date: "2/14/25",
    time: "9:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/3000619783320EA6"
  },
  {
    artist: "Charli Parti",
    venue: "Empire Underground",
    date: "2/15/25",
    time: "9:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/charli-parti-albany-new-york-02-14-25/event/3000619779920BC9"
  },
  {
    artist: "Sub-Radio",
    venue: "Empire Underground",
    date: "2/16/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/subradio-albany-new-york-02-16-25/event/30006177BB1B2020"
  },
  {
    artist: "The Erotics ",
    venue: "Empire Underground ",
    date: "2/22/25",
    time: "6:00 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/30006168CE90DD5D"
  },
  {
    artist: "Aborted ",
    venue: "Empire Underground ",
    date: "2/27/25",
    time: "6:30 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/aborted-albany-new-york-02-27-25/event/30006150D43F3EB6"
  },
  {
    artist: "Internal Bleeding",
    venue: "Empire Underground ",
    date: "2/28/25",
    time: "6:30 PM",
    town: "Albany",
    link: "https://www.ticketmaster.com/event/3000618B80670B8C"
  },
  {
    artist: "Concert to benefit The Irish American  Heritage Museum mKevin McKrell",
    venue: "Irish American Heritage Museum, 21 Quackenbush Square",
    date: "3/7/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://irish-us.org"
  },
  {
    artist: "Lucid Street",
    venue: "Lake George Beach Club",
    date: "1/30/25",
    time: "8:00 PM",
    town: "Lake George",
    link: "https://www.lakegeorgebeachclub.com/"
  },
  {
    artist: "Skeeter Creek",
    venue: "Lake George Beach Club",
    date: "1/31/25",
    time: "9:00 PM",
    town: "Lake George",
    link: "https://www.lakegeorgebeachclub.com/"
  },
  {
    artist: "Skeeter Creek",
    venue: "Lake George Beach Club",
    date: "2/1/25",
    time: "9:00 PM",
    town: "Lake George",
    link: "https://www.lakegeorgebeachclub.com/"
  },
  {
    artist: "Ill Funk Ensemble",
    venue: "Lake George Beach Club",
    date: "2/2/25",
    time: "1 PM",
    town: "Lake George",
    link: "https://www.lakegeorgebeachclub.com/"
  },
  {
    artist: "An Evening with Timbre Coup at The Eleven at Lark Hall (FREE SHOW)",
    venue: "Lark Hall",
    date: "1/24/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/an-evening-with-timbre-coup-at-the-eleven-at-lark-hall-free-show-tickets-1057697594979?aff=ebdsoporgprofile"
  },
  {
    artist: "Warped Tour Band w/s/g Dookie & All The Blink Things",
    venue: "Lark Hall",
    date: "2/1/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/warped-tour-band-wsg-dookie-all-the-blink-things-tickets-1120879032359?aff=ebdsoporgprofile"
  },
  {
    artist: "Caity Gallagher Residency at The Eleven at Lark Hall",
    venue: "Lark Hall",
    date: "2/5/25",
    time: "6:00 PM",
    town: "Albany",
    link: "https://larkhallalbany.com/"
  },
  {
    artist: "Two Planets Away at The Eleven at Lark Hall (FREE SHOW)",
    venue: "Lark Hall",
    date: "2/7/25",
    time: "6:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/two-planets-away-at-the-eleven-at-lark-hall-free-show-tickets-1001592689697?aff=ebdsoporgprofile"
  },
  {
    artist: "Happy Hour with Organ Fairchild at The Eleven at Lark Hall",
    venue: "Lark Hall",
    date: "2/8/25",
    time: "6:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/happy-hour-with-organ-fairchild-at-the-eleven-at-lark-hall-tickets-1120233120419?aff=ebdsoporgprofile"
  },
  {
    artist: "Ominous Seapods",
    venue: "Lark Hall",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/ominous-seapods-tickets-1104641916709?aff=ebdsoporgprofile"
  },
  {
    artist: "Lark Hall presents Gratefully Yours",
    venue: "Lark Hall",
    date: "2/14/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/lark-hall-presents-gratefully-yours-tickets-1131355206879?aff=ebdsoporgprofile"
  },
  {
    artist: "Weird Phishes: Radiohead and Phish Reimagined",
    venue: "Lark Hall",
    date: "2/15/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/weird-phishes-radiohead-and-phish-reimagined-tickets-1118355163399?aff=ebdsoporgprofile"
  },
  {
    artist: "TV Doctors at The Eleven at Lark Hall",
    venue: "Lark Hall",
    date: "2/21/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/tv-doctors-at-the-eleven-at-lark-hall-free-show-tickets-1160699636859?aff=ebdsoporgprofile"
  },
  {
    artist: "Galentines Day Party with DJ Fearless ",
    venue: "Lost & Found Bar & Kitchen ",
    date: "2/13/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/galentines-day-party-at-lost-found-bar-kitchen-with-dj-fearless-tickets-1215597999339?aff=oddtdtcreator"
  },
  {
    artist: "Femininomenon with Shannon Tehya & Friends ",
    venue: "Lost & Found Bar & Kitchen ",
    date: "2/21/25",
    time: "9:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/emo-live-band-sing-a-long-at-lost-found-tickets-1206174834399?aff=oddtdtcreator"
  },
  {
    artist: "Emo Live Band Sing-a-Long with The Story Boys ",
    venue: "Lost & Found Bar & Kitchen ",
    date: "2/21/25",
    time: "9:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/emo-live-band-sing-a-long-at-lost-found-tickets-1206174834399?aff=oddtdtcreator"
  },
  {
    artist: "Femininomenon Live Band Sing-a-Long with Shannon Tehya & Friends ",
    venue: "Lost & Found Bar & Kitchen ",
    date: "3/21/25",
    time: "9:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/femininomenon-live-sing-a-long-with-shannon-tehya-friends-tickets-1215462895239?aff=oddtdtcreator"
  },
  {
    artist: "The Open Floor, by Song City",
    venue: "McAddy’s Pub, Troy NY",
    date: "1/28/25",
    time: "7:30 PM",
    town: "Troy",
    link: "www.songcitytroy.com"
  },
  {
    artist: "Girl Love, TJ Foster, Dylan Patrick Ward",
    venue: "Mojo's Cafe and Gallery",
    date: "2/15/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.mojoscafegallery.com"
  },
  {
    artist: "Little Saints, Sabrina Trueheart, Nate Goyette",
    venue: "Mojo's Cafe and Gallery",
    date: "2/1/25",
    time: "7:00 PM",
    town: "Troy",
    link: "www.mojoscafegallery.com"
  },
  {
    artist: "Dave Kitchen  Jazz Trio",
    venue: "Moon & River Cafe",
    date: "2/6/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "www.moonandriver..com"
  },
  {
    artist: "Mohawk River Harmony ",
    venue: "Moon & River Cafe",
    date: "2/14/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "free"
  },
  {
    artist: "Bellville Hot Swing",
    venue: "Moon & River Cafe",
    date: "2/15/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Country Star - Tony King & Friends",
    venue: "Moon & River Cafe",
    date: "2/19/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Dave Kitchen Jazz Trio",
    venue: "Moon & River Cafe",
    date: "2/20/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Folk Artist Jon Boulette ",
    venue: "Moon & River Cafe",
    date: "2/22/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "www.moonandrivercafe.com"
  },
  {
    artist: "Mike Campana & Friends",
    venue: "Moon & River Cafe",
    date: "2/28/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Andy Araya",
    venue: "Moon & River Cafe",
    date: "3/12/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Beatles Open Mic",
    venue: "Moon & River Cafe ",
    date: "2/1/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Jazz Pianist Pete Van Kuren",
    venue: "Moon & River Cafe ",
    date: "2/7/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Acoustic Guitar Scott Bravo",
    venue: "Moon & River Cafe ",
    date: "2/8/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Dave Kitchen Jazz trio",
    venue: "Moon & River Cafe ",
    date: "2/13/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "Electric Wheel ",
    venue: "Moon & River Cafe ",
    date: "2/21/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "www.moonanndriver.com"
  },
  {
    artist: "Dave Kitchen Jazz Trio",
    venue: "Moon & River Cafe ",
    date: "2/27/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "www.moonandriver.com"
  },
  {
    artist: "LUNA Series Presents: Girl Love",
    venue: "Mount Ida Preservation Hall",
    date: "2/10/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: Sabrina Trueheart",
    venue: "Mount Ida Preservation Hall",
    date: "3/10/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: TJ Foster",
    venue: "Mount Ida Preservation Hall",
    date: "4/14/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: Zan & the Winterfolk",
    venue: "Mount Ida Preservation Hall",
    date: "5/12/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: Julia Alsarraf",
    venue: "Mount Ida Preservation Hall",
    date: "6/9/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: Shannon Tehya",
    venue: "Mount Ida Preservation Hall",
    date: "7/7/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: Owen Greene",
    venue: "Mount Ida Preservation Hall",
    date: "8/11/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: Anniversary Show",
    venue: "Mount Ida Preservation Hall",
    date: "10/6/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: Natalie Kurgan",
    venue: "Mount Ida Preservation Hall",
    date: "11/3/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "LUNA Series Presents: Ben Hart",
    venue: "Mount Ida Preservation Hall",
    date: "12/1/25",
    time: "6:30 PM",
    town: "Troy",
    link: "www.lunaseries518.com"
  },
  {
    artist: "Moon Rules Apply / Flatwounds / Torpedo Lane / Senior Living",
    venue: "No Fun",
    date: "1/24/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.eventbrite.com/e/moon-rules-apply-flatwounds-torpedo-lane-senior-living-tickets-1092393521429?aff=oddtdtcreator"
  },
  {
    artist: "Tiny Blue Ghost / Stella & The Reptilians / Head Sound",
    venue: "No Fun",
    date: "1/25/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.eventbrite.com/e/tiny-blue-ghost-stella-the-reptilians-head-sound-tickets-1120957366659?aff=ebdsoporgprofile"
  },
  {
    artist: "Mario Kart - All Jazzed Up",
    venue: "No Fun",
    date: "1/29/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events"
  },
  {
    artist: "YANKEEGIRL / Anti Rent Rebellion",
    venue: "No Fun",
    date: "1/30/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events"
  },
  {
    artist: "Hellseeker Goth Nite w/ Public Circuit",
    venue: "No Fun",
    date: "1/31/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.eventbrite.com/e/hellseeker-goth-nite-w-public-circuit-tickets-1122697391119?aff=oddtdtcreator"
  },
  {
    artist: "Ice Queen (Record Release) / Carnwennan / Bloodx3",
    venue: "No Fun",
    date: "2/1/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/ice-queen-record-release-carnwennan-bloodx3"
  },
  {
    artist: "Kerosene Heights / Senior Living / Elephant Jake / Everybody That Loves You",
    venue: "No Fun",
    date: "2/2/25",
    time: "8:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/kerosene-heights-senior-living-tbd"
  },
  {
    artist: "No Fun Open Mic",
    venue: "No Fun",
    date: "2/5/25",
    time: "8:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/no-fun-open-mic"
  },
  {
    artist: "Bella's Bartok / Candy Ambulance",
    venue: "No Fun",
    date: "2/7/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/bellas-bartok-candy-ambulance"
  },
  {
    artist: "The Annual Valentine's Cover Show!",
    venue: "No Fun",
    date: "2/14/25",
    time: "8:00 PM",
    town: "Troy",
    link: "https://www.eventbrite.com/e/valentines-cover-show-tickets-1218328205459"
  },
  {
    artist: "Thus Love / Laveda / Closebye",
    venue: "No Fun",
    date: "2/19/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/thus-love-more-band-tba"
  },
  {
    artist: "Wifey / Orca Bones / Cheesy Snacks / G.o.L.e.M",
    venue: "No Fun",
    date: "2/23/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/wifey-orca-bones-cheesy-snacks-golem"
  },
  {
    artist: "Satisfaction Guaranteed - Vinyl Only - w/ DJ Tex & DJ K.Fink",
    venue: "No Fun",
    date: "2/26/25",
    time: "8:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/satisfaction-guaranteed-vinyl-only-w-dj-tex-amp-dj-kfink-1"
  },
  {
    artist: "Cinema Stare / Canella / Scotchka",
    venue: "No Fun",
    date: "2/27/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/cinema-stare-canella-scotchka"
  },
  {
    artist: "Hellseeker Goth Nite w/ Ghost Cop / Bloodx3 / Architrave",
    venue: "No Fun",
    date: "2/28/25",
    time: "8:00 PM",
    town: "Troy",
    link: "https://www.nofuntroy.com/events/hellseeker-goth-nite-w-ghost-cop-bloodx3-architrave"
  },
  {
    artist: "Party Gras (Yort, Haunted Cat, Front Biz)",
    venue: "No Fun",
    date: "3/1/25",
    time: "8:00 PM",
    town: "Troy",
    link: "https://www.eventbrite.com/e/front-biz-haunted-cat-yort-tickets-1207815190749?aff=ebdsoporgprofile"
  },
  {
    artist: "Joey Harkum Duo w/ Mike Lashomb of Annie in the Water",
    venue: "Ophelia's",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.facebook.com/events/647924624226562"
  },
  {
    artist: "Darkwave",
    venue: "Ophelia's",
    date: "2/13/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.facebook.com/events/1082038423669298"
  },
  {
    artist: "Deadbeats",
    venue: "Saratoga Winery",
    date: "1/24/25",
    time: "6:00 PM",
    town: "Saratoga",
    link: ""
  },
  {
    artist: "Steve Candlen",
    venue: "Saratoga Winery",
    date: "1/31/25",
    time: "5:00 PM",
    town: "Saratoga",
    link: ""
  },
  {
    artist: "Art N Shawna Duo",
    venue: "Saratoga Winery",
    date: "2/7/25",
    time: "5:00 PM",
    town: "Saratoga",
    link: "https://www.thesaratogawinery.com/events/rk26rzx5jlf6w3k-6jwdf-542wl-9pent-56yxe-whyxm-fheb6-pbsn7-k2kc6-tymtt-4n4jk"
  },
  {
    artist: "Seth Warden & Lovella",
    venue: "Saratoga Winery",
    date: "2/14/25",
    time: "6:00 PM",
    town: "Saratoga",
    link: "https://www.thesaratogawinery.com/events/rk26rzx5jlf6w3k-6jwdf-542wl-9pent-56yxe-whyxm-fheb6-pbsn7-k2kc6-tymtt-4n4jk-cy2k9"
  },
  {
    artist: "Luke Pavlus",
    venue: "Saratoga Winery",
    date: "2/21/25",
    time: "5:30 PM",
    town: "Saratoga",
    link: "https://www.thesaratogawinery.com/events/rk26rzx5jlf6w3k-6jwdf-542wl-9pent-56yxe-whyxm-fheb6-pbsn7-k2kc6-tymtt-4n4jk-cy2k9-jh4cf"
  },
  {
    artist: "Dazey Duo",
    venue: "Saratoga Winery",
    date: "2/28/25",
    time: "5:00 PM",
    town: "Saratoga",
    link: "https://www.thesaratogawinery.com/events/rk26rzx5jlf6w3k-6jwdf-542wl-9pent-56yxe-whyxm-fheb6-pbsn7-k2kc6-tymtt-4n4jk-cy2k9-jh4cf-w9f9r"
  },
  {
    artist: "The Growling Hazers",
    venue: "Singlecut North Taproom",
    date: "2/8/25",
    time: "6:00 PM",
    town: "Clifton Park",
    link: ""
  },
  {
    artist: "Maurizio Russomanno",
    venue: "Singlecut North Taproom",
    date: "2/16/25",
    time: "6:00 PM",
    town: "Clifton Park",
    link: ""
  },
  {
    artist: "The Alec Lewis Group",
    venue: "Singlecut North Taproom",
    date: "2/22/25",
    time: "4:00 PM",
    town: "Clifton Park",
    link: ""
  },
  {
    artist: "E.R.I.E. Album Release Party w/ Arrow Through Me",
    venue: "Singlecut North Taproom",
    date: "3/1/25",
    time: "5 PM",
    town: "Clifton Park",
    link: ""
  },
  {
    artist: "Alfredo Rodriguez Trio | Part of McCormack Jazz Series",
    venue: "Spa Little Theater",
    date: "4/5/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "Book Tickets | Saratoga Performing Arts Center"
  },
  {
    artist: "Veronica Swift",
    venue: "Spa Little Theater",
    date: "5/1/25",
    time: "7:00 PM",
    town: "Saratoga Springs",
    link: "https://spac.org/events/veronica-swift/book/54601/"
  },
  {
    artist: "The Arch Stanton Trio",
    venue: "Stella Pasta Bar & Bistro",
    date: "1/25/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "https://www.stellapastabar.com/calendar"
  },
  {
    artist: "The Dave Gleason Trio",
    venue: "Stella Pasta Bar & Bistro",
    date: "2/1/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "https://www.stellapastabar.com/calendar"
  },
  {
    artist: "The Matt Steckler Trio",
    venue: "Stella Pasta Bar & Bistro",
    date: "2/15/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "https://www.stellapastabar.com/calendar"
  },
  {
    artist: "The Chad McLoughlin Trio",
    venue: "Stella Pasta Bar & Bistro",
    date: "2/22/25",
    time: "6:00 PM",
    town: "Schenectady",
    link: "https://www.stellapastabar.com/calendar"
  },
  {
    artist: "Caity Gallagher & Dan DeKalb",
    venue: "Tannery Pond Center",
    date: "2/16/25",
    time: "3:00 PM",
    town: "North Country",
    link: "https://www.tannerypond.org/events/wcs-2024-caityanddan"
  },
  {
    artist: "Hell in Marie w/s/g Jonny Falls",
    venue: "The Berlin",
    date: "1/30/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://emerysgarden.com/events/"
  },
  {
    artist: "Matt Durfee",
    venue: "The Berlin",
    date: "2/6/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://emerysgarden.com/events/"
  },
  {
    artist: "B.D. Lenz Trio",
    venue: "The Berlin",
    date: "2/7/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://emerysgarden.com/events/"
  },
  {
    artist: "Burlesque In The Berlin",
    venue: "The Berlin",
    date: "2/8/25",
    time: "7 PM",
    town: "Troy",
    link: "https://emerysgarden.com/events/"
  },
  {
    artist: "Serg & Venture",
    venue: "The Berlin",
    date: "2/13/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://emerysgarden.com/events/"
  },
  {
    artist: "Joanna Feuer & Brian Halliday",
    venue: "The Berlin",
    date: "2/20/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://emerysgarden.com/events/"
  },
  {
    artist: "The August DuClos Trio",
    venue: "The Berlin",
    date: "2/27/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://emerysgarden.com/events/"
  },
  {
    artist: "Matt Durfee",
    venue: "The Berlin",
    date: "3/6/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://emerysgarden.com/events/"
  },
  {
    artist: "Keith Pray Trio",
    venue: "The Cock N' Bull",
    date: "1/31/25",
    time: "6:00 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/keith-pray-trio-2-25-01-31/"
  },
  {
    artist: "Eldorado Slim featuring Scott Sharrard of Little Feat",
    venue: "The Cock N' Bull",
    date: "2/6/25",
    time: "7:30 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/eldorado-slim-featuring-scott-sharrard-of-little-feat/"
  },
  {
    artist: "Cloudlifter",
    venue: "The Cock N' Bull",
    date: "2/7/25",
    time: "6:00 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/cloudlifter/"
  },
  {
    artist: "Jim Gaudet and the Railroad Boys",
    venue: "The Cock N' Bull",
    date: "2/13/25",
    time: "7:00 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/jim-gaudet-and-the-railroad-boys/"
  },
  {
    artist: "Reese Fulmer & The Carriage House Band",
    venue: "The Cock N' Bull",
    date: "2/20/25",
    time: "7:00 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/reese-fulmer-the-carriage-house-band-2/"
  },
  {
    artist: "Drank the Gold",
    venue: "The Cock N' Bull",
    date: "2/21/25",
    time: "6:00 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/drank-the-gold-5/"
  },
  {
    artist: "Keith Pray’s Big Soul Ensemble",
    venue: "The Cock N' Bull",
    date: "2/25/25",
    time: "6:30 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/keith-prays-big-soul-ensemble-25-02-25/"
  },
  {
    artist: "Peter Mulvey",
    venue: "The Cock N' Bull",
    date: "2/27/25",
    time: "7:00 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/peter-mulvey/"
  },
  {
    artist: "Keith Pray Trio",
    venue: "The Cock N' Bull",
    date: "2/28/25",
    time: "6:00 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/keith-pray-trio-2-25-02-28/"
  },
  {
    artist: "Fat Sunday w/ Kidd Kyle and the Big Deal",
    venue: "The Cock N' Bull",
    date: "3/2/25",
    time: "5:00 PM",
    town: "Galway",
    link: "https://thecocknbull.com/events/fat-sunday-w-kidd-kyle-and-the-big-deal/"
  },
  {
    artist: "Kevin McKrell",
    venue: "The Egg Performing Arts Center",
    date: "3/15/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.theegg.org/events/event/kevin-mckrell-saint-patricks-day-celebration/"
  },
  {
    artist: "The 518 Concert Series Presents: The TS Ensemble",
    venue: "The Glove Theatre",
    date: "1/25/25",
    time: "7:00 PM",
    town: "Gloversville",
    link: "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-the-ts-ensemble"
  },
  {
    artist: "The 518 Concert Series Presents: Get Zep!",
    venue: "The Glove Theatre",
    date: "1/31/25",
    time: "7:00 PM",
    town: "Gloversville",
    link: "https://www.theglovetheatre.com/upcoming-events/the-518-concert-series-presents-get-zep"
  },
  {
    artist: "Sicard Hollow w/s/g Eugene Tyler Band",
    venue: "The Hollow",
    date: "1/29/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/sicard-hollow-wsg-the-eugene-tyler-band-tickets-1112012863409?aff=efbevent"
  },
  {
    artist: "Sophistafunk w/s/g The Ky McClinton Band",
    venue: "The Hollow",
    date: "2/7/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.eventbrite.com/e/sophistafunk-wsg-the-ky-mcclinton-band-tickets-1144795426939?aff=efbevent&fbclid=IwY2xjawH-OFFleHRuA2FlbQIxMAABHZ6jDan_fDhtncLeoHsjtOhzcvk8D2o3VhgH84jUPPyJG_Uc8pGouKDW-Q_aem__eTUWC847iKM5ma9YYpCaw"
  },
  {
    artist: "Todd Nelson with Kyle Esposito, Travis Shook, and Justin Tracy",
    venue: "The Lark Street Tavern",
    date: "3/16/25",
    time: "2:00 PM",
    town: "Albany",
    link: "http://thelarkstreettavern.com/"
  },
  {
    artist: "Harvest & Rust",
    venue: "The Linda",
    date: "1/25/25",
    time: "8:00 PM",
    town: "Albany",
    link: "https://www.thelinda.org/event/harvest-rust-unplugged/"
  },
  {
    artist: "Adam Mamawala",
    venue: "The Park Theater",
    date: "1/31/25",
    time: "8:00 PM",
    town: "Glens Falls",
    link: "https://www.parktheatergf.com/upcoming-events/#/events/122574"
  },
  {
    artist: "Blue Sky Brothers",
    venue: "The Park Theater",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Glens Falls",
    link: "https://www.parktheatergf.com/upcoming-events/#/events/117293"
  },
  {
    artist: "North & South Dakotas ",
    venue: "The Park Theater",
    date: "2/13/25",
    time: "8:00 PM",
    town: "Glens Falls",
    link: "https://www.parktheatergf.com/upcoming-events/#/events/124138"
  },
  {
    artist: "Wyatt Ambrose",
    venue: "The Park Theater",
    date: "2/20/25",
    time: "7:30 PM",
    town: "Glens Falls",
    link: "https://www.parktheatergf.com/upcoming-events/#/events/123382"
  },
  {
    artist: "Angelina Valente & JP Hubbs",
    venue: "The Park Theater",
    date: "2/22/25",
    time: "8:00 PM",
    town: "Glens Falls",
    link: "https://www.parktheatergf.com/upcoming-events/#/events/124160"
  },
  {
    artist: "The Takes w/ Man Must Explore",
    venue: "The Parting Glass",
    date: "2/27/25",
    time: "7:00 PM",
    town: "Saratoga",
    link: "www.thetakes.band"
  },
  {
    artist: "Kevin McKrell",
    venue: "The Strand Theater, Hudson Falls",
    date: "3/16/25",
    time: "3:00 PM",
    town: "North Country",
    link: "https://www.mystrandtheater.org/"
  },
  {
    artist: "Lucid Street wsg Lounge Act",
    venue: "The Strand Theatre",
    date: "1/24/25",
    time: "8:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/1/24/lucid-street-wsg-lounge-act"
  },
  {
    artist: "Forever Seger",
    venue: "The Strand Theatre",
    date: "1/25/25",
    time: "8:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/1/25/forever-seeger"
  },
  {
    artist: "Shannon Tehya and The Troupe wsg Studio Chrome",
    venue: "The Strand Theatre",
    date: "1/26/25",
    time: "3:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/1/26/the-troupe"
  },
  {
    artist: "The Proudest Monkeys Band - Dave Matthews  Band Tribute",
    venue: "The Strand Theatre",
    date: "1/31/25",
    time: "8:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/1/31/the-proudest-monkeys-band-dave-matthews-band-tribute"
  },
  {
    artist: "Southbound Renegade - Southern Rock",
    venue: "The Strand Theatre",
    date: "2/1/25",
    time: "8:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/2/1/southbound-renegade"
  },
  {
    artist: "WailOn Band - Tribute to Outlaw Country Royalty",
    venue: "The Strand Theatre",
    date: "2/2/25",
    time: "2:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/2023/12/19/wailon-legends-of-real-contry-music"
  },
  {
    artist: "Lobby Concert: John Lennon Songs with Marc Vincent, Jonathan Newell and friends",
    venue: "The Strand Theatre",
    date: "2/3/25",
    time: "7:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/2/3/lobby-concert-john-lennon-songs-with-marc-vincent-jonathan-newell-and-friends"
  },
  {
    artist: "A Tribute to The King featuring Matthew Boyce",
    venue: "The Strand Theatre",
    date: "2/6/25",
    time: "7:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/2024/1/21/the-king-in-concert-featuring-matthew-boyce"
  },
  {
    artist: "Led Sabbath - The music of Led Zepplin and Black Sabbath",
    venue: "The Strand Theatre",
    date: "2/7/25",
    time: "8:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/2024/4/25/world-cinema-series-drunken-angel"
  },
  {
    artist: "Dark Sarcasm - Pink Floyd Tribute ",
    venue: "The Strand Theatre",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/2023/11/18/dark-sarcasm-pink-floyd-tribute"
  },
  {
    artist: "Community Fundraiser for Jeremy Diffee - Monsters Of Rock, Tumblin' Dice and more!",
    venue: "The Strand Theatre",
    date: "2/9/25",
    time: "12:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/2/9/strand-fundraiser-monsters-of-rock-tumblin-dice-and-more"
  },
  {
    artist: "The King in Concert featuring James Cawley",
    venue: "The Strand Theatre",
    date: "2/15/25",
    time: "7:30 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/2024/2/11/the-king-in-concert-featuring-james-cawley"
  },
  {
    artist: "The Cosmic American Music Circus",
    venue: "The Strand Theatre",
    date: "2/16/25",
    time: "3:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/2/16/the-cosmic-american-music-circus"
  },
  {
    artist: "The Dirty Harri's - The Music of George Harrison",
    venue: "The Strand Theatre",
    date: "2/21/25",
    time: "7:30 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/2024/2/16/the-dirty-harris-the-music-of-george-harrison"
  },
  {
    artist: "Parrotbeach - Jimmy Buffet Tribute ",
    venue: "The Strand Theatre",
    date: "2/22/25",
    time: "7:30 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/2024/2/4/parrot-beach-jimmy-buffet-tribute"
  },
  {
    artist: "Johnny Cash's 92nd Birthday Bash with A Man Named Cash",
    venue: "The Strand Theatre",
    date: "2/23/25",
    time: "3:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/2/23/a-man-named-cash-a-tribute-to-johnny-cash-and-june-carter-cash"
  },
  {
    artist: "Banjo Heartbeat Tour with Scott Hopkins and Joe Newbury",
    venue: "The Strand Theatre",
    date: "2/25/25",
    time: "7:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/2/25/banjo-heartbeat-tour-with-scott-hopkins-and-joe-newbury"
  },
  {
    artist: "KALEB LIVE AT THE STRAND THEATER",
    venue: "The Strand Theatre",
    date: "2/27/25",
    time: "9:00 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/2024/10/22/kaleb-live-at-the-strand-theater"
  },
  {
    artist: "The Ultimate Journey Experience by LEGEND",
    venue: "The Strand Theatre",
    date: "2/28/25",
    time: "7:30 PM",
    town: "Hudson Falls",
    link: "https://www.mystrandtheater.org/events/25/2/28/the-ultimate-journey-experience-by-legend"
  },
  {
    artist: "The Best of the 70's by Dizzyfish & the Uptown Horns - Eric's Birthday Bash!",
    venue: "The towne Crier Cafe",
    date: "2/1/25",
    time: "8:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/the-best-of-the-70s-by-dizzyfish-the-uptown-horns-erics-birthday-bash/"
  },
  {
    artist: "Genticorum",
    venue: "The towne Crier Cafe",
    date: "2/2/25",
    time: "7:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/genticorum/"
  },
  {
    artist: "Last Minute Soulmates",
    venue: "The towne Crier Cafe",
    date: "2/7/25",
    time: "8:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/the-last-minute-soulmates/"
  },
  {
    artist: "Le Vent Du Nord",
    venue: "The towne Crier Cafe",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/le-vent-du-nord/"
  },
  {
    artist: "Kevin McKrell",
    venue: "The towne Crier Cafe",
    date: "2/9/25",
    time: "7:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/"
  },
  {
    artist: "Home Again: the Carol King Tribute",
    venue: "The towne Crier Cafe",
    date: "2/14/25",
    time: "8:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/home-again-the-carole-king-tribute/"
  },
  {
    artist: "Mary Fahl - former lead singer of October Project ",
    venue: "The towne Crier Cafe",
    date: "2/15/25",
    time: "8:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/mary-fahl-former-lead-singer-of-october-project/"
  },
  {
    artist: "Rachel Sage & The Sequins; with guests The Beacon Songsmiths,  and Noga w/ Lila Blue",
    venue: "The towne Crier Cafe",
    date: "2/16/25",
    time: "6:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/rachael-sage-with-guests-the-beacon-songsmiths-noga/"
  },
  {
    artist: "Latin Dance with Beacon Dance Beat",
    venue: "The towne Crier Cafe",
    date: "2/20/25",
    time: "7:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/latin-dance-with-beacon-dance-beat-9/"
  },
  {
    artist: "Kenny White; also Maia Sharp & Antje Duvekot",
    venue: "The towne Crier Cafe",
    date: "2/21/25",
    time: "8:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/kenny-white-also-maia-sharp-antje-duvekot/"
  },
  {
    artist: "Gratefully Yours",
    venue: "The towne Crier Cafe",
    date: "2/22/25",
    time: "8:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/gratefully-yours-2/"
  },
  {
    artist: "Open Mic Invitational",
    venue: "The towne Crier Cafe",
    date: "2/23/25",
    time: "6:00 PM",
    town: "Beacon",
    link: "https://townecrier.com/events/open-mic-invitational/"
  },
  {
    artist: "Celebrated Emblems (Musicians of Ma'alwyck)",
    venue: "TheRep",
    date: "1/24/25",
    time: "7:00 PM",
    town: "Albany",
    link: "https://tickets.proctors.org/TheatreManager/95/tmEvent/tmEvent35871.html"
  },
  {
    artist: "Kevin McKrell FREE ,town of Stony Creek Winter Concert Series",
    venue: "town of Stony Creek Winter Concert SeriesStony Creek town Hall",
    date: "2/6/25",
    time: "7:00 PM",
    town: "North Country",
    link: "https://stonycreekny.com/calendar"
  },
  {
    artist: "Lights Out: A Tribute to Frankie Valli and The Four Seasons",
    venue: "Troy Savings Bank Music Hall",
    date: "1/25/25",
    time: "7:30 PM",
    town: "Troy",
    link: "https://www.troymusichall.org/events/2878/a-tribute-to-frankie-valli-and-the-four-seasons/"
  },
  {
    artist: "Pro Musica High School Choral Festival",
    venue: "Troy Savings Bank Music Hall",
    date: "2/1/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://tickets.troymusichall.org/TheatreManager/99/tmEvent/tmEvent35870.html?_gl=1*1wojo*_gcl_au*NzkyOTIyMTAuMTczNzc0MDY3Mg.."
  },
  {
    artist: "Some Ways To Keep Workshop #1",
    venue: "Troy Savings Bank Music Hall",
    date: "2/2/25",
    time: "2:30 PM",
    town: "Troy",
    link: "https://www.troymusichall.org/events/2925/some-ways-to-keep-workshop-1/"
  },
  {
    artist: "Steven Isserlis",
    venue: "Troy Savings Bank Music Hall",
    date: "2/4/25",
    time: "7:30 PM",
    town: "Troy",
    link: "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116457&qty=0"
  },
  {
    artist: "Lift Series: Zan and the Winter Folk",
    venue: "Troy Savings Bank Music Hall",
    date: "2/5/25",
    time: "6:00 PM",
    town: "Troy",
    link: "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=118456&qty=0&_gl=1*ccji8s*_gcl_au*NzkyOTIyMTAuMTczNzc0MDY3Mg.."
  },
  {
    artist: "Lets Sing Taylor! Celebrating Taylor Swift",
    venue: "Troy Savings Bank Music Hall",
    date: "2/8/25",
    time: "7:30 PM",
    town: "Troy",
    link: "https://tickets.troymusichall.org/TheatreManager/99/tmEvent/tmEvent35584.html?_gl=1*1n7qb6r*_gcl_au*NzkyOTIyMTAuMTczNzc0MDY3Mg.."
  },
  {
    artist: "Music @ Noon Free Concert Series: Thomas Piercy, Marina Iwao and Daniel Hass",
    venue: "Troy Savings Bank Music Hall",
    date: "2/11/25",
    time: "12:00 PM",
    town: "Troy",
    link: "https://www.troymusichall.org/events/2915/thomas-piercy-marina-iwao-and-daniel-hass/"
  },
  {
    artist: "Some Ways To Keep Workshop #2",
    venue: "Troy Savings Bank Music Hall",
    date: "2/12/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.troymusichall.org/events/2926/some-ways-to-keep-workshop-2/"
  },
  {
    artist: "Loren Loiacono + Rachmaninoff's Paganini Rhapsody",
    venue: "Troy Savings Bank Music Hall",
    date: "2/15/25",
    time: "7:30 PM",
    town: "Troy",
    link: "https://tickets.albanysymphony.com/TheatreManager/102/online?bestavail=115544&qty=0"
  },
  {
    artist: "Loren Loiacono + Rachmaninoff's Paganini Rhapsody | Matinee",
    venue: "Troy Savings Bank Music Hall",
    date: "2/16/25",
    time: "3:00 PM",
    town: "Troy",
    link: "https://tickets.albanysymphony.com/TheatreManager/102/online?bestavail=115545&qty=0"
  },
  {
    artist: "And We Keep",
    venue: "Troy Savings Bank Music Hall",
    date: "2/19/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.troymusichall.org/events/2927/and-we-keep/"
  },
  {
    artist: "Sonic Explorations in Troy",
    venue: "Troy Savings Bank Music Hall",
    date: "2/25/25",
    time: "7:00 PM",
    town: "Troy",
    link: "https://www.troymusichall.org/events/2928/sonic-explorations-in-troy/"
  },
  {
    artist: "Sean Lippin Band",
    venue: "Unified Beerworks",
    date: "2/8/25",
    time: "4:00 PM",
    town: "Other",
    link: "https://www.facebook.com/share/15dJqwXYVc/"
  },
  {
    artist: "An Evening With: Pete Malinverni",
    venue: "Van Dyck Music Club",
    date: "2/8/25",
    time: "7:30 PM",
    town: "Schenectady",
    link: "https://www.eventbrite.com/e/an-evening-with-pete-malinverni-tickets-1110306820589?aff=oddtdtcreator"
  },
  {
    artist: "Thirdsday Night Show #004 - Shiri Zorn Trio",
    venue: "Van Dyck Music Club",
    date: "2/20/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://www.eventbrite.com/e/thirdsday-nite-004-shiri-zorn-ft-mark-dziuba-brian-melick-tickets-1131255809579?aff=oddtdtcreator"
  },
  {
    artist: "Hit N Run",
    venue: "Van Slycks at Rivers",
    date: "1/24/25",
    time: "9:00 PM",
    town: "Schenectady",
    link: "https://www.riverscasino.com/schenectady/entertainment/van-slycks/hit-n-run"
  },
  {
    artist: "Scars N' Stripes",
    venue: "Van Slycks at Rivers",
    date: "1/25/25",
    time: "9:00 PM",
    town: "Schenectady",
    link: "https://www.riverscasino.com/schenectady/entertainment/van-slycks/scars-n-stripes"
  },
  {
    artist: "Roadhouse 60s",
    venue: "Van Slycks at Rivers",
    date: "1/29/25",
    time: "2:00 PM",
    town: "Schenectady",
    link: "https://www.riverscasino.com/schenectady/entertainment/van-slycks/roadhouse-60s2025"
  },
  {
    artist: "Country Weekends with Beadle Brothers",
    venue: "Van Slycks at Rivers",
    date: "2/1/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/beadle-brothers"
  },
  {
    artist: "The Protones",
    venue: "Van Slycks at Rivers",
    date: "2/5/25",
    time: "2:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks"
  },
  {
    artist: "Funk Evolution & DJ Nick Papa Giorgio",
    venue: "Van Slycks at Rivers",
    date: "2/7/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks"
  },
  {
    artist: "Lucid Street & DJ Reel",
    venue: "Van Slycks at Rivers",
    date: "2/8/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/lucid-street"
  },
  {
    artist: "The Big Game Takeover with Decrescente",
    venue: "Van Slycks at Rivers",
    date: "2/9/25",
    time: "2:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/the-big-game-takeover-with-decrescente"
  },
  {
    artist: "Whisper Band ",
    venue: "Van Slycks at Rivers",
    date: "2/12/25",
    time: "2:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks"
  },
  {
    artist: "DJ RVMBA",
    venue: "Van Slycks at Rivers",
    date: "2/13/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/dj-rvmba"
  },
  {
    artist: "Mike Farrer & The House Rockers & DJ Ness Nice",
    venue: "Van Slycks at Rivers",
    date: "2/14/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/live-music-mike-farrar--the-house-rockers"
  },
  {
    artist: "Chasing Neon & DJ Tomb",
    venue: "Van Slycks at Rivers",
    date: "2/15/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/chasing-neon-and-dj-tomb"
  },
  {
    artist: "Latin Nights With Alex Torres and his Latin Orchestra",
    venue: "Van Slycks at Rivers",
    date: "2/16/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/latin-nights-with-alex-torres-and-dj-tomb"
  },
  {
    artist: "The Rogues ",
    venue: "Van Slycks at Rivers",
    date: "2/19/25",
    time: "2:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks"
  },
  {
    artist: "DJ Mix It Up NY",
    venue: "Van Slycks at Rivers",
    date: "2/20/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks_djmixitupny"
  },
  {
    artist: "The Refrigerators & DJ Reel",
    venue: "Van Slycks at Rivers",
    date: "2/21/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/Refrigerators"
  },
  {
    artist: "Guilty Pleasure & DJ Tek",
    venue: "Van Slycks at Rivers",
    date: "2/22/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks/live-music-guilty-pleasure"
  },
  {
    artist: "Carla Page",
    venue: "Van Slycks at Rivers",
    date: "2/26/25",
    time: "2:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks"
  },
  {
    artist: "DJ Biz",
    venue: "Van Slycks at Rivers",
    date: "2/27/25",
    time: "7:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks_djbiz"
  },
  {
    artist: "NINEDEEZNITE & DJ Mister Mo",
    venue: "Van Slycks at Rivers",
    date: "2/28/25",
    time: "8:00 PM",
    town: "Schenectady",
    link: "https://staging.riverscasino.com/schenectady/entertainment/van-slycks_live-music-nine-deeeze-nite"
  },
  {
    artist: "Big Sky Country",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "1/24/25",
    time: "8:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/big-sky-country-2/"
  },
  {
    artist: "Aquanett",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "1/25/25",
    time: "8:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/tommy-v-live/"
  },
  {
    artist: "Electric Rodeo",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "1/31/25",
    time: "8:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/electric-rodeo/"
  },
  {
    artist: "80's & 90's Party with DJ NPG",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "2/1/25",
    time: "8:00 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/80s-90s-dance-party-with-dj-npg-2/"
  },
  {
    artist: "The Accents",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "2/7/25",
    time: "7:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/the-accents1/"
  },
  {
    artist: "Skeeter Creek",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "2/8/25",
    time: "7:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/skeeter-creek-3/"
  },
  {
    artist: "Ill Funk Ensemble",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "2/14/25",
    time: "7:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/cryin-out-loud/"
  },
  {
    artist: "Totally 2000s with DJ NPG",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "2/15/25",
    time: "8:00 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/yacht-masters/"
  },
  {
    artist: "Aquanett",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "2/21/25",
    time: "7:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/aquanett-5-31/"
  },
  {
    artist: "Big Sky Country ",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "2/22/25",
    time: "7:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/big-sky-country/"
  },
  {
    artist: "Funk Evolution  ",
    venue: "Vapor Nightclub at Saratoga Casino",
    date: "2/28/25",
    time: "7:30 PM",
    town: "Saratoga",
    link: "https://saratogacasino.com/event/funk-evolution-2/"
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
		time: "6:00 PM"
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
