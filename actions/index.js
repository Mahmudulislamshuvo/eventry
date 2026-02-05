"use server";

import { createUser, loginUser } from "@/db/queries";
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

export { registerUser, performLogin };
