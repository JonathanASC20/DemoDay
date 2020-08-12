/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let data = {
    ComputerProgramming: [
        {
            title: "All Star Code",
            description:"A Six week intesive program for black and brown highschool students that teaches them how to code",
            url: "https://www.allstarcode.org/",
            tagnames:['programming','free','grant-based','minorities','summer','male','computer science','black','latinx']
        },
        {
            title: "Catalyst Academy",
            descrpition:" A One-week, residential program that is avaible for rising juniors and seniors that come from underepresented neighborhoods.",
            url:"https://sites.coecis.cornell.edu/catalystacademy/",
            tagnames:['programming','college','residential','computer','science','minorites','gender-neutral','black','latinx'],
            
        },
        {
            title: "Code Academy",
            description: "A set of free online classes so anyone can learn how to code",
            url:"https://www.codecademy.com/",
            tagnames:['programming','computer','science','gender-neutral','online','free']
        },
        {
            title:"Code Next",
            description:"A coding program that works with high schoolers whose mission is to 'cultivate the next generation of Black and Latinx tech leaders'.",
            url:"https://codenext.withgoogle.com/",
            tagnames:['programing','free','grant-based','minorities','computer science','black','latinx']
        },
    
        
    ],
    Science: [
        {
            title: "Science Mentoring Reasearch Program (SRMP)",
            description:"This is an opportunity for NYC high school students to conduct one year of scientific research with American Musuem of Natural History scientists.",
            url:"https://www.amnh.org/learn-teach/teens/science-research-mentoring-program",
            tagnames:['resarch','science','teens','musuem','mentor']
        },
        {
            title:"Summer Science Reasearch Program(SSRP)",
            description:"Gives high school students 16 and up with oppurtunity to conduct hands-on reasearch",
            url:"https://www.rockefeller.edu/outreach/lab-initiative/summer-science/",
            tagnames:['science','research','college','highschool','teens','gender-neutral','hands-on']
        },
    ],
     
     law: [
        {
            title: "Fusion Global Academy",
            description: "A flexible, focused, and forward-thinking instruction that is taught live, 100% online",
                url:"https://learn.fusionacademy.com/",
            tagnames:['1:1', 'learning', 'law', 'online', 'flexibility', 'paid']
        },
        {
            title: "Englightment Academy",
            description: "Enlightium Academy is an accredited, private online Christian school that provides students a flexible schedule, engaging curriculum, caring teachers, and an individualized learning plan tailored to helping your child succeed academically",
            url:"https://get.enlightiumacademy.com/",
            tagnames:['anytime enrollment', 'Christan Viewpoint', 'learning', 'law', 'online', 'flexibility', 'paid']
        },
        {
            title: "Street Law",
            description: "High school-level Street Law courses strive to empower young people to be active, engaged citizens by equipping them with the knowledge and skills they need to successfully participate and create change in their communities. The following pages are intended to support teachers wishing to start a new high school law course or strengthen an existing one.",
            url:"https://www.streetlaw.org/",
            tagnames:['learning', 'law', 'online', 'flexibility', 'paid']
        },
        {
            title: "Law School",
            description: "We offer several postgraduate degrees covering a wide range of legal issues and specializations. Our programs are based on a global perspective and an innovative approach to education. What’s more, the programs are adaptable so you can design them to match your unique professional ambitions.",
            url: "https://landings.ie.edu/",
            tagnames: ['practical approach', 'global perspective', 'innovation and technology', 'leading faculty', 'law', 'online', 'flexibility', 'paid']
        }
     ],
    
        culinary: [
        {
            title: "Institute of Culinary Education",
            description: "The premier recreational cooking school debuts online versions of our consistently sold-out classes with all-new menus and professional chef instruction via live video.",
            url:"https://www.ice.edu/newyork/free-online-cooking-classes",
            tagnames:['culinary','cooking','online','zoom','free','virtual']
        },
        {
            title: "Auguste Escoffer School of Culinary Arts",
            description: "Escoffier Boulder is an accredited institution by ACCET that offers an online diploma program in Culinary Arts and Operations. This program can give aspiring culinarians the skills and experience they need for rewarding careers in a number of different professional paths.",
            url:"https://www.escoffier.edu/explore/oncampus/online.php?category=PPC&source=Google&campaign=chef%20online%20degrees&gclid=CjwKCAjw4MP5BRBtEiwASfwALxpxIqWbvoDCqCuRwe93jCUwp5Kn4taw8E_RsqZoUE4p-gfBZjeHQRoC19kQAvD_BwE",
            tagnames:['culinary','cooking','online','virtual']
        },
        {
            title: "The Culinary Institute of America",
            description: "You love food. And you want to make it your life. If this sounds like you, then The Culinary Institute of America is the only place to be. Only at the CIA will you get the immersive hands-on learning and industry connections that prepare you to lead in the kitchen, the boardroom, or anywhere else you want to go in food.",
            url:"https://learn.ciachef.edu/food-is-big/?utm_source=adwords&utm_medium=cpc&utm_term=cooking%20school&utm_campaign=cia_priority_geos_culinary_generic_terms&_vsrefdom=CIA_google&gclid=CjwKCAjw4MP5BRBtEiwASfwALwlP3SbMvl8cfLkHhOV_AdWVp9umQJHOcqCwmQYZyPNoSJfYXfeNfBoCmxwQAvD_BwE",
            tagnames:['culinary','cooking']
        },
    ],
    art: [
        {
            title: "Visual Arts Center of New Jersey",
            description: "Online art classes for high school students",
            url:"https://www.artcenternj.org/school-studio/fall-semester-2020-teen-online-classes-and-workshops/",
            tagnames:['art','online','zoom']
        },
        {
            title: "MusicFirst",
            description: "Comprehensive Learning Management System for K-12 Music Education",
            url:"https://www.musicfirst.com/?gclid=CjwKCAjw4MP5BRBtEiwASfwAL60pCz-p9oRT0A_PjCen-MYqWb5lYocVcKGWy7whUCq-2aWWmHwqZxoC4GAQAvD_BwE",
            tagnames:['art','music','K-12']
        },
        {
            title: "Dreamyard Virtual Program",
            description: "- BRONX ARTS COLLECTIVE (DRAWING & PAINTING): Study a variety of art techniques and produce innovative original art pieces that make a statement. BRONX ACTING ENSEMBLE (THEATER & DRAMA): Learn acting and production; create unique pieces of theatre to open dialogue and transform our community.FASHION INTENSIVE: Learn garment design, construction and style; create pieces that showcase your unique identity and your cultural heritage",
            url:"https://www.dreamyard.com/summer2020",
            tagnames:[]
        }
    ],
    Business: [
        {
            title: "Business career exploring",
            description:"A hands-on program open to young men and women from the 6th grade to 20 years old with an interest in the many functional areas within a business, including Sales/Marketing, Operations, Finance/Accounting, Customer Service, Human Resources, and Information Technology.learning more about careers in the field of Business.",
            url: "https://www.exploring.org/get-involved/",
            tagnames:[    ]
        },
        {
            title: " School Partnership Program",
            descrpition:" The PENCIL School Partnership Program creates and supports partnerships between business and school leaders that leverage their collective energies to foster strong school leaders and prepare students for college and career success. PENCIL serves as a critical liaison in these partnerships, helping to recruit and match businesses with schools and providing hands-on support in the design, implementation, and evaluation of partnership activities.",
            url:"http://pencil.org/category/partnership-program/",
            tagnames:[],
            
        },
        {
            title: "PENCIL Internship Program",
            description: "PENCIL is a proud provide programming to over 125  students through the Department of Youth and Community Development’s Summer Bridge Program The Summer Bridge Program is open to all NYC residents between the ages of 16-21.  Summer Bridge is a paid work-based learning program.  Selected students will participate in online learning, career panels and an independent Workplace Challenge completed with input from professionals. All students complete 90 hours of remote activities and earn up to $1,000 stipend.",
            url:"https://pencil.org/category/internship/",
            tagnames:[]
        },
    ]
}
