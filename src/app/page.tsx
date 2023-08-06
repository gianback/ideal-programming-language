"use client";

import { Form } from "@/components/Form";
import { SectionLang } from "@/components/SectionLang";
import { QueryLangProvider } from "@/context/queryLangContext";

export default function Home() {
  return (
    <QueryLangProvider>
      <main className="bg-primary min-h-screen flex flex-col items-center py-20">
        <div className="px-2 lg:px-0 max-w-[80%] w-full flex h-full flex-col items-center">
          <h1 className="text-2xl lg:text-4xl text-[#E66EB2] text-center uppercase font-medium">
            Descubre tu Lenguaje de Programación ideal 😍
          </h1>
          <Form />
          <SectionLang />
        </div>
      </main>
    </QueryLangProvider>
  );
}
