import emailjs from "@emailjs/browser";

import {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {BsCheck, MdErrorOutline} from "src/components/icons";
import {Input} from "src/components/ui/input";
import {Textarea} from "src/components/ui/textarea";
import { motion } from "framer-motion";

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
    const toastId = toast.loading("Your email is being sent to me, Hold Tight!");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.dismiss(toastId);
          toast.success("Thanks for getting in touch! I'll be in contact soon");
          reset();
        },
        (error) => {
          toast.dismiss(toastId);
          toast.error("Error Sending email. Try again in sometime.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
        <p className="text-gray-300">I'd love to hear from you. Let's start a conversation!</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className={`${
                errors.name
                  ? "text-red-400"
                  : touchedFields.name
                  ? "text-green-400"
                  : "text-gray-300"
              } text-sm font-medium`}
            >
              Your Name
            </label>
            <div className="relative w-full">
              <Input
                autoComplete="name"
                id="name"
                {...register("name", {
                  required: "Uh oh, looks like you forgot to tell your name!",
                })}
                aria-invalid={errors?.name ? "true" : "false"}
                type="text"
                name="name"
                disabled={isSending}
                placeholder="Enter your name"
                className={`${
                  errors.name
                    ? "border-red-400 bg-red-500/10"
                    : touchedFields.name
                    ? "border-green-400 bg-green-500/10"
                    : "border-gray-600 bg-white/5 dark:bg-black/20"
                } text-white placeholder:text-gray-400 
                   backdrop-blur-sm rounded-xl px-4 py-3
                   focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400
                   transition-all duration-300`}
              />
              <RenderInputIcon
                hasError={errors.name || false}
                isTouched={touchedFields.name || false}
              />
            </div>
            {errors.name && <p className="text-red-400 text-sm pt-1">{errors.name.message}</p>}
          </div>
          
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className={`${
                errors.email
                  ? "text-red-400"
                  : touchedFields.email
                  ? "text-green-400"
                  : "text-gray-300"
              } text-sm font-medium`}
            >
              Your Email
            </label>
            <div className="relative w-full">
              <Input
                autoComplete="email"
                id="email"
                {...register("email", {
                  required: "Uh oh, looks like you forgot to tell your email!",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Oops! It looks like the email you entered isn't valid.",
                  },
                })}
                aria-invalid={errors?.email ? "true" : "false"}
                type="email"
                name="email"
                disabled={isSending}
                placeholder="Enter your email"
                className={`${
                  errors.email
                    ? "border-red-400 bg-red-500/10"
                    : touchedFields.email
                    ? "border-green-400 bg-green-500/10"
                    : "border-gray-600 bg-white/5 dark:bg-black/20"
                } text-white placeholder:text-gray-400 
                   backdrop-blur-sm rounded-xl px-4 py-3
                   focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400
                   transition-all duration-300`}
              />
              <RenderInputIcon
                hasError={errors.email || false}
                isTouched={touchedFields.email || false}
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-red-400 text-sm pt-1">{errors.email.message}</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-400 text-sm pt-1">{errors.email.message}</p>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className={`${
                errors.message ? "text-red-400" : "text-gray-300"
              } text-sm font-medium`}
            >
              Message
            </label>
            <div className="relative w-full">
              <Textarea
                autoComplete="off"
                id="message"
                {...register("message", {
                  required: "Would be great if you can add a message, I promise I read every word.",
                })}
                cols="30"
                rows="6"
                placeholder="Tell me about your project or idea..."
                aria-invalid={errors?.message ? "true" : "false"}
                name="message"
                disabled={isSending}
                className={`${
                  errors.message
                    ? "border-red-400 bg-red-500/10"
                    : touchedFields.message
                    ? "border-green-400 bg-green-500/10"
                    : "border-gray-600 bg-white/5 dark:bg-black/20"
                } text-white placeholder:text-gray-400 
                   backdrop-blur-sm rounded-xl px-4 py-3 resize-none
                   focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400
                   transition-all duration-300`}
              />
              <RenderInputIcon
                hasError={errors.message || false}
                isTouched={touchedFields.message || false}
              />
            </div>
            {errors.message && <p className="text-red-400 text-sm pt-1">{errors.message.message}</p>}
          </div>
          
          <motion.button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 
                       hover:from-purple-700 hover:to-blue-700 
                       disabled:from-gray-600 disabled:to-gray-600
                       text-white font-semibold py-4 px-8 rounded-xl
                       shadow-lg hover:shadow-xl transition-all duration-300
                       transform hover:scale-105 disabled:scale-100
                       disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSending ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </div>
      </form>
    </>
  );
};

const RenderInputIcon = ({hasError, isTouched}) => {
  if (hasError) {
    return (
      <MdErrorOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-red-400" />
    );
  }
  if (isTouched) {
    return (
      <BsCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-green-400" />
    );
  }
  return null;
};

export default ContactForm;
