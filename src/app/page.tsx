import Image from "next/image";

export default function Home() {
  // Removed featured/newsletter blocks

  return (
    <div className="min-h-screen">
      {/* Hero Banner with gs1.jpg background and tagline */}
      <section className="relative bg-gradient-to-br from-green-100 via-green-200 to-amber-100">
        <div className="relative w-full overflow-hidden" style={{ height: 460 }}>
          <Image
            src="/gs1.jpg"
            alt="African landscape banner"
            fill
            priority
            className="object-cover object-center"
          />
          {/* subtle, non-black tint for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/0 via-emerald-700/5 to-amber-200/5" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <div className="text-white text-center max-w-6xl">
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold opacity-95 drop-shadow-xl leading-tight">
                Exploring Africa&apos;s lives, legacies, and histories through stories
              </p>
              <p className="mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold opacity-95 drop-shadow-xl leading-tight">
                that enlighten, connect, and inspire...
              </p>
            </div>
            {/* Author photo on the right, no frame */}
            <Image
              src="/20210911_111527.webp"
              alt="Wanjirũ Warama"
              width={96}
              height={96}
              className="rounded-full shadow-lg hidden sm:block absolute right-4 bottom-4"
            />
          </div>
        </div>
      </section>

      {/* Stacked book covers showcase */}
      <section className="bg-amber-50 py-16 px-4 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
            {/* Overlapping covers - clean, centered, minimal angle */}
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="flex items-end justify-center max-w-6xl w-full translate-y-4">
                <div className="w-[22%] aspect-[3/4] shadow-2xl overflow-hidden -mr-8 z-10">
                  <Image src="/UnexpectedAmerica.webp" alt="Unexpected America" width={400} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="w-[24%] aspect-[3/4] shadow-2xl overflow-hidden -mr-8 z-20">
                  <Image src="/YearsofShame.webp" alt="Years of Shame" width={420} height={630} className="w-full h-full object-cover" />
                </div>
                <div className="w-[26%] aspect-[3/4] shadow-2xl overflow-hidden -mr-8 z-30">
                  <Image src="/THE+COLONIAL+FARM+12.webp" alt="The Colonial Farm" width={460} height={690} className="w-full h-full object-cover" />
                </div>
                <div className="w-[24%] aspect-[3/4] shadow-2xl overflow-hidden z-20">
                  <Image src="/EntangledinAmerica.webp" alt="Entangled in America" width={420} height={630} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* soft bottom mask for realism */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-amber-50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Newsletter CTA - light background */}
      <section className="bg-amber-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-100 to-green-100 p-4 sm:p-6 md:p-8 text-amber-800">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-wide uppercase">Subscribe to Newsletter</h3>
                  <p className="mt-1 text-xs opacity-90">…and get updates in your inbox</p>
                </div>
                <form className="w-full md:w-auto flex items-center gap-3">
                  <div className="relative w-full md:w-[420px]">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full bg-white text-gray-900 placeholder-gray-600 rounded-full py-3 pl-4 pr-28 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 rounded-full px-5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Removed additional sections per request */}

      {/* Removed dark footer pre-section per request */}
    </div>
  );
}
