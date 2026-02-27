import axios from 'axios';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // आपके Node.js सर्वर का URL (Port 5000)
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert("Success: " + response.data.message);
      setFormData({ name: '', email: '', message: '' }); // फॉर्म खाली करने के लिए
    } catch (err) {
      console.error("Error sending data:", err);
      alert("Failed to send message. Is your server running?");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields में value={formData.name} और onChange जरूर लगाएं */}
      <input 
        type="text"
        className='px-3 py-2 bg-white'
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
      />
      {/* बाकी fields भी इसी तरह बनाएं */}
      <button type="submit">Submit to MongoDB</button>
    </form>
  );
};

export default ContactForm