import React, { Component } from "react";
import { addToFireStore } from '../../components/firebase/firebase.utils';

import './contact.styles.css';

import validator from 'validator';

class Contact extends Component {
    state = {
        name: "",
        email: "",
        description: "",
        submitMessage: "",
        submitMessageTextColor: "",
    };

    contact = {};

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { name, email } = this.state;
        let isSuccessful = validator.isEmail(email);

        if (isSuccessful) {
            this.setState({
                submitMessage: `Thank you ${name}, will contact you soon!`,
                submitMessageTextColor: "text-dark",
            });
            this.contact = {
                name: this.state.name,
                email: this.state.email,
                description: this.state.description,
                date: new Date()
            }
            console.log(this.contact);
            addToFireStore('contact', this.contact);
        } else {
            this.setState({
                submitMessage: "Oops! Something went wrong. Please try again later :(",
                submitMessageTextColor: "text-danger",
            });
            alert("Please enter a valid E-mail");
        }
    };

    render() {
        const { submitMessageTextColor, submitMessage } = this.state;
        return (
            <div>
                <div className="container txt">
                    <h2 className="font-weight-light text-center py-4">
                        <hr /><span >Contact </span>us<hr />
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-3 mt-5 mb-3">
                            <span>Email: </span> mosesantonymas@gmail.com<br />
                            <span>Contact No: </span> +91 8778919958
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <h4 className="text-center lie mb-3"><span className="contactName" >
                                Contact Form </span></h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="description">
                                        Query *
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        rows="5"
                                        onChange={this.onChange}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-dark float-right mt-2"
                                    style={{ backgroundColor: "black" }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="py-5 mx-2 text-center">
                        <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;