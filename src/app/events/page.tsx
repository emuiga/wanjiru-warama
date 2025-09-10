import Image from "next/image";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Book Reading & Discussion: The Colonial Farm",
      date: "March 15, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Nairobi National Library",
      type: "Reading",
      description: "Join Wanjirũ for an intimate reading and discussion of her acclaimed novel, followed by Q&A session.",
      image: "/books.jpg"
    },
    {
      id: 2,
      title: "African Literature Festival Panel",
      date: "April 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "KICC, Nairobi",
      type: "Panel Discussion",
      description: "Panel discussion on 'Preserving Cultural Heritage Through Literature' with other prominent African authors.",
      image: "/books.jpg"
    },
    {
      id: 3,
      title: "Writing Workshop: Telling African Stories",
      date: "May 10, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "University of Nairobi",
      type: "Workshop",
      description: "A hands-on workshop for aspiring writers on crafting authentic African narratives.",
      image: "/books.jpg"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Interview: BBC World Service",
      date: "February 8, 2024",
      type: "Interview",
      description: "Discussion about the importance of African literature in global storytelling.",
      link: "https://example.com/bbc-interview"
    },
    {
      id: 5,
      title: "Book Launch: The Colonial Farm",
      date: "December 15, 2023",
      type: "Book Launch",
      description: "Official launch of The Colonial Farm at the National Museum of Kenya.",
      link: "https://example.com/book-launch"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join Wanjirũ at upcoming readings, discussions, and workshops. Stay connected with the 
            literary community and engage with African literature.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-amber-800 mb-8">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <div className="aspect-video lg:aspect-square relative">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">{event.title}</h3>
                    <div className="space-y-2 mb-4 text-gray-600">
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date} at {event.time}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-amber-800 mb-8">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-amber-50 rounded-lg p-6 hover:bg-amber-100 transition-colors">
                <div className="flex items-center mb-3">
                  <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{event.date}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                <a
                  href={event.link}
                  className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                >
                  Watch/Read More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Event Newsletter Signup */}
        <div className="bg-gradient-to-r from-amber-100 to-green-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">Stay Updated</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get notified about upcoming events, readings, and exclusive content. 
            Join our community of readers and literature enthusiasts.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-amber-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
