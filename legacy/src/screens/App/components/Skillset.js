import React from 'react'

function Skillset() {
  return (
    <div className="Skillset">
      <h3 className="roboto-mono light">core & technical skills></h3>          
      <div className="Entry">
        <h4 className="rubik">Front-end</h4>
        <div className="Entry-from">
          <h5 className="roboto-mono light">JavaScript, React, Vue, CSS, GraphQL, ThreeJS</h5>
        </div>
      </div>
      <div className="Entry">
        <h4 className="rubik">Back-end</h4>
        <div className="Entry-from">
          <h5 className="roboto-mono light">NodeJS, MySQL, NoSQL, Redis</h5>
        </div>
      </div>
      <div className="Entry">
        <h4 className="rubik">DevOps</h4>
        <div className="Entry-from">
          <h5 className="roboto-mono light">Docker, AWS, NGINX, Jenkins, CircleCI, Terraform</h5>
        </div>
      </div>
      <div className="Entry">
        <h4 className="rubik">Apps</h4>
        <div className="Entry-from">
          <h5 className="roboto-mono light">React Native, Electron, Flutter</h5>
        </div>
      </div>
    </div> 
  )
}

export default Skillset