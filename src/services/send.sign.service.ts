const url = `${process.env.NEXT_PUBLIC_URL}/api/sign`;
export const sendSignService = async (sign: string) => {
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sign),
  });
  return await resp.json();
};
