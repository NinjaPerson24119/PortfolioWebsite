import mailchannelsPlugin, {
  Submission,
} from '@cloudflare/pages-plugin-mailchannels';
import { PagesFunction } from '@cloudflare/workers-types';

export const onRequestPost: PagesFunction = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: 'Nicholas Wengel', email: 'public@nicholaswengel.com' }],
    },
  ],
  from: (submission: Submission) => ({
    name: submission.formData.get('name')?.toString(),
    email: 'no-reply@nicholaswengel.com',
    reply_to: submission.formData.get('email')?.toString() ?? '',
  }),
  subject: 'Contact Form',
  content: (submission: Submission) => [
    {
      type: 'text/plain',
      value: submission.formData.get('message')?.toString() ?? '',
    },
  ],
  respondWith: () =>
    new Response(null, {
      status: 200,
    }),
});
