import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailValue: "",
      phoneValue: "",
      messageValue: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row bg-white border border-secondary">
          <div className="col-sm-12 p-4">
            <div className="border-bottom border-secondary mb-3">
              <h2 className="text-info">Contact</h2>
            </div>
            <h5>Submit the below form to recieve a copy of my résumé</h5>

            {/* <!-- Begin Mailchimp Signup Form --> */}
            <div id="mc_embed_signup">
              <form
                action="https://github.us3.list-manage.com/subscribe/post?u=64a019defcb78cebd2fa23e6a&amp;id=e5f8fe46ea"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group mt-3">
                    <label for="mce-NAME">Name </label>
                    <input
                      type="text"
                      value={this.state.nameValue}
                      onChange={(e) => {
                        this.setState({ nameValue: e.target.value });
                      }}
                      name="NAME"
                      className="form-control"
                      id="mce-NAME"
                    />
                  </div>
                  <div className="mc-field-group mt-3">
                    <label for="mce-EMAIL">
                      Email <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value={this.state.emailValue}
                      onChange={(e) => {
                        this.setState({ emailValue: e.target.value });
                      }}
                      name="EMAIL"
                      className="form-control required email"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div className="mc-field-group size1of2 mt-3">
                    <label for="mce-PHONE">Phone </label>
                    <input
                      type="text"
                      name="PHONE"
                      className="form-control"
                      value={this.state.phoneValue}
                      onChange={(e) => {
                        this.setState({ phoneValue: e.target.value });
                      }}
                      id="mce-PHONE"
                    />
                  </div>
                  <div className="mc-field-group mt-3">
                    <label for="mce-MESSAGE">Message </label>
                    <input
                      type="text"
                      value={this.state.messageValue}
                      onChange={(e) => {
                        this.setState({ messageValue: e.target.value });
                      }}
                      name="MESSAGE"
                      className="form-control"
                      id="mce-MESSAGE"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_64a019defcb78cebd2fa23e6a_e5f8fe46ea"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button btn btn-info mt-3"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
