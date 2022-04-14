import React from 'react'
/* import '../galery.css' */
function Order() {
  const css=`.title {
    font-weight: 2000;
    letter-spacing: -2px;
  }`
  
    return (
        <div>
    <head>
        <style>{css}</style>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
                        <div class="column has-text-centered ">
                            <h1 class="title is-1 ">How to Order</h1>
                            <p class="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
                                voluptate facere molestiae consequatur.</p>
                                <br/>
                                <div class="control">
                                <button type="submit" class="button is-medium has-text-weight-medium is-medium" onClick={()=>window.location.href="/order/1"} style={{backgroundColor:"black", color:"whitesmoke"}}>Next</button>
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

export default Order