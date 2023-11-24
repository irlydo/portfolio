export default function Contact() {
  return (
    <>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send <i className="fa-regular fa-paper-plane"></i></button>
        </form>
      </div>
    </>
  );
}
