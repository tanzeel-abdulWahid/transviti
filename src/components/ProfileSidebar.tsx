import Image from "next/image";
import { ChevronDown } from "lucide-react";
import CoverPic from "../../public/icons/cover.svg";
import ProfilePic from "../../public/icons/profilePic.svg";
import { profileStats } from "@/constants/dummyData";

const ProfileSidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Profile Card */}
      <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header with background image */}
        <div className="relative">
          <div className="h-[100px] w-full overflow-hidden">
            <Image
              src={CoverPic}
              alt="Background cover"
              width={280}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile section */}
        <div className="px-4 pt-16 pb-6 flex flex-col items-center text-center relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="rounded-full  overflow-hidden h-[96px] w-[96px]">
              <Image
                src={ProfilePic}
                alt="Albert Flores"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="heading-text">Albert Flores</h3>
            <p className="subheading-text">
              Senior Product Designer | UI/UX
              <br />
              Designer | Graphic Designer | Web...
            </p>
            <p className="subheading-text text-light mt-1">Clinton, Maryland</p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="py-2">
          {profileStats?.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center justify-between my-2 py-2 mx-5 ${
                index != profileStats.length - 1
                  ? "border-b border-offwhite"
                  : ""
              } `}
            >
              <span className="subheading-text">{stat.name}</span>
              <span className="subheading-text text-primary text-base">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar section */}
      <div className="bg-white rounded-lg shadow-sm">
        <button className="w-full flex items-center justify-between py-3 px-5 cursor-pointer">
          <div>
            <div className="text-left heading-text">My calendar</div>
            <div className="text-left subheading-text">Upcoming Interviews</div>
          </div>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
