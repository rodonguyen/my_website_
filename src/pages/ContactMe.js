import createHyperlink from '../components/utils';


const ContactMe = () => {
  return (
  <div className="container contact-list">
      <h1 className='center'>
      I love deep conversations.
      </h1>
      
      <ul className='text-align-left center'>
        <li>Email: rodonguyendd at gmail.com </li>
        <li>{createHyperlink('https://www.linkedin.com/in/rodonguyen/','LinkedIn')}</li>
        <li>{createHyperlink('https://github.com/rodonguyen/','Github')}</li>
        <li>{createHyperlink('https://rodonguyen.medium.com/','Medium')}</li>
      </ul>
  </div>
  );
};

export default ContactMe;
