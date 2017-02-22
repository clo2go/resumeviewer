import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var portfolio=this.props.data.projects.map(function(project) {
        var imageURL ='images/portfolio/' +project.image;
          return <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={project.modal} title="">
                        <img alt="" src={imageURL} /> 
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <a href={project.url}>{project.title}</a>
                                <p>{project.category}</p>
                            </div>
                          </div>
                        <div className="link-icon"><i className="icon-plus"></i></div>
                      </a>
                    </div>
                  </div> 
        });
      }
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          	   {portfolio}
            </div>
         </div>
      </div> 
   </section> 
    );
  }
}

export default Portfolio;