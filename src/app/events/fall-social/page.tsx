import EventDetail from "../EventDetail";
import { getEvent } from "../events";

export const metadata = {
  title: "Fall Social | CAIAC",
};

export default function FallSocialPage() {
  const event = getEvent("fall-social");

  return (
    <EventDetail event={event}>
      <div className="mt-16 space-y-8">
        <div className="prose prose-gray">
          <h2 className="text-xl font-light tracking-wide text-gray-800 mb-4">
            More to come
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Can't make it this time? No worries — there will be more socials
            throughout the semester! If your plans change and you can no longer
            attend after RSVPing, please let us know at{" "}
            <a
              href="mailto:cualignment@gmail.com"
              className="text-[#4A8A99] hover:underline"
            >
              cualignment@gmail.com
            </a>{" "}
            so we can adjust our food order.
          </p>
        </div>
      </div>
    </EventDetail>
  );
}
