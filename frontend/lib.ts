import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
export async function logout() {
  cookies().set("access_token", "", { expires: new Date(0) });
  redirect("/");
}

export async function getSession() {
  const session = cookies().get("access_token");

  if (!session) return null;

  return session;
}
