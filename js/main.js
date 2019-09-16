<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">

<head>
  <meta charset="UTF-8">
  <meta prefix="og: http://ogp.me/ns#" property=”og:image” content="https://imgur.com/a/joesiU0" /> <!-- Picture of UW-Madison -->
  <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
    crossorigin="anonymous">
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="stylesheet" href="css/main.css">
  <title>Virat Singh's Portfolio</title>

</head>

<body id="bg-img" onload="load()">
  <header id="main-navbar">
    <div id="navbar">
      <a href="#home" class="active" onclick="changeActive(this.id)">Home</a>
      <a href="#about" onclick="changeActive(this.id)">About</a>
      <a href="#experience" onclick="changeActive(this.id)">Experience</a>
      <a href="#work" onclick="changeActive(this.id)">Projects</a>
      <a href="#education" onclick="changeActive(this.id)">Education</a>
      <a href="#contact" onclick="changeActive(this.id)">Contact</a>
      <button onclick="changeMode()" title="Toggle Night Mode">🌙</button> 
    </div>
    
    
  </header>

  <!-- HOME -->

  <main data-aos="fade-in" id="home" class="major-section">
    
    <h1 class="lg-heading">
      <span class="white-color">Virat</span>
      <span class="text-blue">Singh</span>
    </h1>
    <h2 class="sm-heading">
      <span class="white-color">Software Engineer, Data Scientist, Research Assistant</span><br>
    </h2>
    <div class="icons">
      <a href="https://www.linkedin.com/in/virat-singh" target="_blank" >
        <i class="fab fa-linkedin fa-1x"></i>
      </a>
      <a href="https://www.github.com/svirat" target="_blank" >
        <i class="fab fa-github fa-1x"></i>
      </a>
      <a href="https://www.facebook.com/singhvir" target="_blank" >
        <i class="fab fa-facebook fa-1x"></i>
      </a>
      <!--
      <a href="https://www.instagram.com/reallyvirat" target="_blank" >
        <i class="fab fa-instagram fa-1x"></i>
      </a>
      <a href="https://www.twitter.com/svirat" target="_blank" >
        <i class="fab fa-twitter fa-1x"></i>
      </a>-->
    </div>
  </main>


