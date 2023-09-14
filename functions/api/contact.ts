import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

const onRequestPost = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Nicholas Wengel", email: "public@nicholaswengel.com" }],
    },
  ],
  from: (r) => ({ name: r.formData['name'], email: r.formData['email'] }),
  subject: "Contact Form",
  content: (r) => r.formData['message'],
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});
