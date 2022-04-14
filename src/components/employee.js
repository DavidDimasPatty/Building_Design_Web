import React from 'react'
/* import '../galery.css' */
function Employee() {
    return (
        <div>
        <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon"/>
                <title>Modal Cards - Free Bulma template</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/css/OverlayScrollbars.min.css'/>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
              
                <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
                <link rel="stylesheet" type="text/css" href="../css/hero.css"/>
                <link rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
          
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
                <a class="navbar-item"  href='/about'>
                  About
                </a>
                <a class="navbar-item" href='/employee'>
                  Employee
                </a>
                <a class="navbar-item" href='/contact'>
                  Contact Us
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
        <div class="box cta">
          <p class="has-text-centered">
            <span class="tag is-primary">New</span> Here we have modal cards. When you click on them they will open functional modal examples.
          </p>
        </div>
        
        <section class="section">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <div class="container has-text-centered is-fluid">
                <div class="hero is-light">
                  <div class="hero-body">
                  <h2 class="subtitle is-5 has-text-grey">December 23, 2022</h2>
                      <h1 class="title has-text-black is-3">Our Employee</h1>
                      <p class="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                        /source/404.blade.php.
                        To preview the 404 page, you can visit /404 in your browser. Depending...</p>
 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container">
          <div class="columns features">
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click on image above</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Tempor orci dapibus faber in.</h4>
                    <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                    sed risus.</p>
                    <span class="button is-link modal-button" data-target="modal-card">Modal Card</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4 modal-button" data-target="modal-image">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click anywhere on card</h4>
                    <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <span class="button is-link modal-button" data-target="modal-image">Image modal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns features">
            <div class="column is-4 modal-button" data-target="modal-card">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click anywhere on card to <br/>expand into modal card</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <span class="button is-link modal-button">Modal card</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly image" class="modal-button" data-target="modal-image4"/>
                  </figure>
                </div>
                <div class="card-content  modal-button" data-target="modal-card2">
                  <div class="content">
                    <h4>Click anywhere on card to <br/>expand into modal card - header image expands into bigger image</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis.</p>
                    <span class="button is-link modal-button">Modal card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <div class="container has-text-centered is-fluid">
                <div class="hero is-light">
                  <div class="hero-body">
                  <h2 class="subtitle is-5 has-text-grey">December 23, 2022</h2>
                      <h1 class="title has-text-black is-3">Developer</h1>
                      <p class="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                        /source/404.blade.php.
                        To preview the 404 page, you can visit /404 in your browser. Depending...</p>
 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container">
          <div class="columns features">
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click on image above</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Tempor orci dapibus faber in.</h4>
                    <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                    sed risus.</p>
                    <span class="button is-link modal-button" data-target="modal-card">Modal Card</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4 modal-button" data-target="modal-image">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click anywhere on card</h4>
                    <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <span class="button is-link modal-button" data-target="modal-image">Image modal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns features">
            <div class="column is-4 modal-button" data-target="modal-card">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click anywhere on card to <br/>expand into modal card</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <span class="button is-link modal-button">Modal card</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly image" class="modal-button" data-target="modal-image4"/>
                  </figure>
                </div>
                <div class="card-content  modal-button" data-target="modal-card2">
                  <div class="content">
                    <h4>Click anywhere on card to <br/>expand into modal card - header image expands into bigger image</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis.</p>
                    <span class="button is-link modal-button">Modal card</span>
                  </div>
                </div>
              </div>
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
      
        <div id="modal-card" class="modal modal-fx-3dSlit">
          <div class="modal-background"></div>
          <div class="modal-content is-tiny">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="http://www.radfaces.com/images/avatars/linda-barret.jpg" alt="linda barret avatar"/>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Jane Doe</p>
                    <p class="subtitle is-6">@jane_doe</p>
                  </div>
                </div>
                <div class="content">
                  Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm tellin' you way up north bookin' it can't get theyah from heeyah native bean suppah whawf Powrtland Museum of Aht, back woods hawsun around the pit mummah Yessah, mummah muckle riyht on'ta her
                  Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub If you can't stand the wintah you don't deserve the summah slower than molasses going uphill in January.
                  Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye. Zhro y'hah
                  nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br/>
                  <time datetime="2018-02-02">12:45 AM - 20 June 2018</time>
                </div>
              </div>
            </div>
          
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
      
        <div id="modal-card2" class="modal modal-fx-3dSlit">
          <div class="modal-background"></div>
          <div class="modal-content is-tiny">
          
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="http://www.radfaces.com/images/avatars/linda-barret.jpg" alt="linda barret avatar"/>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Jane Doe</p>
                    <p class="subtitle is-6">@jane_doe</p>
                  </div>
                </div>
                <div class="content">
                  Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm tellin' you way up north bookin' it can't get theyah from heeyah native bean suppah whawf Powrtland Museum of Aht, back woods hawsun around the pit mummah Yessah, mummah muckle riyht on'ta her
                  Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub If you can't stand the wintah you don't deserve the summah slower than molasses going uphill in January.
                  Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye. Zhro y'hah
                  nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br/>
                  <time datetime="2018-02-02">12:45 AM - 20 May 2018</time>
                </div>
              </div>
            </div>
       
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
       
        <div id="modal-image2" class="modal modal-fx-3dSlit">
          <div class="modal-background"></div>
          <div class="modal-content is-huge is-image">
          
            <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="image"/>
       
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
       
        <div id="modal-image4" class="modal modal-fx-3dSlit">
          <div class="modal-background"></div>
          <div class="modal-content is-huge is-image">
          
            <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly"/>
         
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
        
        <div id="modal-image" class="modal modal-fx-superScaled">
          <div class="modal-background"></div>
          <div class="modal-content  is-image">
          
            <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image"/>
            <img src="https://source.unsplash.com/zFrUz_tNjCY" alt="placeholder"/>
          
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
        <script src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/js/OverlayScrollbars.min.js'></script>  
        <script src="../js/wild.js"></script>
           
      </body>
      </div>
    )
  }


export default Employee