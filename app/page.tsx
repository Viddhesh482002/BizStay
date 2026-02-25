export default function HomePage() {
  return (
    <div>
      <section className="section-padding">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Hotel Booking Partner
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Corporate &amp; Family Hotel Booking Across India Made Simple
            </h1>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              BizStay provides hotel room bookings for corporate employees, business
              travelers, project teams, and families across India. From 1 room to
              500+ rooms, we offer the best rates in trusted 3, 4 &amp; 5-star hotels.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/inquiry" className="btn-primary">
                Inquiry Now
              </a>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>
          <div className="glass-card relative h-64 overflow-hidden rounded-3xl border border-white/10 bg-[url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center shadow-card sm:h-80 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-950/40" />
          </div>
        </div>
      </section>
    </div>
  );
}

