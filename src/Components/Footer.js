import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="row">
         <div className="twelve columns">
            <ul className="social-links">
               <li><a href="https://www.facebook.com/clo2go"><i className="fa fa-facebook"></i></a></li>
               <li><a href="https://twitter.com/clo2go"><i className="fa fa-twitter"></i></a></li>
               <li><a href="https://plus.google.com/u/0/105099422234188892292"><i className="fa fa-google-plus"></i></a></li>
               <li><a href="https://www.linkedin.com/in/carlos-lopez-clo2go"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="https://github.com/clo2go"><i className="fa fa-github"></i></a></li>
               <li><a href="https://stackoverflow.com/users/6657094/carlos-lopez"><i className="fa fa-stack-overflow"></i></a></li>
               <li><a href="https://instagram.com/clo2go/"><i className="fa fa-instagram"></i></a></li>
            </ul>
            <ul className="copyright">
               <li>&copy; Copyright 2017 Clo2goCo</li>   
            </ul>
         </div>
         <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
   </footer> 
    );
  }
}

export default Footer;