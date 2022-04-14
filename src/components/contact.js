import React from 'react'
/* import '../galery.css' */
function Contact() {
  
  
    return (
        <div>
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Contact Form - Free Bulma template</title>
        <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon"/>
        <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <link rel="stylesheet" href="../css/contact.css"/>
    </head>
    
    <body>
    
   
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns is-8 is-variable ">
                        <div class="column is-two-thirds has-text-left">
                            <h1 class="title is-1">Contact Us</h1>
                            <p class="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
                                voluptate facere molestiae consequatur.</p>
                            <div class="social-media">
                                <a href="https://facebook.com" target="_blank" class="button is-light is-large"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                                <a href="https://instagram.com" target="_blank" class="button is-light is-large"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="https://twitter.com" target="_blank" class="button is-light is-large"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div class="column is-one-third has-text-left">
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input is-medium" type="text"/>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input is-medium" type="text"/>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Message</label>
                                <div class="control">
                                    <textarea class="textarea is-medium"></textarea>
                                </div>
                            </div>
                            <div class="control">
                                <button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
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
    
    </body>
    </div>
    )
    }

export default Contact