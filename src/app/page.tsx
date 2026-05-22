export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/cruise-ship.jpg)',
            filter: 'brightness(0.35)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-6 max-w-7xl mx-auto w-full">
          <div className="w-full md:w-1/3 backdrop-blur-md bg-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/30">
            <div className="relative overflow-hidden h-56 md:h-72">
              <img
                src="/images/blue-scooter.jpg"
                alt="Blue mobility scooter"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-black text-white">
                Cruise Port Scooter
              </h3>

              <p className="mt-2 md:mt-3 text-slate-200 text-xs md:text-sm leading-relaxed">
                Located only steps from the harbor. Perfect for cruise visitors and seniors exploring Akureyri.
              </p>

              <div className="flex flex-col gap-2 mt-4 md:mt-6">
                <a href="#booking" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 md:px-6 py-3 rounded-xl text-center font-bold text-sm md:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  Book Online
                </a>

                <a href="https://wa.me/3548988100" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-3 rounded-xl text-center font-bold text-sm md:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  💬 WhatsApp Book
                </a>

                <a href="tel:+3548988100" className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-center font-semibold text-sm md:text-base hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/5 text-center md:text-left text-white drop-shadow-2xl">
            <div className="mb-4 md:mb-6 inline-block bg-white/15 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/30 font-bold text-xs md:text-sm shadow-lg">
              🚢 Scooter Rentals in Akureyri
            </div>

            <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tight">
              Explore
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-200 drop-shadow-lg">
                Akureyri
              </span>
              With Ease
            </h1>

            <p className="mt-6 md:mt-8 text-sm md:text-lg text-slate-100 leading-relaxed max-w-xl font-medium">
              Premium mobility scooter rentals for cruise visitors, seniors, and travelers exploring North Iceland. Book online in minutes.
            </p>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#booking" className="bg-white text-blue-600 px-7 md:px-10 py-3 md:py-4 rounded-xl font-black text-sm md:text-base hover:scale-110 hover:shadow-2xl transition-all shadow-xl">
                Book Online
              </a>

              <a href="https://wa.me/3548988100" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-7 md:px-10 py-3 md:py-4 rounded-xl font-black text-sm md:text-base hover:scale-110 hover:shadow-2xl transition-all shadow-xl">
                💬 Book WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-40 px-4 md:px-6 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
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
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 md:p-12 border border-slate-100 hover:border-blue-300">
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-8">Single Scooter</h3>
              {[
                ['1 hour', '4.500 kr', '$35'],
                ['2 hours', '6.500 kr', '$55'],
                ['3 hours', '9.000 kr', '$75'],
                ['4 hours', '12.500 kr', '$100'],
              ].map(([time, isk, usd]) => (
                <div key={time} className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-200 mb-3">
                  <span className="font-bold text-slate-700">{time}</span>
                  <div className="text-right">
                    <div className="font-bold text-slate-900">{isk}</div>
                    <div className="text-xs md:text-sm text-blue-600 font-bold">{usd}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 md:p-12 border border-slate-100 hover:border-cyan-300">
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-8">Double Scooter</h3>
              {[
                ['1 hour', '6.500 kr', '$55'],
                ['2 hours', '11.500 kr', '$90'],
                ['3 hours', '14.000 kr', '$115'],
                ['4 hours', '16.500 kr', '$135'],
              ].map(([time, isk, usd]) => (
                <div key={time} className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 rounded-xl bg-slate-50 border border-slate-200 mb-3">
                  <span className="font-bold text-slate-700">{time}</span>
                  <div className="text-right">
                    <div className="font-bold text-slate-900">{isk}</div>
                    <div className="text-xs md:text-sm text-blue-600 font-bold">{usd}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-black mb-4 md:mb-6">BOOK ONLINE</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Reserve Your Scooter</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Fill out the booking form below. Your request will be sent securely.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xpqnrdjb"
            method="POST"
            encType="application/x-www-form-urlencoded"
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-2xl border border-blue-200 p-6 md:p-10 grid md:grid-cols-2 gap-5"
          >
            <input name="Name" required type="text" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Full name" />
            <input name="Email" required type="email" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" />
            <input name="Phone" required type="tel" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Phone / WhatsApp" />
            <input name="Pickup date" required type="date" className="rounded-xl border border-slate-300 px-4 py-3" />
            <input name="Pickup time" required type="time" min="08:00" max="18:00" className="rounded-xl border border-slate-300 px-4 py-3" />

            <select name="Rental length" required className="rounded-xl border border-slate-300 px-4 py-3">
              <option value="">Choose rental length</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
              <option>4 hours</option>
            </select>

            <select name="Scooter type" required className="rounded-xl border border-slate-300 px-4 py-3">
              <option value="">Choose scooter</option>
              <option>Single Seater</option>
              <option>Double Seater</option>
            </select>

            <input name="Number of scooters" required type="number" min="1" max="10" defaultValue="1" className="rounded-xl border border-slate-300 px-4 py-3" />

            <textarea name="Message" rows={4} className="md:col-span-2 rounded-xl border border-slate-300 px-4 py-3" placeholder="Cruise ship name, pickup notes, special requests, etc." />

            <button type="submit" className="md:col-span-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-black text-base hover:scale-105 transition-all shadow-xl">
              Send Booking Request
            </button>
          </form>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-12 md:mb-16">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: '⚡', title: 'Easy Booking', desc: 'Reserve online, by WhatsApp, or by phone' },
              { icon: '🛡️', title: 'Safe & Comfortable', desc: 'Clean scooters and friendly help before you ride' },
              { icon: '📍', title: 'Prime Location', desc: 'Steps from Akureyri cruise port' },
              { icon: '👥', title: 'Helpful Support', desc: 'We help you choose the right scooter' },
              { icon: '🕒', title: 'Open 08:00 – 18:00', desc: 'Special requests welcome outside hours' },
              { icon: '💰', title: 'Clear Prices', desc: 'Transparent pricing with no hidden fees' },
            ].map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-8 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg group">
                <div className="text-4xl md:text-5xl mb-4">{feature.icon}</div>
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
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Our Scooters</h2>
            <p className="mt-3 md:mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Comfortable, modern, and ready for exploring Akureyri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-slate-100">
              <div className="relative overflow-hidden h-56 md:h-96 bg-slate-200">
                <img src="/images/red-scooter.jpg" alt="Red mobility scooter" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" />
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">Single Seater</h3>
                <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  Comfortable and easy to drive. Perfect for one person exploring Akureyri.
                </p>
                <a href="#booking" className="inline-block mt-8 md:mt-10 bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base hover:scale-110 transition-all shadow-lg hover:shadow-xl">
                  Book Single Seater →
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-slate-100 ring-2 ring-blue-500/20">
              <div className="relative overflow-hidden h-56 md:h-96 bg-slate-200">
                <img src="/images/blue-scooter.jpg" alt="Blue mobility scooter" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" />
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">Double Seater</h3>
                <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  Spacious and comfortable for two people exploring Akureyri together.
                </p>
                <a href="#booking" className="inline-block mt-8 md:mt-10 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base hover:scale-110 transition-all shadow-lg hover:shadow-xl">
                  Book Double Seater →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to Explore?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-10">
            Book your scooter online and discover Akureyri with the freedom to explore at your own pace.
          </p>
          <a href="#booking" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-base md:text-lg hover:scale-110 transition-all shadow-2xl">
            Book Online
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 md:py-24 px-4 md:px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-black mb-4">Akureyri Scooters</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Mobility scooter rentals in Akureyri, Iceland. Experience freedom and comfort while you explore.
              </p>
            </div>

            <div>
              <h4 className="text-white font-black text-base md:text-lg mb-6">Contact</h4>
              <a href="tel:+3548988100" className="text-slate-300 hover:text-white block">📞 +354 898 8100</a>
              <a href="mailto:akureyriscooters@akureyriscooters.is" className="text-slate-300 hover:text-white block mt-3">✉️ akureyriscooters@akureyriscooters.is</a>
              <a href="https://wa.me/3548988100" className="text-slate-300 hover:text-white block mt-3">💬 WhatsApp</a>
            </div>

            <div>
              <h4 className="text-white font-black text-base md:text-lg mb-6">Location</h4>
              <p className="text-slate-300">📍 Grímseyjargata 1</p>
              <p className="text-slate-300">600 Akureyri, Iceland</p>
            </div>

            <div>
              <h4 className="text-white font-black text-base md:text-lg mb-6">Hours</h4>
              <p className="text-slate-300 font-bold">Monday – Friday</p>
              <p className="text-blue-400 font-black">08:00 – 18:00</p>
              <p className="text-slate-500 text-xs md:text-sm mt-3">Special requests welcome outside hours</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 md:pt-12 text-center">
            <p className="text-slate-500 text-xs md:text-sm">© 2026 Akureyri Scooters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
