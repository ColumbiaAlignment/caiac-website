import Link from "next/link";
import { splitEvents, type CaiacEvent } from "./events";

// Re-render hourly so events move from Upcoming to Past without a redeploy.
export const revalidate = 3600;

export const metadata = {
  title: "Events | CAIAC",
};

function EventCard({ event, past = false }: { event: CaiacEvent; past?: boolean }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className={`block border border-gray-200 p-8 hover:border-[#023a87] transition-colors duration-200 ${
        past ? "opacity-70" : "bg-gradient-to-br from-white to-gray-50"
      }`}
    >
      <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
        {event.kind} · {event.monthLabel}
      </p>
      <h3 className="text-2xl font-light tracking-wide text-[#023a87] mb-3">
        {event.title}
      </h3>
      <p className="text-gray-600">
        {event.dateLabel} · {event.timeLabel}
      </p>
      <p className="text-gray-600">
        {event.location}, {event.locationDetail}
      </p>
    </Link>
  );
}

export default function EventsPage() {
  const { upcoming, past } = splitEvents();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-light tracking-wide text-[#023a87] mb-4">
        Events
      </h1>
      <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
        Socials, speaker events, workshops and more hosted by CAIAC.
      </p>

      <section className="mb-16">
        <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-6">
          Upcoming
        </h2>
        {upcoming.length > 0 ? (
          <div className="space-y-6">
            {upcoming.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 leading-relaxed">
            Nothing on the calendar right now — check back soon, or join our{" "}
            <a
              href="https://listserv.cuit.columbia.edu/scripts/wa.exe?SUBED1=CUALIGNMENT&A=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A8A99] hover:underline"
            >
              mailing list
            </a>{" "}
            to hear about the next one.
          </p>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-6">
            Past
          </h2>
          <div className="space-y-6">
            {past.map((event) => (
              <EventCard key={event.slug} event={event} past />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
