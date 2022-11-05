import React from 'react'
import Footer from './Footer'
import '../contact.css'
import { useState } from 'react'

function Contact() {
    const [text, setText] = useState('')

    const [error, setError] = useState(false)
    const [btn, setBtn] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const handleCheck = (e) => {
        setBtn(true)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        text === '' ? setError(true) : setError(false)

    }

    return (
        <div>

            <div className='contact'>
                <div className="text">
                    <h1> Contact Me</h1>
                    <p> Hi there, contact me to ask me about anything you have in mind.</p>

                </div>
                <form>
                    <div className="name">
                        <div>
                            <label htmlFor="first name">First name</label>
                            <br />

                            <input
                                id='first_name'
                                type="text"
                                required
                                placeholder='Enter your first name'

                            />
                        </div>
                        <br />
                        <div>
                            <label className='second' htmlFor="last name">Last name</label>
                            <br />

                            <input
                                type="text"
                                required
                                id='last_name'
                                placeholder='Enter your last name'
                                className='second'

                            />
                        </div>
                    </div>

                    <br />

                    <label htmlFor="email">Email</label>

                    <br />

                    <input
                        type="text"
                        required
                        id='email'
                        className='email'
                        placeholder='youremail@email.com'

                    />

                    <br />

                    <label htmlFor="message">Message</label>

                    <br />

                    <textarea
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        value={text}
                        onChange={handleChange}
                        className={error ? 'red' : ''}
                    >

                    </textarea>
                    {error && <p className='error'>Please enter a message</p>}
                    <br />
                    <div className="check">
                        <input
                            className='checkbox'
                            type="checkbox" name="" id=""
                            onClick={handleCheck}
                        />
                        <label htmlFor="checkbox">You agree to providing your data to Tolulope Bright who may contact you.</label>

                    </div>
                    <br />
                    <button
                        disabled={!btn}
                        onClick={handleSubmit}
                        id='btn__submit'>
                        Send message</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Contact