<br>
<br>

  <!-- ABOUT -->


  <main id="about" class="major-section">
    <h1 data-aos="fade-in" class="md-heading">
      About
      <span class="text-blue">Me</span>
    </h1>
    <h3 data-aos="fade-in" class="sm-heading">
      Hello, I'm Virat!
    </h3>
    <div data-aos="fade-right" class="about-info">
      <img src="img/fbdp.jpg" width="240" height="300" alt="John Doe" class="bio-image">

      <div data-aos="fade-right" class="bio">
        <h3 class="text-blue"><b>BIO</b></h3>
        <p>I am a recent college graduate who loves programming! I've had three internships: as a software developer, a machine learning engineer, and as a data scientist.
          I was also a research assistant in my senior year of my university. I love learning new tools and technologies so that I can better myself and be a
          better engineer, and use my skills to develop products that can really help people. <!-- <a href="https://drive.google.com/open?id=1OGLQXr-KKXfcC9GtVOpMiaKm8NQNtQ1V" target="_blank"> <u style="color:#0080FF"> Here</u></a> is my resume. -->
        </p>
      </div>

      <div data-aos="fade-up" class="job job-1">
        <h2 class="text-blue">Languages</h2><hr />
        <p>I have experience in Python, Java, C++, C, TypeScript, and JavaScript. I also have experience in SQL, R, and HTML/CSS.
          I prefer back-end and full-stack projects, although I do work on the front-end when needed. </p>
      </div>

      <div data-aos="fade-up" class="job job-2">
        <h2 class="text-blue">Activities</h2><hr />
        <p>I was both a Research Assistant and a volunteer CS tutor in my university. I think one of the best ways to learn is by helping others.
          I have also authored a few articles on technology in the local newspaper.
        </p>
      </div>

      <div data-aos="fade-up" class="job job-3">
        <h2 class="text-blue">Awards</h2><hr />
        <p>I have been on the Dean's List multiple times during my undergraduate years due to high academic performance. I have also received prizes for
          my technical and teamwork skills in hackathons, like in MadHacks and HackIllinois.
        </p>
      </div>
    </div>
  </main>
  
  <!-- EXPERIENCE -->

  <main id="experience" class="major-section">
    <h2 data-aos="fade-in" class="md-heading">
      My
      <span class="text-blue">Work</span>
    </h2>
    <h3 data-aos="fade-in" class="sm-heading">
      Here's my experience in the industry.
    </h3>

    
    <div class="experience">

      <div data-aos="fade-up" class="item">
        <div class="container">
          <img src="img/experience/opentext.jpg" height="250px" width="250px" alt="Project" >
          <div class="overlay">
            <div class="text">OpenText</div>
          </div>
        </div>
        <button id="read1" onclick="toggleJob('exp1', this.id)" class="btn-dark"></i>Data Science Engineer</button>
        <div id="exp1" class="job job-4" style="display: none">
          • Worked on natural language processing project using neural networks which can read documents and give detailed information such as sentiment, categories, concepts, entities, summaries, and so on <br>
          • Increased the speed of the product by 60% by using multithreading in Java, analyzing individual parts and then aggregating the results, at over 95% accuracy <br>
          • Worked on massive database of terms used for NLP and helped expand on it by normalizing SQL tables and connecting different tables in the DBMS in SQLite for faster future use
        </div>

        
      </div>

      <div data-aos="fade-up" class="item">
        <div class="container">
          <img src="img/experience/uwmadison.jpg" height="250px" width="250px" alt="Project" >
          <div class="overlay">
            <div class="text">University of Wisconsin-Madison</div>
          </div>
        </div>
        <button id="read2" onclick="toggleJob('exp2', this.id)" class="btn-dark"></i>Research Assistant</button>
        <div id="exp2" class="job job-4" style="display: none">
          • One of the few undergraduate students chosen to work part time on the AILT (Artificial Intelligence for Learning Tutorial) project, a joint effort between the CS department and Google <br>
          • Created a back-end program testing system in TypeScript where professors can enter quiz questions, and look up a student’s performance records and connected this to front-end webpage in Angular using REST endpoints <br>
          • Created a neural network which, when given a student’s performance per topic, constructs multiple unique learning modules for the student to create an individual learning experience 
        </div>

        
      </div>
      

      <div data-aos="fade-up" class="item">
        <div class="container">
          <img src="img/experience/dell.png" height="250px" width="250px" alt="Project">
          <div class="overlay">
            <div class="text">Dell Technologies</div>
          </div>
        </div>
          <button id="read3" onclick="toggleJob('exp3', this.id)" class="btn-dark"></i>Software Engineer Intern</button>
          
  
          <div id="exp3" class="job job-4" style="display: none">
              • Designed entity-relationship model of database management system and table schemas, and then normalized the system to avoid data redundancy and conserve consistency when scaling <br>
              • Created a back-end program in TypeScript which polled network packets from user devices and saved them in the database, while also propagating them to existing backend services <br>
              • Transitioned into a full-stack project by creating a front-end webpage and created REST endpoints which helped connect to the back-end program, making it possible to exchange data between both services 
          </div>
      </div>

      <div data-aos="fade-up" class="item">
          <div class="container">
            <img src="img/experience/adp.png" height="250px" width="250px" alt="Project">
            <div class="overlay">
              <div class="text">ADP, Ltd.</div>
            </div>
          </div>
          <button id="read4" onclick="toggleJob('exp4', this.id)" class="btn-dark"></i>Machine Learning Engineer</button>
          
  
          <div id="exp4" class="job job-4" style="display: none">
          • Created a multilingual chat application that automatically translates text and speech from one language to another before sending the message, making REST calls to Google’s Cloud Speech Translation APIs in Python<br> 
          • Automated a voice recognition program which accurately detects a recorded client’s identity after a few seconds of speech, and implemented a password system to boost security <br>
          • Used Microsoft Cognitive Services’ Facial Recognition APIs to train an AI to recognize and memorize faces, and detect the emotions of people in pictures using SKLearn
          </div>
      </div>

    </div>
  </main>

  <hr data-aos="slide-right" size="4" width=80% color="#0080FF"/>

  
  <!-- PROJECTS -->

  <main id="work" class="major-section">
    <h1 data-aos="fade-in" class="md-heading">
      Personal
      <span class="text-blue">Projects</span>
    </h1>
    <h3 data-aos="fade-in" class="sm-heading">
      Here are technical projects I made in my free time.
    </h3>

    <div class="projects">

      <div data-aos="fade-up" class="item">
        <img src="img/projects/twitterBot.jpg" height="250px" width="300px" alt="Project">
        <a href="https://github.com/SVirat/Twitter-Bot" target="_blank" class="btn-dark">
          <i class="fab fa-github"></i> Twitter Bot
        </a>
        <button id="learn1" onclick="toggle('proj1', this.id)" class="btn-dark"><i class="fas fa-eye"></i> Learn More</button>

        <div id="proj1" class="job job-4" style="display: none">
          • Created a Twitter bot which tweets certain information like free eBooks, quotes, stocks, etc. every day. Also retweets and favorites other popular tweets based on hashtags, text, and location <br> 
          • Used Requests and BeautifulSoup to scrape the web for daily information and used multithreading to run features (like tweeting, favoriting, and so on) concurrently <br>
          • Used a Raspberry Pi to run the bot twenty-four hours a day, every day
        </div>
      </div>

      <div data-aos="fade-up" class="item">
        <img src="img/projects/chatApp.png" height="250px" width="300px" alt="Project">
        <a href="https://github.com/SVirat/random-chat" target="_blank" class="btn-dark">
          <i class="fab fa-github"></i> Chat Messenger
        </a>
        <button id="learn2" onclick="toggle('proj2', this.id)" class="btn-dark"><i class="fas fa-eye"></i> Learn More</button>

        <div id="proj2" class="job job-4" style="display: none">
          • Created a messaging service that allows remote users to communicate with each other swiftly and securely <br>
          • Utilized JavaScript Sockets and Transmission Control Protocol to deliver packets safely without drop, and used User Datagram Protocol to host group chats <br>
          • Secured user messages with end-to-end encryption using an affine cipher, generating random keys for every session
        </div>
      </div>

      <div data-aos="fade-up" class="item">    
        <img src="img/projects/tetris.jpg" height="250px" width="300px" alt="Project">
        <a href="https://github.com/SVirat/Customizable-Tetris-Emulation" target="_blank" class="btn-dark">
          <i class="fab fa-github"></i> Custom Tetris
        </a>
        <button id="learn3" onclick="toggle('proj3', this.id)" class="btn-dark"><i class="fas fa-eye"></i> Learn More</button>
        <div id="proj3" class="job job-4" style="display: none">
          • Emulated the popular video game Tetris, using C++’s Boost libraries to create game logic and eigenvalues for block rotation and movement <br>
          • Used window-based application software Qt to display board, move blocks, and erase rows <br>
          • Allows user to change board dimensions dynamically and customize falling speeds for each piece
        </div>
      </div>

      <div data-aos="fade-up" class="item">   
        <img src="img/projects/fallout.png" height="250px" width="300px" alt="Project">
        <a href="https://github.com/SVirat/Fallout-Hacking-Game" target="_blank" class="btn-dark">
          <i class="fab fa-github"></i> Fallout Hacker
        </a>

        <button id="learn4" onclick="toggle('proj4', this.id)" class="btn-dark"><i class="fas fa-eye"></i> Learn More</button>
        <div id="proj4" class="job job-4" style="display: none">
          • Created a video game based on the Fallout series’ classic hacking mini-game <br>
          • Read Google Enabler text file to feature all words in the English language, and wrote an algorithm to hold any number of difficulty levels, which change word length and number of words shown <br>
          • Can be customized to feature words from other languages, and add or remove certain words
        </div>
      </div>

      <div data-aos="fade-up" class="item">
        <img src="img/projects/salesTax.jpg" height="250px" width="300px" alt="Project">
        <a href="https://github.com/SVirat/Sales-Tax-Calculator" target="_blank" class="btn-dark">
          <i class="fab fa-github"></i> Sales Calculator
        </a>
        <button id="learn5" onclick="toggle('proj5', this.id)" class="btn-dark"><i class="fas fa-eye"></i> Learn More</button>

        <div id="proj5" class="job job-4" style="display: none">
          • Created a project which is able to determine the taxes to be paid based on certain purchases <br>
          • Has backlog of how much different goods are generally taxed, for example, imported items or edible items, and uses this data to compute prices <br>
          • Is able to be extended to calculate the cost of any other items, as the backlog is easily editable
        </div>
      </div>
    </div>
  </main>

  <hr data-aos="slide-right" size="4" width=80% color="#0080FF"/>
  
  <!-- EDUCATION -->

  <main id="education" class="major-section">
    <h1 data-aos="fade-in" class="md-heading">
      My
      <span class="text-blue">Studies</span>
    </h1>
    <h3 data-aos="fade-in" class="sm-heading">
      University of <span class="blue-color">Wisconsin-Madison</span>, Class of 2019
    </h3>
    <div data-aos="fade-right" class="education">
      <img src="img/gradPic.jpeg" alt="John Doe" class="bio-image">

      <div data-aos="fade-right" class="bio"><p>
        <span class="text-blue">Major: </span> Computer Science <br>
        <span class="text-blue">Minor: </span> Mathematics <br>
        <span class="text-blue">CS & Math GPA: </span> 3.83 (Dean's List) <br>
        <span class="text-blue">Relevant Coursework: </span> Data Structures & Algorithms, Database Management, Software Engineering, Machine Learning, Operating Systems, Networks, Software Security, Cryptography, Linear Algebra, Statistics <br>
        <span class="text-blue">Student Organizations: </span> Software Development Club, Undergraduate Projects Lab, International Students' Association <br>
      </p>
      </div>

    </div>
  </main>

  <hr data-aos="slide-right" size="4" width=80% color="#0080FF"/>
  
  <!-- CONTACT -->


  <main id="contact" class="major-section">
    <h1 data-aos="fade-in" class="md-heading">
      Contact
      <span class="text-blue">Me</span>
    </h1>
    <h3 data-aos="fade-in" class="sm-heading">
      Please feel free to reach out!
    </h3>
    <!--
    <div class="boxes">
      <div>
        <span class="text-blue">Email: </span> svirat@gmail.com
      </div>
      <div>
        <span class="text-blue">Phone: </span> 224-256-3547
      </div>
      <div>
        <span class="text-blue">Address: </span> W. Washington Ave, Madison WI 53703
      </div>
    </div>
      -->


    <form data-aos="fade-up" action="https://formspree.io/svirat@gmail.com" method="POST" />
      <ul class="form-style-1">
        <li><label>Name: <span class="required">*</span></label><input type="text" name="field1" class="field-long" placeholder="John Doe" required/></li>
        <li><label>Email: <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" placeholder="john.doe@example.com" required/></li>
        <li><label>Subject: </span></label><input type="text" name="field1" class="field-long" placeholder="Hello, Virat!" /></li>
        <li><label>Your Message: <span class="required">*</span></label>
        <textarea name="field5" id="field5" class="field-long field-textarea" placeholder="How are you?" required></textarea></li>
        <li><center><input type="submit" value="Submit"/></center></li>
      </ul>
    </form>

  </main>


  <footer class="footer">
    <div class="icons">
        <a href="https://www.linkedin.com/in/virat-singh" target="_blank" >
          <i class="fab fa-linkedin fa-1x"></i>
        </a> &nbsp;
        <a href="https://www.github.com/svirat" target="_blank" >
          <i class="fab fa-github fa-1x"></i>
        </a> &nbsp;
        <a href="https://www.facebook.com/singhvir" target="_blank" >
          <i class="fab fa-facebook fa-1x"></i>
        </a> &nbsp;
        <a href="https://www.instagram.com/reallyvirat" target="_blank" >
          <i class="fab fa-instagram fa-1x"></i>
        </a> &nbsp;
        <a href="https://www.twitter.com/svirat" target="_blank" >
          <i class="fab fa-twitter fa-1x"></i>
        </a>
    </div>
    <span class="text-blue sm-heading">Virat Singh</span> <span class="sm-heading">© 2019 </span>
</footer>

<script src="js/main.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>AOS.init();</script>
<script>
/*
There is a problem with Chrome that changes fonts on refresh
So a simple fix is to do a hard-refresh when the fonts are about to change
*/
function load() {
  if(window.location.href.endsWith("#!")) {
    window.location.href = window.location.href.substr(0, -2);
  }
}

(function() {
  'use strict';

  var section = document.querySelectorAll(".major-section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    scroll();
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    scrollPosition += document.getElementById("navbar").offsetHeight * 2; //make the navbar light up earlier

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();


AOS.init(); //initiate animations
AOS.init({
  once: true, //animations only happen once on loading page
  //mirror: true, //also keep animations when scrolling up
}); 

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var currentlyNight = false;
function changeMode() {
  //change to morning
  if(currentlyNight) {
    document.documentElement.setAttribute('data-theme', 'light');
    currentlyNight = false;
  }
  //change to night
  else {
    document.documentElement.setAttribute('data-theme', 'dark');
    currentlyNight = true;
  }
}

function toggleJob(peekID, brightID) {
  var x = document.getElementById(peekID);
  var y = document.getElementById(brightID);
  //showing and hiding the extra information
  if (x.style.display === "none") {
    x.style.display = "block";
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var numberOfJobs = document.querySelectorAll('.experience .item').length;
    var jobsPerRow = 4;
    //4 on each side, so only push down 1 and 5
    if(viewportWidth >= 1171) jobsPerRow = 4;
    //3 on each side, so push down 1, 2, 4, and 5 
    else if(viewportWidth >= 769) jobsPerRow = 3;
    //2 on each side, so push down 1, 2, 3, and 5
    else if(viewportWidth >= 501) jobsPerRow = 2;
    //1 on each side, so push down all
    else jobsPerRow = 1;
    var smallestAbove = Math.ceil(numberOfJobs / jobsPerRow) * jobsPerRow;  
    var pattern = jobsPerRow - smallestAbove + numberOfJobs; 
    //go through all the project IDs (starts at 1), and make the first "pattern" to relative
    //and then skip over (projectsPerRow - pattern) steps
    var row = 0;
    for(var i = 1; i <= numberOfJobs; i += jobsPerRow) {
      for(var j = i; j <= (row * jobsPerRow) + pattern; j++) {
        if(peekID == "exp"+j) {
          x.style.position = "relative";
        }
      }
      row++;
    }

  } else {
    x.style.display = "none";
  }
  //turning the "Learn More" button bright and dark
  if (y.className === "btn-dark") {
    y.className = "btn-clicked";
  } else {
    y.className = "btn-dark";
  }
  AOS.refresh();
}

// to toggle projects
function toggle(showID, learnID) {
  var x = document.getElementById(showID);
  var y = document.getElementById(learnID);
  //showing and hiding the extra information
  if (x.style.display === "none") {
    x.style.display = "block";
    //based on the size of the browser, determine which ones to push down
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var numberOfProjects = document.querySelectorAll('.projects .item').length;
    var projectsPerRow = 4;
    //4 on each side, so only push down 1 and 5
    if(viewportWidth >= 1171) projectsPerRow = 4;
    //3 on each side, so push down 1, 2, 4, and 5 
    else if(viewportWidth >= 769) projectsPerRow = 3;
    //2 on each side, so push down 1, 2, 3, and 5
    else if(viewportWidth >= 501) projectsPerRow = 2;
    //1 on each side, so push down all
    else projectsPerRow = 1;
    var smallestAbove = Math.ceil(numberOfProjects / projectsPerRow) * projectsPerRow;
    var pattern = projectsPerRow - smallestAbove + numberOfProjects;
    //go through all the project IDs (starts at 1), and make the first "pattern" to relative
    //and then skip over (projectsPerRow - pattern) steps
    var row = 0;
    for(var i = 1; i <= numberOfProjects; i += projectsPerRow) {
      for(var j = i; j <= (row * projectsPerRow) + pattern; j++) {
        if(showID == "proj"+j) {
          x.style.position = "relative";
        }
      }
      row++;
    }

  } else {
    x.style.display = "none";
  }
  //turning the "Learn More" button bright and dark
  if (y.className === "btn-dark") {
    y.className = "btn-clicked";
  } else {
    y.className = "btn-dark";
  }
  AOS.refresh();
}

</script>

  <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="/__/firebase/6.1.1/firebase-app.js"></script>

  <!-- Add Firebase products that you want to use -->
  <script src="/__/firebase/6.1.1/firebase-auth.js"></script>
  <script src="/__/firebase/6.1.1/firebase-firestore.js"></script>

   <!-- Previously loaded Firebase SDKs -->

  <!-- Initialize Firebase -->
  <script src="/__/firebase/init.js"></script>


</body>

</html>
