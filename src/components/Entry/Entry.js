import React from 'react';

function Entry({entry}) {
  return (
    <div className="Entry">
      <h4 className="rubik">{entry.position} @ {entry.company}</h4>
      <div className="Entry-from">
        <h5 className="roboto-mono light">{entry.from}</h5>
      </div>
    </div>
  )
}

export default Entry;