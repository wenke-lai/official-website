const ContactForm = () => {
  return (
    <article className="p-4 rounded-md bg-neutral-800">
      <hgroup className="pb-8">
        <h3>Let's work together</h3>
        <p className="underline">
          Lorem ipsum dolor sit anet, consectetur adipisicing elit.
        </p>
      </hgroup>
      <form className="gap-4 col">
        <fieldset className="gap-2 row">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="border bg-background border-foreground"
          />
        </fieldset>
        <fieldset className="gap-2 row">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            className="flex-grow border bg-background border-foreground"
          />
        </fieldset>
        <fieldset className="gap-2 row">
          <label htmlFor="service">Service</label>
          <select
            id="service"
            className="border bg-background border-foreground"
          >
            <option value="architecture">Cloud Architecture</option>
            <option value="infrastructure">Cloud Infrastructure</option>
            <option value="frontend">Web Development</option>
            <option value="backend">Backend Development</option>
          </select>
        </fieldset>

        <textarea
          placeholder="Type your message here"
          rows={5}
          className="border bg-background border-foreground"
        />
      </form>
    </article>
  );
};

const ContactInfo = () => {
  return (
    <div className="grid place-items-center">
      <menu className="w-full gap-8 col">
        <li className="gap-4 row middle">
          <h6>Email</h6>
          <p>example@email.com</p>
        </li>
        <li className="gap-4 row middle">
          <h6>LinkedIn</h6>
          <p>https://example.com</p>
        </li>
      </menu>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;
