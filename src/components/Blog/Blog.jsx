import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Blog.css';

export const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const endpointUrl = 'http://127.0.0.1:3000/api/v1/blogs/blog/' + id; // Replace with your API endpoint

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
  }, [id]); // Include 'id' in the dependency array

  console.log("id");
  console.log(id);
  
  return (
    <div>
      <Header />
      <div className="content container">
        <div className="blogs_list py-5">
          {data !== null ?
              <div className="card mb-3" key={data.title}>
                <div className="card-body">
                  <div className="title">
                    <h2>{data.title}</h2>
                  </div>
                  <div className="tags py-3">Tags: {data.tags}</div>
                  <div className="body">{data.body}</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="date">
                      posted: {new Date(data.created_at).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div> : (
            <div className="error alert alert-danger">No Blogs</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
