import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  { }
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>July(2024)-Present</span>
                      </h2>
                      <p>
                        I am currently working as <b>Technical Lead</b> at{' '}
                        <a target='_blank' href='https://www.infovision.com/'>
                          <b>Infovision Labs India Pvt. Ltd.</b>
                        </a>{' '}
                        and backend development is my professional skills.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>July(2022)-June(2024)</span>
                      </h2>
                      <p>
                        I was working as <b>Senior Software Engineer</b> at{' '}
                        <a target='_blank' href='https://www.cigres.com/'>
                          <b>Cigres Technologies Private Limited.</b>
                        </a>

                        <section className={classes.section}>
                          <br />
                          <p className={classes.paragraph}>
                            Responsibilities:
                          </p>
                          <p className={classes.paragraph}>
                            Managing a development team of four members, fostering smooth workflow and effective teamwork.
                          </p>
                          <p className={classes.paragraph}>
                            Participating in coding and implementation processes, playing a key role in project accomplishments.
                          </p>
                          <p className={classes.paragraph}>
                            Formulating strategies to uphold the quality of software products.
                          </p>
                          <p className={classes.paragraph}>
                            Creating GIT hook to verify code quality, promoting adherence to coding standards and best practices.
                          </p>
                          <p className={classes.paragraph}>
                            Devising a script for mutation scans, pinpointing possible code vulnerabilities and bolstering code robustness.
                          </p>
                          <p className={classes.paragraph}>
                            Establishing automated tasks for regular mutation scans, facilitating ongoing monitoring of code quality and focused enhancements.
                          </p>
                          <p className={classes.paragraph}>
                            Solving customer queries by initiating regular interactions; mentoring & supervising the team and extending technical support.
                          </p>
                          <p className={classes.paragraph}>
                            Identifying and resolving performance bottlenecks and optimized code for improved efficiency.
                          </p>
                        </section>
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Post Graduate from Dr. Babasaheb Ambedkar Marathwada University <span>2014-2016</span>
                      </h2>
                      <p>
                        I completed my Post Graduation in M.Sc (Computer Science)
                        from <a href='https://bamua.digitaluniversity.ac/'>Dr. Babasaheb Ambedkar Marathwada University</a> with overall 73.53%.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Graduation <span>2011-2014</span>
                      </h2>
                      <p>
                        I have completed my graduation in Computer Science from Vivekanad College Aurangabad with 76.00 %.{' '}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
