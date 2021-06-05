import styles from "../styles/Home.module.css";
import Navbar from '../components/Navbar'
import ResourceHighlight from '../components/ResourceHighlight'
import ResourceList from '../components/ResourceList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {resources} from '../api/data'

export default function Home() {
  return (
    <>
     <Navbar />
     <ResourceHighlight resources={resources.slice(0,2)} />
     <Newsletter />
     <ResourceList resources={resources.slice(2)}  />
     <Footer />
    </>
  );
}
