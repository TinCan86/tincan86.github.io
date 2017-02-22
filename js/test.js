var ListItem = React.createClass({
    getInitialState: function() {
        return {
            isSelected: false
        };
    },
    handleClick: function() {
        this.setState({
            isSelected: true
        })
    },
    render: function() {
        var isSelected = this.state.isSelected;
        var style = {
            'background-color': ''
        };
        if (isSelected) {
            style = {
                'background-color': '#ccc'
            };
        }
        return (
            <li onClick={this.handleClick} style={style}>{this.props.content}</li>
        );
    }
});

var TestApp2 = React.createClass({
    getComponent: function(index) {
        $(this.getDOMNode()).find('li:nth-child(' + index + ')').css({
            'background-color': '#ccc'
        });
    },
    render: function() {
        return (
            <div>
             <ul>
              <ListItem content="Component 1" />
              <ListItem content="Component 2" />
              <ListItem content="Component 3" />
             </ul>
            </div>
        );
    }
});
React.renderComponent(<TestApp2 /> , document.getElementById('app'));