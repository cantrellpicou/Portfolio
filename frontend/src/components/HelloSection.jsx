function Hello() {
  return (
    <div className="h-90 flex bg-[var(--color-accent)] px-12 pt-8 justify-evenly max-w-6l mx-auto">
      <section className="flex-col flex my-6 gap-6 justify-start">
        <h1 className="text-5xl max-[881px]:text-4xl max-[691px]:text-3xl flex-2 font-sans tracking-widest uppercase font-thin text-left self-start">
          Hi, I'm Cantrell.
        </h1>
        <h2 className="font-sans tracking-widest uppercase font-thin self-start text-left mt-4 max-w-md text-2xl max-[881px]:text-lg max-[691px]:text-base">
          Software Engineer, Creator, Lifelong Learner
        </h2>
        <div className="flex flex-1 gap-6">
          <button className="w-48 max-[881px]:w-38 max-[691px]:w-28 max-[691px]:text-sm bg-[var(--color-charcoal)] text-white rounded-xl px-2 py-3 font-medium shadow-md ">
            View My Work
          </button>
          <button className="w-48 max-[881px]:w-38 max-[691px]:w-28 max-[691px]:text-sm bg-[var(--color-dark-tan)] text-white rounded-xl px-2 py-3 font-medium shadow-md">
            Get in Touch
          </button>
        </div>
      </section>
      <section className="relative w-90 flex justify-center items-center">
        <div className="absolute -top-6 -right-6 h-72 max-[881px]:w-54 max-[691px]:w-50 w-60 bg-[var(--color-dark-tan)] rounded-3xl opacity-30"></div>
        <div className="relative bg-[var(--color-section)] p-4 rounded-2xl shadow-lg">
          <img
            src="IMG_0622.PNG"
            alt="A photo of Cantrell."
            className="h-80  rounded-xl w-full"
          />
        </div>
      </section>
    </div>
  );
}

export default Hello;
