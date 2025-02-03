import Room, { RoomProps } from "@/components/room";

const rooms: RoomProps[] = [
  { title: "Control Room", explored: true, onFire: false, malfunctioning: false, items: 2 },
  { title: "Medical Bay", explored: true, onFire: false, malfunctioning: false, items: 4 },
  { title: "Engine Room", explored: false, onFire: true, malfunctioning: true, items: 1 },
  { title: "Storage Bay", explored: false, onFire: false, malfunctioning: true, items: 5 },
  { title: "Crew Quarters", explored: true, onFire: false, malfunctioning: false, items: 3 },
  { title: "Mess Hall", explored: false, onFire: false, malfunctioning: false, items: 3 },
  { title: "Laboratory", explored: false, onFire: true, malfunctioning: false, items: 2 },
  { title: "Escape Pod Bay", explored: true, onFire: false, malfunctioning: true, items: 0 },
  { title: "Observation Deck", explored: true, onFire: false, malfunctioning: false, items: 1 },
  { title: "Hydroponics", explored: true, onFire: false, malfunctioning: false, items: 5 },
  { title: "Armory", explored: false, onFire: true, malfunctioning: false, items: 4 },
  { title: "Cargo Hold", explored: false, onFire: false, malfunctioning: true, items: 2 },
  { title: "Research Lab", explored: true, onFire: true, malfunctioning: false, items: 1 },
  { title: "Command Center", explored: false, onFire: false, malfunctioning: false, items: 3 },
  { title: "Power Core", explored: true, onFire: true, malfunctioning: true, items: 0 },
  { title: "Maintenance Shaft", explored: true, onFire: false, malfunctioning: true, items: 2 },
  { title: "Barracks", explored: false, onFire: false, malfunctioning: false, items: 4 },
  { title: "Waste Disposal", explored: false, onFire: true, malfunctioning: false, items: 3 },
  { title: "Hangar Bay", explored: false, onFire: false, malfunctioning: false, items: 5 },
  { title: "Main Hall", explored: true, onFire: false, malfunctioning: false, items: 1 },
];

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-8 grid grid-cols-4 p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      {rooms?.map((room) => (
        <Room key={room.title} {...room} />
      ))}
    </div>
  );
}
