export const metadata = {
  title: "Contact | BizStay",
  description:
    "Get in touch with BizStay for corporate and family hotel booking inquiries across India."
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Contact Us
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Reach out for new bookings, long-term partnerships, or family travel
            plans. Our team is happy to help you find the right stay.
          </p>

          <form className="glass-card space-y-4 p-6 sm:p-8">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
                placeholder="How can we help?"
              />
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <aside className="space-y-5 text-sm text-slate-300">
          <div className="glass-card space-y-3 p-6">
            <h2 className="text-sm font-semibold text-slate-50">Contact Details</h2>
            <p>Phone: +91-98765-43210</p>
            <p>Email: hello@bizstay.in</p>
            <p>Address: Mumbai, Maharashtra, India</p>
          </div>
          <div className="glass-card h-56 overflow-hidden rounded-3xl border border-white/10 bg-[url('https://images.pexels.com/photos/2406395/pexels-photo-2406395.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center shadow-card">
            <span className="sr-only">Map placeholder showing India</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

