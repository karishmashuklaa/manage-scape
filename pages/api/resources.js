import axios from 'axios'

export default async function (req,res) {

   if(req.method === "GET"){
      const dataRes = await fetch("http://localhost:3001/api/resources")
      const data = await dataRes.json()
      return res.send(data)
   }

   if(req.method === "POST"){
      const {title,description,link,priority,timeToFinish} = req.body

      if(!title || !description || !link || !timeToFinish){

         return res.status(400).send('Please fill all form fields')
      }
      axios.post('http://localhost:3001/api/resources', req.body)

      return res.send('Your response has been recieved successfully')

   }


}