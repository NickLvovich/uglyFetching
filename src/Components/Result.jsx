import React from "react";

class Result extends React.Component { 
  
  render() {
    return (
      <>
        {this.props.res.map(image => (
              <div>
                  <img src={image.urls.small} alt="searchresult"
                       key={image.id}/>
              </div>
          ))}
      </>
    );
  }
}

export default Result