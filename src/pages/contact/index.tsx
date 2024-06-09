const ContactForm = () => {
  return (
    <article>
      <hgroup>
        <h5>Let's work together</h5>
        <p>Lorem ipsum dolor sit anet, consectetur adipisicing elit.</p>
      </hgroup>
    </article>
  );
};

const ContactInfo = () => {
  return (
    <div>
      <menu>
        <li>
          <h6>Email</h6>
          <p>example@email.com</p>
        </li>
        <li>
          <h6>LinkedIn</h6>
          <p>https://example.com</p>
        </li>
      </menu>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;
