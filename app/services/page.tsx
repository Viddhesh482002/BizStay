export const metadata = {
  title: "Services | BizStay",
  description:
    "Explore BizStay corporate and family hotel booking services across India."
};

const corporateServices = [
  "Business Travel Booking",
  "Bulk Room Booking (100–500 Rooms)",
  "Project & Site Team Stay",
  "Conference & Event Accommodation",
  "Employee Relocation Stay"
];

const familyServices = [
  "Family Vacation Booking",
  "Group Travel Stay",
  "Festival & Wedding Guest Accommodation",
  "Weekend Getaway Bookings"
];

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container space-y-12">
        <header className="max-w-2xl space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Services
          </h1>
          <p className="text-sm text-slate-300 sm:text-base">
            Tailored hotel booking solutions for corporate travellers, project teams,
            and families across India.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-50">
            Corporate Services
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {corporateServices.map((item) => (
              <div
                key={item}
                className="glass-card p-6 text-sm text-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-semibold">{item}</h3>
                <p className="mt-2 text-slate-400">
                  Curated stays in trusted business-friendly hotels with negotiated
                  rates and centralized support.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-50">
            Family Services
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {familyServices.map((item) => (
              <div
                key={item}
                className="glass-card p-6 text-sm text-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-semibold">{item}</h3>
                <p className="mt-2 text-slate-400">
                  Comfortable, family-friendly accommodations in safe neighbourhoods
                  with flexible booking options.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

