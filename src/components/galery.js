import React from 'react'
import $ from 'jquery'

/* import '../galery.css' */
function Galery() {
  var requestframe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
  // IE Fallback, you can even fallback to onscroll
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

$('#start').ready(function(){

var drawable = false;

setTimeout(function(){
  drawable = false;
  drawlines([["drag", 80,70],["drag", 80,90],["drag", 75,82.5],["drag", 85,82.5],["drag", 80,90],[],[],[],[],[],["click", 80,90]]);
}, 8000);

var introArray = [
  [["drag", 10,50],["drag", 20,70],["drag", 30,60],["drag", 40,80],["drag", 50,70],["drag", 60,40],["drag", 70,50],["drag", 80,30],["drag", 90,50],[],[],[],[],[],["click", 90,50]],
  [["drag", 30,40],[],["drag", 40,60],[],["drag", 70,20],[],[],[],[],[],["click", 70,20]],
  [["drag", 35,70],[],["drag", 50,10],[],["drag", 65,70],[],["drag", 30,30],[],["drag", 70,30],[],["drag", 35,70],[],[],[],[],[],["click", 35,70]],
  [["drag", 50,35],["drag", 60,20],["drag", 70,35],["drag", 50,65],["drag", 30,35],["drag", 40,20],["drag", 50,35],[],[],[],[],[],["click", 50,35]]
];

var whichDesign = Math.floor((Math.random() * introArray.length) + 0);


$('#start').on('mouseup',function(e){
 var mousecout = 0;
 var draggable = false;

  setTimeout(function(){
    draggable = false;
  }, 100);
});

$('#start').on('click tap',function(e){
  new point({
    x: e.pageX,
    y: e.pageY
  });
});

// Contexts
var canvas = $('<canvas/>')[0];
canvas.height = $('#start').height();
canvas.width = $('#start').width();
var context = canvas.getContext('2d');
$('#start').append(canvas);



// Timing Variables
var startTime = new Date().getTime();
var currentTime = 0;
var lineArray = [];

$('#start').on("mousedown", function(l) {
  if(drawable == true){
    var count = 0;
    new line({x: l.pageX, y: l.pageY});
    var log = function(e){
      if(drawable == true){
        count++;
        if(count%5 == true){
          new pointSM({
            x: e.pageX,
            y: e.pageY
          });
          lineArray.push([e.pageX,e.pageY]);
        }
      } else {
        lineArray = [];
        lines = [];
      }
    };
    $(document).on("mousemove", log).one("mouseup", function(){
      $(document).off("mousemove", log);
      for(var i = 0; i < lineArray.length; i++){
        new pointSM({
          x: lineArray[i][0],
          y: lineArray[i][1]
        });
      }
      lineArray = [];
      lines = [];
    });
  }
});


// Particles
var particles = [],
    points = [],
    lines = [];

var particle = function(coords){
  this.startTime = new Date().getTime();
  this.byTime = (this.startTime/1000) - (startTime/1000);


  this.sides = Math.floor((Math.random() * 6) + 3);
  this.radius = Math.floor((Math.random() * 18) + 8);
  this.lineWidth = (Math.random() * 4) + 2;

  this.startPosition = coords;

  this.direction = {
    x: (Math.floor((Math.random() * 500) + 300)) - 500,
    y: (Math.floor((Math.random() * 500) + 300)) - 500
  };

  this.id = particles.length;
  particles.push(this);
};

particle.prototype.draw = function(){
  this.x = this.startPosition.x + (this.direction.x * (currentTime-this.byTime));
  this.y = this.startPosition.y + (this.direction.y * (currentTime-this.byTime));

  if(this.x > canvas.width + 100 || this.x < -100) {
    delete particles[this.id];
  }
  if(this.y > canvas.height + 100 || this.y < -100) {
    delete particles[this.id];
  }

  context.save();

  // Map the first vertice to start with
  var xPos;
  var yPos;

  context.moveTo(this.x,this.y);
  context.beginPath();
  // Loop through the vertices and map the lines
  for (var i = 0; i <= this.sides; i++) {
    // Determine the coordinates of the next vertex
    xPos = this.x + this.radius * Math.cos(2 * Math.PI * i / this.sides);
    yPos = this.y + this.radius * Math.sin(2 * Math.PI * i / this.sides);
    // Set line to the next vertex
    context.lineTo(xPos,yPos);
  }
  context.strokeStyle = '#FFFFFF';
  //context.strokeStyle = '#FFFFFF';

  context.lineWidth = this.lineWidth;
  context.lineJoin = 'round';


  context.stroke();
  //context.fill();
  context.moveTo(0,0);
  context.closePath();
  context.restore();
}

var point = function(coords){
  this.position = coords;
  this.radius = 30;
  this.scale = 1;

  this.startTime = new Date().getTime();
  this.byTime = (this.startTime/1000) - (startTime/1000);

  for(var i = 0; i < 6; i++){
    new particle(coords);
  }
  points.push(this);
};

point.prototype.draw = function(){
  this.scale = this.radius + ((currentTime-this.byTime) * 70);
  context.beginPath();
  context.arc(this.position.x,this.position.y,this.scale,0,2*Math.PI);
  context.fillStyle = 'rgba(0,0,0,'+ (0.25 - ((currentTime-this.byTime) / 2)) +')';
  context.fill();
  context.closePath();
}

var pointSM = function(coords){
  this.position = coords;

  for(var i = 0; i < 2; i++){
    new particle(coords);
  }
};

var line = function(coords){
  this.position = coords;

  lines.push(this);
}

line.prototype.draw = function(){
  context.beginPath();
  for(var i = 0; i < lineArray.length; i++){
    if(i != undefined){
      context.lineTo(lineArray[i][0],lineArray[i][1]);
    }
  }
  context.strokeStyle = '#EEEEEE';
  context.lineWidth = 4;
  context.lineJoin = 'round';
  context.stroke();

  context.moveTo(0,0);
  context.closePath();
}

function frameIt(){
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < points.length; i++) {
    if(points[i] != undefined){
      points[i].draw();
    }
  }
  for (var i = 0; i < particles.length; i++) {
    if(particles[i] != undefined){
      particles[i].draw();
    }
  }
  for (var i = 0; i < lines.length; i++) {
    if(lines[i] != undefined){
      lines[i].draw();
    }
  }
}

function loop(){


  var now = new Date().getTime();
  currentTime = (now - startTime) / 1000;

  frameIt();
  requestframe(loop);
}

function init(){
  frameIt();
  loop();
}
init();
drawlines(introArray[whichDesign]);
function drawlines(theArray){
  (function myLoop (i) {    
    new line();
    setTimeout(function () {   
      var l = theArray.length - i;
      if(theArray[l][0] == 'drag'){
        new pointSM({
          x: canvas.width * (theArray[l][1] / 100),
          y: canvas.height * (theArray[l][2] / 100)
        }); 
        lineArray.push([canvas.width * (theArray[l][1] / 100),canvas.height * (theArray[l][2] / 100)]);
      } else if (theArray[l][0] == 'click'){
        new point({
          x: canvas.width * (theArray[l][1] / 100),
          y: canvas.height * (theArray[l][2] / 100)
        }); 

        for(var x = 0; x < lineArray.length; x++){
          new pointSM({
            x: lineArray[x][0],
            y: lineArray[x][1]
          });
        }

        lineArray = [];
        drawable = true;
      }

      if (--i) myLoop(i);
    }, 50)
  })(theArray.length);  
}
});
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
     
        <div class="box cta">
          <p class="has-text-centered" style={{fontSize:"1.5rem", fontWeight:"100"}}>
            <span class="tag is-primary">New</span> Welcome To Our Gallery! 
          </p>
        </div>
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
                    <span class="button modal-button" data-target="modal-image2" style={{backgroundColor:"black",color:'whitesmoke'}}>Image modal</span>
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
                    <span class="button is-link modal-button" data-target="modal-card" style={{backgroundColor:"black",color:'whitesmoke'}}>Modal Card</span>
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
                    <span class="button is-link modal-button" data-target="modal-image" style={{backgroundColor:"black",color:'whitesmoke'}}>Image modal</span>
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
                    <span class="button is-link modal-button"  style={{backgroundColor:"black",color:'whitesmoke'}}>Modal card</span>
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
                    <span class="button is-link modal-button"  style={{backgroundColor:"black",color:'whitesmoke'}}>Modal card</span>
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
           
      </body>
      </div>
    )
  }


export default Galery