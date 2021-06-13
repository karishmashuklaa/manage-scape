import axios from 'axios'

export default async function (req,res) {

   if(req.method === "GET"){
      const dataRes = await fetch("/resources")
      const data = await dataRes.json()
      return res.send(data)
   }

   if(req.method === "POST" || req.method === "PATCH"){
      const {id,title,description,link,priority,timeToFinish} = req.body
      let url = `${process.env.API_URL}/resources`

      if(!title || !description || !link || !timeToFinish){

         return res.status(400).send('Please fill all form fields')
      }

      if(req.method === "PATCH"){
         url += `/${id}`
      }


      try {
         const axiosRes = await axios[req.method.toLowerCase()](url, req.body) 
         return res.send(axiosRes.data) 
      } catch (error) {
         return res.status(400).send('Failed to store data')
      }
   }
}