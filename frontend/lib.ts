import { cookies } from "next/headers";

export async function logout() {
  cookies().set("access_token", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("access_token");
  if (!session) return null;

  return session;
}
