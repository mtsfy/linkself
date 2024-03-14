import { getSession } from "@/lib";
import axios from "axios";

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session) {
      return null;
    }

    const response = await axios({
      method: "GET",
      url: process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/",
      headers: {
        Cookie: `access_token=${session.value}`,
      },
    });

    const currentUser: User = response.data.user;
    return currentUser;
  } catch (error) {
    console.log(error);
    return null;
  }
}
