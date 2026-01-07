const services = [
  {
    title: 'Express Fitment',
    description: 'Brake pads, wipers, filters, and batteries installed while you wait.',
  },
  {
    title: 'Diagnostics',
    description: 'OBD scans, electrical checks, and warning light troubleshooting.',
  },
  {
    title: 'Custom Orders',
    description: 'Hard-to-find parts sourced fast with verified OEM alternatives.',
  },
]

const categories = [
  'Engine & Fluids',
  'Suspension',
  'Lighting',
  'Accessories',
  'Electrical',
  'Tires & Wheels',
]

const socials = [
  { label: 'Instagram', handle: '@torqueline.parts', href: '#' },
  { label: 'Facebook', handle: '/torqueline.showroom', href: '#' },
  { label: 'YouTube', handle: 'TorqueLine Garage', href: '#' },
  { label: 'WhatsApp', handle: '+91 98765 43210', href: '#' },
]

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c0f] font-body text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-10 h-72 w-72 rounded-full bg-[#ff6b35]/30 blur-[120px]" />
          <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-[#3b82f6]/20 blur-[140px]" />
          <div className="absolute right-10 top-1/3 h-40 w-40 rounded-full border border-white/10 bg-white/5 animate-drift" />
        </div>

        <header className="relative z-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6b35] text-2xl font-display text-black">
                TL
              </span>
              <div>
                <p className="text-lg font-display uppercase tracking-[0.2em] text-slate-200">
                  TorqueLine
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Auto Parts + Service
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a className="transition hover:text-white" href="#inventory">Inventory</a>
              <a className="transition hover:text-white" href="#services">Services</a>
              <a className="transition hover:text-white" href="#about">Showroom</a>
              <a className="transition hover:text-white" href="#contact">Contact</a>
            </nav>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#ff6b35] hover:text-black">
              Book Service
            </button>
          </div>
        </header>

        <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200">
              Full-Stack Auto Care
            </span>
            <h1 className="text-4xl font-display uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-6xl">
              The showroom built for drivers who want parts, fitment, and trust in one stop.
            </h1>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              TorqueLine Auto Parts blends a premium parts gallery with certified service bays.
              From quick replacements to performance upgrades, our team keeps your vehicle road-ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[#ff6b35] px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5">
                Browse Parts
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
                Call +91 98765 43210
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <div>
                <p className="text-xl font-semibold text-white">15k+</p>
                <p>SKU-ready inventory</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-white">30 mins</p>
                <p>Average fitment time</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-white">4.9/5</p>
                <p>Customer rating</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-2xl shadow-black/40">
            <div className="rounded-2xl bg-[#10131a] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Today in the bay</p>
              <h2 className="mt-3 text-2xl font-display uppercase text-white">Express Service Slots</h2>
              <p className="mt-3 text-sm text-slate-400">
                Walk-ins welcome. Reserve a slot for brakes, batteries, filters, or a quick diagnostic.
              </p>
              <div className="mt-6 space-y-4">
                {['Brake pads + rotors', 'Battery health check', 'Alignment + suspension', 'Lighting upgrades'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    <span className="text-slate-200">{item}</span>
                    <span className="text-xs text-slate-500">Same day</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black">
                Reserve a Service Bay
              </button>
            </div>
          </div>
        </section>
      </div>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Services</p>
            <h2 className="mt-3 text-3xl font-display uppercase text-white">Built for fast fixes and deep care</h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Certified technicians, premium tooling, and guided part selection for every drive style.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="inventory" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-[#11151f] p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Inventory</p>
            <h2 className="mt-3 text-3xl font-display uppercase text-white">Curated parts wall</h2>
            <p className="mt-4 text-sm text-slate-400">
              Explore premium OEM and performance lines, organized by fitment and vehicle category.
              Our advisors help you match spec, budget, and warranty.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-6">
              <h3 className="text-lg font-semibold text-white">Performance Corner</h3>
              <p className="mt-2 text-sm text-slate-400">
                Intake, exhaust, suspension kits, and tuning-ready accessories.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#ff6b35]/20 to-transparent p-6">
              <h3 className="text-lg font-semibold text-white">Daily Driver Essentials</h3>
              <p className="mt-2 text-sm text-slate-400">
                Filters, oils, plugs, wipers, and bulbs always in stock.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#3b82f6]/20 to-transparent p-6">
              <h3 className="text-lg font-semibold text-white">Battery + Electrical</h3>
              <p className="mt-2 text-sm text-slate-400">
                Tested brands, warranty tracking, and installation support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Showroom</p>
              <h2 className="mt-3 text-3xl font-display uppercase text-white">
                A modern parts studio with a service-first mindset
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                Our showroom is built like a gallery: clean displays, guided fitment advisors, and a
                transparent service bay that lets you see every step. You drive out with confidence.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-slate-400 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold text-white">Live Install View</p>
                  <p className="mt-2">Watch parts being fitted before you hit the road.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold text-white">Warranty Desk</p>
                  <p className="mt-2">Fast returns, digital invoices, and verified sourcing.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#121826] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Hours</p>
                <p className="mt-3 text-lg font-semibold text-white">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-sm text-slate-400">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#121826] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Location</p>
                <p className="mt-3 text-lg font-semibold text-white">Sector 18, Auto Market</p>
                <p className="text-sm text-slate-400">Noida, Uttar Pradesh</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#121826] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Call for fitment</p>
                <p className="mt-3 text-lg font-semibold text-white">+91 98765 43210</p>
                <p className="text-sm text-slate-400">support@torqueline.auto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Connect</p>
            <h2 className="mt-3 text-3xl font-display uppercase text-white">Follow the build</h2>
          </div>
          <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
            Get Directions
          </button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:-translate-y-1 hover:border-white/30"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{social.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{social.handle}</p>
              </div>
              <span className="text-sm text-slate-400">Open</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <p>TorqueLine Auto Parts & Service. Built for the road ahead.</p>
          <p>Parts. Service. Fitment. Warranty.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
