import React from "react";
import { EmptyLang, Loader } from ".";
import { CardLang } from "./CardLang";
import { useQueryLangContext } from "@/context/queryLangContext";

export function SectionLang() {
  const { firstReq, isLoading, query } = useQueryLangContext();

  return (
    <section className="mt-10 lg:mt-20 w-full flex justify-center items-center">
      {firstReq && <EmptyLang />}
      {isLoading && <Loader />}
      {!isLoading && query.lang.length > 0 && <CardLang />}
    </section>
  );
}
