import cn from "classnames";

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
      ["bg-yellow-400"]: !explored,
      ["bg-primary"]: !onFire && explored,
      ["bg-red-500"]: onFire,
      ["after:top-0 after:right-0 after:absolute after:bg-slate-500 after:w-full after:h-2 after:rotate-45 after:translate-x-1/3"]:
        malfunctioning && explored,
    }
  );

  if (!explored) {
    return <div className={roomClass} />;
  }

  return (
    <div className={roomClass}>
      <h1>{title}</h1>

      {!!items && `Items: ${items}`}
    </div>
  );
}
