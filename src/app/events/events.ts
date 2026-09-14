// Central list of CAIAC events.
//
// To add an event (social, speaker, workshop, ...):
//   1. Add an entry to `events` below, newest first.
//   2. Create src/app/events/<slug>/page.tsx — copy an existing one; it only
//      needs to pull its entry from here and pass any extra prose as children.
// The events index page and the navbar dropdown both read from this list, so
// nothing else needs to be touched.

export type EventKind = "Social" | "Speaker" | "Workshop";

export type CaiacEvent = {
  slug: string;
  title: string;
  kind: EventKind;
  /** Short label used in the navbar dropdown. */
  navLabel: string;
  /** Eyebrow above the title, e.g. "September 2026". */
  monthLabel: string;
  /** ISO start time — used for sorting and for upcoming/past. */
  startsAt: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
  locationDetail: string;
  blurb: string;
  rsvpUrl?: string;
  rsvpLabel?: string;
};

export const events: CaiacEvent[] = [
  {
    slug: "fall-social",
    title: "Fall Social",
    kind: "Social",
    navLabel: "Fall '26 Social",
    monthLabel: "September 2026",
    startsAt: "2026-09-18T16:00:00-04:00",
    dateLabel: "Friday, September 18th",
    timeLabel: "4:00 – 5:00 PM",
    location: "Math Lawns",
    locationDetail: "Columbia Campus",
    blurb:
      "Join us for our first social of the semester! Come meet fellow members, grab some snacks, and chat about AI safety, research, and whatever else is on your mind.",
    rsvpUrl: "https://airtable.com/appl3sF5IVVPT3VtV/pagYXUVJrc0wVNrZv/form",
    rsvpLabel: "RSVP",
  },
];

export function getEvent(slug: string): CaiacEvent {
  const event = events.find((e) => e.slug === slug);
  if (!event) throw new Error(`Unknown event slug: ${slug}`);
  return event;
}

/** How many events the navbar dropdown shows. */
export const NAV_EVENT_LIMIT = 5;

/**
 * Events for the navbar dropdown: the most recent `limit` by date, newest
 * first, so upcoming events sit at the top. Deliberately not time-dependent —
 * the navbar is a client component, and comparing against `now` at render
 * would mismatch the prerendered HTML once an event passes. Older events stay
 * in `events` and remain listed on /events.
 */
export function navEvents(limit: number = NAV_EVENT_LIMIT): CaiacEvent[] {
  return [...events]
    .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime())
    .slice(0, limit);
}

/** Events sorted soonest first, split into upcoming and past. */
export function splitEvents(now: Date = new Date()) {
  const sorted = [...events].sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime(),
  );
  return {
    upcoming: sorted.filter((e) => new Date(e.startsAt).getTime() >= now.getTime()),
    past: sorted
      .filter((e) => new Date(e.startsAt).getTime() < now.getTime())
      .reverse(),
  };
}
