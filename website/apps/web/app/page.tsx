export default function Page() {
  return (
    <div className="flex justify-center items-center p-5 mx-auto max-w-[700px] font-times h-full flex-col space-y-3">
      <h1 className="text-2xl">Josh Galbreath</h1>

      <p className="text-center">
        I'm a full-stack engineer at{" "}
        <a href="https://www.raylu.ai/" className="text-blue-500 underline">
          Raylu
        </a>
        , an AI financial services company in NYC.
      </p>

      <p className="text-center">
        I explore performant and user-centric web experiences, alongside
        building an engine that enables AI-driven data exploration.
      </p>
    </div>
  );
}
