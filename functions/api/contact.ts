export async function onRequestPost(context) {
  try {
    console.log('context', context);
    const request = await context.request;
    console.log('request', request);
    if (request.method !== 'POST') {
      console.log('hit POST guard', request.method, request);
      return new Response(null, {
        status: 405,
        statusText: 'Method Not Allowed',
      });
    }

    const contentType = request.headers.get('content-type');
    if (
      !contentType ||
      !contentType.includes('application/x-www-form-urlencoded')
    ) {
      return new Response(null, {
        status: 415,
        statusText: 'Unsupported Media Type',
      });
    }

    const formData = await request.formData();

    if (
      !formData.get('email') ||
      !formData.get('name') ||
      !formData.get('message')
    ) {
      return new Response(null, {
        status: 400,
        statusText: 'Bad Request',
      });
    }

    console.log(
      'params',
      formData.get('email'),
      formData.get('name'),
      formData.get('message'),
    );

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
      console.log('failed to send message');
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
    const confirmationResp = await sendEmail(confirmationBody, 'message');
    if (confirmationResp.status !== 202) {
      console.log('failed to send confirmation');
      return confirmationResp;
    }

    return new Response(null, {
      status: 202,
      statusText: 'Accepted',
    });
  } catch (error) {
    console.log('error', error);
    return new Response(null, {
      status: 500,
      statusText: `Internal Server Error: ${error}`,
    });
  }
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
    console.log(`Failed to send email (${kind}), status: ${resp.status}`);
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
