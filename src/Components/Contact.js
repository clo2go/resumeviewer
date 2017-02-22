import React, { Component } from 'react';

class Contact extends Component {
  render() {
   if(this.props.data){
      }
    return (
      <section id="contact">
         <div className="row section-head">
            <p className="lead">Contact for references</p>
         </div>

         <div className="linkedIn">
            <div className="li-container">
               <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="carlos-lopez-clo2go"><a className="LI-simple-link" href='https://www.linkedin.com/in/carlos-lopez-clo2go?trk=profile-badge'>Carlos Lopez</a></div>
            </div> 
         </div>
     </section> 

    );
  }
}

export default Contact;