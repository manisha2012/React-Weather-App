var React = require('react');

var About = (props) => {     // Using arrow function
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here is the list of modules used:</p>
      <ul>
        <li><a href="https://www.facebook.com/React">React</a> - This was the javascript framework</li>
        <li><a href="http://www.openweathermap.org">Open Weather Map</a> - To search for weather data for any city</li>
      </ul>
    </div>

  );
}

module.exports = About;
