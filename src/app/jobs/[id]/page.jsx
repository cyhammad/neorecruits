import { JobDetailHero } from "./_components/JobDetailHero";
import { JobDetailOverview } from "./_components/JobDetailOverview";
import { JobDetailResponsibilities } from "./_components/JobDetailResponsibilities";
import { JobDetailRequirements } from "./_components/JobDetailRequirements";
import { JobDetailBenefits } from "./_components/JobDetailBenefits";
import { JobDetailCompanyInfo } from "./_components/JobDetailCompanyInfo";
import { JobDetailSimilarJobs } from "./_components/JobDetailSimilarJobs";
import { JobDetailApply } from "./_components/JobDetailApply";
import { notFound } from "next/navigation";

async function getJob(id) {
  try {
    const res = await fetch(
      "https://jobify-backend-rsyx5.sevalla.app/api/sitemap/jobs",
      { cache: "no-store" },
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const jobs = data.data.data;

    // Find the job with the matching ID
    const job = jobs.find((j) => j.id.toString() === id);

    if (!job) return null;

    // Transform API data to match component expectations
    const locationParts = job.location ? job.location.split(",") : ["Unknown"];
    const country = locationParts[0].trim();
    const city = locationParts.length > 1 ? locationParts[1].trim() : country;

    // Helper to extract list items from HTML description if possible, or return generic list
    // Since API returns HTML description, we might want to just parse the description
    // For now, we will use the description as is and provide empty lists for specific sections if not available separately

    return {
      id: job.id,
      title: job.title,
      company: job.company_name || "Unknown Company",
      location: job.location || "Remote",
      country: country,
      city: city,
      type: job.work_mode || "Full-time", // Maps to Onsite/Hybrid/Remote
      employmentType: job.job_type || "Full-time",
      salary: job.salary_range || "Competitive",
      posted: "Recently",
      industry: "Technology", // Default
      experience: job.experience_level || "Not Specified",
      description: job.description, // HTML content
      // The API doesn't seem to split these out, so we'll pass empty arrays or extract if needed.
      // For now, passing data so components don't crash, but they might need to be adjusted to handle missing data or use description.
      overview: job.description,
      responsibilities: [],
      requirements: [],
      benefits: [],
      companyInfo: {
        name: job.company_name || "Unknown Company",
        description: "Leading company in the industry.",
        industry: "Technology",
        size: "Not Specified",
        website: "",
        founded: "",
        address: job.location || "Remote",
        mapLocation: { lat: 25.2048, lng: 55.2708 }, // Default to Dubai
      },
      logo: job.company_logo || null,
    };
  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
}

export default async function JobDetailPage({ params }) {
  // Await params correctly for Next.js 15+ (if applicable, otherwise standard access)
  const { id } = await params;
  const job = await getJob(id);

  if (!job) {
    notFound();
  }

  return (
    <main className="flex flex-col w-full bg-[#0b2677] relative min-h-screen">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full">
        <JobDetailHero job={job} />

        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-7xl mx-auto py-12 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <JobDetailOverview job={job} />

                {job.responsibilities && job.responsibilities.length > 0 && (
                  <JobDetailResponsibilities job={job} />
                )}
                {job.requirements && job.requirements.length > 0 && (
                  <JobDetailRequirements job={job} />
                )}
                {job.benefits && job.benefits.length > 0 && (
                  <JobDetailBenefits job={job} />
                )}

                <JobDetailCompanyInfo job={job} />
              </div>

              {/* Sidebar - Apply Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <JobDetailApply job={job} />
                </div>
              </div>
            </div>

            <div className="mt-16 sm:mt-24 border-t border-white/10 pt-16">
              <JobDetailSimilarJobs currentJobId={job.id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
