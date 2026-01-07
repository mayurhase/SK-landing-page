function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-body">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center bg-[#A65E1E] text-lg sm:text-xl font-bold text-black">
              SK
            </span>
            <span className="text-lg sm:text-xl font-bold">SK Auto World</span>
          </div>
          <nav className="hidden items-center gap-4 sm:gap-8 md:flex">
            <a className="text-gray-300 hover:text-white transition text-sm sm:text-base" href="#about">About</a>
            <a className="text-gray-300 hover:text-white transition text-sm sm:text-base" href="#services">Services</a>
            <a className="text-gray-300 hover:text-white transition text-sm sm:text-base" href="#location">Location</a>
            <a className="text-gray-300 hover:text-white transition text-sm sm:text-base" href="#contact">Contact</a>
          </nav>
          <a href="tel:+917887870567" className="bg-[#A65E1E] px-3 sm:px-6 py-2 text-black font-semibold text-sm sm:text-base hover:bg-[#b45309] transition">
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
              <a href="tel:+917887870567" className="bg-[#A65E1E] px-8 py-3 text-black font-semibold text-center hover:bg-[#b45309] transition">
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
      <section id="about" className="py-20 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Why Choose SK Auto World</h2>
              <div className="space-y-4 text-gray-300">
                <p>• No rushed jobs – each vehicle gets proper attention</p>
                <p>• Proper surface prep & curing for maximum durability</p>
                <p>• Premium-grade materials from trusted manufacturers</p>
                <p>• Each car treated individually, not assembly-line style</p>
                <p>• Focus on long-term protection, not just temporary shine</p>
              </div>
            </div>
            <div className="bg-gray-800 h-96 flex items-center justify-center">
              <p className="text-gray-400">[Detailing Process Image Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work Speaks</h2>
            <p className="text-gray-400">Real results from satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 h-64 flex items-center justify-center">
              <p className="text-gray-400">[Before & After Image 1]</p>
            </div>
            <div className="bg-gray-800 h-64 flex items-center justify-center">
              <p className="text-gray-400">[Before & After Image 2]</p>
            </div>
            <div className="bg-gray-800 h-64 flex items-center justify-center">
              <p className="text-gray-400">[Before & After Image 3]</p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <span className="text-xl font-semibold">4.9/5 Google Rating</span>
            </div>
            <div className="bg-gray-800 p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 italic">
                "Outstanding service! My car looks brand new after the ceramic coating. Highly recommend SK Auto World."
              </p>
              <p className="text-[#d97706] mt-2">- Rajesh K., Pune</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-20 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Address</h3>
                <p className="text-gray-300">
                  JAWALKAR NAGAR, opp. Dreams Sunshine Apartment<br />
                  Pimpale Gurav, Pune, Maharashtra 411061
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Phone</h3>
                <a href="tel:+917887870567" className="text-[#d97706] text-xl font-semibold hover:text-[#b45309] transition">
                  +91 788 787 0567
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="text-gray-300 space-y-1">
                  <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Find Us</h3>
              <div className="bg-gray-800 h-64 flex items-center justify-center">
                <p className="text-gray-400">[Google Maps Embed Placeholder]</p>
              </div>
              <a href="#" className="inline-block bg-[#A65E1E] px-8 py-3 text-black font-semibold hover:bg-[#b45309] transition">
                Get Directions
              </a>
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
              <h4 className="font-bold text-lg mb-4">Phone</h4>
              <a href="tel:+917887870567" className="text-[#d97706] hover:text-[#b45309] transition">
                +91 788 787 0567
              </a>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Location</h4>
              <p className="text-gray-400 text-sm">
                JAWALKAR NAGAR<br />
                Pimpale Gurav, Pune
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
