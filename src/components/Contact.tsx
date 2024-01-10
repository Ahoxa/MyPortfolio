import { valibotResolver } from "@hookform/resolvers/valibot";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { ContactSchema } from "../schema/cotact";
import type { ContactType } from "../schema/cotact";

import Loader from "./Loader";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: "onBlur",
    resolver: valibotResolver(ContactSchema),
  });

  const messageValue = watch("message", "");
  const messageLength = messageValue.length;

  const onSubmit = handleSubmit(async (data: ContactType) => {
    try {
      await axios.post(import.meta.env.PUBLIC_HyperForm_URL as string, data);
      toast.success("Message sent successfully!");
      reset();
    } catch (err) {
      toast.error("Error occured when sending message. \nPlease try again.");
      console.log(err);
    }
  });

  return (
    <>
      <form
        method="post"
        onSubmit={onSubmit}
        className="flex w-[300px] flex-col items-center justify-center gap-3"
      >
        <div className="w-full">
          <label htmlFor="name" className="text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Ahoxa Woods"
            className="w-full border p-3 shadow hover:border-gray-400 rounded"
          />
          {errors.name && (
            <span className="self-start text-red-500 text-xs mt-1">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="email" className="text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="mail@example.com"
            className="w-full border p-3 shadow hover:border-gray-400 rounded"
          />
          {errors.email && (
            <span className="self-start text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="message" className="text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Input your message here."
            rows={6}
            className="w-full border p-3 shadow hover:border-gray-400 rounded"
          ></textarea>
          <div className="pr-1 text-right text-xs text-gray-400">
            {messageLength}/300
          </div>
          {errors.message && (
            <span className="self-start text-xs text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`w-full rounded bg-lime-600 p-3 text-white transition ${
            !isValid || isSubmitting
              ? "cursor-not-allowed opacity-60"
              : "hover:bg-lime-700"
          }`}
        >
          {isSubmitting ? <Loader /> : "Send"}
        </button>
      </form>
      <Toaster />
    </>
  );
};
