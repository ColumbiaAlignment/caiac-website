import type { ReactNode } from "react";
import type { CaiacEvent } from "./events";

/**
 * Shared layout for a single event page: eyebrow, title, invitation card with
 * when/where and an RSVP button, then any extra prose passed as children.
 */
export default function EventDetail({
  event,
  children,
}: {
  event: CaiacEvent;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          {event.monthLabel}
        </p>
        <h1 className="text-4xl font-light tracking-wide text-[#023a87]">
          {event.title}
        </h1>
      </div>

      {/* The invitation card */}
      <div className="relative">
        {/* Decorative corner accents */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#023a87]" />
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#023a87]" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#023a87]" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#023a87]" />

        <div className="border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-10 space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">{event.blurb}</p>

          <div className="grid grid-cols-2 gap-6 py-4 border-y border-gray-100">
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
                When
              </p>
              <p className="text-lg font-medium text-gray-800">
                {event.dateLabel}
              </p>
              <p className="text-gray-600">{event.timeLabel}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
                Where
              </p>
              <p className="text-lg font-medium text-gray-800">
                {event.location}
              </p>
              <p className="text-gray-600">{event.locationDetail}</p>
            </div>
          </div>

          {event.rsvpUrl && (
            <div className="flex justify-center pt-2">
              <a
                href={event.rsvpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold tracking-wide text-[#023a87] border-2 border-[#023a87] px-10 py-3 hover:bg-[#023a87] hover:text-white transition-all duration-200"
              >
                {event.rsvpLabel ?? "RSVP"}
              </a>
            </div>
          )}
        </div>
      </div>

      {children}

      {/* Sign-off */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <p className="text-gray-500 italic">See you there!</p>
        <p className="mt-4 font-medium text-[#023a87]">— CAIAC</p>
      </div>
    </div>
  );
}
