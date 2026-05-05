import { TOUR_INFO } from "@/lib/data";

const ITEMS = [
  { icon: "📅", label: "여행기간", value: "7박 9일 (5/23 토 ~ 5/31 일)" },
  { icon: "✈️", label: "가는편", value: "5/23(토) 12:35 → 19:15  TW0405" },
  { icon: "✈️", label: "오는편", value: "5/30(토) 21:15 → 5/31(일) 16:10  TW0406" },
  { icon: "🚌", label: "이동수단", value: "전용 버스" },
  { icon: "🏨", label: "숙박", value: "4성급 호텔 7박 + 기내 1박" },
  { icon: "🍽️", label: "식사", value: "호텔식, 현지식, 한식(삼겹살), 와인 시음" },
  { icon: "👥", label: "컨셉", value: "노쇼핑 · 노옵션 · 우리끼리" },
  { icon: "💶", label: "가이드 경비", value: `EUR ${TOUR_INFO.guideFeeEur} (현지 결제)` },
];

export function TourSummaryCard() {
  return (
    <div className="mx-4">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="bg-[#008c45] px-4 py-3">
          <h2 className="text-white font-bold text-sm">투어 핵심 정보</h2>
        </div>
        <div className="divide-y divide-neutral-100">
          {ITEMS.map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 px-4 py-3">
              <span className="text-lg leading-none mt-0.5">{icon}</span>
              <div className="flex-1">
                <p className="text-xs text-neutral-500 font-medium">{label}</p>
                <p className="text-sm text-neutral-900 font-semibold mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
