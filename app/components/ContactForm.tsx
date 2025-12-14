"use client";
import contact from "@/app/lib/actions/contact";
import { useActionState } from "react";

export default function ContactForm() {
  const [state, formAction] = useActionState(contact, {
    success: false,
    errors: {},
  });
  return (
    <form action={formAction}>
      <div className="py-24 text-gray-600">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <p className="text-gray-500 mb-6">
              Fill out the form below to get in touch!
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {state.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {state.errors.name.join(",")}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {state.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {state.errors.email?.join(",")}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                id="message"
                name="message"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
