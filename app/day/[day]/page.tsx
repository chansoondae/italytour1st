import { notFound } from "next/navigation";
import { DAYS } from "@/lib/data";
import { DayHeader } from "@/components/day/DayHeader";
import { SpotCard } from "@/components/day/SpotCard";
import { HotelCard } from "@/components/day/HotelCard";

interface Props {
  params: Promise<{ day: string }>;
}

export async function generateStaticParams() {
  return DAYS.map((d) => ({ day: String(d.dayNumber) }));
}

export async function generateMetadata({ params }: Props) {
  const { day: dayParam } = await params;
  const dayNum = parseInt(dayParam);
  const day = DAYS.find((d) => d.dayNumber === dayNum);
  if (!day) return {};
  return {
    title: `Day ${day.dayNumber} · ${day.routeSummary} | 이탈리아 아트 투어`,
  };
}

export default async function DayPage({ params }: Props) {
  const { day: dayParam } = await params;
  const dayNum = parseInt(dayParam);
  const day = DAYS.find((d) => d.dayNumber === dayNum);

  if (!day) notFound();

  return (
    <div>
      <DayHeader day={day} />
      <div className="px-4 pt-2 pb-4">
        {day.spots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
        <HotelCard day={day} />
      </div>
    </div>
  );
}
