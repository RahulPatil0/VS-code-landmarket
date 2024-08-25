
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PropertyDetails.css'; // Custom CSS file

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    financingInfo: false,
  });

  // Mocking buyerId from a session or similar source
  const buyerId = 123; // Replace this with the actual buyerId from the authenticated user session

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/property/${id}`);
        const data = await response.json();
        setProperty(data.body); // Assuming the API returns the property details in the body
      } catch (error) {
        console.error('Error fetching property details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  const handleBuyProperty = () => {
    console.log('Buying property with ID:', id);
  };

  const handleContactOwner = async () => {
    setShowContactModal(true);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!property) return;

    // Build the request payload
    const payload = {
      buyerId: buyerId,
      ownerId: property.userId, // Assuming the property object contains userId as the ownerId
      ...contactForm,
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/user-request/buyer-id/104/owner-id/254', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert('Your request has been sent to the property owner!');
        setShowContactModal(false);
      } else {
        const errorData = await response.json();
        console.error('Error sending contact request:', errorData);
        alert('Failed to send your request. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending contact request:', error);
      alert('Failed to send your request. Please try again later.');
    }
  };

  if (loading) {
    return <div className="text-center mt-4">Loading property details...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-4">Error: {error}</div>;
  }

  if (!property) {
    return <div className="text-center mt-4">No property details available</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Property Details</h1>
      <div className="card shadow-lg">
        <div className="card-body">
          <h5 className="card-title">{property.propertyAddress}</h5>
          <p><strong>City:</strong> {property.propertyCity}</p>
          <p><strong>State:</strong> {property.propertyState}</p>
          <p><strong>Zip Code:</strong> {property.propertyZipCode}</p>
          <p><strong>Size:</strong> {property.propertySize}</p>
          <p><strong>Status:</strong> {property.propertyStatus}</p>
          <p><strong>Price:</strong> {property.propertyPrice}</p>
          <div className="d-flex justify-content-between mt-3">
            <Button className="btn btn-primary" onClick={handleBuyProperty}>
              Buy Property
            </Button>
            <Button className="btn btn-secondary" onClick={handleContactOwner}>
              Contact Owner
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Owner Modal */}
      <Modal show={showContactModal} onHide={handleCloseContactModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={contactForm.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={contactForm.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={contactForm.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                value={contactForm.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFinancingInfo">
              <Form.Check
                type="checkbox"
                label="I want financing information"
                name="financingInfo"
                checked={contactForm.financingInfo}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDisclaimer">
              <Form.Text className="text-muted">
                By pressing "Contact Agent", you agree that Zillow Group and its affiliates, and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don’t need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use. Zillow does not endorse any real estate professionals. We may share information about your recent and future site activity with your agent to help them understand what you’re looking for in a home.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Contact Agent
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContactModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PropertyDetails;
