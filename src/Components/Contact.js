import React, { Component } from 'react';

class Contact extends Component {
  render() {
   if(this.props.data){
      }
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
               </div>
            <div className="ten columns">
                  <p className="lead">Submit for references or use my LinkedIn
                  </p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" value="" size="35" id="contactName" name="contactName" />
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" value="" size="35" id="contactEmail" name="contactEmail" />
                  </div>
                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" value="" size="35" id="contactSubject" name="contactSubject" />
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>
                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form> 
               
               <div id="message-warning"> Error boy</div>
               
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
            </div>
            <aside className="four columns footer-widgets">
               <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="carlos-lopez-clo2go"><a className="LI-simple-link" href='https://www.linkedin.com/in/carlos-lopez-clo2go?trk=profile-badge'>Carlos Lopez</a></div>
            </aside>
      </div>
      
   </section> 

    );
  }
}

export default Contact;