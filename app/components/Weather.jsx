var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading : false
    }
  },
  handleSearch: function (location) {
    var thisObj = this;

    this.setState({
      isLoading : true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function (temp) {

      thisObj.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {

      thisObj.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });

  },
  componentDidMount: function() {  // This function fires once the component has successfully loaded into the browser
    var location = this.props.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; // root of our application
    }
  },
  componentWillReceiveProps: function(newProps) { // This function will be called anytime the component's props get updated
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; // root of our application
    }
  },
  render: function () {
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(location, temp) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
