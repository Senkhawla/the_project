import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Ajouter_modifier_annonce.css';
import wireframe_image from '../assets/img/wireframe_image.png';
import axios from 'axios';

function Ajouter_annonce() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (!title) { setMessage('Please enter a title.'); }
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('pic', image);
    formData.append('title', title);
    formData.append('description', description);
    axios
      .post('https://server-social-benefits.vercel.app/uploadAnnouncement', formData)
      .then(response => {
        setMessage('Announcement added successfully');
        setIsSubmitting(false);
      })
      .catch(error => {
        setMessage('Error adding announcement. Please try again.');
        setIsSubmitting(false);
      });
  }

  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <h1 className="ajouter-annance">AJOUTER ANNONCE :</h1>
      <div className="outside">
        <div className="outside-container">
          <div className="image-container">
            {image ? (
              <img src={URL.createObjectURL(image)} className="image-uploaded" alt="uploaded" />
            ) : (
              <img src={wireframe_image} className="image-uploaded" alt="wireframe" />
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              className="image-upload"
              id="input"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="image-label">
              <label htmlFor="input" className="imag">
                <i className="material-icons">add_photo_alternate</i>
                Ajouter Photo
              </label>
            </div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="input"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
            <div className="description">
              <label htmlFor="description">Description:</label>
              <textarea
                className="input"
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="btn-poster-annance">
              <button type="submit">Poster Annonce</button>
            </div>

           <div className="form-messages">
           {message && (
              
                <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>
              
            )}
           {isSubmitting && <div className="waiting"></div>}
           </div>



            
          </form>
          
        </div>

      </div>
    </div>
  );
}

export default Ajouter_annonce;
