import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* Header */}
  <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero">
            <h1><span>L</span>orenz Genesis M. <span>R</span>eyes</h1>
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#services" data-after="Service">Biography</a></li>
            <li><a href="#Skills" data-after="Skills">Skills</a></li>
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* End Header */}


  {/* Hero Section  */}
  <section id="hero">
    <div class="hero container">
      <div>
        <h1>Como estas, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>Lorenz <span></span></h1>
        <a href="#projects" type="button" class="cta">Portfolio</a>
      </div>
    </div>
  </section>
  {/* End Hero Section  */}

  {/* Service Section */}
  <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">  BIOG<span>R</span>APHY</h1>
        <br />
        <p>My name is <strong>Lorenz Genesis M. Reyes</strong>, born on January 27, 2004, in Calumpit, Corazon, Bulacan. I’m a proud <strong>Filipino</strong> who has been studying at <strong>La Verdad Christian College</strong> since Grade 7 and am now in my 3rd year of college. Throughout my life, I’ve always been passionate about learning and improving myself, especially when it comes to new technologies. My goal is to become an intelligent and successful person who can use that success to help others and make a difference.</p>

<br />

<p>I love staying active, with hobbies such as cycling, lifting, and badminton helping me stay fit and disciplined. But more than just personal achievements, my family—my sister, mother, father, and everyone else—holds a special place in my heart. They are my motivation to keep pushing forward.</p>

<br />

<p>I have big dreams, not only to achieve success in my career but also to use that success to contribute to charity and help those in need. I believe that once I’m in a better financial position, I can give back to my community. Additionally, I aspire to create my own family in the future and build a loving and supportive environment, just like the one I grew up in.</p>

<br />

