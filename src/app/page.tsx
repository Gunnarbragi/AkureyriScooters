export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/cruise-ship.jpg)',
            filter: 'brightness(0.4)'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-6 max-w-7xl mx-auto w-full">
          
          {/* BLUE CARD - LEFT */}
          <div className="w-full md:w-1/3 backdrop-blur-sm bg-white/95 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105 transition duration-300">
            <img
              src="/images/blue-scooter.jpg"
              alt="Blue mobility scooter"
              className="w-full h-48 md:h-72 object-cover"
            />

            <div className="p-4 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Cruise Port Scooter
              </h3>

              <p className="mt-2 md:mt-3 text-slate-600 text-xs md:text-sm leading-relaxed">
                Located only steps from the harbor. Perfect for cruise visitors and seniors exploring Akureyri.
              </p>

              <div className="flex flex-col gap-2 mt-4 md:mt-6">
                <a
                  href="https://wa.me/3548988100"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-center font-semibold text-sm md:text-base hover:scale-105 transition shadow-lg"
                >
                  💬 WhatsApp
                </a>

                <a
                  href="https://m.me/554495891080509"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-center font-semibold text-sm md:text-base hover:scale-105 transition shadow-lg"
                >
                  📩 Messenger
                </a>

                <a
                  href="tel:+3548988100"
                  className="bg-slate-900 hover:bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-center font-semibold text-sm md:text-base hover:scale-105 transition shadow-lg"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>

          {/* HERO TEXT - CENTER */}
          <div className="w-full md:w-2/5 text-center md:text-left text-white drop-shadow-lg">
            <div className="mb-3 md:mb-6 inline-block bg-white/10 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 rounded-full border border-white/20 font-semibold text-xs md:text-base animate-pulse">
              🚢 Premium Scooter Rentals
            </div>

            <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tight">
              Explore
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                Akureyri
              </span>
              With Ease
            </h1>

            <p className="mt-4 md:mt-8 text-sm md:text-lg text-slate-100 leading-relaxed max-w-xl">
              Premium mobility scooter rentals for cruise visitors, seniors, and travelers exploring North Iceland.
            </p>

            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-2 md:gap-3 justify-center md:justify-start">
              <a
                href="tel:+3548988100"
                className="bg-white text-slate-900 px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:scale-105 hover:bg-slate-50 transition shadow-lg"
              >
                📞 Call
              </a>

              <a
                href="https://wa.me/3548988100"
                className="bg-green-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:scale-105 hover:bg-green-600 transition shadow-lg"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">💰 PRICING</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900">Simple & Transparent</h2>
            <p className="mt-2 md:mt-4 text-slate-600 text-sm md:text-lg max-w-2xl mx-auto">
              Flexible rental options in ISK and USD - no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {/* SINGLE SCOOTER */}
            <div className="group bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-6 md:p-10 border border-slate-100">
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg md:text-xl">🛴</div>
                <h3 className="text-xl md:text-3xl font-black text-slate-900">Single Scooter</h3>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                {[
                  { time: '1 hour', iskPrice: '4.500 kr', usdPrice: '$35' },
                  { time: '2 hours', iskPrice: '6.500 kr', usdPrice: '$55' },
                  { time: '3 hours', iskPrice: '9.000 kr', usdPrice: '$75' },
                  { time: '4 hours', iskPrice: '12.500 kr', usdPrice: '$100', highlight: true }
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl transition text-sm md:text-base ${item.highlight ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold shadow-lg' : 'bg-slate-50 hover:bg-slate-100'}`}>
                    <span className={item.highlight ? 'font-bold' : 'font-semibold text-slate-700'}>{item.time}</span>
                    <div className="text-right">
                      <div className={item.highlight ? 'font-black text-sm md:text-base' : 'font-bold text-slate-900'}>{item.iskPrice}</div>
                      <div className={`text-xs md:text-sm ${item.highlight ? 'text-blue-100 font-bold' : 'text-blue-600 font-semibold'}`}>{item.usdPrice}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOUBLE SCOOTER */}
            <div className="group bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-6 md:p-10 border border-slate-100">
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-cyan-100 rounded-full flex items-center justify-center text-lg md:text-xl">👥</div>
                <h3 className="text-xl md:text-3xl font-black text-slate-900">Double Scooter</h3>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                {[
                  { time: '1 hour', iskPrice: '6.500 kr', usdPrice: '$55' },
                  { time: '2 hours', iskPrice: '11.500 kr', usdPrice: '$90' },
                  { time: '3 hours', iskPrice: '14.000 kr', usdPrice: '$115' },
                  { time: '4 hours', iskPrice: '16.500 kr', usdPrice: '$135', highlight: true }
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl transition text-sm md:text-base ${item.highlight ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg' : 'bg-slate-50 hover:bg-slate-100'}`}>
                    <span className={item.highlight ? 'font-bold' : 'font-semibold text-slate-700'}>{item.time}</span>
                    <div className="text-right">
                      <div className={item.highlight ? 'font-black text-sm md:text-base' : 'font-bold text-slate-900'}>{item.iskPrice}</div>
                      <div className={`text-xs md:text-sm ${item.highlight ? 'text-blue-100 font-bold' : 'text-blue-600 font-semibold'}`}>{item.usdPrice}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-slate-600 text-xs md:text-sm">✨ Best value with our 4-hour rental option</p>
          </div>
        </div>
      </section>

      {/* SCOOTERS */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block bg-slate-100 text-slate-700 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">🛴 OUR FLEET</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900">
              Premium Scooters
            </h2>
            <p className="mt-2 md:mt-4 text-slate-600 text-sm md:text-lg">Comfortable, modern, and meticulously maintained</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* RED */}
            <div className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 border border-slate-100">
              <div className="relative overflow-hidden h-48 md:h-80 bg-slate-200">
                <img
                  src="/images/red-scooter.jpg"
                  alt="Red mobility scooter"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">Premium Scooter</h3>

                <p className="mt-3 md:mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  Our flagship model - perfect for exploring Akureyri with maximum comfort and style.
                </p>

                <a
                  href="tel:+3548988100"
                  className="inline-block mt-6 md:mt-8 bg-slate-900 hover:bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:scale-105 transition shadow-lg"
                >
                  📞 Book Now
                </a>
              </div>
            </div>

            {/* BLUE */}
            <div className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 border border-slate-100">
              <div className="relative overflow-hidden h-48 md:h-80 bg-slate-200">
                <img
                  src="/images/blue-scooter.jpg"
                  alt="Blue mobility scooter"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">Cruise Port Scooter</h3>

                <p className="mt-3 md:mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  Located steps from the harbor - ideal for cruise visitors arriving directly at port.
                </p>

                <a
                  href="https://wa.me/3548988100"
                  className="inline-block mt-6 md:mt-8 bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:scale-105 transition shadow-lg"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-black">⭐ Loved by Travelers</h2>
            <p className="mt-3 md:mt-4 text-slate-300 text-sm md:text-lg">Thousands of happy customers from around the world</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              { quote: '"This was freedom."', author: 'Todd S' },
              { quote: '"Perfect for my mother."', author: 'Karen' },
              { quote: '"Amazing service right by the harbor."', author: 'Jeff W' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg md:rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/40 transition duration-300 group hover:scale-105">
                <div className="text-2xl mb-3 md:mb-4 group-hover:scale-125 transition">⭐⭐⭐⭐⭐</div>
                <p className="italic text-slate-100 text-sm md:text-lg leading-relaxed">
                  {review.quote}
                </p>
                <div className="mt-4 md:mt-6 font-bold text-slate-200 text-sm md:text-base">
                  — {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Explore?</h2>
          <p className="text-base md:text-lg text-blue-100 mb-8">Book your scooter today and experience the freedom of Akureyri</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/3548988100"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition shadow-lg"
            >
              💬 Book on WhatsApp
            </a>
            <a
              href="tel:+3548988100"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transition shadow-lg"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 md:py-20 px-4 md:px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-black mb-3 md:mb-4">
                Akureyri Scooters
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Premium mobility scooter rentals in Akureyri, Iceland. Experience freedom on your own terms.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Contact</h4>
              <div className="space-y-2 md:space-y-4 text-sm md:text-base">
                <p className="text-slate-300 hover:text-white transition cursor-pointer">📍 Grímseyjargata 1, 600 Akureyri</p>
                <a href="tel:+3548988100" className="text-slate-300 hover:text-white transition block">📞 +354 898 8100</a>
                <a href="mailto:akureyriscooters@akureyriscooters.is" className="text-slate-300 hover:text-white transition block">✉️ akureyriscooters@akureyriscooters.is</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Hours</h4>
              <p className="text-slate-300 text-sm md:text-base">Monday – Friday</p>
              <p className="text-slate-300 text-base md:text-lg font-semibold text-blue-400">08:00 – 17:00</p>
              <p className="text-slate-500 mt-3 md:mt-4 text-xs md:text-sm">Available for special requests outside hours</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 md:pt-8 text-center">
            <p className="text-slate-500 text-xs md:text-sm">© 2024 Akureyri Scooters. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  )
}
