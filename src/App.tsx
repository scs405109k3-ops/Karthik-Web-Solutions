const navLinks = ['Home', 'About', 'Portfolio', 'Services', 'Contact'];

const projects = [
  { title: 'Restaurant Website', desc: 'Online menu and ordering flow that helps restaurants increase direct orders.' },
  { title: 'Gym Website', desc: 'Membership-focused website with pricing plans and class schedules to boost signups.' },
  { title: 'School Website', desc: 'Admissions-first experience with clear information architecture for parents and students.' },
  { title: 'Business Landing Page', desc: 'High-converting landing page designed for service inquiries and lead capture.' },
  { title: 'E-commerce Store', desc: 'Product-driven storefront optimized for mobile shopping and faster checkout.' },
  { title: 'Portfolio Website', desc: 'Personal brand website for creators and professionals to attract better clients.' },
];

const services = [
  { name: 'Basic', price: '₹3,999', features: ['1–3 pages', 'Mobile responsive', 'Delivery in 3 days'], popular: false },
  {
    name: 'Business',
    price: '₹7,999',
    features: ['5–8 pages', 'SEO ready', 'WhatsApp integration', 'Fast loading', 'Delivery in 5 days'],
    popular: true,
  },
  { name: 'Advanced', price: '₹14,999+', features: ['Custom features', 'Admin panel', 'Full support'], popular: false },
];

const testimonials = [
  { name: 'Rohit Sharma', text: 'Karthik delivered our site in 4 days. We started getting inquiries within a week.', rating: '★★★★★' },
  { name: 'Priya Nair', text: 'Very smooth process and great communication. The mobile design is excellent.', rating: '★★★★★' },
  { name: 'Aman Verma', text: 'Clean design, fast loading, and exactly what our startup needed to launch quickly.', rating: '★★★★★' },
];

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass rounded-2xl border border-white/15 p-6 ${className}`}>{children}</div>;
}

export default function App() {
  return (
    <div className="bg-base text-white font-body selection:bg-indigo-500/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f1a]/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="font-heading text-xl font-bold gradient-text">KV</div>
          <ul className="hidden gap-7 text-sm text-slate-200 md:flex">
            {navLinks.map((item) => <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-white">{item}</a></li>)}
          </ul>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn-primary">Chat on WhatsApp</a>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 pt-20 md:grid-cols-2 md:pt-28">
          <div className="animate-fade-in">
            <p className="mb-5 inline-flex rounded-full border border-indigo-400/50 bg-indigo-500/10 px-4 py-2 text-sm">Available for Freelance Work</p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight md:text-5xl">Get a Professional Website for Your Business in 3–5 Days</h1>
            <p className="mt-5 text-slate-300">I design fast, mobile-friendly websites that help you attract more customers.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="btn-primary">View My Work</a>
              <a href="https://wa.me/91XXXXXXXXXX" className="btn-secondary">Chat on WhatsApp</a>
            </div>
          </div>
          <Card className="animate-fade-in shadow-glow"><div className="text-center text-slate-300">Premium websites built for growth-focused businesses in India.</div></Card>
        </section>

        <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 pb-16 md:grid-cols-4">
          {['5+ Websites Built', '3+ Happy Clients', '3–5 Days Delivery', '100% Effort & Support'].map((item) => <Card key={item} className="py-4 text-center text-sm font-semibold">{item}</Card>)}
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="section-title">About</h2>
          <Card>
            <p className="text-slate-300">I’m Karthik, a student and freelance web developer helping small businesses and startups launch professional websites quickly and affordably.</p>
            <p className="mt-4 text-sm text-slate-300">Skills: HTML, CSS, JavaScript, React, Tailwind, UI/UX</p>
            <a className="btn-secondary mt-6 inline-flex" href="#">Download Resume</a>
          </Card>
        </section>

        <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="section-title">Portfolio</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group transition hover:-translate-y-1 hover:shadow-glow">
                <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-violet-600/60 to-blue-500/60" />
                <h3 className="font-heading text-xl">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.desc}</p>
                <div className="mt-5 flex gap-2">
                  <button className="btn-primary">Live Demo</button>
                  <button className="btn-secondary">Code</button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="section-title">Services & Pricing</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className={`${service.popular ? 'border-indigo-400 shadow-glow' : ''}`}>
                {service.popular && <p className="mb-3 inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200">MOST POPULAR</p>}
                <h3 className="font-heading text-2xl">{service.name}</h3>
                <p className="mt-2 text-3xl font-bold gradient-text">{service.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">{service.features.map((f) => <li key={f}>• {f}</li>)}</ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="section-title">Why Choose Me</h2>
          <div className="grid gap-4 md:grid-cols-5">{['Fast delivery (3–5 days)', 'Affordable pricing', 'Mobile-first design', 'Conversion-focused', 'Client-friendly'].map((i) => <Card key={i} className="text-sm text-center">{i}</Card>)}</div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="section-title">Testimonials</h2>
          <div className="grid gap-5 md:grid-cols-3">{testimonials.map((t) => <Card key={t.name}><p>{t.rating}</p><p className="mt-3 text-sm text-slate-300">“{t.text}”</p><p className="mt-4 font-semibold">{t.name}</p></Card>)}</div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="section-title">Contact</h2>
          <Card>
            <form className="grid gap-4 md:grid-cols-2">
              <input className="input" placeholder="Name" />
              <input className="input" placeholder="Email" type="email" />
              <textarea className="input md:col-span-2" rows={4} placeholder="Message" />
              <button className="btn-primary md:col-span-2" type="button">Send Message</button>
            </form>
            <p className="mt-5 text-slate-300">Email: hello@karthikwebsolutions.in</p>
            <p className="mt-2 text-sm text-slate-400">Usually replies within 1 hour</p>
            <a className="btn-secondary mt-4 inline-flex" href="https://wa.me/91XXXXXXXXXX">Chat on WhatsApp</a>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 text-center">
          <Card>
            <h2 className="font-heading text-3xl">Ready to grow your business online?</h2>
            <a href="#contact" className="btn-primary mt-6 inline-flex">Start Your Project</a>
          </Card>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="gradient-text font-heading font-semibold">Karthik Web Solutions</p>
          <div className="flex gap-4 text-sm text-slate-300"><a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a></div>
          <div className="flex gap-3 text-sm text-slate-300"><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">GitHub</a></div>
        </div>
      </footer>
    </div>
  );
}
