import type {
  Control,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import type { IconType } from "react-icons";

export interface InputProps<TFieldValues extends FieldValues = FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
  disabled?: boolean;
  icon?: IconType;
  error?: string | undefined;
  className?: string;
}
