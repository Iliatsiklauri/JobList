export default function Navbar() {
  return (
    <div className="w-full h-[136px] bg-[#5964E0] flex items-start justify-between gap-9 pt-8 pl-6 pr-6">
      <img src="assets/desktop/logo.svg" alt="" />
      <div className="w-[132px] h-6 flex items-center justify-between">
        <img src="/assets/desktop/icon-sun.svg" alt="" />
        <h1>wassup</h1>
        <img src="/assets/desktop/icon-moon.svg" alt="" />
      </div>
    </div>
  );
}
