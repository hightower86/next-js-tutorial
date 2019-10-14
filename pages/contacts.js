import Link from 'next/link';
import Navbar from '../components/navbar';
import '../scss/contacts.scss';
const Contacts = () => (
  <section>
    <Navbar />
    <h2>Contacts page</h2>
    <div className='box'>
      <div className='pic'></div>
      <div className='content'>
        <h3>box</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex officiis
          nihil molestiae quos aspernatur voluptatibus perferendis optio natus
        </p>
      </div>
    </div>
  </section>
);
export default Contacts;
