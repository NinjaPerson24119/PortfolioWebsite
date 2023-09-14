import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Nicholas Wengel", email: "public@nicholaswengel.com" }],
    },
  ],
  from: (r) => ({ name: r.formData['name'], email: "no-reply@nicholaswengel.com" }),
  subject: "Contact Form",
  content: (r) => r.formData['message'],
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});
