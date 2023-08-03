import { openai } from "@/config/openai";

export const openaiService = async (sign: string) => {
  return await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `De estos lenguajes: Javascript,Go, Java, PHP, Python, Rust, C#, C++, Swift y Ruby,segun el signo ${sign} devuelve el nombre y una muy breve description maximo 25 palabras`,
    temperature: 0.7,
    max_tokens: 70,
  });
};
