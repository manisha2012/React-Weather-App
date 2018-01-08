var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  propTypes: {  // This lets us set the types of our props.. here both strings
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {  // automatically called by React after the DOM has been updated with whatever we have in our render function. Here, as the ErrorModal component gets rendered, the modal opens up automatically
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    return (
     <div>
     </div>
   );
  }
});

module.exports = ErrorModal;
