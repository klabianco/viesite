import { useRef } from 'react';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
    console.log(res);
  };

  return (
    <form onSubmit={subscribeUser}>
        <label htmlFor="email-input">
        Be the first to know when it&apos;s released
      </label>
        <div className="input-group">
        <input
        type="email"
        id="email-input"
        name="email"
        placeholder="Your Email Address..."
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
        className="form-control"
      />
      <div className="input-group-append">
      <button type="submit" value="" name="subscribe" className="btn btn-primary">Subscribe</button>

  </div>
        </div>
    </form>
  );
}