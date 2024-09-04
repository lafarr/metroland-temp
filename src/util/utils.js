export const convertdateToHuman = (shittydate) => {
    let [year, month, day] = shittydate.split('-');

    year = year.substring(2);
    month = month.length === 2 && month.charAt(0) === '0' ? month.charAt(1) : month;
    day = day.length === 2 && day.charAt(0) === '0' ? day.charAt(1) : day;

    return `${month}/${day}/${year}`;
};

export const data = 
[
  {
    "artist": "Taco Tuesday with Rusticator",
    "venue": "Unihog",
    "date": "9/3/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "Deep Purple / YES",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/4/24",
    "time": "7:30 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/live-nation-deep-purple/"
  },
  {
    "artist": "Women Aren�t Funny � Jaye McBride",
    "venue": "Universal Preservation Hall",
    "date": "9/4/24",
    "time": "7:30pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/women-arent-funny-jaye-mcbride/"
  },
  {
    "artist": "Chuck Ayers",
    "venue": "Frog Alley Brewing",
    "date": "9/5/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/chuck-ayers-5"
  },
  {
    "artist": "Sweeping Promises / Sky Furrows / Stroma / Inch",
    "venue": "No Fun",
    "date": "9/5/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/sweeping-promises-support-tba-tickets-929343089197?aff=ebdsoporgprofile"
  },
  {
    "artist": "Fire Pit Friday feat. WHAT?",
    "venue": "Brewery Ommegang",
    "date": "9/6/24",
    "time": "6:00 PM",
    "town": "Cooperstown",
    "link": "https://www.ommegang.com/events/fire-pit-friday-featuring-what/"
  },
  {
    "artist": "Third Rail with Colin McCarthy",
    "venue": "Frog Alley Brewing",
    "date": "9/6/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/third-rail-with-colin-mccarthy"
  },
  {
    "artist": "Capital City Crook$",
    "venue": "No Fun",
    "date": "9/6/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/hip-hop-jam-with-capital-city-crook-more-tba-tickets-998009381927?aff=ebdsoporgprofile"
  },
  {
    "artist": "ZOMBIE: Composer�s Cut LIVE! w/FABIO FRIZZI ORCH.",
    "venue": "Proctors GE Theater",
    "date": "9/6/24",
    "time": "8:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/zombie-composers-cut-live-w-fabio-frizzi-orch/"
  },
  {
    "artist": "Goose",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/6/24",
    "time": "8:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/live-nation-goose-fri/"
  },
  {
    "artist": "ADRENALIZE - The Ultimate Def Leppard Experience",
    "venue": "The Egg",
    "date": "9/6/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/online?performance=117000"
  },
  {
    "artist": "Honeysuckle",
    "venue": "Caffe Lena",
    "date": "9/7/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/honeysuckle-tickets-874548878237"
  },
  {
    "artist": "Skeeter Creek with Dan Sherwin",
    "venue": "Frog Alley Brewing",
    "date": "9/7/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/skeeter-creek-with-dan-sherwin"
  },
  {
    "artist": "Goose",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/7/24",
    "time": "8:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/live-nation-goose-sat/"
  },
  {
    "artist": "The Gothard Sisters",
    "venue": "Caffe Lena",
    "date": "9/8/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/the-gothard-sisters-tickets-864708816347"
  },
  {
    "artist": "Will Pedicone",
    "venue": "Frog Alley Brewing",
    "date": "9/8/24",
    "time": "11:00 AM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/will-pedicone"
  },
  {
    "artist": "The Sundays w/ The Bennet Brothers",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/8/24",
    "time": "6:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Pitbull / T-Pain",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/8/24",
    "time": "8:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/live-nation-pitbull/"
  },
  {
    "artist": "Pitbul with Special Guest T-PAIN | PARTY AFTER DARK TOUR",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/8/24",
    "time": "8:00 PM",
    "town": "Saratoga Springs",
    "link": "https://www.ticketmaster.com/event/00006091C6696607"
  },
  {
    "artist": "Open Mic",
    "venue": "Caffe Lena",
    "date": "9/9/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/open-mic/"
  },
  {
    "artist": "General MoJo's w/ Ginger Geezus",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/9/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Chuck Lamb Trio featuring Clay Jenkins",
    "venue": "Caffe Lena",
    "date": "9/10/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/jazz-at-caffe-lena-chuck-lamb-trio-featuring-clay-jenkins-tickets-976415363637"
  },
  {
    "artist": "Drink and Draw: A Live Model Drawing Event",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/10/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Megadeth - Destroy All Enemies Tour",
    "venue": "MVP Arena",
    "date": "9/10/24",
    "time": "6:30 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/00006095C28B5BBB"
  },
  {
    "artist": "Taco Tuesday with Michael Lashomb",
    "venue": "Unihog",
    "date": "9/10/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "June Farms Dueling Pianos",
    "venue": "June Farms",
    "date": "9/11/24",
    "time": "7:00 PM",
    "town": "West Sand Lake",
    "link": "https://junefarms.simpletix.com/"
  },
  {
    "artist": "My Son, The Doctor / Canella / Safety Meeting",
    "venue": "No Fun",
    "date": "9/11/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/my-son-the-doctor-canella-safety-meeting-tickets-998012882397?aff=ebdsoporgprofile"
  },
  {
    "artist": "Darin and Brooke Aldridge",
    "venue": "Caffe Lena",
    "date": "9/12/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/darin-brooke-aldridge-tickets-812503468747"
  },
  {
    "artist": "Mathieu Sylvestre (France) / Armbruster / Pas Musique",
    "venue": "No Fun",
    "date": "9/12/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/mathieu-sylvestre-france-armbruster-pas-musique-tickets-998013303657?aff=ebdsoporgprofile"
  },
  {
    "artist": "TAS CRU presented by The Capital Region Blues Network",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/12/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/tas-cru-presented-by-the-capital-region-blues-network-tickets-953837181687"
  },
  {
    "artist": "Fire Pit Friday feat. Poverty Hill",
    "venue": "Brewery Ommegang",
    "date": "9/13/24",
    "time": "6:00 PM",
    "town": "Cooperstown",
    "link": "https://www.ommegang.com/events/fire-pit-friday-featuring-poverty-hill/"
  },
  {
    "artist": "Maswick & Brown with opener Mike O'Donnell",
    "venue": "Caffe Lena",
    "date": "9/13/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/maswick-brown-with-opener-mike-odonnell-tickets-843082240677"
  },
  {
    "artist": "Orleans and Aztec Two Step",
    "venue": "Cohoes Music Hall",
    "date": "9/13/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "DJ Ketchup with Kevin & Josh",
    "venue": "Frog Alley Brewing",
    "date": "9/13/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/dj-ketchup-with-kevin-josh"
  },
  {
    "artist": "Band of Horses / City & Colour",
    "venue": "Frog Alley Brewing",
    "date": "9/13/24",
    "time": "6:00 PM",
    "town": "Schenectady",
    "link": "https://www.seetickets.us/event/band-of-horsesandcity-and-colour/604873"
  },
  {
    "artist": "Sabrina Trueheart w/ Shannon Tehya",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/13/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Acoustic Trauma",
    "venue": "NaNola",
    "date": "9/13/24",
    "time": "N/A",
    "town": "Malta",
    "link": "https://www.nanolarestaurant.com/calender"
  },
  {
    "artist": "Gift / Fantasy Of A Broken Heart / Lemon Of Choice",
    "venue": "No Fun",
    "date": "9/13/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/gift-tickets-910998379677?aff=ebdsoporgprofile"
  },
  {
    "artist": "The Pine Boys",
    "venue": "The Eleven at Lark Hall",
    "date": "9/13/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-pine-boys-at-the-eleven-at-lark-hall-free-show-tickets-999772204577?aff=ebdsoporgprofile"
  },
  {
    "artist": "Peter Frampton | The Positively Thankful Tour",
    "venue": "The Palace Theater",
    "date": "9/13/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/000060D2B6462E2C"
  },
  {
    "artist": "The Kennedys with opener Emily Barnes",
    "venue": "Caffe Lena",
    "date": "9/14/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/the-kennedys-with-opener-emily-barnes-tickets-850190571887"
  },
  {
    "artist": "Second Helping: The American Lynyrd Skynyrd Show",
    "venue": "Cohoes Music Hall",
    "date": "9/14/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "Spontaneous Broadway",
    "venue": "MopCo Theatre",
    "date": "9/14/24",
    "time": "8:00 PM",
    "town": "Schenectady",
    "link": "https://www.mopco.org/comingupatthemopco"
  },
  {
    "artist": "Primitive Man / HUSH / Blackwater Holylight / Carnwnnan",
    "venue": "No Fun",
    "date": "9/14/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.nofuntroy.com/events"
  },
  {
    "artist": "OCB Capital City Natural Bodybuilding Competition",
    "venue": "Proctors",
    "date": "9/14/24",
    "time": "10:30am",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/ocb-capital-city-natural-bodybuilding-competition/"
  },
  {
    "artist": "Cliff Brucker & Full Circle featuring Leo Russo",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/14/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/cliif-brucker-full-circle-featuring-leo-russo-tickets-923094469407"
  },
  {
    "artist": "Pete Davidson Live | Brand New Show!",
    "venue": "The Palace Theater",
    "date": "9/14/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/000060C6BF4B5932"
  },
  {
    "artist": "Reese Fulmer & The Carriage House Band",
    "venue": "The Park Theatre",
    "date": "9/14/24",
    "time": "4:00 PM",
    "town": "Glens Falls",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events"
  },
  {
    "artist": "Rosanne Cash with John Leventhal",
    "venue": "Universal Preservation Hall",
    "date": "9/14/24",
    "time": "7:30pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/rosanne-cash-with-john-leventhal/"
  },
  {
    "artist": "An Evening with Mary Gauthier & Robbie Fulks",
    "venue": "Caffe Lena",
    "date": "9/15/24",
    "time": "4:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/cc/an-evening-with-mary-gauthier-robbie-ful-3337239"
  },
  {
    "artist": "An Evening with Mary Gauthier & Robbie Fulks",
    "venue": "Caffe Lena",
    "date": "9/15/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/cc/an-evening-with-mary-gauthier-robbie-ful-3337239"
  },
  {
    "artist": "Spyro Gyra: 50th Anniversary Tour",
    "venue": "Cohoes Music Hall",
    "date": "9/15/24",
    "time": "7:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "Deer Tick",
    "venue": "Lark Hall",
    "date": "9/15/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/deer-tick-with-guests-nicolette-and-the-nobodies-tickets-898202356427?aff=ebdsoporgprofile"
  },
  {
    "artist": "Paper Moon Presents: Zine Fest",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/15/24",
    "time": "3:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Killdeer Trio",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/15/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Killer Queen (with Voyage)",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/15/24",
    "time": "7:30 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/live-nation-killer-queen-2/"
  },
  {
    "artist": "Open Mic",
    "venue": "Caffe Lena",
    "date": "9/16/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/open-mic/"
  },
  {
    "artist": "Jonah Leatherman w/ Carolyn Shapiro and Caity Gallagher",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/16/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Rochmon Record Club - Bruce Springsteen",
    "venue": "Caffe Lena",
    "date": "9/17/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/rochmon-record-club-listening-party-bruce-springsteen-born-in-the-usa-tickets-958116009777"
  },
  {
    "artist": "Taco Tuesday with Schnitt",
    "venue": "Unihog",
    "date": "9/17/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "Bluegrass Jam Hosted by Red Spruce",
    "venue": "Caffe Lena",
    "date": "9/18/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/bluegrass-jam/"
  },
  {
    "artist": "Lovella - Album Release Concert",
    "venue": "Caffe Lena",
    "date": "9/19/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/lovella-album-release-concert-tickets-980376070217"
  },
  {
    "artist": "Heartless: Kepp Love Alive Tour",
    "venue": "Cohoes Music Hall",
    "date": "9/19/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "Kill the Jukebox with Joe Severino",
    "venue": "Frog Alley Brewing",
    "date": "9/19/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/kill-the-jukebox-with-joe-severino"
  },
  {
    "artist": "Sister Sparrow & The Dirty Birds",
    "venue": "Lark Hall",
    "date": "9/19/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/sister-sparrow-the-dirty-birds-with-special-guest-the-ky-mcclinton-band-tickets-968682544567?aff=ebdsoporgprofile"
  },
  {
    "artist": "Hip-Hop Showcase w/ Wavy Cunningham",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/19/24",
    "time": "8:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Blues Open Mic Night",
    "venue": "NaNola",
    "date": "9/19/24",
    "time": "7:00PM",
    "town": "Malta",
    "link": "https://www.nanolarestaurant.com/calender"
  },
  {
    "artist": "Rochmon Record Club Listening Party: The Rolling Stones' \"Sticky Fingers",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/19/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/rochmon-record-club-listening-party-the-rolling-stones-sticky-fingers-tickets-983903470767"
  },
  {
    "artist": "The Matt Niedbalski Trio feat. Charles Cornell",
    "venue": "The Park Theatre",
    "date": "9/19/24",
    "time": "7:30 PM",
    "town": "Glens Falls",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events/108724"
  },
  {
    "artist": "Rainbow Kitten Surprise",
    "venue": "Brewery Ommegang",
    "date": "9/20/24",
    "time": "5:00 PM",
    "town": "Cooperstown",
    "link": "https://www.ommegang.com/events/rainbow-kitten-surprise-at-brewery-ommegang/"
  },
  {
    "artist": "Kate McDonnell & Her Right Hand Men - Album Release",
    "venue": "Caffe Lena",
    "date": "9/20/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/kate-mcdonnell-her-right-hand-men-album-release-tickets-897966651427"
  },
  {
    "artist": "A Man Named Cash: A tribute to Johnny Cash and June Carter",
    "venue": "Cohoes Music Hall",
    "date": "9/20/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "The Dude Abides with Gianna Robustiano",
    "venue": "Frog Alley Brewing",
    "date": "9/20/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/the-dude-abides-with-gianna-robustiano"
  },
  {
    "artist": "Say She She",
    "venue": "Lark Hall",
    "date": "9/20/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/say-she-she-with-special-guest-sola-tickets-953549852277?aff=ebdsoporgprofile"
  },
  {
    "artist": "Girth Control / On The Cinder / Divide By Zero / Henry's Rifle",
    "venue": "No Fun",
    "date": "9/20/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/girth-control-on-the-cinder-divide-by-zero-henrys-rifle-tickets-980273914667?aff=ebdsoporgprofile"
  },
  {
    "artist": "Oobleck",
    "venue": "The Eleven at Lark Hall",
    "date": "9/20/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/oobleck-live-at-the-eleven-free-show-say-she-she-pre-party-tickets-958573789007?aff=ebdsoporgprofile"
  },
  {
    "artist": "New York State International Film Festival 2024",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/20/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/new-york-state-international-film-festival-2024-tickets-980176362887"
  },
  {
    "artist": "Dane Cook | Fresh New Flavor Tour",
    "venue": "The Palace Theater",
    "date": "9/20/24",
    "time": "7:30 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/00006099A4F44F5B"
  },
  {
    "artist": "Mystic Highway: A Tribute to CCR",
    "venue": "Universal Preservation Hall",
    "date": "9/20/24",
    "time": "7:30pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/mystic-highway-a-tribute-to-ccr/"
  },
  {
    "artist": "Bright Series: Country GongBang",
    "venue": "Caffe Lena",
    "date": "9/21/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/bright-series-country-gongbang-tickets-864740892287"
  },
  {
    "artist": "Big Eyed Phish with the North Allen Duo & Fritz Polka Band",
    "venue": "Frog Alley Brewing",
    "date": "9/21/24",
    "time": "2:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/big-eyed-phish-with-the-north-allen-duo-fritz-polka-band"
  },
  {
    "artist": "Paper Prince w/ Amanda Case",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/21/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Spontaneous Broadway",
    "venue": "MopCo Theatre",
    "date": "9/21/24",
    "time": "8:00 PM",
    "town": "Schenectady",
    "link": "https://www.mopco.org/comingupatthemopco"
  },
  {
    "artist": "Suspiria w/ Live Score by Apostrophebeats Orchestra",
    "venue": "No Fun",
    "date": "9/21/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/suspiria-with-live-score-by-apostrophebeats-orchestra-tickets-998021006697?aff=ebdsoporgprofile"
  },
  {
    "artist": "Plussed: The Music of Patrick Longo",
    "venue": "Proctors GE Theater",
    "date": "9/21/24",
    "time": "6:30pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/plussed-the-music-of-patrick-longo/"
  },
  {
    "artist": "Farm Aid 2024",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/21/24",
    "time": "12:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/farm-aid/"
  },
  {
    "artist": "The Alec Lewis Group",
    "venue": "The Eleven at Lark Hall",
    "date": "9/21/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-alec-lewis-group-at-the-eleven-at-lark-hall-free-show-tickets-999760298967?aff=ebdsoporgprofile"
  },
  {
    "artist": "New York State International Film Festival 2024",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/21/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/new-york-state-international-film-festival-2024-tickets-980176362887"
  },
  {
    "artist": "A tribute to Frankie Valli and the Four Seasons",
    "venue": "Troy Savings Bank Music Hall",
    "date": "9/21/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116729&qty=0"
  },
  {
    "artist": "Capital Region Blues Network Solo-Duo Competition",
    "venue": "Caffe Lena",
    "date": "9/22/24",
    "time": "1:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/capital-region-blues-network-solo-duo-competition-tickets-903853709777 ON SALE 9/1"
  },
  {
    "artist": "Unplug Childhood Hunger! - Fundraiser",
    "venue": "Caffe Lena",
    "date": "9/22/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/unplug-childhood-hunger-fundraiser-tickets-945755378797"
  },
  {
    "artist": "Capital Sweatfest",
    "venue": "Frog Alley Brewing",
    "date": "9/22/24",
    "time": "8:00 AM",
    "town": "Schenectady",
    "link": "https://www.eventbrite.com/e/second-annual-capital-sweat-festival-tickets-950960116307"
  },
  {
    "artist": "Olivia O'Connell",
    "venue": "Unihog",
    "date": "9/22/24",
    "time": "8:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "Open Mic",
    "venue": "Caffe Lena",
    "date": "9/23/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/open-mic/"
  },
  {
    "artist": "Post Malone",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/23/24",
    "time": "8:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/post-malone/"
  },
  {
    "artist": "Jelly Roll with Warren Zeiders and Alexandra Kay | The Beautifully Broken Tour",
    "venue": "MVP Arena",
    "date": "9/24/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/00006055B40C3EA1"
  },
  {
    "artist": "Taco Tuesday with Michael Lashomb",
    "venue": "Unihog",
    "date": "9/24/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "Lena Go Round - Songwriter Showcase with Erin Harkes",
    "venue": "Caffe Lena",
    "date": "9/25/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/lena-go-round-songwriter-showcase-with-erin-harkes-tickets-996554881477"
  },
  {
    "artist": "Momentum Series: Daniel Champagne",
    "venue": "Caffe Lena",
    "date": "9/26/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "Sold out!"
  },
  {
    "artist": "Twice Twice",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/26/24",
    "time": "8:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Rabid Children / Nathan Meltz and the House of Tomorrow / Electric Turtle",
    "venue": "No Fun",
    "date": "9/26/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/rabid-children-nathan-meltz-the-house-of-tomorrow-electric-turtle-tickets-998014587497?aff=ebdsoporgprofile"
  },
  {
    "artist": "Powersiren",
    "venue": "The Eleven at Lark Hall",
    "date": "9/26/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-eleven-at-lark-hall-presents-powersiren-free-show-tickets-1001416272027?aff=ebdsoporgprofile"
  },
  {
    "artist": "Soft Machine",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/26/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/soft-machine-tickets-808543434177"
  },
  {
    "artist": "Teddy Swims with Freak Freely | I've Tried Everything But Therapy Tour",
    "venue": "The Palace Theater",
    "date": "9/26/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/000060920EA29C42"
  },
  {
    "artist": "Alash",
    "venue": "Caffe Lena",
    "date": "9/27/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/alash-tickets-908915770537"
  },
  {
    "artist": "Michael Glabicki of Rusted Root and Dirk Miller w/s/g Large Farva",
    "venue": "Cohoes Music Hall",
    "date": "9/27/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "Big Sky Country with Scott Simpson",
    "venue": "Frog Alley Brewing",
    "date": "9/27/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/big-sky-country-with-scott-simpson"
  },
  {
    "artist": "Tophouse",
    "venue": "Lark Hall",
    "date": "9/27/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/nectars-presents-tophouse-with-special-guests-upstate-tickets-882364846007?aff=ebdsoporgprofile"
  },
  {
    "artist": "Troy Dance Factory Presents: Improvisational Dance Course w/ Zero Sugar Band, Kuf Knotz & Christine Elise",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/27/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Morgan Wade: The Obsessed Tour",
    "venue": "The Egg",
    "date": "9/27/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116471"
  },
  {
    "artist": "Comedy After Dark: Michael Brigante",
    "venue": "The Park Theatre",
    "date": "9/27/24",
    "time": "8:00 PM",
    "town": "Glens Falls",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events/105214"
  },
  {
    "artist": "American Patchwork Quartet",
    "venue": "Troy Savings Bank Music Hall",
    "date": "9/27/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117205&qty=0"
  },
  {
    "artist": "Five for Fighting",
    "venue": "Universal Preservation Hall",
    "date": "9/27/24",
    "time": "7:30pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/five-for-fighting/"
  },
  {
    "artist": "Michael Jerling",
    "venue": "Caffe Lena",
    "date": "9/28/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/folk-heritage-series-michael-jerling-tickets-864758835957"
  },
  {
    "artist": "Bennie and the Jets",
    "venue": "Cohoes Music Hall",
    "date": "9/28/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "Frogtoberfest!",
    "venue": "Frog Alley Brewing",
    "date": "9/28/24",
    "time": "12:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/frog-alleys-annual-frogtoberfest"
  },
  {
    "artist": "Neon Avenue",
    "venue": "Lark Hall",
    "date": "9/28/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/guthrie-bell-productions-presents-neon-avenue-tickets-945655760837?aff=ebdsoporgprofile"
  },
  {
    "artist": "Concerts For Kids with Deb Cavanaugh",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/28/24",
    "time": "11:00 AM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Spontaneous Broadway",
    "venue": "MopCo Theatre",
    "date": "9/28/24",
    "time": "8:00 PM",
    "town": "Schenectady",
    "link": "https://www.mopco.org/comingupatthemopco"
  },
  {
    "artist": "Miracle Blood / Ice Queen / Violent By Design / Passed Lives",
    "venue": "No Fun",
    "date": "9/28/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.nofuntroy.com/events"
  },
  {
    "artist": "The Best of the Eagles",
    "venue": "Proctors",
    "date": "9/28/24",
    "time": "7:30pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/the-best-of-the-eagles/"
  },
  {
    "artist": "Angel Olson (Solo): Songs From The Archive",
    "venue": "The Egg",
    "date": "9/28/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116493"
  },
  {
    "artist": "Joseph Terrell & Blue Cactus",
    "venue": "The Park Theatre",
    "date": "9/28/24",
    "time": "4:00 PM",
    "town": "Glens Falls",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events/105875"
  },
  {
    "artist": "Rainbow Prom",
    "venue": "Universal Preservation Hall",
    "date": "9/28/24",
    "time": "7:00pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/rainbow-prom-2/"
  },
  {
    "artist": "Nordlys Global Voices: Yacouba Sissoko & SIYA",
    "venue": "Caffe Lena",
    "date": "9/29/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/nordlys-global-voices-yacouba-sissoko-siya-tickets-882581634427"
  },
  {
    "artist": "Belleville",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/29/24",
    "time": "3:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Open Mic",
    "venue": "Caffe Lena",
    "date": "9/30/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/open-mic/"
  },
  {
    "artist": "Reeves Gabrels' Blues Episode",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/30/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
  },
  {
    "artist": "Mat Kearney",
    "venue": "The Egg",
    "date": "9/30/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116046"
  },
  {
    "artist": "Storytelling Open Mic featuring Jesse Bruchac",
    "venue": "Caffe Lena",
    "date": "10/1/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/storytelling-open-mic/"
  },
  {
    "artist": "Sound+Vision: Music at The Movies � Stop Making Sense",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "10/1/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/soundvision-music-at-the-movies-talking-heads-stop-making-sense-tickets-986201674757"
  },
  {
    "artist": "Taco Tuesday with Darryl kniffen",
    "venue": "Unihog",
    "date": "10/1/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "Poetry Open Mic Featuring Jackie Craven",
    "venue": "Caffe Lena",
    "date": "10/2/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/poetry-night/"
  },
  {
    "artist": "Big Something",
    "venue": "Lark Hall",
    "date": "10/2/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/big-something-headspace-fall-tour-wsg-consider-the-source-tickets-965418080467?aff=ebdsoporgprofile"
  },
  {
    "artist": "Sebastian Maniscalco | It Ain't Right Tour",
    "venue": "MVP Arena",
    "date": "10/3/24",
    "time": "7:30 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/00005F7AD4463ECE"
  },
  {
    "artist": "Bambara / Open Head / Sun Natives / Fine Grain",
    "venue": "No Fun",
    "date": "10/3/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/bambara-open-head-sun-natives-fine-grain-tickets-985899340467?aff=ebdsoporgprofile"
  },
  {
    "artist": "Classic Albums Live: �Abbey Road�",
    "venue": "Troy Savings Bank Music Hall",
    "date": "10/3/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117206&qty=0"
  },
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
    "artist": "Live & Local at The Linda � Buggy Jive + Lennox",
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
    "artist": "The Lawn Sausages: The Last Schmaltz",
    "venue": "Cohoes Music Hall",
    "date": "10/6/24",
    "time": "2:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "Graham Nash � More Evenings of Songs and Stories",
    "venue": "The Egg",
    "date": "10/6/24",
    "time": "7:30 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116633"
  },
  {
    "artist": "Rick Wakeman � Final Solo Tour",
    "venue": "Troy Savings Bank Music Hall",
    "date": "10/6/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117048&qty=0"
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
    "artist": "Taco Tuesday with Mike McMann",
    "venue": "Unihog",
    "date": "10/8/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
    "artist": "The California Honeydrops",
    "venue": "Lark Hall",
    "date": "10/14/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-california-honeydrops-fall-in-love-again-tour-2024-tickets-895576392097?aff=ebdsoporgprofile"
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
    "artist": "David Nihill: Shelf Help Tour",
    "venue": "Proctors GE Theater",
    "date": "10/18/24",
    "time": "7:30pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/david-nihill/"
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
    "artist": "Straight No Chaser",
    "venue": "Proctors",
    "date": "10/19/24",
    "time": "8:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/straight-no-chaser/"
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
    "artist": "Celebrating Meat Loaf",
    "venue": "Universal Preservation Hall",
    "date": "10/19/24",
    "time": "7:30pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/celebrating-meat-loaf/"
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
    "artist": "Schenectady-Saratoga Symphony Orchestra � Concert I: REALIZE (Proctors)",
    "venue": "Proctors",
    "date": "10/20/24",
    "time": "3:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/schenectady-saratoga-symphony-orchestra-concert-i-realize-proctors/"
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
    "artist": "Halloween's Metal Maddness",
    "venue": "Cohoes Music Hall",
    "date": "10/26/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
  },
  {
    "artist": "Disney Jr. Live On Tour: Let�s Play",
    "venue": "Proctors",
    "date": "10/26/24",
    "time": "",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/disney-jr-live/"
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
    "artist": "The Egg Presents: Craig Ferguson: Pants on Fire",
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
    "artist": "Halloween with Fungkshui & the TV Doctors",
    "venue": "Lark Hall",
    "date": "10/31/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/lark-hall-presents-halloween-with-fungkshui-the-tv-doctors-tickets-991245531067?aff=ebdsoporgprofile"
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
    "artist": "Sixties Spectacular 2024",
    "venue": "Proctors",
    "date": "11/2/24",
    "time": "7:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/sixties-spectacular-2024/"
  },
  {
    "artist": "An Evening With Justin Furstenfeld of Blue October � �Open Book�",
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
    "artist": "The Crossword Show with Zach Sherwin",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "11/7/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-crossword-show-with-zach-sherwin-tickets-993575169077"
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
    "artist": "Saratoga Stomp: Hosted by Kevin Richards, Dan & Kelly Albro and Conrad Farnham-Leavitt",
    "venue": "Universal Preservation Hall",
    "date": "11/9/24",
    "time": "7:30 PM",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/saratoga-stomp-hosted-by-kevin-richards-dan-kelly-albro-and-conrad-farnham-leavitt/"
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
    "artist": "Ringling Bros. and Barnum & Bailey presents The Greatest Show On Earth",
    "venue": "MVP Arena",
    "date": "11/11/24",
    "time": "10:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1157"
  },
  {
    "artist": "Theresa Caputo Live! the Experience",
    "venue": "Proctors",
    "date": "11/12/24",
    "time": "7:30pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/theresa-caputo-live-the-experience/"
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
    "artist": "EMBARGOED Steve Solomon",
    "venue": "Troy Savings Bank Music Hall",
    "date": "11/13/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117633&qty=0"
  },
  {
    "artist": "Some Enchanted Evening",
    "venue": "Universal Preservation Hall",
    "date": "11/14/24",
    "time": "7:30pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/some-enchanted-evening/"
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
    "artist": "The National Reserve",
    "venue": "Unihog",
    "date": "11/16/24",
    "time": "8:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "Grunge Night with The Ledbetters & Superunknown",
    "venue": "Universal Preservation Hall",
    "date": "11/16/24",
    "time": "7:30pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/grunge-night-with-the-ledbetters-superunknown/"
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
    "artist": "Taco Tuesday with Ian Losz",
    "venue": "Unihog",
    "date": "11/19/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
  },
  {
    "artist": "World Ballet Company: Swan Lake",
    "venue": "Proctors",
    "date": "11/20/24",
    "time": "7:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/world-ballet-series-swan-lake/"
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
    "artist": "Taco Tuesday with Belle Skinner",
    "venue": "Unihog",
    "date": "11/26/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
    "artist": "Ladies Love R&B",
    "venue": "MVP Arena",
    "date": "11/29/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/0000606F99892E8B"
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
    "artist": "Alan Cumming Uncut",
    "venue": "Troy Savings Bank Music Hall",
    "date": "12/1/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116828&qty=0"
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
    "artist": "Giggly Squad live: Club Giggly",
    "venue": "Troy Savings Bank Music Hall",
    "date": "12/4/24",
    "time": "7:30 PM (sold out), 9:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116586&qty=0"
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
    "artist": "Boston Early Music Festival presents Telemann's Don Quichotte",
    "venue": "Troy Savings Bank Music Hall",
    "date": "12/7/24",
    "time": "8:00 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116903&qty=0"
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
    "artist": "Twas a Girls Night Before Christmas",
    "venue": "Proctors GE Theater",
    "date": "12/14/24",
    "time": "7:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/twas-a-girls-night-before-christmas/"
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
    "artist": "Joe Gatto: Let's Get Into It Featuring Mark Jigarjian",
    "venue": "The Palace Theater",
    "date": "12/29/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/000060CDBE254778"
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
    "artist": "Schenectady-Saratoga Symphony Orchestra � Concert II: REMINISCE (UPH)",
    "venue": "Universal Preservation Hall",
    "date": "1/25/25",
    "time": "7:00pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/schenectady-saratoga-symphony-orchestra-concert-ii-reminisce-uph/"
  },
  {
    "artist": "Schenectady-Saratoga Symphony Orchestra � Concert II: REMINISCE (Proctors)",
    "venue": "Proctors",
    "date": "1/26/25",
    "time": "3:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/schenectady-saratoga-symphony-orchestra-concert-ii-reminisce-proctors/"
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
    "artist": "Schenectady-Saratoga Symphony Orchestra � Concert III: REACH",
    "venue": "Universal Preservation Hall",
    "date": "3/2/25",
    "time": "3:00pm",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/schenectady-saratoga-symphony-orchestra-concert-iii-reach/"
  },
  {
    "artist": "Colin Mochrie & Brad Sherwood: Asking for Trouble",
    "venue": "Proctors",
    "date": "3/27/25",
    "time": "7:30pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/colin-mochrie-brad-sherwood-asking-for-trouble/"
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
    "artist": "Schenectady-Saratoga Symphony Orchestra � Concert IV: REMEMBER",
    "venue": "Proctors",
    "date": "4/13/25",
    "time": "3:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/schenectady-saratoga-symphony-orchestra-concert-iv-remember/"
  },
  {
    "artist": "Golden Oldies Spectacular � 2025",
    "venue": "Proctors",
    "date": "4/26/25",
    "time": "7:00pm",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/golen-oldies-2025/"
  },
  {
    "artist": "Veronica Swift",
    "venue": "Spa Little Theater",
    "date": "5/1/25",
    "time": "7:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/veronica-swift/book/54601/"
  },
  {
    "artist": "Berta, Berta (Bttuny)",
    "venue": "Capital Repertory Theatre",
    "date": "10/17/24 - 10/27/24",
    "time": "",
    "town": "Albany",
    "link": "https://attherep.org/event/berta-berta-bttuny/"
  },
  {
    "artist": "Schenectady-Saratoga Symphony Orchestra Poinsettia Pops",
    "venue": "Universal Preservation Hall",
    "date": "12/7/24 - 12/8/24",
    "time": "",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/schenectady-saratoga-symphony-orchestra-poinsettia-pops/"
  },
  {
    "artist": "Clue",
    "venue": "Proctors",
    "date": "5/2/25 - 5/4/25",
    "time": "",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/clue/"
  },
  {
    "artist": "Eclipsed (Bttuny)",
    "venue": "Capital Repertory Theatre",
    "date": "5/29/25 - 6/8/25",
    "time": "",
    "town": "Albany",
    "link": "https://attherep.org/event/eclipsed-bttuny/"
  },
  {
    "artist": "Opera Saratoga Presents: Cos� Fan Tutte",
    "venue": "Universal Preservation Hall",
    "date": "6/28/24 - 7/6/24",
    "time": "",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/opera-saratoga-presents-cosi-fan-tutte/"
  },
  {
    "artist": "Opera Saratoga Presents: Guys and Dolls",
    "venue": "Universal Preservation Hall",
    "date": "6/29/24 - 7/7/24",
    "time": "",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/opera-saratoga-presents-guys-and-dolls/"
  },
  {
    "artist": "Opera Saratoga Presents: Mad Scramble for Crumbs � Inti Figgis-Vizueta World Premiere Opera",
    "venue": "Universal Preservation Hall",
    "date": "6/30/24 - 7/5/24",
    "time": "",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/opera-saratoga-presents-inti-figgis-vizueta-world-premiere-opera/"
  },
  {
    "artist": "The Magicians Guild Presents Glitches in Reality",
    "venue": "Universal Preservation Hall",
    "date": "7/20/24 - 7/21/24",
    "time": "",
    "town": "Saratoga Springs",
    "link": "https://atuph.org/event/the-magicians-guild-presents-glitches-in-reality/"
  },
  {
    "artist": "Fandom Fest 2024",
    "venue": "Proctors",
    "date": "8/10/24 - 8/11/24",
    "time": "",
    "town": "Schenectady",
    "link": "https://www.atproctors.org/event/fandom-fest-2024/"
  }
]

