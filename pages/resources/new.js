import React, {useState} from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'

const CreateResource = () => {

    const DEFAULT_DATA = {
        title: "",
        description: "",
        link: "",
        priority: 1,
        timeToFinish: 30
    }

    const [form, setForm] = useState(DEFAULT_DATA)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
       axios.post("/api/resources", form)
       .then( res => alert(res?.data))
       .catch( error => alert(error?.response?.data))
    }

    // Use of ? - It helps to handle undefined values. It is optional to use.

    const resetForm = () => setForm(DEFAULT_DATA)

    return (
       <Layout>
        <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input 
                    value={form.title}
                    onChange={handleChange}
                    name="title"
                    className="input" 
                    type="text" 
                    placeholder="Enter name of title" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      value={form.description}
                      onChange={handleChange}
                      name="description"
                      className="textarea"
                      placeholder="Enter some more information about the resource"></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      value={form.link}
                      onChange={handleChange}
                      name="link"
                      className="input"
                      type="text"
                      placeholder="Eg: https://www.udacity.com/" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select 
                      value={form.priority}
                      onChange={handleChange}
                      name="priority" 
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input
                      value={form.timeToFinish}
                      onChange={handleChange}
                      name="timeToFinish"
                      className="input"
                      type="number"
                      placeholder="30 (Time is in minutes)" />
                      <p>Time is in minutes</p>
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                    type="button" 
                    className="button is-link"
                    onClick={submitForm}>
                        Submit
                    </button>
                  </div>
                  <div className="control">
                    <button 
                    className="button is-link is-light"
                    onClick={resetForm}>
                        Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
       </Layout>
    )
}

export default CreateResource
