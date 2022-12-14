import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { Box } from '@mui/system';

export const Contact = () => {
  const [input_username, setUserName] = useState('');
  const [input_email, setEmail] = useState('');
  const [input_message, setMessage] = useState('');

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm('service_miclkz2', 'template_3vy91zb', form.current, 'Fn_zxEFg1IdXStiDB')
    .then((result) => {
      alert("Thanks for reaching out, I will get back to you soon!");
  }, (error) => {
      console.log(error.text);
  });
  setUserName('');
    setEmail('');
    setMessage('');
};

return (
  <Box>
 <section class="contactForm  justify-content-center ">
    <Container>
<h2 class="text-center varela-font">Contact Me</h2>
<form class="contactContainer" ref={form} onSubmit={sendEmail}>
  <div class="borderBoxContact ">
    <div class="p-2 bd-highlight  justify-content-center">
      <label htmlFor="name">
        <h4 class=" contactWords d-flex justify-content-center">Name:</h4>
<br></br>
      </label>
      <input class="rounded" id="input_username" type="text" name="from_name" onChange={event => setUserName(event.target.value)}
          value={input_username} />
    </div>
    <div class="p-2 bd-highlight  ">
      <label htmlFor="email">
        <h4 class="contactWordss d-flex justify-content-center">Email:</h4>
        <br></br>
      </label>
      <input class="rounded" id="input_email" type="email" name="reply_to" onChange={event => setEmail(event.target.value)}
          value={input_email} />
    </div>
    <div class="btnSubmit p-2 bd-highlight ">
      <label htmlFor="message">
        <h4 class="contactWordsss d-flex justify-content-center">Message:</h4>
        <br></br>
        <br></br>
        <br></br>
      </label>
      <textarea class="rounded textAreaContact" name="message" onChange={event => setMessage(event.target.value)}
          value={input_message} />
  <input class="btnback btn btn-outline-info mt-4  justify-content-center"
      id="input_message" type="submit" value="Submit" />
    </div>
   
     
   
  </div>
</form>
</Container>
</section>
</Box>
);
}

export default Contact;
