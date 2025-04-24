import Navbar from "@/components/Navbar";
import ProfileSidebar from "@/components/ProfileSidebar";
import JobsPage from "@/pages/JobsPage";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] ">
      <Navbar />

      <div className=" p-4">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-[346px_1fr] gap-4">
          {/* Left sidebar */}
          <div className="sm:w-full md:w-96 md:mx-auto lg:w-full">
            <ProfileSidebar />
          </div>

          {/* Right content */}
          <div className="lg:p-4">
            <JobsPage />
          </div>
        </div>
      </div>
    </div>
  );
}
