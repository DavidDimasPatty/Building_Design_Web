import React from 'react'
import {Helmet} from 'react-helmet'
import '../style.css'
function Home() {
  return (
    <div>
      
   <Helmet>
   <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;800&display=swap" rel="stylesheet"/>
    <script src="https://kit.fontawesome.com/15181efa86.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/css/hello-parallax.css"/>
</Helmet>

    
  

  <body>
           <nav class="navbar" role="navigation" aria-label="main navigation" style={{background: "url(data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.4296875%200%22%20%2F%3E%3C%2Ffilter%3E%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E), linear-gradient(52deg, wheat 0%, whitesmoke 71%)", position: "sticky", top: "0", borderRadius:"1px", height:"20px"} }>
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <b>Your Design</b>
            {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href='/'>
              Home
            </a>

            <a class="navbar-item" href="/galery">
              Gallery
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item" href='/about'>
                  About
                </a>
                <a class="navbar-item" href='/employee'>
                  Employee
                </a>
                <a class="navbar-item" href='/contact'>
                  Contact Us
                </a>
               {/*  <hr class="navbar-divider"/>
                <a class="navbar-item">
                  Report an issue
                </a> */}
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
              <a href="/login" class="button is-white is-inverted">Log In<i class="fad fa-chevron-right"></i></a>
              <a href="/signup" class="button is-white is-inverted">Sign Up<i class="fad fa-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </nav>


      
    <section class="hero1 is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 ">Hello Your Design</h1>
          <h2 class="subtitle">A simple boilerplate for setting up parallax <br/> using the Bulma Hero container.</h2>
          <a href="#" class="button is-white is-medium is-inverted">Learn More&ensp;<i class="fad fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
    <section id="parallax-1" class="hero is-large ">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-offset-6">
              <h1 class="title is-1 ">Lorem Ipsum</h1>
              <hr class="content-divider"/>
              <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit explicabo amet magni illum eum voluptate! Eveniet voluptatem nam magnam necessitatibus.</h2>
              <a href="#" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="parallax-2" class="hero is-large ">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <h1 class="title is-1 ">Dolor Sit</h1>
              <hr class="content-divider"/>
              <h2 class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque veritatis sequi natus minima distinctio ullam deleniti quasi quisquam autem deserunt.</h2>
              <a href="#" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="parallax-3" class="hero is-large ">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-offset-6">
              <h1 class="title is-1 ">Amet Consectetur</h1>
              <hr class="content-divider"/>
              <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minus nam necessitatibus neque in perferendis eveniet dolorum assumenda dolores accusamus.</h2>
              <a href="#" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="cta1 va1">
      <div class="container"/>
        <div class="columns">
              <div class="column is-6">
                    <h1 class="title is-1 ">Adipisicing Elit</h1>
                    <hr class="content-divider"/>
                    <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut nulla maiores, beatae voluptas sunt excepturi deserunt vero. Beatae est ratione quia neque molestias, cum asperiores quibusdam rem illum, debitis dolorem natus, eos fuga eveniet numquam ab officia reiciendis inventore. Tempore repudiandae exercitationem quisquam? Fugiat!</h2>
              </div>
              <div class="column is-5">
                    <h1 class="title is-1 ">Adipisicing Elit</h1>
                    <hr class="content-divider"/>
                    <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut nulla maiores, beatae voluptas sunt excepturi deserunt vero. Beatae est ratione quia neque molestias, cum asperiores quibusdam rem illum, debitis dolorem natus, eos fuga eveniet numquam ab officia reiciendis inventore. Tempore repudiandae exercitationem quisquam? Fugiat!</h2>
          
          </div>
        </div>

    </section>
    <footer class="footer1">
      <div class="content has-text-centered" style={{color:"black"}}>
        <p>
          <strong style={{color:"black"}}>Bulma</strong> by <a href="https://jgthms.com" style={{color:"black"}}>Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php" style={{color:"black"}}>MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" style={{color:"black"}}>CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </body>
  </div>
  )
}

export default Home