import { openai } from "@/config/openai";

export const openaiService = async (sign: string) => {
  return await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Segun el signo ${sign} solo dame el nombre del lenguaje de programacion ideal: Javascript,Go, Java, PHP, Python, Rust, Scala, C++, Swift, Dart, Kotlin y Ruby.`,
    temperature: 0.8,
    max_tokens: 80,
  });
};
