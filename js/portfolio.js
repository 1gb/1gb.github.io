
var items = [
  {
    title: 'Cornucopication',
    key: 'corn',
    dataTarget: '.corn',
    imageLarge: 'img/portfolio/corn1500x800.png',
    imageSmall: 'img/portfolio/corn400x300.png',
    description: 'Cornucopication is a site that collects and categorizes events which embody the spirit of small town festivals celebrating locally produced goods or crops, especially those which are edible such as fruits or seafood.',
    tools: 'HTML, CSS, JavaScript, jQuery, Google Maps API',
    link: 'http://www.cornucopication.com'
  },
  {
    title: 'Destiny Maker',
    key: 'destiny',
    dataTarget: '.destiny',
    imageLarge: '',
    imageSmall: 'img/portfolio/destiny400x300.png',
    description: 'A silly and fun little destiny/career/personal brand generator.',
    tools: 'HTML, CSS, JavaScript',
    link: 'http://www.eveworthington.com/generator/'
  },
  {
    title: 'It\'s Raining Again',
    key: 'raining',
    dataTarget: '.raining',
    imageLarge: '',
    imageSmall: 'img/portfolio/raining400x300.png',
    description: 'A WebVR scene designed to be experienced in Google Cardboard. Inspired by The Simpsons episode Treehouse of Horror V.',
    tools: 'HTML, JavaScript, A-Frame',
    link: 'http://solar-seer.glitch.me/'
  },
  {
    title: 'A Nonny Function',
    key: 'nonnyfunc',
    dataTarget: '.nonnyfunc',
    imageLarge: 'img/portfolio/nonnyfunc1215x648.png',
    imageSmall: 'img/portfolio/nonnyfunc400x300.png',
    description: 'A Twitter bot that tweets poetry using markov strings generated from the works of various poets (Walt Whitman, T.S. Eliot, Rainer Maria Rilke, William Anderson, John Keats, Gerard Manley Hopkins, Emily Dickinson).',
    tools: 'JavaScript, Node, twit.js, RiTa',
    link: 'https://twitter.com/anonnyfunction'
  },
  {
    title: 'Wage Per Second',
    key: 'wps',
    dataTarget: '.wps',
    imageLarge: 'img/portfolio/wageBank1500x800.png',
    imageSmall: 'img/portfolio/wageBank400x300.png',
    description: 'Wage Per Second is a mobile web app that provides users with a visualization of how much money they are earning. Users can enter their hourly wage via an HTML slider, then the app calculates how much the user makes each second. The user may then start a counter which will grow in real-time to show the user how much they are earning in real-time.',
    tools: 'HTML, CSS, JavaScript, jQuery',
    link: 'http://www.eveworthington.com/piggy-bank/'
  },
  {
    title: 'MemEater',
    key: 'mem',
    dataTarget: '.mem',
    imageLarge: 'img/portfolio/memEater1500x800.png',
    imageSmall: 'img/portfolio/memEater400x300.png',
    description: 'MemEater was a collaborative project built in 48 hours for <a href="http://www.arthackday.net/events/erasure" target="_blank">Art Hack Day: Erasure</a>. Visitors were invited to share a memory via a laptop. Their memory would then be displayed via a projector on a wall along with the memories entered by previous participants. If MemEater detected that a word was used in multiple memories, it would black out all instances of that word except for the most recent one. The concept, graphics and design were created by the incredible Illustrator/Architect <a href="http://www.myralara.com/" target="_blank">Myra Lara</a> and I contributed the code. It was on display at Velocity:V2 for the Art Hack Day: Erasure exhibition on September 17th, 2016.',
    tools: 'HTML, CSS, JavaScript, jQuery',
    link: 'http://www.eveworthington.com/memoryEater/'
  },
  {
    title: 'I.D.S.',
    key: 'ids',
    dataTarget: '.ids',
    imageLarge: 'img/portfolio/ids1500x800.png',
    imageSmall: 'img/portfolio/ids400x300_2.png',
    description: 'Information Dissemination Specialist (I.D.S.) was built for <a href="http://www.arthackday.net/events/erasure" target="_blank">Art Hack Day: Erasure</a>. Visitors were invited to sit down at a replica office cubicle and take on the role of Information Dissemination Specialist for the FBI. They would then be presented with topics and documents to redact before public release. It was on display at Velocity:V2 for the Art Hack Day: Erasure exhibition on September 17th, 2016.',
    tools: 'HTML, CSS, JavaScript, jQuery',
    link: 'http://www.eveworthington.com/ids/'
  },
  {
    title: 'The Summer Rip',
    key: 'tsr',
    dataTarget: '.tsr',
    imageLarge: 'img/portfolio/summerRip1500x800.png',
    imageSmall: 'img/portfolio/summerRip400x300.png',
    description: 'The Summer Rip was a project created for <a href="https://www.name.com/hackthedot" target="_blank">Hack the Dot</a> Seattle: Summer is Dead Edition, which took place in Seattle on August 3, 2016. Hack the Dot is a hackathon in which teams have only 2 hours to contstruct a website for a given domain name. The challenge was to create a website for the domain thesummer.rip and my team decided to go with the concept of summer arriving and wanting to rip your pant legs off into shorts. I contributed the SVG graphics.</p><p>For the GitHub repo of The Summer Rip and to see the others who contributed, go <a href="https://github.com/brybrophy/the_summer_rip" target="_blank">here</a>.',
    tools: 'HTML, CSS, JavaScript, jQuery, SVG',
    link: 'http://the-summer-rip.surge.sh/'
  },
  {
    title: 'Simon Game',
    key: 'simon',
    dataTarget: '.simon',
    imageLarge: 'img/portfolio/simon1500x800.png',
    imageSmall: 'img/portfolio/simon400x300.png',
    description: 'The Simon Game is a web app that imitates the classic memory game. I completed it while working through the front end development portion of <a href="https://www.freecodecamp.com/" target="_blank">Free Code Camp</a>\'s curriculum.',
    tools: 'HTML, CSS, JavaScript, jQuery',
    link: 'http://codepen.io/1gb/full/dpWymd/'
  },
  {
    title: 'Downuts',
    key: 'dow',
    dataTarget: '.dow',
    imageLarge: 'img/portfolio/downuts1500x800.png',
    imageSmall: 'img/portfolio/downuts400x300.png',
    description: 'Downuts is a website for a fictional start-up company which offers donuts with stock information printed on them via icing. This is the first project in a series I call "Half-Baked Start-Up Ideas".',
    tools: 'HTML, CSS, JavaScript, jQuery, Bootstrap',
    link: 'http://www.eveworthington.com/downuts/'
  },
  {
    title: 'JavaScript Calculator',
    key: 'jsc',
    dataTarget: '.jsc',
    imageLarge: 'img/portfolio/jscalc1500x800.png',
    imageSmall: 'img/portfolio/jscalc400x300.png',
    description: 'The JavaScript Calculator is a web app that functions as a calculator. I completed it while working through the front end development portion of <a href="https://www.freecodecamp.com/" target="_blank">Free Code Camp</a>\'s curriculum.',
    tools: 'HTML, CSS, JavaScript',
    link: 'http://codepen.io/1gb/full/MKpxpN/'
  },
];

