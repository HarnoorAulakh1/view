import Form from "./Form";

export const revalidate=1;

export default function Auth() {
  return (
    <div className="w-full h-full flex  items-center justify-center">
      <div className="w-[90%] flex flex-col md:flex-row gap-2 items-center justify-center pt-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-8xl font-bold whitespace-pre-line">
            Welcome to{" "}
            <span className="underline decoration-[#4BB543]">VIEW</span>{" "}
            Analytics
          </h1>
        </div>
        <Form />
      </div>
    </div>
  );
}
