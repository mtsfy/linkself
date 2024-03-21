import axios from "axios";

export async function getUserByUsername(username: string) {
  try {
    const response = await axios({
      method: "GET",
      url: process.env.NEXT_PUBLIC_BACKEND_URL + `/auth/${username}`,
    });

    const user: User = response.data;
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}
