export async function sendContactMessage(message) {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 700);
  });

  return {
    ok: true,
    message: 'Message sent successfully.',
    payload: message,
  };
}