<p>In everything I do, I strive to be a good person, always willing to learn, grow, and help others along the way.</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br id="Skills"/>
      <br />
      <br />
      <br />
      <br /> 
      <br />
      <h1 class="section-title"><span>Sk</span>ills</h1>
      <br />
      <br />
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>HTML</h2>
          <p>I am skilled in HTML (Hypertext Markup Language), the foundational language for creating web pages. I can structure content using various HTML elements, including headings, paragraphs, links, and multimedia. My understanding of semantic HTML ensures that web content is accessible and meaningful, improving usability for both users and search engines, which is crucial for effective web development.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>CSS</h2>
          <p>I excel in CSS (Cascading Style Sheets), which allows me to style and layout web pages effectively. With CSS, I can control colors, fonts, spacing, and overall presentation, ensuring a visually appealing experience. I also implement responsive design techniques, enabling websites to adapt seamlessly to different screen sizes and devices, which enhances user engagement and accessibility.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Python</h2>
          <p>I am proficient in Python, a versatile and high-level programming language. I use Python for various applications, including web development, data analysis, and automation. Its readability and extensive libraries enable me to write efficient code, streamlining complex tasks. My experience with frameworks like Flask and Django allows me to build robust web applications that meet user needs.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>React</h2>
          <p>I have experience in React, a powerful JavaScript library for building dynamic user interfaces. With React, I create reusable components that manage their own state, improving code organization and efficiency. My proficiency in React's virtual DOM enhances application performance, allowing for fast updates and interactions. This skill enables me to develop interactive and engaging web applications for users.</p>
        </div>
      </div>
    </div>
  </section>
  {/* End Service Section */}

  {/* Projects Section */}
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Recent <span>Projects</span></h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
          <h1><a href="https://rawcdn.githack.com/O127Lorenz/-webdev2-midterm-project/ef90d62207ce4adcde92cc42080ce02b4129f628/WADD%20MIDTERMS/index.html" target="_blank" class="project-button">Project 1</a></h1>
            <h2>Post Management Application</h2>
            <br />
            <p>This project is a post management application that includes user authentication and personalized content. Built using web development technologies, the application features a login page that allows users to securely access their accounts. Once logged in, each user can view and manage posts specific to their account, ensuring a personalized experience. The design focuses on user accessibility and interaction, with a clean and responsive interface for easy navigation. This project demonstrates skills in implementing authentication systems and creating dynamic content tailored to individual users, making it a comprehensive example of full-stack development. </p>
          </div>
          <div class="project-img project-img-1">
                    <img src="./img/project-1.png" alt="Project 1 Image" />
                </div>
        </div>
        <div class="project-item">
          <div class="project-info">
          <h1><a href="https://symphonious-torrone-ab997a.netlify.app/" target="_blank" class="project-button">Project 2</a></h1>
            <h2>Responsive Portfolio Website</h2>
            <br />
            <p>This project is a responsive portfolio website designed to showcase personal projects, skills, and achievements. Built using HTML, CSS, and JavaScript, the portfolio adapts seamlessly to various screen sizes, ensuring an optimal viewing experience on desktops, tablets, and mobile devices. The clean and modern design highlights the content, while intuitive navigation allows visitors to explore different sections effortlessly. This project demonstrates expertise in responsive web design and front-end development, providing a professional platform for presenting past work and personal information.</p>
          </div>
          <div class="project-img project-img-2">
                    <img src="./img/project-2.png" alt="Project 2 Image" />
                </div>
        </div>
        <div class="project-item">
          <div class="project-info">
          <h1><a href="https://rawcdn.githack.com/O127Lorenz/Calculator/9908eefa31d62962843ebb527719c24f350c9301/Calculator-using-HTML-CSS-and-JavaScript-master/index.html" target="_blank" class="project-button">Project 3</a></h1>
            <h2>Calculator Built with HTML, CSS, and JavaScript</h2>
            <br />
            <p>This project is a simple yet functional calculator application developed using HTML, CSS, and JavaScript. The calculator performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It features an intuitive user interface designed with HTML for the structure and CSS for styling, ensuring a clean and user-friendly experience. JavaScript is used to handle the calculator's logic, enabling the interaction and functionality needed to process user inputs and display results dynamically. This project serves as a hands-on example for practicing front-end development, allowing developers to gain experience in creating interactive web applications.</p>
          </div>
          <div class="project-img project-img-3">
                    <img src="./img/project-3.png" alt="Project 3 Image" />
                </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Projects Section */}

  {/* About Section */}
  <section id="about">
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <img src="./img/rp.jpg" alt="img"/>
        </div>
      </div>
      <div class="col-right">
      <h1 className="section-title">
            About <span>me</span>
        </h1>
        <h2>BSIS-3,La Verdad Student</h2>
        <p>I am a hardworking student who is dedicated to helping my parents and supporting my family. I strive to excel in my studies and aim to secure a position in a reputable company upon graduation, where I can apply my skills and continue to grow professionally.</p>
          <a href="../public/lgmr.pdf" class="cta" target="_blank" download>Download Resume </a>
      </div>
    </div>
  </section>
  {/* End About Section */}

  {/* Contact Section */}
  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+639 70 496 5143</h2>
            <h2>+69 25464 123 1234</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2><a href="mailto:lorenzgenesisreyes@student.laverdad.edu.ph">lorenzgenesisreyes@student.laverdad.edu.ph</a></h2> 
            <h2><a href="mailto:lorenzreyes2004@gmail.com">lorenzreyes2004@gmail.com</a></h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>#376 MCARTHUR HIGHWAY CORAZON CALUMPIT, BULACAN</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}

  {/* Footer */}
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>Lorenz</span>Genesis <span>M.</span>Reyes</h1>
      </div>
      <h2>LA VERDARIAN</h2>
      <div class="social-icon">

      <div class="social-item">
  <a href="https://www.facebook.com/lorenzgenesis.reyes.5" target="_blank">
    <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="Facebook" />
  </a>
</div>

<div class="social-item">
  <a href="https://www.instagram.com/reyeslorenzgenesis/profilecard/?igsh=MXZkNmhyaTNkbDh6Nw==" target="_blank">
    <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram" />
  </a>
</div>
        
      </div>
      <p>Copyright © 2024 LOlens_. All rights reserved</p>
    </div>
  </section>
  {/* End Footer */}
    </>
  )
}

export default App
