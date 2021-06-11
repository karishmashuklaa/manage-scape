import axios from 'axios'

export default async function (req,res) {

   if(req.method === "GET"){
      const dataRes = await fetch("http://localhost:3001/api/resources")
      const data = await dataRes.json()
      return res.send(data)
   }

   if(req.method === "POST" || req.method === "PATCH"){
      const {id,title,description,link,priority,timeToFinish} = req.body

      if(!title || !description || !link || !timeToFinish){

         return res.status(400).send('Please fill all form fields')
      }

      const url = req.method === "POST" ? ('http://localhost:3001/api/resources') : (`http://localhost:3001/api/resources/${id}`)


      try {
         const axiosRes = await axios[req.method.toLowerCase()](url, req.body) 
         return res.send(axiosRes.data) 
      } catch (error) {
         return res.status(400).send('Failed to store data')
      }
   }
}