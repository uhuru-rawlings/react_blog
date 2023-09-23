import React, { useState } from 'react'
import './Forms.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import axios from 'axios'

export const Forms = () => {
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [content, setContent] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const sendBlog = async (e) => {
    e.preventDefault()

    // const form = new FormData()
    // form.append("title",title)
    // form.append("tags",tags)
    // form.append("body",content)
    const form = {
        "title": title,
        "tags":tags,
        "body": content
    }

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/v1/blogs/create', form);
      if(response.data.status === 201){
        setSuccess("blog posted successfully, see you in the next one.")
        setTitle("")
        setTags("")
        setContent("")
      }
    } catch (error) {
        setError("Oops! something went wrong, please try again")
      console.error('Error saving data:', error);
    }
  }

  return (
    <div>
        <Header />
        <div className="content container">
            <form className='py-5' onSubmit={sendBlog}>
                { success && <div className="alert alert-success">{ success }</div> }
                { error && <div className="alert alert-danger">{ error }</div> }
 
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" className="form-control" placeholder='Enter Blog Title' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Blogs</label>
                    <input type="text" name="tags" value={tags} onChange={(e) => { setTags(e.target.value) }} id="tags" className="form-control" placeholder='Enter Tags' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Blog Content</label>
                    <textarea name="content" value={content} onChange={(e) => { setContent(e.target.value) }} id="content" cols="30" rows="10" className="form-control" placeholder='Type your blog content here...' required></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Save Blogs" className="btn btn-primary" />
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}
