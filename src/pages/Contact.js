import React from "react";
// import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(alert("Your information has been sent, I will get in contact with you shortly"))
      .catch((error) => alert(error));
  };

  return (
    <div className="container">
      <div className="row bg-white border border-secondary">
        <div className="col-sm-12 p-4">
          <div className="border-bottom border-secondary mb-3">
            <h2 className="text-info">Contact</h2>
          </div>
          <h5>Submit the below form to recieve a copy of my résumé</h5>

          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label className="w-100">
                Name *
                <br />
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </label>
            </p>
            <p>
              <label className="w-100">
                Email *
                <br />
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </label>
            </p>
            <p>
              <label className="w-100">
                Phone
                <br />
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <label className="w-100">
                Message
                <br />
                <textarea
                  className="form-control"
                  name="message"
                  onChange={handleChange}
                />
              </label>
            </p>
            <p>
              <button className="button btn btn-info mt-3" type="submit">
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
