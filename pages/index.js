import styles from "../styles/Home.module.css"
import Layout from '../components/Layout'
import ResourceHighlight from '../components/ResourceHighlight'
import ResourceList from '../components/ResourceList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


export default function Home({resources}) {
  return (
    <>
     <Layout>
     <ResourceHighlight resources={resources.slice(0,2)} />
     <Newsletter />
     <ResourceList resources={resources.slice(2)}  />
     <Footer />
     </Layout>
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
