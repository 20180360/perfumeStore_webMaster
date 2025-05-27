import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Keep In Touch with Us</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          We do not sell products from our corporate headquarters in New York City.
          If you want to visit, please reach out to our customer service team first.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
         
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="text-lg font-semibold text-amber-950">Visit us:</h4>
              <p>Sydney road, Billboard Street 2219-11C</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-950">Email us:</h4>
              <p>aromesupport@mail.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-950">Call us:</h4>
              <p>+1 (880) 567 891 505</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-950">We are open:</h4>
              <p>Monday - Friday: 8:00 - 20:00</p>
            </div>
          </div>

       
          <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div>
              <label className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
