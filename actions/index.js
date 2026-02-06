"use server";

import EmailTemplate from "@/components/common/EmailTemplete";
import {
  createUser,
  getEventById,
  loginUser,
  updateEventGoing,
  updateEventInterest,
} from "@/db/queries";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

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

const addiGoingEvent = async (eventId, user) => {
  let isSuccess = false;

  try {
    await updateEventGoing(eventId, user?.id);
    await sendEmail(eventId, user?.id);
    revalidateTag("events");
    isSuccess = true;
  } catch (error) {
    console.error("Error updating event going:", error);
    throw new Error("Failed to update going: " + error?.message);
  }

  if (isSuccess) {
    redirect("/");
  }
};

// const addiGoingEvent = async (eventId, userId) => {
//   try {
//     await updateEventGoing(eventId, userId);

//     // 🔥 only primitives passed
//     await sendEmail(eventId, userId);

//     revalidateTag("events");
//     redirect("/");
//   } catch (error) {
//     console.error("Error updating event going:", error);
//     throw new Error("Failed to update going: " + error.message);
//   }
// };

const sendEmail = async (eventId, user) => {
  try {
    const event = await getEventById(eventId);

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "no-reply@eventry.com",
      to: user.email,
      subject: `Registration successful for ${event.name}`,
      react: EmailTemplate({
        userName: user.name,
        eventName: event.name,
        eventLocation: event.location,
      }),
    });
  } catch (error) {
    throw new Error("Failed to send email: " + error.message);
  }
};

export { registerUser, performLogin, addiInterestedEvent, addiGoingEvent };
