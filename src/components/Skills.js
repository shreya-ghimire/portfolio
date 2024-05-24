import p1 from "../assets/img/1.png";
import p2 from "../assets/img/2.png";
import p3 from "../assets/img/3.png";
import p4 from "../assets/img/4.png";
import p5 from "../assets/img/5.png";
import p6 from "../assets/img/6.png";
import p7 from "../assets/img/7.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <div className="skill_grave">
                                <div className="skills_list"></div>
                                <img src={p1} alt="Image" />
                                <h5>Programming</h5>
                              </div>
                                
                            </div>
                            <div className="item">
                                <img src={p2} alt="Image" />
                                <h5>Front End Development</h5>
                            </div>
                            <div className="item">
                                <img src={p3} alt="Image" />
                                <h5>Backend Developement</h5>
                            </div>
                            <div className="item">
                                <img src={p4} alt="Image" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={p5} alt="Image" />
                                <h5>Computer Science Core</h5>
                            </div>
                            <div className="item">
                                <img src={p6} alt="Image" />
                                <h5>Content Writing</h5>
                            </div>
                            <div className="item">
                                <img src={p7} alt="Image" />
                                <h5>Data Visualization</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
