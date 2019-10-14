import App from '../components/app';
import Link from 'next/link';
import Navbar from '../components/navbar';
import '../scss/style.scss';

const Index = () => (
  <section>
    <Navbar />
    <h1>hello world</h1>
    <App />
  </section>
);
export default Index;
