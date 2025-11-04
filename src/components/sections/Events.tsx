"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { clubInfo } from "@/data/content";

// Memoized timeline item content to prevent unnecessary re-renders
const TimelineContent = React.memo(({ ev }: { ev: any }) => (
  <div className="space-y-2">
    <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      {ev.title}
    </h3>
    <p className="font-medium bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
      {ev.category}
    </p>
    <p className="text-sm text-neutral-500 dark:text-neutral-400">
      {ev.location}
    </p>
  </div>
));

TimelineContent.displayName = "TimelineContent";

// Memoized bento grid header
const BentoHeader = React.memo(({ section }: { section: string }) => (
  <div className="text-xs uppercase tracking-wide text-purple-300/80">
    {section}
  </div>
));

BentoHeader.displayName = "BentoHeader";

const Events = () => {
  // Pre-compute timeline data with useMemo
  const timelineData = React.useMemo(() => 
    clubInfo.events.timeline.map((ev) => ({
      title: ev.date,
      content: <TimelineContent ev={ev} />,
    }))
  , []);

  // Pre-compute bento items with useMemo
  const bentoItems = React.useMemo(() => {
    const eventSections = [
      { label: "Weekly", list: clubInfo.events.weekly },
      { label: "Bi-Weekly", list: clubInfo.events.biweekly },
      { label: "Monthly", list: clubInfo.events.monthly },
      { label: "Semester", list: clubInfo.events.semester },
      { label: "Annual", list: clubInfo.events.annual },
    ];

    return eventSections
      .filter((sec) => sec.list?.length)
      .flatMap((sec) =>
        sec.list.map((event) => ({
          section: sec.label,
          name: event.name,
          description: event.description,
        }))
      );
  }, []);

  return (
    <div className="py-10">
      {/* TIMELINE SECTION */}
      <Timeline data={timelineData} />

      {/* BENTO GRID SECTION */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Additional Club Activities
        </h2>
        
        <BentoGrid className="mt-8">
          {bentoItems.map((item, index) => (
            <BentoGridItem
              key={`${item.section}-${item.name}-${index}`}
              title={item.name}
              description={item.description}
              className="hover:shadow-purple-500/20 transition-shadow duration-300"
              header={<BentoHeader section={item.section} />}
            />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
};

export default React.memo(Events);