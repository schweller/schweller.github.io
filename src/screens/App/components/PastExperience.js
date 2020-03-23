import React from 'react'
import Entry from './Entry'

const entries = [
  {
    position: "Senior Software Engineer",
    company: "Sonia",
    from: "June 2019 - Current"
  },
  {
    position: "Senior Software Engineer",
    company: "Fanatics",
    from: "September 2017 - April 2019"
  },
  {
    position: "Software Engineer",
    company: "Avenue Code",
    from: "June 2015 - July 2017"
  },
  {
    position: "Frontend Developer",
    company: "PSafe Tecnologia",
    from: "September 2014 - June 2015"
  },
  {
    position: "Frontend Developer",
    company: "Infoglobo",
    from: "February 2011 - September 2014"
  }  
]

function PastExperience() {
  return (
    <div className="PastExperience">
      <h3 className="roboto-mono light">work experience></h3>
      {entries.map((entry, key) => {
        return <Entry key={key} entry={entry}/>
      })}
    </div>
  )
}

export default PastExperience