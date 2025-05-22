export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" disabled />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" disabled />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea className="w-full p-2 border rounded" placeholder="Your Message" disabled></textarea>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600" disabled>Send</button>
            <p className="text-gray-600 mt-2 text-sm">Note: This is a static demo form.</p>
          </div>
        </div>
      </section>
    );
  }