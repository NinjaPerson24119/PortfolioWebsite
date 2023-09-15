export async function onRequestPost(request) {
  const formData = await request.formData();

  const messageBody = {
    personalizations: [
      {
        to: [{ name: 'Nicholas Wengel', email: 'public@nicholaswengel.com' }],
      },
    ],
    from: {
      name: formData.get('name')?.toString(),
      email: 'no-reply@nicholaswengel.com',
      reply_to: formData.get('email')?.toString() ?? '',
    },
    subject: 'Contact Form Submission',
    content: [
      {
        type: 'text/plain',
        value: formData.get('message')?.toString() ?? '',
      },
    ],
  };
  const messageResp = await sendEmail(messageBody, 'message');
  if (messageResp.status !== 202) {
    return messageResp;
  }

  const confirmationBody = {
    personalizations: [
      {
        to: [{ email: formData.get('email')?.toString() ?? '' }],
      },
    ],
    from: {
      name: formData.get('name')?.toString(),
      email: 'no-reply@nicholaswengel.com',
    },
    subject: 'Thanks for reaching out - Nicholas Wengel',
    content: [
      {
        type: 'text/plain',
        value:
          'Thank you for contacting me. I will get back to you as soon as possible.',
      },
    ],
  };
  const confirmationResp = await sendEmail(messageBody, 'message');
  if (confirmationResp.status !== 202) {
    return confirmationResp;
  }

  return new Response(null, {
    status: 202,
    statusText: 'Accepted',
  });
}

async function sendEmail(body: any, kind: string): Promise<Response> {
  const messageRequest = new Request(
    'https://api.mailchannels.net/tx/v1/send',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );
  const resp = await fetch(messageRequest);
  if (!resp.ok) {
    return new Response(
      JSON.stringify({ error: `Failed to send email (${kind})` }),
      {
        status: resp.status,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
  return new Response(null, {
    status: 202,
    statusText: 'Accepted',
  });
}
