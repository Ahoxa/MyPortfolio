import {
  type LiteralSchema,
  type Output,
  type StringSchema,
  email,
  literal,
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
  maxLength(4098, "Please enter up to 4098 characters"),
]);

const agreeSchema: LiteralSchema<"true", "true"> = literal(
  "true",
  "Please agree to the terms and conditions",
);

export const ContactSchema = object({
  email: emailSchema,
  name: nameSchema,
  message: messageSchema,
  agree: agreeSchema,
});

export type ContactType = Output<typeof ContactSchema>;
