export const metadata = {
  title: "Inquiry | BizStay",
  description:
    "Submit your hotel booking inquiry for corporate, family, bulk, event, or relocation stays."
};

export default function InquiryPage() {
  return (
    <div className="section-padding">
      <div className="container max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Booking Inquiry
        </h1>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Share your requirements and our team will suggest the best hotel options
          and rates for your stay. This form is for enquiry only and does not confirm
          a booking.
        </p>

        <form className="glass-card mt-8 space-y-5 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-xs font-medium text-slate-300"
                htmlFor="companyName"
              >
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
                placeholder="Your organization"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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
                placeholder="name@company.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label
                className="text-xs font-medium text-slate-300"
                htmlFor="bookingType"
              >
                Type of Booking
              </label>
              <select
                id="bookingType"
                name="bookingType"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 focus:border-primary/60 focus:ring-2"
              >
                <option value="">Select</option>
                <option value="corporate">Corporate</option>
                <option value="family">Family</option>
                <option value="bulk">Bulk</option>
                <option value="event">Event</option>
                <option value="relocation">Relocation</option>
              </select>
            </div>
            <div className="space-y-1">
              <label
                className="text-xs font-medium text-slate-300"
                htmlFor="rooms"
              >
                Number of Rooms
              </label>
              <input
                id="rooms"
                name="rooms"
                type="number"
                min={1}
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
                placeholder="e.g. 10"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1 sm:col-span-1">
              <label className="text-xs font-medium text-slate-300" htmlFor="city">
                City Preference
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
                placeholder="e.g. Mumbai, Bengaluru"
              />
            </div>
            <div className="space-y-1 sm:col-span-1">
              <label
                className="text-xs font-medium text-slate-300"
                htmlFor="checkIn"
              >
                Check-in Date
              </label>
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 focus:border-primary/60 focus:ring-2"
              />
            </div>
            <div className="space-y-1 sm:col-span-1">
              <label
                className="text-xs font-medium text-slate-300"
                htmlFor="checkOut"
              >
                Check-out Date
              </label>
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              className="text-xs font-medium text-slate-300"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-primary/40 placeholder:text-slate-500 focus:border-primary/60 focus:ring-2"
              placeholder="Share any specific hotel preferences, budget, or requirements."
            />
          </div>

          <button type="submit" className="btn-primary">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