for (i = 0; i < items.length; i++) {
  $('.portfolio-container').append(
    '<div class="item" id="' + items[i].key + '">' +
      '<img class="portfolio-thumb" src="' + items[i].imageSmall + '"/>' +
      '<div class="item-title">' + items[i].title + '</div>' +
    '</div>' +
    '<div id="modal-' + i + '" class="modal ' + 'modal-' + items[i].key + ' hidden">' +
    '<div class="close"></div>' +
      '<div class="modal-title">' + items[i].title + '</div>' +
      '<div class="modal-img-area">' +
        '<div class="left-arrow"></div>' +
        '<a href="' + items[i].link + '" target="_blank"><img src="' + items[i].imageSmall + '" class="modal-image"></a>' +
        '<div class="right-arrow"></div>' +
      '</div>' +
      '<div class="description">' + items[i].description + '</div>' +
      '<div class="tools">Tools Used: ' + items[i].tools + '</div>' +
      '<div class="link"><a href="' + items[i].link + '" target="_blank">' + 'View ' + items[i].title + '</a></div>' +
    '</div>'
  );
}

$('.item').click(function() {
  var id = this.id;
  $('.modal, .overlay').addClass('hidden');
  $('.modal-' + id + ', .overlay').removeClass('hidden');
});

$('.close, .overlay').click(function() {
  $('.modal, .overlay').addClass('hidden');
});

$('.left-arrow').click(function(e) {
  e.preventDefault();
  var id = this.closest('.modal').id;
  id = id.substring(6);

  if (id === '0') {
    id = (items.length - 1).toString();
  } else {
    id = (parseInt(id) - 1).toString();
  }
  $('.modal, .overlay').addClass('hidden');
  $('.overlay, #modal-' + id).removeClass('hidden');
});

$('.right-arrow').click(function(e) {
  e.preventDefault();
  var id = this.closest('.modal').id;
  id = id.substring(6);

  if (id === (items.length - 1).toString()) {
    id = '0';
  } else {
    id = (parseInt(id) + 1).toString();
  }
  $('.modal, .overlay').addClass('hidden');
  $('.overlay, #modal-' + id).removeClass('hidden');
});
