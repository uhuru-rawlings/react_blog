import React, { useState,useEffect } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Blogs.css'

export const Blogs = () => {
  const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

  useEffect(() => {
    const endpointUrl = 'http://127.0.0.1:3000/api/v1/blogs/list'; // Replace with your API endpoint

    async function fetchData() {
      try {
        const response = await axios.get(endpointUrl);
        
        // If the request was successful, you can access the response data
        const responseData = response.data.data;
        
        // Do something with the data
        setData(responseData);
      } catch (err) {
        // Handle errors here
        console.error('Error fetching data:', err);
        
        // Set the error state to display an error message in your component
        console.log(err);
      }
    }

    fetchData();
  }, []);

  console.log(data)
  return (
    <div>
        <Header />
        <div className="content container">
            <div className="blogs_list py-5">
            {data.length > 0 ? data.map((item, index) => (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <div className="title"><h2>{item.title}</h2></div>
                        <div className="body blog_body">
                          {item.body}
                        </div>
                        <div className="tags py-3">{item.tags}</div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="date">posted: {new Date(item.created_at).toLocaleString()}</div>
                            <div className="buttons">
                                <Link to="" className="btn btn-secondary">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )) : (
                <div className="error alert alert-danger">No Blogs</div>
            )}
            </div>
        </div>
        <Footer />
    </div>
  )
}
