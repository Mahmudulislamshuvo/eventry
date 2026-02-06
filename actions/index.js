"use server";

import EmailTemplate from "@/components/common/EmailTemplate";
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

// const sendEmail = async (eventId, user) => {
//   try {
//     const event = await getEventById(eventId);

//     const resend = new Resend(process.env.RESEND_API_KEY);

//     const { data, error } = await resend.emails.send({
//       from: "Eventry <onboarding@resend.dev>",
//       to: user.email,
//       subject: `Registration successful for ${event.name}`,
//       // react: EmailTemplate({
//       //   userName: user.name,
//       //   eventName: event.name,
//       //   eventLocation: event.location,
//       // }),
//       react: <EmailTemplate message={`Hello`} />,
//     });

//     console.log(data, "error", error);

//     console.log("Email sent");
//   } catch (error) {
//     throw new Error("Failed to send email: " + error.message);
//   }
// };

const sendEmail = async (eventId, user) => {
  try {
    const event = await getEventById(eventId);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Eventry <onboarding@resend.dev>",
      to: user.email,
      subject: `🎉 Registration successful for ${event.name}`,
      text: `Hi ${user.name},

You have successfully registered for ${event.name} happening at ${event.location}.

Thank you for using Eventry!

Event Details:
- Event: ${event.name}
- Location: ${event.location}

This is an automated message.`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #4F46E5;">🎉 Registration Successful!</h2>
          <p>Hi ${user.name},</p>
          <p>You have successfully registered for <strong>${event.name}</strong> 
          happening at <strong>${event.location}</strong>.</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>📋 Event Details:</strong></p>
            <p style="margin: 5px 0;">🎯 <strong>Event:</strong> ${event.name}</p>
            <p style="margin: 5px 0;">📍 <strong>Location:</strong> ${event.location}</p>
          </div>
          <p>Thank you for using <strong>Eventry</strong>! We look forward to seeing you at the event.</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    console.log("📧 Email API Response:", {
      data: data ? "Email sent" : "No data",
      error: error || "No error",
    });

    if (error) {
      console.error("❌ Resend API Error:", error);
      throw new Error(`Resend API error: ${error.message}`);
    }

    console.log("✅ Email sent successfully!");
    return true;
  } catch (error) {
    console.error("🔥 Email sending failed:", error);
    throw new Error("Failed to send email: " + error.message);
  }
};

const addiGoingEvent = async (eventId, user) => {
  let isSuccess = false;

  try {
    await updateEventGoing(eventId, user?.id);
    await sendEmail(eventId, user);
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

export { registerUser, performLogin, addiInterestedEvent, addiGoingEvent };
