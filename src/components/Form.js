import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);;
    this.state = {
      feedback: "",
      name: "",
      email: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state[event.target.name])
  }

  handleSubmit(event) {
    const templateId = 'painting_ont_the_run'

    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    alert("Thank you! We will get in touch as soon as possible")
    this.setState({
      feedback: "",
      name: "",
      email: ""
    })
  }

  sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables)
      .then(res => {
        console.log("Email Sent Successfully!")
      })
      .catch(err => console.error("Message failed!", err))
  }

  render() {
    return(
      <form>
        <h3>Or leave your information and we'll get back to you!</h3>
        <div>
          <div className="flex-container">
            <div>
              <label>Name</label> <br />
              <input
                id="name-input"
                name="name"
                className="text-input"
                onChange={this.handleChange}
                value={this.state.name}
                required
                ></input>
            </div>
            <br />
            <div>
              <label>Email</label> <br />
              <input
                id="email-input"
                name="email"
                className="text-input"
                onChange={this.handleChange}
                value={this.state.email}
                required
                ></input>
            </div>
          </div>
        <br />
          <textarea
            id="feedback"
            name="feedback"
            onChange={this.handleChange}
            placeholder="Leave any additional information here"
            value={this.state.feedback}
            className="text-input"
            style={{width: '95%', height: '150px'}}
          />
        </div>
        <input
          type="button"
          value="Submit"
          className="btn btn--submit"
          onClick={this.handleSubmit}></input>
      </form>
    )
  }
}

export default Form
