export async function onRequestPost(request) {
  try {
    if (request.method === 'POST') {
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
    } else {
      console.log('hit POST guard', request.method);
      return new Response(null, {
        status: 405,
        statusText: 'Method Not Allowed',
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
  } catch (error) {
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
