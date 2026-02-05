"use server";

import { createUser, loginUser, updateEventInterest } from "@/db/queries";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const registerUser = async (formData) => {
  console.log(formData);

  const user = Object.fromEntries(formData);
  const userCreated = await createUser(user);
  redirect("/login");
};

const performLogin = async (formData) => {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");

    const found = await loginUser(credential);
    return found;
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
};

const addiInterestedEvent = async (eventId, userId) => {
  try {
    await updateEventInterest(eventId, userId);
    revalidateTag("events");

    // revalidatePath("/");
  } catch (error) {
    throw new Error("Failed to update interest: " + error?.message);
  }
};

export { registerUser, performLogin, addiInterestedEvent };
