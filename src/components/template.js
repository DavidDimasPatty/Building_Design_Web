import React from 'react'
import $ from "jquery";
function Header() {
  const css=`
  position: initial;
  right: 0;
  left: 0;
  z-index: 1030;`
  
  document.addEventListener('DOMContentLoaded', function() {
    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');

    if (menus.length && dropdowns.length) {
        for (var i = 0; i < menus.length; i++) {
            menus[i].addEventListener('click', function() {
                for (var j = 0; j < dropdowns.length; j++) {
                    dropdowns[j].classList.toggle('is-active');
                }
            });
        }
    }
    (function() {
      var burger = document.querySelector('.burger');
      var menu = document.querySelector('#'+burger.dataset.target);
      burger.addEventListener('click', function() {
          burger.classList.toggle('is-active');
          menu.classList.toggle('is-active');
      });
  })();

  document.addEventListener("DOMContentLoaded", function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener("click", function() {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
  
  
    // Smooth Anchor Scrolling
  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
  });
  
  // When the user scrolls down 20px from the top of the document, show the scroll up button
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("toTop").style.display = "block";
    } else {
      document.getElementById("toTop").style.display = "none";
    }
  }
  
  // Preloader
  $(document).ready(function($) {
    $(".preloader-wrapper").fadeOut();
    $("body").removeClass("preloader-site");
  });
  $(window).on("load", function() {
    var Body = $("body");
    Body.addClass("preloader-site");
  });

 
});
  return (
      
           <nav class="navbar navbar-expand-lg navbar-light fixed-top" role="navigation" aria-label="main navigation" style={{background: "url(data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.4296875%200%22%20%2F%3E%3C%2Ffilter%3E%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E), linear-gradient(52deg, wheat 0%, whitesmoke 71%)", borderRadius:"1px", height:"20px", position:"sticky",
            right: "0",
           left: "0",
           zIndex: "1030"} }>
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
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

            <a class="navbar-item" href="/order">
              Order
            </a>

            <a class="navbar-item" href="/feed">
              Feeds
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
              <a href="/login" class="button is-white is-inverted">Log In<i ></i></a>
              <a href="/signup" class="button is-white is-inverted">Sign Up<i ></i></a>
              </div>
            </div>
          </div>
        </div>
      </nav>


  
  )
}

export default Header