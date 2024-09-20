export function EmailTemplate ({
    name,
    email,
    phone,
    message
  }) {
    return (<div>
      <p>Hello Team,</p>
      <p>
          {name} has submitted the contact form on your website. Their
          email is {email}! {phone} | {message}
      </p>
      
    </div>);
  }
    