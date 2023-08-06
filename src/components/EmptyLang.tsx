import { Ilustration } from "./Ilustration";

export function EmptyLang() {
  return (
    <div className="grid gap-4 place-items-center">
      <Ilustration />
      <span className="text-2xl lg:text-3xl text-[#E66EB2]  text-center">
        ¡Inténtalo! No te arrepentirás 🤪
      </span>
    </div>
  );
}
