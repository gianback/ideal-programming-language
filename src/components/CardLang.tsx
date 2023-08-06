import { useQueryLangContext } from "@/context/queryLangContext";

export function CardLang() {
  const { query } = useQueryLangContext();
  const { color, lang } = query;
  return (
    <div className="box mt-10">
      <article className="flex  flex-col lg:grid grid-cols-2 items-center justify-center gap-8 py-6 lg:py-10 px-4 lg:px-8">
        <picture className="w-60 lg:w-full max-w-96 flex items-center justify-center">
          <img
            src={`/${lang.toLowerCase()}.png`}
            alt={lang}
            className="w-full flex-shrink-0 object-cover"
          />
        </picture>
        <p className="text-white  text-2xl">
          ¡GENIAL! Tu Lenguaje de Programacion ideal es:{" "}
          <span className={color}>{lang}</span>.
          <span className="block">
            Es hora de poner manos a la obra y comenzar tu emocionante viaje en
            el mundo de la programación.
          </span>
        </p>
      </article>
    </div>
  );
}
