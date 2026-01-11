"use client";

import { useState } from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ConfirmationModal } from "@/components/shared/ConfirmationModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('API Error:', result);
        throw new Error(result.error || 'Failed to submit form');
      }

      console.log('Form submitted successfully:', result);
      reset();
      
      // Show success modal
      setModalTitle("Message Sent!");
      setModalMessage("Thank you for your message! I'll get back to you soon.");
      setModalType("success");
      setShowModal(true);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Please try again.';
      console.error('Error submitting form:', error);
      
      // Show error modal
      setModalTitle("Error");
      setModalMessage(`Sorry, there was an error submitting your message: ${errorMessage}`);
      setModalType("error");
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-4xl mx-auto py-12 px-6">
        <div className="mb-6">
          <h1 className="text-4xl font-semibold text-black font-heading">
            Let&apos;s work together. Reach Out.
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Fields - Side by Side */}
          <div>
            <label className="block text-black mb-2 text-sm font-medium">
              Name <span className="text-gray-400">(required)</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-black mb-2 text-sm font-medium">
              Email <span className="text-gray-400">(required)</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-black mb-2 text-sm font-medium">
              Subject <span className="text-gray-400">(required)</span>
            </label>
            <input
              {...register("subject")}
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-black mb-2 text-sm font-medium">
              Message <span className="text-gray-400">(required)</span>
            </label>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="Your message..."
              className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-start pt-0">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-blue-600 border border-blue-600 rounded-md text-white font-semibold hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </main>
      <Footer />
      
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalTitle}
        message={modalMessage}
        type={modalType}
      />
    </div>
  );
}
