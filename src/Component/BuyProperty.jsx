// // // src/Component/BuyProperty.jsx

// // import React, { useEffect, useState } from 'react';

// // const BuyProperty = () => {
// //   const [properties, setProperties] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Fetch properties from the backend API
// //     const fetchProperties = async () => {
// //       try {
// //         const response = await fetch('http://localhost:8080/api/v1/property');
// //         const data = await response.json();
// //         setProperties(data);
// //       } catch (error) {
// //         console.error('Error fetching properties:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProperties();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading properties...</div>;
// //   }

// //   return (
// //     <div className="container mt-4">
// //       <h1 className="text-center">Properties for Sale</h1>
// //       <div className="row">
// //         {properties.map((property, index) => (
// //           <div className="col-md-4" key={index}>
// //             <div className="card mb-4">
// //               <div className="card-body">
// //                 <h5 className="card-title">{property.propertyAddress}</h5>
// //                 <p className="card-text"><strong>City:</strong> {property.propertyCity}</p>
// //                 <p className="card-text"><strong>State:</strong> {property.propertyState}</p>
// //                 <p className="card-text"><strong>Zip Code:</strong> {property.propertyZipCode}</p>
// //                 <p className="card-text"><strong>Size:</strong> {property.propertySize}</p>
// //                 <p className="card-text"><strong>Status:</strong> {property.propertyStatus}</p>
// //                 <p className="card-text"><strong>Price:</strong> {property.propertyPrice}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BuyProperty;
// import React, { useEffect, useState } from 'react';

// const BuyProperty = () => {
//   const [properties, setProperties] = useState([]); // Keep the naming consistent
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/v1/property');

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Fetched data:', data.body);

//         // Assuming data is an array of properties
//         if (Array.isArray(data.body)) {
//           setProperties(data.body);
//         } else {
//           throw new Error('Data format is incorrect');
//         }

//       } catch (error) {
//         console.error('Error fetching properties:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   if (loading) {
//     return <div>Loading properties...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Properties for Sale</h1>
//       <div className="row">
//         {properties.length > 0 ? (
//           properties.map((item, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">{item.propertyAddress}</h5>
//                   <p className="card-text"><strong>City:</strong> {item.propertyCity}</p>
//                   <p className="card-text"><strong>State:</strong> {item.propertyState}</p>
//                   <p className="card-text"><strong>Zip Code:</strong> {item.propertyZipCode}</p>
//                   <p className="card-text"><strong>Size:</strong> {item.propertySize}</p>
//                   <p className="card-text"><strong>Status:</strong> {item.propertyStatus}</p>
//                   <p className="card-text"><strong>Price:</strong> {item.propertyPrice}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No properties available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BuyProperty;
// import React, { useEffect, useState } from 'react';

// const BuyProperty = () => {
//   const [properties, setProperties] = useState([]); // Keep the naming consistent
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/v1/property');

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Fetched data:', data.body);

//         // Assuming data is an array of properties
//         if (Array.isArray(data.body)) {
//           // Filter out duplicates
//           const newProperties = data.body.filter(property => 
//             !properties.some(existing => existing.id === property.id)
//           );
//           setProperties(prev => [...prev, ...newProperties]);
//         } else {
//           throw new Error('Data format is incorrect');
//         }

//       } catch (error) {
//         console.error('Error fetching properties:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, [properties]); // Add properties as dependency to handle updates

//   if (loading) {
//     return <div>Loading properties...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Properties for Sale</h1>
//       <div className="row">
//         {properties.length > 0 ? (
//           properties.map((item, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">{item.propertyAddress}</h5>
//                   <p className="card-text"><strong>City:</strong> {item.propertyCity}</p>
//                   <p className="card-text"><strong>State:</strong> {item.propertyState}</p>
//                   <p className="card-text"><strong>Zip Code:</strong> {item.propertyZipCode}</p>
//                   <p className="card-text"><strong>Size:</strong> {item.propertySize}</p>
//                   <p className="card-text"><strong>Status:</strong> {item.propertyStatus}</p>
//                   <p className="card-text"><strong>Price:</strong> {item.propertyPrice}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No properties available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BuyProperty;





