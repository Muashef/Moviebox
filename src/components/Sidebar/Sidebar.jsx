const nav = [
    {
      id: 1,
      icon: "/Home.svg",
      name: "Home",
      active: false,
    },
    {
      id: 2,
      icon: "/Movie.svg",
      name: "Movies",
      active: true,
    },
    {
      id: 3,
      icon: "/show.svg",
      name: "TV Series",
      active: false,
    },
    {
      id: 4,
      icon: "/upcoming.svg",
      name: "Upcoming",
      active: false,
    },
  ];
  
  function Sidebar() {
    return (
      <div className="2xl:w-[14.125rem] xl:w-[12.5rem] fixed top-0 bottom-0 left-0 rounded-tr-[2.8125rem] rounded-br-[2.8125rem] border border-[rgba(0,0,0,0.30)] bg-white hidden xl:flex flex-col justify-between 2xl:py-10 py-4">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/Logo (1).svg" alt="logo" />
        </div>
        {/* Nav */}
        <div className="flex flex-col gap-3 w-full">
          {nav.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 2xl:h-[5.375rem] h-[3rem] 2xl:pl-7 pl-3 ${
                item.active
                  ? "bg-[rgba(190,18,60,0.10)] border-r-[6px] border-r-[#BE123C] "
                  : ""
              }`}
            >
              <div className="w-[1.5625rem] flex items-center justify-center">
                <img src={item.icon} alt="nav_icon" />
              </div>
              <p className="text-[#666] font-semibold text-[1.1rem] 2xl:text-[1.25rem]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
  
        <div className="flex flex-col mx-auto 2xl:gap-8 gap-4">
          <div className="bg-[rgba(248,231,235,0.40)] w-[10.625rem] h-[13.125rem] rounded-[1.25rem] border border-[rgba(190,18,60,0.70)] flex flex-col justify-center gap-4 px-3">
            <h4 className="text-[rgba(51,51,51,0.80)] text-[0.9375rem] font-semibold">
              Play movie quizes and earn free tickets
            </h4>
            <p className="text-[#666] text-[0.75rem] font-medium">
              50k people are playing now
            </p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-[1.5625rem] flex items-center justify-center">
              <img src="/Logout.svg" alt="nav_icon" />
            </div>
            <p className="text-[#666] font-semibold text-[1.1rem] 2xl:text-[1.25rem]">Log Out</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;