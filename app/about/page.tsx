export const metadata = {
  title: "About | BizStay",
  description:
    "Learn about BizStay, a professional hotel booking partner for corporates and families across India."
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container grid gap-10 md:grid-cols-2 md:items-center">
        <div className="glass-card p-8 sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            About BizStay
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            BizStay is a professional hotel booking partner offering accommodation
            solutions across India for both corporates and families.
          </p>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            We specialize in:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300 sm:text-base">
            <li>Corporate travel stays</li>
            <li>Bulk bookings for companies</li>
            <li>Family vacations</li>
            <li>Long-term stays</li>
            <li>Event &amp; group accommodation</li>
          </ul>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            We work with reliable 3-star, 4-star and 5-star hotels to ensure
            comfort, safety, and value for money.
          </p>
        </div>
        <div className="glass-card h-64 overflow-hidden rounded-3xl border border-white/10 bg-[url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center shadow-card sm:h-80 md:h-full" />
      </div>
    </div>
  );
}