// import React, { useEffect, useState } from 'react';

// const BuyProperty = () => {
//   const [properties, setProperties] = useState([]);
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State for filter inputs
//   const [filters, setFilters] = useState({
//     zipcode: '',
//     city: '',
//     state: '',
//     area: '',
//   });

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/v1/property');

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Fetched data:', data.body);

//         if (Array.isArray(data.body)) {
//           setProperties(data.body);
//           setFilteredProperties(data.body); // Initialize with all properties
//         } else {
//           throw new Error('Data format is incorrect');
//         }

//       } catch (error) {
//         console.error('Error fetching properties:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   // Handle filter input changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({
//       ...filters,
//       [name]: value
//     });
//   };

//   // Apply filters to the properties list
//   useEffect(() => {
//     const { zipcode, city, state, area } = filters;
//     const filtered = properties.filter(property =>
//       (zipcode ? property.propertyZipCode.includes(zipcode) : true) &&
//       (city ? property.propertyCity.toLowerCase().includes(city.toLowerCase()) : true) &&
//       (state ? property.propertyState.toLowerCase().includes(state.toLowerCase()) : true) &&
//       (area ? property.propertySize.includes(area) : true) // Assuming area is size in sq ft
//     );
//     setFilteredProperties(filtered);
//   }, [filters, properties]);

//   if (loading) {
//     return <div>Loading properties...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Properties for Sale</h1>

//       {/* Filter form */}
//       <div className="mb-4">
//         <h3>Filter Properties</h3>
//         <form>
//           <div className="form-row">
//             <div className="form-group col-md-3">
//               <label htmlFor="zipcode">Zipcode</label>
//               <input
//                 type="text"
//                 id="zipcode"
//                 name="zipcode"
//                 className="form-control"
//                 value={filters.zipcode}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <div className="form-group col-md-3">
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 className="form-control"
//                 value={filters.city}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <div className="form-group col-md-3">
//               <label htmlFor="state">State</label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 className="form-control"
//                 value={filters.state}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <div className="form-group col-md-3">
//               <label htmlFor="area">Size (sq ft)</label>
//               <input
//                 type="text"
//                 id="area"
//                 name="area"
//                 className="form-control"
//                 value={filters.area}
//                 onChange={handleFilterChange}
//               />
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="row">
//         {filteredProperties.length > 0 ? (
//           filteredProperties.map((item, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">{item.propertyAddress}</h5>
//                   <p className="card-text"><strong>City:</strong> {item.propertyCity}</p>
//                   <p className="card-text"><strong>State:</strong> {item.propertyState}</p>
//                   <p className="card-text"><strong>Zip Code:</strong> {item.propertyZipCode}</p>
//                   <p className="card-text"><strong>Size:</strong> {item.propertySize}</p>
//                   <p className="card-text"><strong>Status:</strong> {item.propertyStatus}</p>
//                   <p className="card-text"><strong>Price:</strong> {item.propertyPrice}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No properties available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BuyProperty;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const BuyProperty = () => {
//   const [properties, setProperties] = useState([]);
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State for filter inputs
//   const [filters, setFilters] = useState({
//     zipcode: '',
//     city: '',
//     state: '',
//     area: '',
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/v1/property');

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Fetched data:', data.body);

//         if (Array.isArray(data.body)) {
//           setProperties(data.body);
//           setFilteredProperties(data.body); // Initialize with all properties
//         } else {
//           throw new Error('Data format is incorrect');
//         }

//       } catch (error) {
//         console.error('Error fetching properties:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   // Handle filter input changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({
//       ...filters,
//       [name]: value
//     });
//   };

//   // Apply filters to the properties list
//   useEffect(() => {
//     const { zipcode, city, state, area } = filters;
//     const filtered = properties.filter(property =>
//       (zipcode ? property.propertyZipCode.includes(zipcode) : true) &&
//       (city ? property.propertyCity.toLowerCase().includes(city.toLowerCase()) : true) &&
//       (state ? property.propertyState.toLowerCase().includes(state.toLowerCase()) : true) &&
//       (area ? property.propertySize.includes(area) : true) // Assuming area is size in sq ft
//     );
//     setFilteredProperties(filtered);
//   }, [filters, properties]);

