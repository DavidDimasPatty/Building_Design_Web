import React from 'react'
/* import '../galery.css' */
function About() {
    document.addEventListener('DOMContentLoaded', () => {
      
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
  
          // Add a click event on each of them
          $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
  
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
  
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
  
            });
          });
        }
    })
  
    return (
        <div>
        <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Blog - Tailsaw </title>
        <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.3/css/bulma.min.css" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <link rel="stylesheet" href="../css/bulma-divider.min.css"/>
     
      </head>
      
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
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider"/>
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
              <a href="#" class="button is-white is-inverted">Log In<i class="fad fa-chevron-right"></i></a>
              <a href="#" class="button is-white is-inverted">Sign Up<i class="fad fa-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </nav>

        <section class="hero ">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <figure class="image is-16by9">
                    <img src="../images/first-post.png" alt=""/>
                  </figure>
                </div>
              </div>
      
              <section class="section">
                <div class="columns">
                  <div class="column is-8 is-offset-2">
                    <div class="content is-medium">
                      <h2 class="subtitle is-4">December 25, 2022</h2>
                      <h1 class="title">Getting Started</h1>
                      <p>This is a starter template for creating a beautiful, customizable blog with minimal
                        effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                        configuration settings can be found in config</p>
                    </div>
                  </div>
                </div>
              </section>
      
              <div class="is-divider"></div>
      
              <section class="section">
                <div class="columns">
                  <div class="column is-8 is-offset-2">
                    <div class="content is-medium">
                      <h2 class="subtitle is-4">December 25, 2022</h2>
                      <h1 class="title">Getting Started</h1>
                      <p>This is a starter template for creating a beautiful, customizable blog with minimal
                        effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                        configuration settings can be found in config</p>
                    </div>
                  </div>
                </div>
              </section>
      
      
            </div>
          </div>
        </section>
      \
        <section class="section">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <div class="container has-text-centered is-fluid">
                <div class="hero is-light">
                  <div class="hero-body">
                  <h2 class="subtitle is-5 has-text-grey">December 23, 2022</h2>
                      <h1 class="title has-text-black is-3">This is Us</h1>
                      <p class="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                        /source/404.blade.php.
                        To preview the 404 page, you can visit /404 in your browser. Depending...</p>
 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      
        <section class="hero ">
          <div class="hero-body">
            <div class="container">
      
              <section class="section">
                <div class="columns is-variable is-8">
                  <div class="column is-5 is-offset-1 ">
                    <div class="content is-medium">
                      <h2 class="subtitle is-5 has-text-grey">December 23, 2022</h2>
                      <h1 class="title has-text-black is-3">Custom 404 Pages</h1>
                      <p class="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                        /source/404.blade.php.
                        To preview the 404 page, you can visit /404 in your browser. Depending...</p>
                    </div>
                  </div>
                  <div class="column is-5">
                    <div class="content is-medium">
                      <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                      <h1 class="title has-text-black is-3">Fuse Search</h1>
                      <p class="has-text-dark">To provide fast, local search of your blog, this starter template comes with a
                        pre-built Vue.js
                        component that uses Fuse.js. Fuse.js is a "lightweight fuzzy-search library with no...</p>
                    </div>
                  </div>
                </div>
              </section>
      
              <div class="is-divider"></div>
      
              <section class="section">
                <div class="columns is-variable is-8">
                  <div class="column is-5 is-offset-1">
                    <div class="content is-medium">
                      <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                      <h1 class="title has-text-black is-3">Getting Started</h1>
                      <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                        minimal
                        effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                        configuration settings can be found in config</p>
                    </div>
                  </div>
                  <div class="column is-5">
                    <div class="content is-medium">
                      <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                      <h1 class="title has-text-black is-3">Getting Started</h1>
                      <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                        minimal
                        effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                        configuration settings can be found in config</p>
                    </div>
                  </div>
                </div>
              </section>
      
      
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

export default About