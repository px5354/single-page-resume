import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.works && resumeData.works.map((item, i) => {
                return (
                  <div key={`work-${i}`} className="row item">
                    <div className="twelve columns">
                      <h5>
                        {item.position}
                        {item.period.map((subItem, j) => {
                          return (
                            <p key={`period-${j}`} className={`info${j}`}>
                              {subItem.status ? `(${subItem.status}) ` : ''} <em className="date">{subItem.startDate} - {subItem.endDate}</em>
                            </p>
                          )
                        })}
                      </h5>
                      <p className="link">
                        @ {item.companyLink ? <a target="_blank" href={item.companyLink} rel="noopener noreferrer">{item.companyName}</a> : item.companyName}, {item.companyAddress}
                      </p>
                      {item.achievements.map((subItem, k) => {
                        return (
                          <p key={`work-achievement-${k}`} className="achievement">
                            - &nbsp;&nbsp;<span dangerouslySetInnerHTML={{ __html: subItem }} />
                          </p>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
            <div className="nine columns main-col">
              {
                resumeData.skills && resumeData.skills.map((item, i) => {
                  return (
                    <div key={`skill-${i}`}>
                      <p>{item.type}</p>
                      <div className="bars">
                        <ul className="skills">
                        {
                          item.subSkills.map((subItem, j) => {
                            return (
                              <li key={`skill-${item.type}-${j}`}>
                                <span className={`bar-expand bar-${subItem.skillLevel}`}></span>
                                <div><em>{subItem.skillNames}</em></div>
                              </li>
                            );
                          })
                        }
                        </ul>
                      </div>
                    </div>
                  );
                })
              }
            </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item, i) => {
                return (
                  <div key={`education-${i}`} className="row item">
                    <div className="twelve columns">
                      <h5>
                        {item.specialization}
                        <p className="info">
                          <em className="date">{item.period[0].startDate} - {item.period[0].endDate}</em>
                        </p>
                      </h5>
                      <p className="link">
                        {item.univertyName}
                      </p>
                      <p className="achievement">
                        {item.achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row award">
          <div className="three columns header-col">
            <h1><span>Awards</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.awards && resumeData.awards.map((item, i) => {
                return (
                  <div key={`award-${i}`} className="row item">
                    <div className="twelve columns">
                      <h5>
                        <div dangerouslySetInnerHTML={{ __html: item.name }} />
                        <p className="info">
                          <em className="date">{item.date}</em>
                        </p>
                      </h5>
                      {item.description.map((subItem, i) => {
                        return (
                          <p key={`award-achievement-${i}`} className="achievement">
                            - &nbsp;&nbsp;<span>{subItem}</span>
                          </p>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}