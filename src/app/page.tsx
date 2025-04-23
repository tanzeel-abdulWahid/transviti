import Navbar from "@/components/Navbar";
import ProfileSidebar from "@/components/ProfileSidebar";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />

      <div className="min-h-screen bg-[#F4F4F4] p-4">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4">
          {/* Left sidebar */}
          <div className="w-full">
            <ProfileSidebar />
          </div>

          {/* Right content - empty box as requested */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 min-h-[600px]">
            <div className="h-full flex items-center justify-center text-gray-400">
              Right side content area
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
