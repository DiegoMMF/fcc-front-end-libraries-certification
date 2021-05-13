/* 
Manage State Locally First

Here you'll finish creating the DisplayMessages component.

First, in the render() method, have the component render an input element, 
button element, and ul element. When the input element changes, it should 
trigger a handleChange() method. Also, the input element should render the 
value of input that's in the component's state. The button element should 
trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update 
the input with what the user is typing. The submitMessage() method should 
concatenate the current message (stored in input) to the messages array 
in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to 
the screen as a list of li elements.
*/
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getRandomKey() {
    return Math.floor(Math.random() * 10000);
  }

  submitMessage() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          onChange={(e) => this.handleChange(e)}
          value={this.state.input}
          placeholder="ingrese algo aquí"
          type="text"
        />
        <button type="submit" onClick={this.submitMessage}>
          Submit
        </button>

        <ul>
          {this.state.messages.map((message) => (
            <li key={this.getRandomKey()}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}
