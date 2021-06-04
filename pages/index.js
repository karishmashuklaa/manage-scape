import styles from "../styles/Home.module.css";
import Navbar from '../components/Navbar'
import ResourceHighlight from '../components/ResourceHighlight'
import ResourceList from '../components/ResourceList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
     <Navbar />
     <ResourceHighlight />
     <Newsletter />
     <ResourceList />
     <Footer />
    </>
  );
}