//   // Handle view details button click
//   const handleViewDetails = (id) => {
//     navigate(`/property/${id}`); // Navigate to property details page
//   };

//   if (loading) {
//     return <div>Loading properties...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Properties for Sale</h1>

//       {/* Filter form */}
//       <div className="mb-4">
//         <h3>Filter Properties</h3>
//         <form>
//           <div className="form-row">
//             <div className="form-group col-md-3">
//               <label htmlFor="zipcode">Zipcode</label>
//               <input
//                 type="text"
//                 id="zipcode"
//                 name="zipcode"
//                 className="form-control"
//                 value={filters.zipcode}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <div className="form-group col-md-3">
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 className="form-control"
//                 value={filters.city}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <div className="form-group col-md-3">
//               <label htmlFor="state">State</label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 className="form-control"
//                 value={filters.state}
//                 onChange={handleFilterChange}
//               />
//             </div>
//             <div className="form-group col-md-3">
//               <label htmlFor="area">Size (sq ft)</label>
//               <input
//                 type="text"
//                 id="area"
//                 name="area"
//                 className="form-control"
//                 value={filters.area}
//                 onChange={handleFilterChange}
//               />
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="row">
//         {filteredProperties.length > 0 ? (
//           filteredProperties.map((item, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">{item.propertyAddress}</h5>
//                   <p className="card-text"><strong>City:</strong> {item.propertyCity}</p>
//                   <p className="card-text"><strong>State:</strong> {item.propertyState}</p>
//                   <p className="card-text"><strong>Zip Code:</strong> {item.propertyZipCode}</p>
//                   <p className="card-text"><strong>Size:</strong> {item.propertySize}</p>
//                   <p className="card-text"><strong>Status:</strong> {item.propertyStatus}</p>
//                   <p className="card-text"><strong>Price:</strong> {item.propertyPrice}</p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleViewDetails(item.id)} // Pass the property ID
//                   >
//                     ViewDetails
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No properties available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BuyProperty;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const BuyProperty = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filter inputs
  const [filters, setFilters] = useState({
    zipcode: '',
    city: '',
    state: '',
    area: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/property');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data.body);

        if (Array.isArray(data.body)) {
          setProperties(data.body);
          setFilteredProperties(data.body); // Initialize with all properties
        } else {
          throw new Error('Data format is incorrect');
        }

      } catch (error) {
        console.error('Error fetching properties:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Handle filter input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // Apply filters to the properties list
  useEffect(() => {
    const { zipcode, city, state, area } = filters;
    const filtered = properties.filter(property =>
      (zipcode ? property.propertyZipCode.includes(zipcode) : true) &&
      (city ? property.propertyCity.toLowerCase().includes(city.toLowerCase()) : true) &&
      (state ? property.propertyState.toLowerCase().includes(state.toLowerCase()) : true) &&
      (area ? property.propertySize.includes(area) : true) // Assuming area is size in sq ft
    );
    setFilteredProperties(filtered);
  }, [filters, properties]);

  // Handle view details button click
  const handleViewDetails = (id) => {
    navigate(`/property/${id}`); // Navigate to property details page
  };

  if (loading) {
    return <div>Loading properties...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center">Properties for Sale</h1>

      {/* Filter form */}
      <div className="mb-4">
        <h3>Filter Properties</h3>
        <form>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="zipcode">Zipcode</label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                className="form-control"
                value={filters.zipcode}
                onChange={handleFilterChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-control"
                value={filters.city}
                onChange={handleFilterChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                className="form-control"
                value={filters.state}
                onChange={handleFilterChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="area">Size (sq ft)</label>
              <input
                type="text"
                id="area"
                name="area"
                className="form-control"
                value={filters.area}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <p className="card-text"><strong>State:</strong> {item.propertyState}</p>
                  <p className="card-text"><strong>Zip Code:</strong> {item.propertyZipCode}</p>
                  <p className="card-text"><strong>Status:</strong> {item.propertyStatus}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewDetails(item.id)} // Pass the property ID
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties available</p>
        )}
      </div>
    </div>
  );
};

export default BuyProperty;
