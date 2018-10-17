import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from './components/frame.jsx';
import App from './App';

ReactDOM.render(
    // <div> A web react calculator</div>, 
    <Frame />,
    document.getElementById('root')
);

// var redirectLink = React.createClass({
//     getInitialState: function() { return {query: ''} },
//     queryChange: function(evt) {
//       this.setState({query: evt.target.value});
//     },
//     handleSearch: function() {
//       window.location.assign('/public/anotherPage.html');
//     },
//     render: function() {
//       return (
//         <div className="component-wrapper">
//           <input type="text" value={this.state.query} />
//           <button onClick={this.handleSearch()} className="button">Result</button>
//         </div>
//       );
//     }
//   });


