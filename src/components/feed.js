import React from 'react'

function Feed() {
    const css=`.navbar {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        background-color: white;
        justify-content: space-around;
        width: 100%;
        border-bottom: 1px solid lightgray;
    }
    .navbar-menu {
        flex-grow: 0.5;
        justify-content: center;
    }
    .navbar-menu .navbar-item {
        flex-grow: 1;
        justify-content: center;
    }
    .navbar-menu .navbar-item .control {
        width: 50%;
    }
    .body-columns {
        margin-top: 10vh;
    }
    .card {
        margin-top: 5rem;
    }
    .card .header {
        padding: 5px 10px;
    }
    .card-footer .columns {
        width: 100%;
    }
    .card-footer .columns input {
        border: none;
        border-radius: 0;
        box-shadow: none;
    }
    .card-footer .columns .column:last-child {
        display: flex;
        align-items: center;
    }
    .card-footer .columns .column:last-child button {
        border: none;
    }
    .footer {
        margin-top: 10vh;
        padding: 2rem 1.5rem;
    }
    
    /* @media screen and (max-width: 786px){
        .navbar {
            justify-content: space-between;
        }
    } */`
  return (
    <div>
        <style>{css}</style>
    <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Photo Album - Free Bulma template</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet"/>
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="../css/instaAlbum.css"/>
    </head>

<body>
    <div class="columns body-columns">
        <div class="column is-half is-offset-one-quarter">
            <div class="card">
                <div class="header">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item has-text-centered">
                                <a href="">
                                    <i class="material-icons">favorite_border</i>
                                </a>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="">
                                        <i class="material-icons">chat_bubble_outline</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <p>
                            <strong>32 Likes</strong>
                        </p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="columns is-mobile">
                        <div class="column is-11">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="text" placeholder="Add a comment . . ."/>
                                </div>
                            </div>
                        </div>
                        <div class="column has-text-centered">
                            <button class="button">
                                <i class="material-icons">more_horiz</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card">
                <div class="header">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item has-text-centered">
                                <a href="">
                                    <i class="material-icons">favorite_border</i>
                                </a>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="">
                                        <i class="material-icons">chat_bubble_outline</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <p>
                            <strong>32 Likes</strong>
                        </p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="columns is-mobile">
                        <div class="column is-11">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="text" placeholder="Add a comment . . ."/>
                                </div>
                            </div>
                        </div>
                        <div class="column has-text-centered">
                            <button class="button">
                                <i class="material-icons">more_horiz</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div class="card">
                <div class="header">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item has-text-centered">
                                <a href="">
                                    <i class="material-icons">favorite_border</i>
                                </a>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="">
                                        <i class="material-icons">chat_bubble_outline</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <p>
                            <strong>32 Likes</strong>
                        </p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2018-1-1">12:02 PM - 1 May 2018</time>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="columns is-mobile">
                        <div class="column is-11">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="text" placeholder="Add a comment . . ."/>
                                </div>
                            </div>
                        </div>
                        <div class="column has-text-centered">
                            <button class="button">
                                <i class="material-icons">more_horiz</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <footer class="footer">
                <div class="container is-fluid">
                    <div class="content has-text-centered">
                        <p>
                            <strong>Bulma</strong> by
                            <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</body>
</div>
  )
}

export default Feed