import App from '../components/app';
import Link from 'next/link';
import Navbar from '../components/navbar';

const Index = () => (
  <section>
    <Navbar />
    <h1>hello world</h1>
    <App />
    {/* <style jsx global>{`
      nav a {
        margin-right: 10px;
        color: red;
        text-transform: uppercase;
      }
    `}</style> */}
  </section>
);
export default Index;
