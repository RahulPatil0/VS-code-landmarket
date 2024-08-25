
// import React, { useState } from 'react';
// import './SellProperty.css';
// import Layout from './Layout/Layout';

// const SellProperty = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     propertyAddress: '',
//     propertyCity: '',
//     propertySize: '',
//     propertyStatus: '',
//     propertyState: '',
//     propertyPrice: '',
//     propertyZipCode: '',
//     propertyImages: []
//   });

//   const [imagePreviews, setImagePreviews] = useState([]);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle image upload and preview
//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setFormData({
//       ...formData,
//       propertyImages: files
//     });

//     // Create image previews
//     const previewUrls = files.map(file => URL.createObjectURL(file));
//     setImagePreviews(previewUrls);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", formData);

//     try {
//       const url = `http://localhost:8080/api/v1/property/user-id/254`;

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Property registered successfully:', data);
//       } else {
//         const errorData = await response.json();
//         console.error('Error in registration:', errorData);
//         alert("Error in registration: " + errorData.message);
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//       alert('Network error. Please try again later.');
//     }
//   };

//   return (
//     <Layout>
//       <div className='sell'>
//         <section className="sell-property-section">
//           <div className="sell-property-options">
//             <h3>Sell Your Property</h3>
//             <button 
//               className="btn btn-primary" 
//               onClick={() => setShowForm(!showForm)}
//             >
//               Post Your Home for Sale
//             </button>
            
//             {showForm && (
//               <div className="sell-property-form-container">
//                 <h3 className="form-title">Property Registration</h3>
//                 <form className="sell-property-form" onSubmit={handleSubmit}>
//                   <div className="form-outline">
//                     <input
//                       type="text"
//                       id="propertyAddress"
//                       className="form-control"
//                       value={formData.propertyAddress}
//                       name="propertyAddress"
//                       onChange={handleChange}
//                       placeholder="Property Address"
//                       required
//                     />
//                   </div>
//                   <div className="form-row">
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="propertyCity"
//                         className="form-control"
//                         value={formData.propertyCity}
//                         name="propertyCity"
//                         onChange={handleChange}
//                         placeholder="City"
//                         required
//                       />
//                     </div>
//                     <div className="form-outline">
//                       <input
//                         type="number"
//                         id="propertyPrice"
//                         className="form-control"
//                         value={formData.propertyPrice}
//                         name="propertyPrice"
//                         onChange={handleChange}
//                         placeholder="Price"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="form-outline">
//                       <input
//                         type="number"
//                         id="propertySize"
//                         className="form-control"
//                         value={formData.propertySize}
//                         name="propertySize"
//                         onChange={handleChange}
//                         placeholder="Size (sq ft)"
//                         required
//                       />
//                     </div>
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="propertyState"
//                         className="form-control"
//                         value={formData.propertyState}
//                         name="propertyState"
//                         onChange={handleChange}
//                         placeholder="State"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="propertyStatus"
//                         className="form-control"
//                         value={formData.propertyStatus}
//                         name="propertyStatus"
//                         onChange={handleChange}
//                         placeholder="Status"
//                         required
//                       />
//                     </div>
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="propertyZipCode"
//                         className="form-control"
//                         value={formData.propertyZipCode}
//                         name="propertyZipCode"
//                         onChange={handleChange}
//                         placeholder="Zipcode"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="form-outline">
//                     <input
//                       type="file"
//                       id="propertyImages"
//                       className="form-control"
//                       name="propertyImages"
//                       onChange={handleImageChange}
//                       multiple
//                     />
//                   </div>
//                   <div className="image-previews">
//                     {imagePreviews.map((url, index) => (
//                       <img key={index} src={url} alt={`Property Preview ${index + 1}`} className="preview-image" />
//                     ))}
//                   </div>
//                   <button type="submit" className="btn btn-success btn-lg mb-1">
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//     </Layout>
//   );
// };

// export default SellProperty;
import React, { useState } from 'react';
import './SellProperty.css';
import Layout from './Layout/Layout';

const SellProperty = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    propertyAddress: '',
    propertyCity: '',
    propertySize: '',
    propertyStatus: '',
    propertyState: '',
    propertyPrice: '',
    propertyZipCode: '',
    propertyImages: []
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, propertyImages: files });

    const previewUrls = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previewUrls);
  };

  const removeImage = (index) => {
    const updatedImages = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(updatedImages);
    setFormData({
      ...formData,
      propertyImages: formData.propertyImages.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const url = `http://localhost:8080/api/v1/property/user-id/254`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Property registered successfully:', data);
        alert('Property registered successfully!');
      } else {
        const errorData = await response.json();
        console.error('Error in registration:', errorData);
        alert("Error in registration: " + errorData.message);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again later.');
    }
  };

  return (
    <Layout showFooter={!showForm}>
      <div className='sell'>
        <section className="sell-property-section">
          <div className="sell-property-options">
            <h3>Sell Your Property</h3>
            <button 
              className="btn btn-primary" 
              onClick={() => setShowForm(!showForm)}
            >
              Post Your Home for Sale
            </button>
            
            {showForm && (
              <div className="sell-property-form-container">
                <h3 className="form-title">Property Registration</h3>
                <form className="sell-property-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="propertyAddress">Property Address</label>
                    <input 
                      type="text" 
                      name="propertyAddress" 
                      className="form-control" 
                      value={formData.propertyAddress} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertyCity">City</label>
                    <input 
                      type="text" 
                      name="propertyCity" 
                      className="form-control" 
                      value={formData.propertyCity} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertyState">State</label>
                    <input 
                      type="text" 
                      name="propertyState" 
                      className="form-control" 
                      value={formData.propertyState} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertyZipCode">Zip Code</label>
                    <input 
                      type="text" 
                      name="propertyZipCode" 
                      className="form-control" 
                      value={formData.propertyZipCode} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertySize">Size (sq. ft.)</label>
                    <input 
                      type="text" 
                      name="propertySize" 
                      className="form-control" 
                      value={formData.propertySize} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertyStatus">Status</label>
                    <input 
                      type="text" 
                      name="propertyStatus" 
                      className="form-control" 
                      value={formData.propertyStatus} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertyPrice">Price ($)</label>
                    <input 
                      type="text" 
                      name="propertyPrice" 
                      className="form-control" 
                      value={formData.propertyPrice} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertyImages">Property Images</label>
                    <input 
                      type="file" 
                      name="propertyImages" 
                      className="form-control" 
                      onChange={handleImageChange} 
                      multiple 
                    />
                  </div>
                  <div className="image-preview-container">
                    {imagePreviews.map((image, index) => (
                      <div key={index} className="image-preview">
                        <img src={image} alt={`Preview ${index + 1}`} />
                        <button type="button" className="btn btn-danger" onClick={() => removeImage(index)}>Remove</button>
                      </div>
                    ))}
                  </div>
                  <button type="submit" className="btn btn-primary">Register Property</button>
                </form>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SellProperty;
