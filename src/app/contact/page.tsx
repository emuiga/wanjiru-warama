import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Contact</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with Wanjirũ Warama. Whether you're a reader, book club organizer, 
            or fellow writer, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-amber-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-amber-800">Website</h3>
                    <p className="text-gray-700">Wanjiruwarama.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-amber-800">Location</h3>
                    <p className="text-gray-700">Wanjirũ Warama, Athomi Books</p>
                    <p className="text-gray-700">8064 Allison Avenue 684</p>
                    <p className="text-gray-700">La Mesa, California, 91942, U.S.A.</p>
                    
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-amber-800">Response Time</h3>
                    <p className="text-gray-700">Within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white border border-amber-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/WanjiruWarama"
                  className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a
                  href="https://twitter.com/wanjiruwarama"
                  className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.instagram.com/wanjiru_warama_author/"
                  className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <img src="/instagram.png" alt="Instagram" className="w-6 h-6 invert" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wanjiruwarama/"
                  className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.8v1.98h.06c.53-1 1.84-2.06 3.8-2.06 4.07 0 4.82 2.68 4.82 6.17V23h-4v-6.48c0-1.55-.03-3.55-2.17-3.55-2.18 0-2.51 1.7-2.51 3.45V23h-4V8.5z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@wanjiruwarama2016/videos"
                  className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.966 2.966 0 00-2.088-2.103C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.41.583A2.966 2.966 0 00.502 6.186C0 7.9 0 12 0 12s0 4.1.502 5.814a2.966 2.966 0 002.088 2.103C4.3 20.5 12 20.5 12 20.5s7.7 0 9.41-.583a2.966 2.966 0 002.088-2.103C24 16.1 24 12 24 12s0-4.1-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-amber-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="" className="text-gray-600">Select a subject</option>
                  <option value="book-inquiry" className="text-gray-900">Book Inquiry</option>
                  <option value="book-club" className="text-gray-900">Book Club Discussion</option>
                  <option value="event" className="text-gray-900">Event Invitation</option>
                  <option value="media" className="text-gray-900">Media Inquiry</option>
                  <option value="general" className="text-gray-900">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Tell me about your inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 to-green-100 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Do you do book club visits?</h4>
                <p className="text-gray-700 text-sm">Yes! I love connecting with book clubs. Please contact me through the form above to discuss availability.</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Are you available for interviews?</h4>
                <p className="text-gray-700 text-sm">I'm happy to participate in media interviews. Please include details about your publication and timeline.</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Do you offer writing workshops?</h4>
                <p className="text-gray-700 text-sm">Yes, I conduct writing workshops focused on African literature and storytelling. Check the Events page for upcoming sessions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">How can I purchase your books?</h4>
                <p className="text-gray-700 text-sm">My books are available through major online retailers and local bookstores. Visit the Books page for direct purchase links.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
