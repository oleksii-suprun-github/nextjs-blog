function ErrorMessage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-brand-dark-purple">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-10 text-6xl font-extrabold tracking-tight text-brand-pink lg:text-7xl">
            An unexpected error occurred
          </h1>
          {error.message && (
            <p className="dark: mb-12 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              {error.message}
            </p>
          )}
          <button
            className="btn btn-lg mb-5 bg-brand-pink text-gray-900 hover:bg-brand-light-pink"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
}

export default ErrorMessage;
