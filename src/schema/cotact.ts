import {
  type Output,
  type StringSchema,
  email,
  maxLength,
  minLength,
  object,
  string,
} from "valibot";

const emailSchema: StringSchema<string> = string([
  minLength(1, "required field"),
  maxLength(255, "Please enter up to 255 characters"),
  email("Please enter a valid email address"),
]);

const nameSchema: StringSchema<string> = string([
  minLength(1, "required field"),
  maxLength(50, "Please enter up to 50 characters"),
]);

const messageSchema: StringSchema<string> = string([
  minLength(1, "required field"),
  maxLength(300, "Please enter up to 300 characters"),
]);

export const ContactSchema = object({
  email: emailSchema,
  name: nameSchema,
  message: messageSchema,
});

export type ContactType = Output<typeof ContactSchema>;
