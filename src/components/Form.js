import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      name: "",
      email: "",
      phone: ""
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
    if (this.state.name === "" || this.state.phone === "") {
      alert("Please Enter a Name and Phone Number")
    } else {
      this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, phone_number: this.state.phone, reply_to: this.state.email})
      alert("Thank you! We will get in touch as soon as possible")
      this.setState({
        feedback: "",
        name: "",
        email: "",
        phone: ""
      })
    }


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
            <div>
              <input
                id="name-input"
                name="name"
                className="text-input"
                placeholder="Name"
                onChange={this.handleChange}
                value={this.state.name}
                required
                ></input>
            </div>
            <div>
              <input
                id="email-input"
                name="email"
                className="text-input"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
                required
                ></input>
            </div>
            <div>
              <input
                id="phone-input"
                name="phone"
                className="text-input"
                placeholder="Phone Number"
                onChange={this.handleChange}
                value={this.state.phone}
                required

                ></input>
            </div>
        <br />
          <textarea
            id="feedback"
            name="feedback"
            onChange={this.handleChange}
            placeholder="Leave any additional information here"
            value={this.state.feedback}
            className="text-input"
            style={{width: '80%', height: '150px'}}
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
