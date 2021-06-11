import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "1",
  timeToFinish: 30
}

const ResourceForm = ({onFormSubmit, initialFormData}) => {
  const [form, setForm] = useState(initialFormData || DEFAULT_DATA)

  const resetForm = () => setForm(DEFAULT_DATA)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = () => {
    onFormSubmit(form)
  }

  return (
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
              placeholder="Enter title of the resource" />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              value={form.description}
              name="description"
              onChange={handleChange}
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
                <option>4</option>
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
              placeholder="30" />
          </div>
          <p className="help">Time is in minutes</p>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              onClick={submitForm}
              className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button
              onClick={resetForm}
              type="button"
              className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResourceForm