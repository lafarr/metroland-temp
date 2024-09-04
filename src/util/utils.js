export const convertdateToHuman = (shittydate) => {
    let [year, month, day] = shittydate.split('-');

    year = year.substring(2);
    month = month.length === 2 && month.charAt(0) === '0' ? month.charAt(1) : month;
    day = day.length === 2 && day.charAt(0) === '0' ? day.charAt(1) : day;

    return `${month}/${day}/${year}`;
};

export const data = [
  {
    "artist": "Fire Pit Friday feat. WHAT?",
    "venue": "Brewery Ommegang",
    "date": "9/6/24",
    "time": "6:00 PM",
    "town": "Cooperstown",
    "link": "https://www.ommegang.com/events/fire-pit-friday-featuring-what/"
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
    "artist": "Rainbow Kitten Surprise",
    "venue": "Brewery Ommegang",
    "date": "9/20/24",
    "time": "5:00 PM",
    "town": "Cooperstown",
    "link": "https://www.ommegang.com/events/rainbow-kitten-surprise-at-brewery-ommegang/"
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
    "artist": "Fire Pit Friday feat. Hop City Hellcats",
    "venue": "Brewery Ommegang",
    "date": "10/11/24",
    "time": "6:00 PM",
    "town": "Cooperstown",
    "link": "https://www.ommegang.com/events/fire-pit-friday-featuring-hop-city-hellcats/"
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
    "artist": "The Gothard Sisters",
    "venue": "Caffe Lena",
    "date": "9/8/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/the-gothard-sisters-tickets-864708816347"
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
    "artist": "Chuck Lamb Trio featuring Clay Jenkins",
    "venue": "Caffe Lena",
    "date": "9/10/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/jazz-at-caffe-lena-chuck-lamb-trio-featuring-clay-jenkins-tickets-976415363637"
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
    "artist": "Maswick & Brown with opener Mike O'Donnell",
    "venue": "Caffe Lena",
    "date": "9/13/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/maswick-brown-with-opener-mike-odonnell-tickets-843082240677"
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
    "artist": "Open Mic",
    "venue": "Caffe Lena",
    "date": "9/16/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/open-mic/"
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
    "artist": "Kate McDonnell & Her Right Hand Men - Album Release",
    "venue": "Caffe Lena",
    "date": "9/20/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/kate-mcdonnell-her-right-hand-men-album-release-tickets-897966651427"
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
    "artist": "Open Mic",
    "venue": "Caffe Lena",
    "date": "9/23/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/open-mic/"
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
    "artist": "Alash",
    "venue": "Caffe Lena",
    "date": "9/27/24",
    "time": "8:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/alash-tickets-908915770537"
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
    "artist": "Nordlys Global Voices: Yacouba Sissoko & SIYA",
    "venue": "Caffe Lena",
    "date": "9/29/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.eventbrite.com/e/nordlys-global-voices-yacouba-sissoko-siya-tickets-882581634427"
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
    "artist": "Storytelling Open Mic featuring Jesse Bruchac",
    "venue": "Caffe Lena",
    "date": "10/1/24",
    "time": "7:00 PM",
    "town": "Saratoga",
    "link": "https://www.caffelena.org/storytelling-open-mic/"
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
    "artist": "Orleans and Aztec Two Step",
    "venue": "Cohoes Music Hall",
    "date": "9/13/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "Spyro Gyra: 50th Anniversary Tour",
    "venue": "Cohoes Music Hall",
    "date": "9/15/24",
    "time": "7:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "A Man Named Cash: A tribute to Johnny Cash and June Carter",
    "venue": "Cohoes Music Hall",
    "date": "9/20/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "Bennie and the Jets",
    "venue": "Cohoes Music Hall",
    "date": "9/28/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "Robert Kelly",
    "venue": "Cohoes Music Hall",
    "date": "10/5/24",
    "time": "8:00 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "Live and Let Die: The Music of Paul McCartney",
    "venue": "Cohoes Music Hall",
    "date": "10/11/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "Back in Black- The true AC/DC experience",
    "venue": "Cohoes Music Hall",
    "date": "10/19/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "JD Simo and Luther Dickinson",
    "venue": "Cohoes Music Hall",
    "date": "10/24/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "Halloween's Metal Maddness",
    "venue": "Cohoes Music Hall",
    "date": "10/26/24",
    "time": "7:30 PM",
    "town": "Cohoes",
    "link": "https://www.thecohoesmusichall.org/events"
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
    "artist": "Third Rail with Colin McCarthy",
    "venue": "Frog Alley Brewing",
    "date": "9/6/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/third-rail-with-colin-mccarthy"
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
    "artist": "Will Pedicone",
    "venue": "Frog Alley Brewing",
    "date": "9/8/24",
    "time": "11:00 AM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/will-pedicone"
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
    "artist": "Kill the Jukebox with Joe Severino",
    "venue": "Frog Alley Brewing",
    "date": "9/19/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/kill-the-jukebox-with-joe-severino"
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
    "artist": "Big Eyed Phish with the North Allen Duo & Fritz Polka Band",
    "venue": "Frog Alley Brewing",
    "date": "9/21/24",
    "time": "2:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/big-eyed-phish-with-the-north-allen-duo-fritz-polka-band"
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
    "artist": "Big Sky Country with Scott Simpson",
    "venue": "Frog Alley Brewing",
    "date": "9/27/24",
    "time": "5:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/big-sky-country-with-scott-simpson"
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
    "artist": "Jon Langston",
    "venue": "Frog Alley Brewing",
    "date": "10/17/24",
    "time": "7:00 PM",
    "town": "Schenectady",
    "link": "https://frogalleybrewing.com/events/jon-langston-live-at-frog-alley"
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
    "artist": "June Farms Dueling Pianos",
    "venue": "June Farms",
    "date": "9/11/24",
    "time": "7:00 PM",
    "town": "West Sand Lake",
    "link": "https://junefarms.simpletix.com/"
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
    "artist": "Sister Sparrow & The Dirty Birds",
    "venue": "Lark Hall",
    "date": "9/19/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/sister-sparrow-the-dirty-birds-with-special-guest-the-ky-mcclinton-band-tickets-968682544567?aff=ebdsoporgprofile"
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
    "artist": "Tophouse",
    "venue": "Lark Hall",
    "date": "9/27/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/nectars-presents-tophouse-with-special-guests-upstate-tickets-882364846007?aff=ebdsoporgprofile"
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
    "artist": "Big Something",
    "venue": "Lark Hall",
    "date": "10/2/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/big-something-headspace-fall-tour-wsg-consider-the-source-tickets-965418080467?aff=ebdsoporgprofile"
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
    "artist": "The California Honeydrops",
    "venue": "Lark Hall",
    "date": "10/14/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-california-honeydrops-fall-in-love-again-tour-2024-tickets-895576392097?aff=ebdsoporgprofile"
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
    "artist": "Magic Beans",
    "venue": "Lark Hall",
    "date": "10/24/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/magic-beans-with-special-guest-squeaky-feet-tickets-999310975027?aff=ebdsoporgprofile"
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
    "artist": "LaMP ( Russ Lawton, Scott Metzger, Ray Paczkowski)",
    "venue": "Lark Hall",
    "date": "11/9/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/lamp-russ-lawton-scott-metzger-ray-paczkowski-tickets-945261812527?aff=ebdsoporgprofile"
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
    "artist": "The Sundays w/ The Bennet Brothers",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/8/24",
    "time": "6:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
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
    "artist": "Drink and Draw: A Live Model Drawing Event",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/10/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
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
    "artist": "Jonah Leatherman w/ Carolyn Shapiro and Caity Gallagher",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/16/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
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
    "artist": "Paper Prince w/ Amanda Case",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/21/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
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
    "artist": "Troy Dance Factory Presents: Improvisational Dance Course w/ Zero Sugar Band, Kuf Knotz & Christine Elise",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/27/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
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
    "artist": "Belleville",
    "venue": "Mojo's Caf� and Gallery",
    "date": "9/29/24",
    "time": "3:00 PM",
    "town": "Troy",
    "link": "https://mojoscafegallery.com/"
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
    "artist": "Spontaneous Broadway",
    "venue": "MopCo Theatre",
    "date": "9/14/24",
    "time": "8:00 PM",
    "town": "Schenectady",
    "link": "https://www.mopco.org/comingupatthemopco"
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
    "artist": "Spontaneous Broadway",
    "venue": "MopCo Theatre",
    "date": "9/28/24",
    "time": "8:00 PM",
    "town": "Schenectady",
    "link": "https://www.mopco.org/comingupatthemopco"
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
    "artist": "Jelly Roll with Warren Zeiders and Alexandra Kay | The Beautifully Broken Tour",
    "venue": "MVP Arena",
    "date": "9/24/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/00006055B40C3EA1"
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
    "artist": "Ringling Bros. and Barnum & Bailey presents The Greatest Show On Earth",
    "venue": "MVP Arena",
    "date": "11/8/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1154"
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
    "artist": "Ringling Bros. and Barnum & Bailey presents The Greatest Show On Earth",
    "venue": "MVP Arena",
    "date": "11/10/24",
    "time": "9:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/ringling-bros-and-barnum-bailey-presents-tickets/artist/2962779/?venueID=1156"
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
    "artist": "MercyMe / TobyMac Tour",
    "venue": "MVP Arena",
    "date": "11/15/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/00006074971A251D"
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
    "artist": "Acoustic Trauma",
    "venue": "NaNola",
    "date": "9/13/24",
    "time": "N/A",
    "town": "Malta",
    "link": "https://www.nanolarestaurant.com/calender"
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
    "artist": "Dueling Pianos",
    "venue": "NaNola",
    "date": "10/4/24",
    "time": "7:00 PM",
    "town": "Malta",
    "link": "https://www.nanolarestaurant.com/calender"
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
    "artist": "Capital City Crook$",
    "venue": "No Fun",
    "date": "9/6/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/hip-hop-jam-with-capital-city-crook-more-tba-tickets-998009381927?aff=ebdsoporgprofile"
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
    "artist": "Mathieu Sylvestre (France) / Armbruster / Pas Musique",
    "venue": "No Fun",
    "date": "9/12/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/mathieu-sylvestre-france-armbruster-pas-musique-tickets-998013303657?aff=ebdsoporgprofile"
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
    "artist": "Primitive Man / HUSH / Blackwater Holylight / Carnwnnan",
    "venue": "No Fun",
    "date": "9/14/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.nofuntroy.com/events"
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
    "artist": "Suspiria w/ Live Score by Apostrophebeats Orchestra",
    "venue": "No Fun",
    "date": "9/21/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/suspiria-with-live-score-by-apostrophebeats-orchestra-tickets-998021006697?aff=ebdsoporgprofile"
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
    "artist": "Miracle Blood / Ice Queen / Violent By Design / Passed Lives",
    "venue": "No Fun",
    "date": "9/28/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.nofuntroy.com/events"
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
    "artist": "Pile / Oceanator / Bruiser & Bicycle",
    "venue": "No Fun",
    "date": "10/4/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/pile-oceanator-bruiser-bicycle-tickets-914957451367?aff=ebdsoporgprofile"
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
    "artist": "The Figgs",
    "venue": "No Fun",
    "date": "10/11/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.nofuntroy.com/events"
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
    "artist": "Bee Side Fest - Everybody That Loves You, Senior Living, Retail Drugs, Service Industry",
    "venue": "No Fun",
    "date": "10/18/24",
    "time": "6:00 PM",
    "town": "Troy",
    "link": "https://www.nofuntroy.com/events"
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
    "artist": "Byrdhouse 6th Anniversary: Mint Green / Apple Pie / Senior Living / AILA",
    "venue": "No Fun",
    "date": "10/25/24",
    "time": "7:00 PM",
    "town": "Troy",
    "link": "https://www.eventbrite.com/e/byrdhouse-6th-anniversary-mint-green-apple-pie-senior-living-aila-tickets-999563570547?aff=ebdsoporgprofile"
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
    "artist": "Deep Purple / YES",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/4/24",
    "time": "7:30 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/live-nation-deep-purple/"
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
    "artist": "Goose",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/7/24",
    "time": "8:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/live-nation-goose-sat/"
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
    "artist": "Killer Queen (with Voyage)",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/15/24",
    "time": "7:30 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/live-nation-killer-queen-2/"
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
    "artist": "Post Malone",
    "venue": "Saratoga Performing Arts Center",
    "date": "9/23/24",
    "time": "8:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/post-malone/"
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
    "artist": "Beethoven with the Calidore Quartet",
    "venue": "Saratoga Performing Arts Center",
    "date": "10/26/24",
    "time": "3:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/cms-10-26/"
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
    "artist": "A.I.M. by Kyle Abraham",
    "venue": "Saratoga Performing Arts Center",
    "date": "11/10/24",
    "time": "2:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/a-i-m-by-kyle-abraham/"
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
    "artist": "Christian McBride and Ursa Major",
    "venue": "Spa Little Theater",
    "date": "10/24/24",
    "time": "7:00 PM",
    "town": "Saratoga Springs",
    "link": "https://spac.org/events/christian-mcbride-and-ursa-major/book/55001/"
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
    "artist": "Morgan Wade: The Obsessed Tour",
    "venue": "The Egg",
    "date": "9/27/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116471"
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
    "artist": "Mat Kearney",
    "venue": "The Egg",
    "date": "9/30/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116046"
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
    "artist": "The Egg Presents: Bilal",
    "venue": "The Egg",
    "date": "10/7/24",
    "time": "7:30 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116691"
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
    "artist": "Richard Thompson Electric Trio",
    "venue": "The Egg",
    "date": "10/12/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116925"
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
    "artist": "Renaissance - In Gratitude Farewell Tour",
    "venue": "The Egg",
    "date": "10/18/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116585"
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
    "artist": "The Egg Presents: Craig Ferguson: Pants on Fire",
    "venue": "The Egg",
    "date": "10/27/24",
    "time": "7:30 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=117049"
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
    "artist": "The Egg Presents: Cold Case Live",
    "venue": "The Egg",
    "date": "11/6/24",
    "time": "7:30 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116918"
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
    "artist": "Nick Swardson: Toilet Head",
    "venue": "The Egg",
    "date": "11/17/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://tickets.theegg.org/TheatreManager/98/login&performance=116671"
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
    "artist": "The Pine Boys",
    "venue": "The Eleven at Lark Hall",
    "date": "9/13/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-pine-boys-at-the-eleven-at-lark-hall-free-show-tickets-999772204577?aff=ebdsoporgprofile"
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
    "artist": "The Alec Lewis Group",
    "venue": "The Eleven at Lark Hall",
    "date": "9/21/24",
    "time": "7:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/the-alec-lewis-group-at-the-eleven-at-lark-hall-free-show-tickets-999760298967?aff=ebdsoporgprofile"
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
    "artist": "Nickopotamus",
    "venue": "The Eleven at Lark Hall",
    "date": "10/4/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/first-friday-happy-hour-at-the-eleven-with-nickopotamus-free-show-tickets-999836165887?aff=ebdsoporgprofile"
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
    "artist": "Monkey & the Crowbar",
    "venue": "The Eleven at Lark Hall",
    "date": "11/1/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/happy-hour-with-monkey-the-crowbar-at-the-eleven-free-show-tickets-999835273217?aff=ebdsoporgprofile"
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
    "artist": "Jenna Nicholls",
    "venue": "The Eleven at Lark Hall",
    "date": "12/6/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/jenna-nicholls-live-at-the-eleven-free-show-tickets-969605073877?aff=ebdsoporgprofile"
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
    "artist": "Cliff Brucker & Full Circle featuring Leo Russo",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/14/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/cliif-brucker-full-circle-featuring-leo-russo-tickets-923094469407"
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
    "artist": "New York State International Film Festival 2024",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/20/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/new-york-state-international-film-festival-2024-tickets-980176362887"
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
    "artist": "Soft Machine",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "9/26/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/soft-machine-tickets-808543434177"
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
    "artist": "Live & Local at The Linda � Buggy Jive + Lennox",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "10/4/24",
    "time": "7:30 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/live-local-at-the-linda-buggy-jive-with-lennox-tickets-989009472957"
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
    "artist": "Stephane Wrembel Sextet",
    "venue": "The Linda - WAMC Performing Arts Studio",
    "date": "10/11/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.eventbrite.com/e/stephane-wrembel-sextet-tickets-923113556497"
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
    "artist": "Rochmon Record Club Listening Party: Bob Dylan's \"Blood on the Tracks",
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
    "artist": "Peter Frampton | The Positively Thankful Tour",
    "venue": "The Palace Theater",
    "date": "9/13/24",
    "time": "8:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/000060D2B6462E2C"
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
    "artist": "Dane Cook | Fresh New Flavor Tour",
    "venue": "The Palace Theater",
    "date": "9/20/24",
    "time": "7:30 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/00006099A4F44F5B"
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
    "artist": "Blippi | Join the Band Tour",
    "venue": "The Palace Theater",
    "date": "10/4/24",
    "time": "6:00 PM",
    "town": "Albany",
    "link": "https://www.ticketmaster.com/event/000060ABD57A667B"
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
    "artist": "Reese Fulmer & The Carriage House Band",
    "venue": "The Park Theatre",
    "date": "9/14/24",
    "time": "4:00 PM",
    "town": "Glens Falls",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events"
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
    "artist": "Comedy After Dark: Michael Brigante",
    "venue": "The Park Theatre",
    "date": "9/27/24",
    "time": "8:00 PM",
    "town": "Glens Falls",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events/105214"
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
    "artist": "Little Saints",
    "venue": "The Park Theatre",
    "date": "10/12/24",
    "time": "4:00 PM",
    "town": "Glens Falls",
    "link": "https://www.parktheatergf.com/upcoming-events/#/events/112948"
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
    "artist": "A tribute to Frankie Valli and the Four Seasons",
    "venue": "Troy Savings Bank Music Hall",
    "date": "9/21/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116729&qty=0"
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
    "artist": "Classic Albums Live: �Abbey Road�",
    "venue": "Troy Savings Bank Music Hall",
    "date": "10/3/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117206&qty=0"
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
    "artist": "Rick Wakeman � Final Solo Tour",
    "venue": "Troy Savings Bank Music Hall",
    "date": "10/6/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=117048&qty=0"
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
    "artist": "Kathleen Madigan",
    "venue": "Troy Savings Bank Music Hall",
    "date": "10/11/24",
    "time": "7:30 PM",
    "town": "Troy",
    "link": "https://tickets.troymusichall.org/TheatreManager/99/online?bestavail=116322&qty=0"
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
    "artist": "Taco Tuesday with Rusticator",
    "venue": "Unihog",
    "date": "9/3/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
    "artist": "Taco Tuesday with Schnitt",
    "venue": "Unihog",
    "date": "9/17/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
    "artist": "Taco Tuesday with Michael Lashomb",
    "venue": "Unihog",
    "date": "9/24/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
    "artist": "Rigometrics",
    "venue": "Unihog",
    "date": "10/4/24",
    "time": "8:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
    "artist": "Taco Tuesday with Mike McMann",
    "venue": "Unihog",
    "date": "10/8/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
    "artist": "Taco Tuesday with Pocket Vinyl",
    "venue": "Unihog",
    "date": "10/15/24",
    "time": "7:00 PM",
    "town": "Hoosick Falls",
    "link": "https://www.facebook.com/p/Unihog-100063697897711/"
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
  }
]
