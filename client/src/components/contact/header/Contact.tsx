import React from 'react'
import Nav from '../../Nav'
import Footer from '../footer/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.scss'


export default function Contact() {
  return (
    <>
        <header className="header-about--contact">
        <div className='header-about__section--contact'>
            <Nav />
          <div className='contact'>
            <div className='contact__map'>
              <div className='contact__map--pic'>
                {/* eslint-disable-next-lin */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757658848743!2d32.58331401395134!3d0.315949864114518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8080541c6d%3A0x7ccde31c7b48888!2sOffice%20of%20the%20Auditor%20General%2C%20Uganda%20(Supreme%20Audit%20Institution)!5e0!3m2!1sen!2sug!4v1659954549659!5m2!1sen!2sug" width="495" height="314" style={{border:0}} title="myFrame"></iframe>
              </div>
              <div className='contact__map--detail'>
                <div>
                  <h2>Contact Us</h2>
                </div>
                <div>
                  <ul>
                    <li>Rubaga Sub-County - 18km from Biharwe</li>
                    <li>hello@jlventureprises.com</li>
                    <li>+256 700 899 265</li>
                  </ul>
                </div>
              </div>
            
    </div>
    <div className='contact__form'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
            </div>
        </div>
    </header>
    <Footer />
    </>
  )
}
