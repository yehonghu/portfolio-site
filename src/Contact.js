const Contact = () => {
    return (
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form>
          <label>First Name</label>
          <input type="text" name="firstName" />
          <label>Last Name</label>
          <input type="text" name="lastName" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Contact;