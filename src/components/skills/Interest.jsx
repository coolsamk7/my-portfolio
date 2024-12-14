import React, { Component } from 'react';
import classes from './Interest.module.css';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
        <div className={classes.web}>
          <h3>Backend Development</h3>
          <p>
            Understanding of Software Development Lifecycle (SDLC), right from requirement analysis, documentation (functional specifications, technical design), coding and testing (preparation of test cases along with implementation) to maintenance of proposed applications.
            <br /> Expertise in designing and developing end-to-end solutions in multiple products along with supporting customers and solving their problems.
            <br />Provided technical consultancy; mapped requirements of the clients, understood complex data, formulated solutions and set-up outcome expectations.
            <br />Expertise in planning, implementation, scope management, activity sequencing, cost estimation, risk analysis & quality with team members.
            <br /> Interacted with the client and IT teams to gather, define, clarify, and refine requirements; created architecture and design of applications.
          </p>
        </div>
        <div className={classes.app}>
          <h3>CORE COMPETENCIES</h3>
          <p>
            Project Execution, SDLC Requirement Gathering/Analysis Team Building,
            Grooming & Management Root Cause Analysis
          </p>
        </div>
        <div className={classes.other}>
          <h3>Expanded Expertise</h3>
          <p>
            AWS, Docker, GitHub, Backend System Design, Express.js, Node.js, Nest.js, MySQL, Queues,
            SQL, NOSQL, Socket.io, Open to Monorepo architecture, Microservices Architecture
          </p>
        </div>
      </div>
    </div>
  );
}
