import Image from "next/image";
import { ChevronDown } from "lucide-react";
import CoverPic from "../../public/icons/cover.svg";
import ProfilePic from "../../public/icons/profilePic.svg";

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
            <h3 className="font-medium text-xl text-gray-900">Albert Flores</h3>
            <p className="text-sm text-gray-600 leading-tight">
              Senior Product Designer | UI/UX
              <br />
              Designer | Graphic Designer | Web...
            </p>
            <p className="text-sm text-gray-500 mt-1">Clinton, Maryland</p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="py-2">
          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-gray-700">Profile Visitors</span>
            <span className="text-blue-600 font-medium">140</span>
          </div>

          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-gray-700">Resume Viewers</span>
            <span className="text-blue-600 font-medium">20</span>
          </div>

          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-gray-700">My Jobs</span>
            <span className="text-blue-600 font-medium">88</span>
          </div>
        </div>
      </div>

      {/* Calendar section */}
      <div className="bg-white rounded-lg shadow-sm">
        <button className="w-full flex items-center justify-between px-5 py-4">
          <div>
            <div className="text-left font-medium text-gray-900">
              My calendar
            </div>
            <div className="text-left text-gray-500 text-sm">
              Upcoming Interviews
            </div>
          </div>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
