import emailjs from "@emailjs/browser";
import {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {BsCheck, MdErrorOutline} from "src/components/icons";
import {Input} from "src/components/ui/input";
import {Textarea} from "src/components/ui/textarea";

const ContactForm = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    formState,
    formState: {errors, touchedFields},
    handleSubmit,
    reset,
  } = useForm({mode: "all"});

  const onSubmit = (data) => {
    setIsSending(true);
    const toastId = toast.loading("Sending...");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.dismiss(toastId);
          toast.success("Message sent — I'll be in touch soon.");
          reset();
        },
        () => {
          toast.dismiss(toastId);
          toast.error("Error sending. Try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  const inputBase = "w-full font-jetbrains text-sm text-text-primary placeholder:text-text-muted bg-bg-primary border rounded-sm px-3 py-2.5 focus:outline-none focus:ring-1 transition-colors duration-150";
  const inputNormal = `${inputBase} border-border focus:border-accent focus:ring-accent/20`;
  const inputError  = `${inputBase} border-red-500/60 focus:border-red-500 focus:ring-red-500/20`;
  const inputValid  = `${inputBase} border-accent/50 focus:border-accent focus:ring-accent/20`;

  const getInputClass = (fieldName) => {
    if (errors[fieldName]) return inputError;
    if (touchedFields[fieldName]) return inputValid;
    return inputNormal;
  };

  const labelBase = "font-jetbrains text-xs text-text-muted";

  return (
    <>
      <div className="mb-6 border-b border-border pb-4">
        <h3 className="font-jetbrains font-bold text-text-primary text-lg">
          <span className="text-accent mr-2">//</span> Send a Message
        </h3>
      </div>

      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={labelBase}>
              {errors.name ? (
                <span className="text-red-400">{errors.name.message}</span>
              ) : (
                "your_name"
              )}
            </label>
            <div className="relative">
              <Input
                autoComplete="name"
                id="name"
                {...register("name", {required: "name is required"})}
                aria-invalid={errors?.name ? "true" : "false"}
                type="text"
                name="name"
                disabled={isSending}
                placeholder="John Doe"
                className={getInputClass("name")}
              />
              <RenderInputIcon hasError={errors.name || false} isTouched={touchedFields.name || false} />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelBase}>
              {errors.email ? (
                <span className="text-red-400">{errors.email.message}</span>
              ) : (
                "your_email"
              )}
            </label>
            <div className="relative">
              <Input
                autoComplete="email"
                id="email"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "invalid email format",
                  },
                })}
                aria-invalid={errors?.email ? "true" : "false"}
                type="email"
                name="email"
                disabled={isSending}
                placeholder="john@example.com"
                className={getInputClass("email")}
              />
              <RenderInputIcon hasError={errors.email || false} isTouched={touchedFields.email || false} />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className={labelBase}>
              {errors.message ? (
                <span className="text-red-400">{errors.message.message}</span>
              ) : (
                "message"
              )}
            </label>
            <div className="relative">
              <Textarea
                autoComplete="off"
                id="message"
                {...register("message", {required: "message cannot be empty"})}
                cols="30"
                rows="5"
                placeholder="Tell me about your project or idea..."
                aria-invalid={errors?.message ? "true" : "false"}
                name="message"
                disabled={isSending}
                className={`${getInputClass("message")} resize-none`}
              />
              <RenderInputIcon hasError={errors.message || false} isTouched={touchedFields.message || false} />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="font-jetbrains text-sm border border-accent text-accent rounded-sm
                       py-3 px-6 hover:bg-accent/10 transition-colors duration-150
                       disabled:border-border disabled:text-text-muted disabled:cursor-not-allowed
                       flex items-center justify-center gap-2 mt-1"
          >
            {isSending ? (
              <>
                <div className="w-4 h-4 border border-text-muted border-t-accent rounded-full animate-spin" />
                sending...
              </>
            ) : (
              "send_message()"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

const RenderInputIcon = ({hasError, isTouched}) => {
  if (hasError) {
    return <MdErrorOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400 text-base" />;
  }
  if (isTouched) {
    return <BsCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-accent text-base" />;
  }
  return null;
};

export default ContactForm;
