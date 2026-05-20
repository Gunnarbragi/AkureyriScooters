'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Star } from 'lucide-react'

const phone = '+3548988100'
const email = 'akureyriscooters@akureyriscooters.is'

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  })

  const [sent, setSent] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()

    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      setSent(true)
      setForm({ name: '', email: '', date: '', message: '' })
    }
  }

  return (
    <main className="min-h-screen bg-nordic-ice">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 text-white px-6">
        <div className="max-w-5xl text-center">
          <p className="inline-block mb-6 rounded-full bg-white/10 px-5 py-2 text-sm">
            🚢 Near Akureyri Cruise Port
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Akureyri Scooters
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10">
            Premium mobility scooter rental for cruise visitors, seniors,
            families, and travelers exploring North Iceland.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${phone}`}
              className="bg-white text-slate-950 px-8 py-4 rounded-full font-semibold"
            >
              Call to Book
            </a>

            <a
              href={`mailto:${email}`}
              className="border border-white/40 px-8 py-4 rounded-full"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" />
            <strong>5.0 Verified Reviews</strong>
          </div>
          <p className="italic text-slate-300">
            “This was freedom.” — Todd S
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ['Cruise Port Location', 'Easy access for cruise visitors.'],
            ['Accessible Travel', 'Great for seniors and limited mobility visitors.'],
            ['Family-Run Service', 'Friendly local help in Akureyri.']
          ].map(([title, text]) => (
            <div key={title} className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Scooter Rentals
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              ['Single Scooter', 'Comfortable one-seat mobility scooter.'],
              ['Tandem Scooter', 'Two-seat scooter for couples and families.']
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-slate-900 text-white p-10 min-h-[280px] flex flex-col justify-end"
              >
                <h3 className="text-3xl font-bold mb-4">{title}</h3>
                <p className="text-slate-300 mb-6">{text}</p>
                <a
                  href={`tel:${phone}`}
                  className="bg-white text-slate-950 px-6 py-3 rounded-full w-fit"
                >
                  Call to Reserve
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Booking Request
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-2 bg-slate-950 text-white py-4 rounded-xl"
            >
              <Phone size={20} /> Call
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2 bg-sky-700 text-white py-4 rounded-xl"
            >
              <Mail size={20} /> Email
            </a>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <input
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-4 rounded-xl"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border p-4 rounded-xl"
              rows={4}
            />

            <button className="w-full bg-slate-950 text-white py-4 rounded-xl font-semibold">
              Send Booking Request
            </button>

            {sent && (
              <p className="text-green-700 text-center">
                Booking request sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-3">
              Akureyri Scooters ehf
            </h3>
            <p>KT: 701224-1080</p>
            <p>VSK: 155493</p>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-3">Contact</h3>
            <p className="flex gap-2 items-center">
              <Phone size={16} /> +354 898 8100
            </p>
            <p className="flex gap-2 items-center">
              <Mail size={16} /> {email}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-3">Location</h3>
            <p className="flex gap-2 items-center">
              <MapPin size={16} /> Grímseyjargata 1, 600 Akureyri
            </p>
            <p>Monday – Friday: 10:00 – 16:00</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
