import React from 'react'
import Footer from './Footer'
import '../contact.css'

function Contact() {
    return (
        <div>

            <div className='contact'>
                <div className="text">
                <h1 style = {{textAlign:'left', alignItems: 'flex-start'}}>Contact Me</h1>
                <p style = {{textAlign:'left', alignItems: 'flex-start'}}>Hi there, contact me to ask me about anything you have in mind.</p>

                </div>
                <form>
                    <div className="name">
                        <div>
                            <label htmlFor="first name">First name</label>
                            <br />

                            <input
                                type="text"
                                placeholder='Enter your first name'
                                required
                            />
                        </div>
                        <br />
                        <div>
                            <label className='second' htmlFor="last name">Last name</label>
                            <br />

                            <input
                                type="text"
                                placeholder='Enter your last name'
                                className='second'
                                required
                            />
                        </div>
                    </div>

                    <br />

                    <label htmlFor="email">Email</label>

                    <br />

                    <input
                        type="text"
                        className ='email'
                        placeholder='youremail@email.com'
                        required
                    />

                    <br />

                    <label htmlFor="message">Message</label>

                    <br />

                    <textarea
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        required>

                    </textarea>
                    <br />
                    <div className="check">
                        <input required className='checkbox' type="checkbox" name="" id="" />
                        <label htmlFor="checkbox">You agree to providing your data to Tolulope Bright who may contact you.</label>

                    </div>
                    <br />
                    <button>Send message</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Contact
