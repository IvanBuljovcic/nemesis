import { cn } from "@/lib/utils";

export type RoomProps = {
  title: string;
  explored: boolean;
  items: number;
  malfunctioning: boolean;
  onFire: boolean;
};

export default function Room({ title, explored, items, malfunctioning, onFire }: RoomProps) {
  const roomClass = cn(
    "relative flex justify-around items-center w-full text-center text-slate-600 aspect-square flex-col overflow-hidden",
    {
      "bg-room-unexplored": !explored,
      "bg-room-explored": !onFire && explored,
      "bg-room-onFire": onFire,
      "after:top-0 after:right-0 after:absolute after:bg-slate-500 after:w-full after:h-2 after:rotate-45 after:translate-x-1/3":
        malfunctioning && explored,
    }
  );

  if (!explored) {
    return <div className={roomClass} data-testid="wrapper-unexplored" />;
  }

  const malfunctioningIndicator = () => <div data-testid="malfunctioning-indicator">Malfunctioning</div>;
  const fireIndicator = () => <div data-testid="fire-indicator">On fire</div>;

  return (
    <div className={roomClass} data-testid="wrapper-explored">
      <h1>{title}</h1>

      {!!items && `Items: ${items}`}

      {!!malfunctioning && malfunctioningIndicator()}
      {!!onFire && fireIndicator()}
    </div>
  );
}
