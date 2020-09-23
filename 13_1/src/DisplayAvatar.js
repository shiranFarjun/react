import React from 'react';

const DisplayAvatar = (props) => {

  const imagesResults = props.listResult.map((avatar, index) => {
    return (<div>
      <img
        alt={`${avatar.name.first} ${avatar.name.last}`}
        key={index}
        src={avatar.picture.large}
      />
      <p>{`${avatar.name.first} ${avatar.name.last}`}</p>
      </div>);
  });
  console.log(imagesResults)
  return (
    <div className="image">
      {imagesResults}
    </div>
  );
}

export default DisplayAvatar;
