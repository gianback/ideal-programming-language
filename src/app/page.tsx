"use client";
import { sendSignService } from "@/services/send.sign.service";
import { FormEvent, useState } from "react";

const INITIAL_RESPONSE_STATE = {
  lang: "",
  description: "",
};

export default function Home() {
  const [response, setResponse] = useState(INITIAL_RESPONSE_STATE);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(e.currentTarget);

    const text = formData.get("sign") as string;
    try {
      const langResp = await sendSignService(text);
      const [lang, description] = langResp.split(":");
      setResponse({
        lang,
        description,
      });
    } catch (error) {
      throw new Error("Some error occured sending sign");
    } finally {
      form.reset();
      setResponse(INITIAL_RESPONSE_STATE);
    }
  };

  return (
    <main className="bg-primary min-h-screen flex flex-col items-center pt-40">
      <div className="px-2 lg:px-0 max-w-[80%] w-full flex h-full flex-col items-center">
        <h1 className="text-4xl text-white text-center">
          Descubre tu Lenguaje de Programacion ideal
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 lg:gap-8 flex-col lg:flex-row mt-16 items-center"
        >
          <div className="flex gap-3 lg:gap-8 items-center ">
            <label
              htmlFor="sign"
              className="text-white text-[14px] lg:text-[17px]"
            >
              Elige tu signo zodiacal
            </label>
            <select name="sign" id="sign" className="px-2 py-3 rounded-md">
              <option value="Aries">Aries</option>
              <option value="Tauro">Tauro</option>
              <option value="Geminis">Geminis</option>
              <option value="Cancer">Cancer</option>
              <option value="Leo">Leo</option>
              <option value="Virgo">Virgo</option>
              <option value="Libra">Libra</option>
              <option value="Escorpio">Escorpio</option>
              <option value="Sagitario">Sagitario</option>
              <option value="Capricornio">Capricornio</option>
              <option value="Acuario">Acuario</option>
              <option value="Piscis">Piscis</option>
            </select>
          </div>

          <button
            type="submit"
            className="block w-full lg:w-auto lg:inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
          >
            Enviar
          </button>
        </form>
        <div>
          {response.lang.length > 0 && (
            <div>
              <picture className="block w-96">
                <img
                  src={`/${response.lang.toLowerCase().trim()}.png`}
                  alt=""
                  className="w-full"
                />
              </picture>
              <p className="text-white">{response.description}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
