import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Books() {
  const imageMap: Record<string, string> = {
    "The Colonial Farm": "Colonial.jpeg",
    "Voices from the Valley": "Unexpected.jpeg",
    "Echoes of Independence": "YearsofShame.jpeg",
    "Seeds of Hope": "Entangled.jpeg",
  };

  const books = [
    {
      id: 1,
      title: "The Colonial Farm",
      cover: "/THE+COLONIAL+FARM+12.webp",
      hoverCover: "/Colonial.jpeg",
      description: "An inspiring African-themed novel about resilience, family, and cultural survival in Kenya.",
      year: "2021",
      featured: true,
      amazon: "https://www.amazon.com/s?k=The+Colonial+Farm+Wanjiru+Warama"
    },
    {
      id: 2,
      title: "Unexpected America",
      cover: "/UnexpectedAmerica.webp",
      hoverCover: "/Unexpected.jpeg",
      description: "A collection of short stories exploring the lives of women in rural Kenya.",
      year: "2023",
      featured: false,
      amazon: "https://www.amazon.com/s?k=Unexpected+America+Wanjiru+Warama"
    },
    {
      id: 3,
      title: "Echoes of Independence",
      cover: "/YearsofShame.webp",
      hoverCover: "/YearsofShame.jpeg",
      description: "A historical fiction novel set during Kenya's struggle for independence.",
      year: "2022",
      featured: false,
      amazon: "https://www.amazon.com/s?k=Echoes+of+Independence+Wanjiru+Warama"
    },
    {
      id: 4,
      title: "Seeds of Hope",
      cover: "/EntangledinAmerica.webp",
      hoverCover: "/Entangled.jpeg",
      description: "A coming-of-age story about education and empowerment in post-colonial Kenya.",
      year: "2024",
      featured: false,
      amazon: "https://www.amazon.com/s?k=Entangled+in+America+Wanjiru+Warama"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Books</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the rich collection of African-themed literature that brings to life the stories 
            of resilience, family, and cultural survival.
          </p>
        </div>

        {/* Removed featured block per request */}

        {/* Books Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-amber-800 mb-8 text-center">All Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="group bg-white shadow-md overflow-hidden">
                <div className="relative aspect-[3/4] bg-white">
                  <Image src={book.cover} alt={`${book.title} Book Cover`} fill className="object-contain" />
                  {book.hoverCover && (
                    <Image src={book.hoverCover} alt={`${book.title} Alternate Cover`} fill className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                    <p className="text-gray-500 text-xs">{book.year}</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{book.description}</p>
                  <div className="mt-2 flex gap-3">
                    <a href={book.amazon} target="_blank" className="flex-1 text-center bg-amber-600 text-white font-semibold py-2 text-sm">Buy on Amazon</a>
                    <a href={`/books/${book.id}`} className="px-4 py-2 border border-gray-800 text-gray-800 text-sm">Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Club Information */}
        <div className="bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">Perfect for Book Clubs</h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            These books are ideal for book club discussions, offering rich themes of cultural identity, 
            historical context, and universal human experiences. Discussion guides are available for each title.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Download Discussion Guides
          </button>
        </div>
      </div>
    </div>
  );
}
