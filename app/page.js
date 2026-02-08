import EventListSkeleton from "@/components/common/EventListSkeleton";
import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<EventListSkeleton />}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
}
