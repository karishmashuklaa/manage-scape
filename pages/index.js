import styles from "../styles/Home.module.css";
import Navbar from '../components/Navbar'
import ResourceHighlight from '../components/ResourceHighlight'
import ResourceList from '../components/ResourceList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home({resources}) {
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

export async function getServerSideProps () {

  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json()

  return{
    props: {
      	resources: data
    }
  }
}
