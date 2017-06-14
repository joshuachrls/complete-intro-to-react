var div = React.DOM.div

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1(null, 'check out this component')
      )
    )
  }
})

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null, [
          React.createElement(MyTitle),
          React.createElement(MyTitle),
          React.createElement(MyTitle),
          React.createElement(MyTitle)
        ]
      )
    )
  }
})

      ReactDOM.render(
        React.createElement(MyFirstComponent),
        document.getElementById('app')
      )
