export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-screen px-4 font-['Poppins',sans-serif]">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-10 text-sm md:pt-20">
        <a href="/" className="text-black/50">
        
        </a>
        <span className="mx-3 text-black/50">/</span>
        <span className="text-black">404 Error</span>
      </nav>

      {/* Content */}
      <section className="flex flex-col items-center py-20 text-center md:py-32">
        <h1 className="text-5xl font-medium tracking-[0.03em] text-black sm:text-7xl md:text-8xl">
          404 Not Found
        </h1>

        <p className="mt-8 text-sm text-black sm:text-base md:mt-10">
          Your visited page not found. You may go home page.
        </p>

        <a
          href="/"
          className="mt-12 rounded bg-[#DB4444] px-8 py-4 text-sm text-white transition-colors hover:bg-[#c23a3a] sm:text-base md:mt-20 md:px-12"
        >
          Back to home page
        </a>
      </section>
    </main>
  );
}

