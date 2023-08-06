import { FormEvent } from "react";
import { sendSignService } from "@/services/send.sign.service";
import { IconArrowBottom } from ".";
import { Colors } from "@/models";
import { useQueryLangContext } from "@/context/queryLangContext";
import { signs } from "@/constants/signs";
export const colors: Colors = {
  javascript: "text-yellow-500",
  go: "text-[#08afd8]",
  "c++": "text-[#084a86]",
  dart: "text-[#33b9f6]",
  java: "text-[#ed272c]",
  kotlin: "text-[#f78d14]",
  php: "text-[#7b7fb5]",
  python: "text-[#ffe367]",
  ruby: "text-[#b11b0a]",
  rust: "text-[#f78d14]",
  scala: "text-[#a52b1a]",
  swift: "text-[#ff5635]",
};
export function Form() {
  const { firstReq, setFirstReq, setIsLoading, setQuery } =
    useQueryLangContext();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (firstReq) {
      setFirstReq(false);
    }

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const text = formData.get("sign") as string;

    try {
      setIsLoading(true);
      const description = await sendSignService(text);
      const lang = description.match(
        /JavaScript|Go|Java|PHP|Python|Rust|Scala|C\+\+|Swift|Ruby|Dart|Kotlin/
      )[0];
      setQuery({
        lang,
        color: colors[lang.toLowerCase()],
      });
    } catch (error) {
      throw new Error("Some error occured sending sign");
    } finally {
      form.reset();
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 lg:gap-8 flex-col lg:flex-row mt-8 lg:mt-16 items-center"
    >
      <div className="flex gap-3 lg:gap-8 items-center ">
        <label
          htmlFor="sign"
          className="text-[#E66EB2]  text-sm lg:text-3xl"
          aria-required
        >
          Elige tu signo
        </label>
        <div className="relative">
          <select
            name="sign"
            defaultValue={""}
            id="sign"
            className=" px-4 py-2 lg:px-6 lg:py-4 rounded-md lg:w-60 w-full"
          >
            <option value="" disabled>
              Selecciona tu signo
            </option>
            {signs.map((sign) => (
              <option key={sign.name} value={sign.name}>
                {sign.name}
              </option>
            ))}
          </select>
          <div className="absolute top-1/2 translate-y-[-50%] right-0 lg:right-3">
            <IconArrowBottom />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="textlg border-none  lg:text-xl block w-full lg:w-auto lg:inline-flex items-center justify-center px-4 py-2 lg:px-6 lg:py-4 font-medium leading-6  whitespace-no-wrap bg-[#E66EB2]  border rounded-md shadow-sm text-white"
      >
        Descubrir
      </button>
    </form>
  );
}
