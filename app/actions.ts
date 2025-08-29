'use server';

export async function handleSubmit(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const message = formData.get('message');

  const data = {
    name,
    email,
    company,
    message,
  };

  try {
    const response = await fetch('https://formspree.io/f/myzdkydq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Form submitted successfully to Formspree!');
      // You might want to return a success message or redirect
    } else {
      console.error('Form submission failed:', response.statusText);
      // You might want to return an error message
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    // You might want to return an error message
  }

  // Simulate a delay for demonstration purposes
  await new Promise(resolve => setTimeout(resolve, 1000));
}