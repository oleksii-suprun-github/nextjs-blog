function ErrorMessage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-brand-dark-purple">
      <div className="mx-auto max-w-screen-xl py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-brand-pink lg:text-7xl">
            An unexpected error occurred
          </h1>
          {error.message && (
            <p className="mb-12 text-xl font-bold tracking-tight text-gray-300 md:text-4xl lg:text-3xl">
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
