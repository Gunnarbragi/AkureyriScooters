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
            filter: 'brightness(0.35)'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-6 max-w-7xl mx-auto w-full">
          
          {/* BLUE CARD - LEFT */}
          <div className="w-full md:w-1/3 backdrop-blur-md bg-white/98 rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/30">
            <div className="relative overflow-hidden h-56 md:h-72">
              <img
                src="/images/blue-scooter.jpg"
                alt="Blue mobility scooter"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                ⭐ POPULAR
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                Cruise Port Scooter
              </h3>

              <p className="mt-2 md:mt-3 text-slate-600 text-xs md:text-sm leading-relaxed">
                Located only steps from the harbor. Perfect for cruise visitors and seniors exploring Akureyri.
              </p>

              <div className="flex flex-col gap-2 mt-4 md:mt-6">
                <a
                  href="https://wa.me/3548988100"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-3 rounded-xl text-center font-bold text-sm md:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  💬 WhatsApp Book
                </a>

                <a
                  href="https://m.me/554495891080509"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-center font-semibold text-sm md:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  📩 Messenger
                </a>

                <a
                  href="tel:+3548988100"
                  className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-center font-semibold text-sm md:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>

          {/* HERO TEXT - CENTER */}
          <div className="w-full md:w-2/5 text-center md:text-left text-white drop-shadow-2xl">
            <div className="mb-4 md:mb-6 inline-block bg-white/15 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/30 font-bold text-xs md:text-sm animate-pulse shadow-lg">
              🚢 Iceland's Premier Scooter Rental
            </div>

            <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tight">
              Explore
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-200 drop-shadow-lg">
                Akureyri
              </span>
              With Ease
            </h1>

            <p className="mt-6 md:mt-8 text-sm md:text-lg text-slate-100 leading-relaxed max-w-xl font-medium">
              Premium mobility scooter rentals for cruise visitors, seniors, and travelers exploring North Iceland. Book in minutes, explore for hours.
            </p>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="tel:+3548988100"
                className="bg-white text-blue-600 px-7 md:px-10 py-3 md:py-4 rounded-xl font-black text-sm md:text-base hover:scale-110 hover:shadow-2xl transition-all shadow-xl"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/3548988100"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-7 md:px-10 py-3 md:py-4 rounded-xl font-black text-sm md:text-base hover:scale-110 hover:shadow-2xl transition-all shadow-xl"
              >
                💬 Book WhatsApp
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <span className="font-bold">4.9/5 Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🛴</span>
                <span className="font-bold">500+ Rentals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-40 px-4 md:px-6 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-200/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-200/40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-black mb-4 md:mb-6 shadow-lg">
              💰 PRICING - NO HIDDEN FEES
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-4">Simple & Transparent</h2>
            <p className="mt-3 md:mt-6 text-slate-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Book now, pay on arrival. Flexible rental options in ISK and USD with no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12">
            {/* SINGLE SCOOTER */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 md:p-12 border border-slate-100 hover:border-blue-300">
              <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg">
                  🛴
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900">Single Scooter</h3>
                  <p className="text-slate-600 text-xs md:text-sm mt-1">For solo travelers</p>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {[
                  { time: '1 hour', iskPrice: '4.500 kr', usdPrice: '$35', icon: '⏱️' },
                  { time: '2 hours', iskPrice: '6.500 kr', usdPrice: '$55', icon: '⏱️' },
                  { time: '3 hours', iskPrice: '9.000 kr', usdPrice: '$75', icon: '⏱️' },
                  { time: '4 hours', iskPrice: '12.500 kr', usdPrice: '$100', highlight: true, icon: '🎉' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all duration-300 text-sm md:text-base ${item.highlight ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white font-black shadow-lg scale-105 border-2 border-blue-400' : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-blue-300'}`}>
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className={item.highlight ? 'font-black' : 'font-bold text-slate-700'}>{item.time}</span>
                    </span>
                    <div className="text-right">
                      <div className={item.highlight ? 'font-black text-base md:text-lg' : 'font-bold text-slate-900'}>{item.iskPrice}</div>
                      <div className={`text-xs md:text-sm ${item.highlight ? 'text-blue-100 font-black' : 'text-blue-600 font-bold'}`}>{item.usdPrice}</div>
                    </div>
                  </div>
                ))}
              </div>

              {!true && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <a href="https://wa.me/3548988100" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all">
                    Book Single →
                  </a>
                </div>
              )}
            </div>

            {/* DOUBLE SCOOTER */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 md:p-12 border border-slate-100 hover:border-cyan-300">
              <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg">
                  👥
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900">Double Scooter</h3>
                  <p className="text-slate-600 text-xs md:text-sm mt-1">For couples & groups</p>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {[
                  { time: '1 hour', iskPrice: '6.500 kr', usdPrice: '$55', icon: '⏱️' },
                  { time: '2 hours', iskPrice: '11.500 kr', usdPrice: '$90', icon: '⏱️' },
                  { time: '3 hours', iskPrice: '14.000 kr', usdPrice: '$115', icon: '⏱️' },
                  { time: '4 hours', iskPrice: '16.500 kr', usdPrice: '$135', highlight: true, icon: '🎉' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all duration-300 text-sm md:text-base ${item.highlight ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-500 text-white font-black shadow-lg scale-105 border-2 border-cyan-400' : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-cyan-300'}`}>
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className={item.highlight ? 'font-black' : 'font-bold text-slate-700'}>{item.time}</span>
                    </span>
                    <div className="text-right">
                      <div className={item.highlight ? 'font-black text-base md:text-lg' : 'font-bold text-slate-900'}>{item.iskPrice}</div>
                      <div className={`text-xs md:text-sm ${item.highlight ? 'text-cyan-100 font-black' : 'text-blue-600 font-bold'}`}>{item.usdPrice}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-200">
            <p className="text-slate-700 text-sm md:text-base font-bold">
              🏆 <span className="text-blue-600">Best Value:</span> 4-hour rental saves you 25% vs hourly rates
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-12 md:mb-16">Why Choose Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: '⚡', title: 'Instant Booking', desc: 'Book in 60 seconds via WhatsApp or phone' },
              { icon: '🛡️', title: 'Safe & Secure', desc: 'Insurance included, expert maintenance' },
              { icon: '📍', title: 'Prime Location', desc: 'Steps from Akureyri cruise port' },
              { icon: '👥', title: 'Expert Support', desc: '24/7 customer support in English' },
              { icon: '🌟', title: 'Highly Rated', desc: '500+ happy customers, 4.9/5 stars' },
              { icon: '💰', title: 'Best Prices', desc: 'Transparent pricing, no hidden fees' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-8 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg group">
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOOTERS */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block bg-slate-200 text-slate-700 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-black mb-4 md:mb-6">🛴 OUR FLEET</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Premium Scooters</h2>
            <p className="mt-3 md:mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Comfortable, modern, and expertly maintained for your safety and enjoyment</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* RED */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-slate-100">
              <div className="relative overflow-hidden h-56 md:h-96 bg-slate-200">
                <img
                  src="/images/red-scooter.jpg"
                  alt="Red mobility scooter"
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
                  <p className="text-white font-bold text-sm md:text-base">Premium & Spacious</p>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">Premium Scooter</h3>

                <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  Our flagship model - the perfect choice for maximum comfort and style while exploring beautiful Akureyri and North Iceland.
                </p>

                <div className="mt-6 md:mt-8 space-y-2 text-sm md:text-base">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-lg">✓</span> Extra spacious & comfortable
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-lg">✓</span> Advanced safety features
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-lg">✓</span> Premium upholstery
                  </div>
                </div>

                <a
                  href="tel:+3548988100"
                  className="inline-block mt-8 md:mt-10 bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base hover:scale-110 transition-all shadow-lg hover:shadow-xl"
                >
                  📞 Book Premium →
                </a>
              </div>
            </div>

            {/* BLUE */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-slate-100 ring-2 ring-blue-500/20">
              <div className="relative overflow-hidden h-56 md:h-96 bg-slate-200">
                <img
                  src="/images/blue-scooter.jpg"
                  alt="Blue mobility scooter"
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-black shadow-lg">
                  ⭐ MOST POPULAR
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 to-transparent p-4 md:p-6">
                  <p className="text-white font-bold text-sm md:text-base">Cruise-Ready & Quick</p>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">Cruise Port Scooter</h3>

                <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  Located steps from the harbor - the ideal choice for cruise visitors arriving directly at port. Book instantly and start exploring!
                </p>

                <div className="mt-6 md:mt-8 space-y-2 text-sm md:text-base">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-lg">✓</span> Steps from cruise port
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-lg">✓</span> Quick rental process
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-lg">✓</span> Expert guidance included
                  </div>
                </div>

                <a
                  href="https://wa.me/3548988100"
                  className="inline-block mt-8 md:mt-10 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base hover:scale-110 transition-all shadow-lg hover:shadow-xl"
                >
                  💬 Book on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500/15 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/15 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-4">⭐ Loved by Travelers</h2>
            <p className="text-slate-300 text-base md:text-lg">Join 500+ happy customers who've experienced the freedom of Akureyri</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { quote: '"This was freedom."', author: 'Todd S', location: 'USA' },
              { quote: '"Perfect for my mother."', author: 'Karen', location: 'Australia' },
              { quote: '"Amazing service right by the harbor."', author: 'Jeff W', location: 'Canada' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/30 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105 hover:bg-white/15 hover:shadow-2xl">
                <div className="text-2xl md:text-3xl mb-4 group-hover:scale-150 transition-transform duration-300">⭐⭐⭐⭐⭐</div>
                <p className="italic text-slate-100 text-base md:text-lg leading-relaxed mb-6 font-medium">
                  {review.quote}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div>
                    <div className="font-bold text-white text-sm md:text-base">
                      — {review.author}
                    </div>
                    <div className="text-slate-300 text-xs md:text-sm">
                      {review.location}
                    </div>
                  </div>
                  <div className="text-2xl">😊</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 text-center">
            <p className="text-slate-300 text-base md:text-lg font-medium">
              "So far, 5 out of 5 customers have rated us as excellent!"
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to Explore?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Book your scooter in 60 seconds and discover the beauty of Akureyri with the freedom to explore at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/3548988100"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-base md:text-lg hover:scale-110 transition-all shadow-2xl hover:shadow-3xl"
            >
              💬 Book on WhatsApp
            </a>
            <a
              href="tel:+3548988100"
              className="bg-blue-900/80 hover:bg-blue-900 text-white px-10 py-4 rounded-xl font-black text-base md:text-lg hover:scale-110 transition-all shadow-2xl hover:shadow-3xl border-2 border-white/30"
            >
              📞 Call +354 898 8100
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 md:py-24 px-4 md:px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-black mb-4">
                Akureyri Scooters
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Iceland's premier mobility scooter rental service. Experience freedom and adventure in Akureyri.
              </p>
            </div>

            <div>
              <h4 className="text-white font-black text-base md:text-lg mb-6">Contact</h4>
              <div className="space-y-3 text-sm md:text-base">
                <a href="tel:+3548988100" className="text-slate-300 hover:text-white transition-colors font-medium block">
                  📞 +354 898 8100
                </a>
                <a href="mailto:akureyriscooters@akureyriscooters.is" className="text-slate-300 hover:text-white transition-colors font-medium block">
                  ✉️ akureyriscooters@akureyriscooters.is
                </a>
                <a href="https://wa.me/3548988100" className="text-slate-300 hover:text-white transition-colors font-medium block">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-base md:text-lg mb-6">Location</h4>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-slate-300">📍 Grímseyjargata 1</p>
                <p className="text-slate-300">600 Akureyri, Iceland</p>
                <p className="text-slate-400 text-xs md:text-sm mt-4">Steps from cruise port</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-base md:text-lg mb-6">Hours</h4>
              <div className="space-y-2 text-sm md:text-base">
                <div>
                  <p className="text-slate-300 font-bold">Mon – Fri</p>
                  <p className="text-blue-400 font-black">08:00 – 17:00</p>
                </div>
                <p className="text-slate-500 text-xs md:text-sm mt-3">Special requests welcome outside hours</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 md:pt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-xs md:text-sm text-center md:text-left">© 2024 Akureyri Scooters. All rights reserved. | Premium Mobility Solutions</p>
              <div className="flex gap-6">
                <a href="https://wa.me/3548988100" className="text-slate-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
                <a href="https://m.me/554495891080509" className="text-slate-400 hover:text-white transition-colors">
                  Messenger
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
