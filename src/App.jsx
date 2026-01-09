import { Analytics } from '@vercel/analytics/react';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-body">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/assets/logo.jpeg"
              alt="SK Auto World logo"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-md object-cover"
            />
            <span className="text-lg sm:text-xl font-bold">SK Auto World</span>
          </div>
          <nav className="hidden items-center gap-4 sm:gap-8 md:flex">
            <a className="text-gray-300 hover:text-white transition text-sm sm:text-base" href="#about">About</a>
            <a className="text-gray-300 hover:text-white transition text-sm sm:text-base" href="#services">Services</a>
            <a className="text-gray-300 hover:text-white transition text-sm sm:text-base" href="#location">Location</a>
            <a className="text-gray-300 hover:text-white transition text-sm sm:text-base" href="#contact">Contact</a>
          </nav>
          <a href="tel:+917887870567" className="bg-[#f59e0b] px-3 sm:px-6 py-2 text-black font-semibold text-sm sm:text-base hover:bg-[#d97706] transition">
            Call 788 787 0567
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl space-y-6">
            <p className="text-[#d97706] font-semibold">Premium Auto Detailing Studio – Pune</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Professional Car Detailing & Paint Protection
            </h1>
            <p className="text-xl text-gray-300">
              Ceramic, Graphene & PPF services done with precision, not shortcuts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+917887870567" className="bg-[#f59e0b] px-8 py-3 text-black font-semibold text-center hover:bg-[#d97706] transition">
                Call Now – 788 787 0567
              </a>
              <a href="https://wa.me/917887870567" target="_blank" rel="noopener noreferrer" className="border border-white px-8 py-3 text-center hover:bg-white hover:text-black transition">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl">⭐</div>
              <p className="font-semibold">Premium Products</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">👨‍🔧</div>
              <p className="font-semibold">Experienced Technicians</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🛡️</div>
              <p className="font-semibold">Long-Term Protection</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎯</div>
              <p className="font-semibold">Attention to Detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional detailing services using premium products and techniques
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold">Ceramic Coating</h3>
              <p className="text-gray-400 mt-2 md:mt-0">Long-lasting gloss & protection</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold">Graphene Coating</h3>
              <p className="text-gray-400 mt-2 md:mt-0">Advanced durability & heat resistance</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold">Paint Protection Film (PPF)</h3>
              <p className="text-gray-400 mt-2 md:mt-0">Invisible impact protection</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold">Premium Car Wash</h3>
              <p className="text-gray-400 mt-2 md:mt-0">Safe, swirl-free wash</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold">Deep Interior & Exterior Cleaning</h3>
              <p className="text-gray-400 mt-2 md:mt-0">Complete vehicle refresh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Why Choose SK Auto World</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <p>
                    <span className="font-semibold text-white">No rushed work.</span> We give every car the time it actually needs.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <p>
                    <span className="font-semibold text-white">Proper preparation & curing.</span> So coatings last longer, not just look good for a week.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <p>
                    <span className="font-semibold text-white">Premium-quality materials.</span> We use trusted, professional-grade products only.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <p>
                    <span className="font-semibold text-white">One car at a time.</span> Your vehicle is not treated like part of an assembly line.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#f59e0b]" />
                  <p>
                    <span className="font-semibold text-white">Long-term protection.</span> We focus on durability, not temporary shine.
                  </p>
                </li>
              </ul>
            </div>
            <div className="h-96 overflow-hidden rounded-lg">
              <img
                src="/assets/logo.jpeg"
                alt="Detailing process"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Location & Contact */}
<section id="location" className="py-20 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Find Us</h3>
                <p className="text-gray-300">Tap for directions or explore nearby.</p>
              </div>
              <a
                href="https://maps.app.goo.gl/stwBpjgfHyXkUDvv7?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f59e0b] px-8 py-3 text-black font-semibold hover:bg-[#d97706] transition"
              >
                Get Directions
              </a>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <iframe
                  title="SK Auto World map"
                  src="https://www.google.com/maps?q=JAWALKAR%20NAGAR%2C%20opp.%20Dreams%20Sunshine%20Apartment%2C%20Pimpale%20Gurav%2C%20Pune%2C%20Maharashtra%20411061&output=embed"
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0b0b0b] border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">SK Auto World</h4>
              <p className="text-gray-400 text-sm">
                Premium auto detailing studio in Pune, specializing in ceramic coatings, PPF, and professional car care.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Ceramic Coating</li>
                <li>Paint Protection Film</li>
                <li>Graphene Coating</li>
                <li>Deep Cleaning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Address</h4>
              <p className="text-gray-400 text-sm">
                JAWALKAR NAGAR, opp. Dreams Sunshine Apartment<br />
                Pimpale Gurav, Pune, Maharashtra 411061
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Phone</h4>
              <a href="tel:+917887870567" className="text-[#d97706] hover:text-[#d97706] transition">
                +91 788 787 0567
              </a>
              <p className="mt-3 text-gray-400 text-sm">skautoworld567@gmail.com</p>
              <h4 className="mt-6 font-bold text-lg mb-4">Business Hours</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/917887870567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>

      <Analytics />
    </div>
  )
}

export default App
