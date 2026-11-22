function Hello() {
  return (
    <div className="h-auto flex bg-(--color-accent) px-12 pt-8 justify-evenly max-[516px]:flex-col max-[516px]:items-center max-w-full mx-auto">
      <section className="flex-col flex my-6 gap-6 justify-start w-[48%] max-[516px]:items-center">
        <h1 className="w-full text-5xl max-[881px]:text-4xl max-[691px]:text-3xl max-[627px]:text-2xl max-[516px]:text-center flex-2 font-sans tracking-widest uppercase font-thin text-left self-start">
          Hi, I'm Cantrell.
        </h1>
        <h2 className="font-sans tracking-widest uppercase font-thin self-start text-left mt-4 max-w-md text-2xl max-[881px]:text-lg max-[691px]:text-base max-[627px]:text-sm max-[570px]:text-xs  max-[516px]:text-center">
          Software Engineer, Creator, Lifelong Learner
        </h2>
        <div className="flex max-[516px]:flex-col flex-1 gap-6">
          <button className="w-48 max-[538px]:h-12 max-[881px]:w-38 max-[691px]:w-28 max-[627px]:w-24 max-[570px]:w-21 max-[521px]:w-20 max-[516px]:w-54 max-[691px]:text-sm max-[627px]:text-[11px] max-[570px]:text-[9px] bg-(--color-charcoal) text-white rounded-xl px-2 py-3 font-medium shadow-md">
            View My Work
          </button>
          <button className="w-48 max-[538px]:h-12 max-[881px]:w-38 max-[691px]:w-28 max-[627px]:w-24 max-[570px]:w-21 max-[516px]:w-54 max-[691px]:text-sm max-[627px]:text-[11px] max-[570px]:text-[9px] bg-(--color-dark-tan) text-white rounded-xl px-2 py-3 font-medium shadow-md">
            Get in Touch
          </button>
        </div>
      </section>
      <section className="relative flex justify-center items-start w-[48%] max-[516px]:w-full ">
        <div className="absolute max-[586px]:top-5 max-[627px]:top-2 max-[691px]:top-2 max-[600px]:hidden top-1 left-3/4 -translate-x-1/2 w-60 max-[627px]:w-52 max-[881px]:w-54 aspect-2/3 bg-(--color-dark-tan) rounded-3xl opacity-30"></div>
        <div className="relative max-[600px]:top-0 max-[627px]:top-8 top-6 bg-(--color-section) p-2 rounded-2xl shadow-lg w-80 max-[516px]:w-60 max-[600px]:w-72 aspect-4/6 overflow-hidden">
          <img
            src="IMG_0622.png"
            alt="A photo of Cantrell."
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Hello;
