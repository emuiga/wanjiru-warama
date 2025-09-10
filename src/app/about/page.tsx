import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-6">Meet the Author</h1>
        </div>

        <div className="space-y-6">
          {/* Author Photo (floated left on larger screens) */}
          <Image
            src="/20210911_111527.webp"
            alt="Wanjirũ Warama"
            width={360}
            height={360}
            className="float-left mr-6 mb-4 rounded-xl shadow-xl w-64 h-auto sm:w-72 lg:w-80"
            priority
          />

          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-base">
                Wanjirũ Warama was born and raised on a British colonial farm in Solai, Nakuru, Kenya, where her
                parents worked as peasant laborers. With no access to books and little expectation of formal
                education, Wanjirũ&apos;s path to schooling was unexpected—and transformative. Education became her
                lifeline out of poverty and remains central to her life’s mission.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">* * *</p>

              <p className="text-gray-700 leading-relaxed text-base">
                After attending local primary schools and Menengai High School, she trained in secretarial studies
                at the Kenya Government Secretarial College in Nairobi. She went on to work for the Ministry of
                Labor and later British multinational Lonrho Limited, all while pursuing advanced studies through
                evening and correspondence courses. Though the University of Nairobi declined her application,
                Wanjirũ continued her education at private colleges and eventually joined United States International
                University in Nairobi. In 1984, she transferred to the San Diego campus, where she completed both her
                undergraduate and graduate degrees.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                Her early years in the U.S., including her work with a legal newspaper agency and real estate firms,
                inspired her debut memoir, <em>Unexpected America</em>, which explores the challenges immigrants face.
                She later built a 25-year career in real estate, including 23 years as a licensed broker. That chapter
                of her life is the focus of her second book, <em>Entangled in America</em>.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                In 2014, Wanjirũ left real estate to pursue writing full-time. She has since authored seven books—with
                the eighth due in late 2025—that explore themes of identity, resilience, and justice. Her works include
                <em> Years of Shame</em>, which addresses female genital mutilation; <em>Beyond Conscious Self</em>, a travel memoir;
                and <em>New Beginning</em>, a personal essay on spiritual transformation.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                Her acclaimed series, <strong>THE COLONIZED series</strong> (<em>The Colonized and the Scramble for Africa</em>;
                <em> The British vs Kenya’s Mau Mau</em>; and <em>The Colonial Farm</em>), sheds light on untold stories of Kenya’s
                colonial history through the lens of her family and community. The first book, <em>The Colonized and the Scramble for
                Africa</em>, was named “Book of the Month” by the San Diego Public Library’s Local Author Showcase. The second book,
                <em> The British vs. Kenya’s Mau Mau</em>, offers a ground-level view of colonial oppression. The third, <em>The Colonial Farm</em>,
                is a coming-of-age memoir chronicling her journey from a farmhand’s daughter to a determined young girl seeking liberation
                through education.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                Wanjirũ is also a dedicated philanthropist, passionate about education. She is a member of the San Diego Writers and
                Editors Guild, the Rotary Club, and a lifetime member of the Friends of the San Diego Public Library. She lives in
                California and visits her family in Kenya when she can.
              </p>
            </div>
            <div className="clear-both" />

            
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 to-green-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-amber-800 mb-4 text-center">Mission</h2>
          <p className="text-gray-700 text-center text-lg leading-relaxed">
            To preserve and share the rich stories of African communities through compelling 
            narratives that educate, inspire, and connect readers across the globe.
          </p>
        </div>
      </div>
    </div>
  );
}
