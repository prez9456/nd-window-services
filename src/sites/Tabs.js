import React from 'react';

const Tabs = () => {
    console.log("hi")
    return (
      <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="outlet">
          {/* content will be shown here */}
        </div>
      </div>
    );
  };

  export default Tabs;
