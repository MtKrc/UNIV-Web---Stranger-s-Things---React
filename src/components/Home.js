import React from "react";

const Home = ({ user }) => {
  return (
    <>
      <div className='ui block segment' id='homeSegment'>
        <h1 className='ui center aligned header'>Strangers!</h1>
        {user ? (
          <h3 className='ui center aligned header'>Welcome {user.username}!</h3>
        ) : null}
      </div>
      <div className='ui inverted block segment'>
        <h3 className='ui inverted center aligned header' id='homeInfo'>
          Post your own items for other strangers to see!
        </h3>
      </div>
    </>
  );
};

export default Home;