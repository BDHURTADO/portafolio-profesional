export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[700px] h-[700px] bg-purple-600 opacity-30 rounded-full blur-3xl animate-blob top-[-200px] left-[-200px]" />
      <div className="absolute w-[700px] h-[700px] bg-green-500 opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000 bottom-[-200px] right-[-200px]" />
      <div className="absolute w-[700px] h-[700px] bg-blue-500 opacity-30 rounded-full blur-3xl animate-blob animation-delay-4000 top-[40%] left-[30%]" />
    </div>
  );
}
