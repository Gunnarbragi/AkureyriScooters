export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
{/* BLUE */}
<div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">

  <img
    src="/images/blue-scooter.jpg"
    alt="Blue mobility scooter"
    className="w-full h-80 object-cover bg-slate-100 p-4 rounded-2xl"
  />

  <div className="p-8">

    <h3 className="text-3xl font-bold">
      Cruise Port Scooter
    </h3>

    <p className="mt-4 text-slate-600">
      Located only steps from the harbor.
      Perfect for cruise visitors and seniors.
    </p>

    <div className="flex flex-col gap-3 mt-6">

      <a
        href="https://wa.me/3548988100"
        className="bg-green-500 text-white px-6 py-3 rounded-xl text-center font-semibold hover:scale-105 transition"
      >
        💬 WhatsApp Booking
      </a>

      <a
        href="https://m.me/554495891080509"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-semibold hover:scale-105 transition"
      >
        📩 Messenger
      </a>

      <a
        href="tel:+3548988100"
        className="bg-black text-white px-6 py-3 rounded-xl text-center font-semibold hover:scale-105 transition"
      >
        📞 Call Now
      </a>

    </div>

  </div>
</div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-6 inline-block bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
            🚢 Only steps from the Akureyri cruise port
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Explore Akureyri
            <span className="block text-blue-200">
              With Ease
            </span>
          </h1>

          <p className="mt-6 text-xl max-w-2xl mx-auto text-slate-200">
            Premium mobility scooter rentals for cruise visitors,
            seniors, and travelers exploring North Iceland.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="tel:+3548988100"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/3548988100"
              className="bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              💬 WhatsApp
            </a>

            <a
              href="https://m.me/554495891080509"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              📩 Messenger
            </a>

          </div>
        </div>
      </section>

      {/* SCOOTERS */}
      <section className="py-24 px-6 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Our Scooters
            </h2>

            <p className="mt-4 text-slate-600 text-xl">
              Comfortable, modern, and easy to drive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* RED */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">

              <img
                src="/images/red-scooter.jpg"
                alt="Red mobility scooter"
                className="w-full h-80 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  Premium Scooter
                </h3>

                <p className="mt-4 text-slate-600">
                  Comfortable premium mobility scooter perfect
                  for exploring Akureyri and the cruise port area.
                </p>

                <a
                  href="tel:+3548988100"
                  className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl"
                >
                  Book Now
                </a>

              </div>
            </div>

            {/* BLUE */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">

              <img
                src="/images/blue-scooter.jpg"
                alt="Blue mobility scooter"
                className="w-full h-80 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  Cruise Port Scooter
                </h3>

                <p className="mt-4 text-slate-600">
                  Located only steps from the harbor.
                  Perfect for cruise visitors and seniors.
                </p>

                <a
                  href="https://wa.me/3548988100"
                  className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-xl"
                >
                  WhatsApp Booking
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-black text-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            ⭐ Trusted by Travelers
          </h2>

          <p className="mt-4 text-slate-300 text-xl">
            5-star reviews from cruise visitors around the world.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="italic">
                "This was freedom."
              </p>
              <div className="mt-4 font-semibold">
                — Todd S
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="italic">
                "Perfect for my mother."
              </p>
              <div className="mt-4 font-semibold">
                — Karen
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="italic">
                "Amazing service right by the harbor."
              </p>
              <div className="mt-4 font-semibold">
                — Jeff W
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-300 py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-white text-2xl font-bold">
              Akureyri Scooters
            </h3>

            <p className="mt-4">
              Premium mobility scooter rentals in Akureyri, Iceland.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg">
              Contact
            </h4>

            <div className="mt-4 space-y-3">

              <p>
                📍 Grímseyjargata 1, 600 Akureyri
              </p>

              <p>
                📞 +354 898 8100
              </p>

              <p>
                ✉️ akureyriscooters@akureyriscooters.is
              </p>

            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg">
              Opening Hours
            </h4>

            <p className="mt-4">
              Monday – Friday
            </p>

            <p>
              10:00 – 16:00
            </p>
          </div>

        </div>

      </footer>

    </main>
  )
}
