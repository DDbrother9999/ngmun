import Image from "next/image";
import Link from "next/link";
import COMMITTEES from "@/StaffData/Committees";
import { committees as staffCommittees } from "@/StaffData/Staff";
import { FEATURES } from "@/config/features";
import { BIO_PLACEHOLDER } from "@/lib/placeholders";
import { redirect } from "next/navigation";

const basePath = "/ngmun";

const CHAIR_PROFILES = new Map(
  staffCommittees.flatMap((c) => c.chairs).map((chair) => [chair.name, chair])
);

const TINTS = [
  "#17324D",
  "#12514F",
  "#2A3C63",
  "#1F4E6B",
  "#3E3A66",
  "#4A2F4E"
];

type CommitteeDetailParams = {
  id: string;
};

export async function generateStaticParams() {
  const committeeIds = COMMITTEES.map((committee) => committee.id);
  return committeeIds.map((id) => ({ id }));
}

export default function CommitteeDetailPage({
  params,
}: {
  params: CommitteeDetailParams;
}) {
  if (!FEATURES.SHOW_COMMITTEES) {
    redirect("/");
  }

  const index = COMMITTEES.findIndex((c) => c.id === params.id);
  const committee = COMMITTEES[index];

  if (!committee) {
    return <div>Committee not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${basePath}/${committee.image}`}
            alt=""
            fill
            className="object-cover grayscale"
            quality={100}
            priority
          />
        </div>
        <div
          className="absolute inset-0 z-10 mix-blend-multiply"
          style={{ backgroundColor: TINTS[index % TINTS.length] }}
        />
        <div className="absolute inset-0 z-20 bg-black/30" />

        <div className="relative z-30 max-w-3xl px-6 text-center">
          <p
            className="animate-fade-in mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 md:text-sm"
          >
            {committee.committeeName}
          </p>
          <h1
            className="animate-fade-in-down text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {committee.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="border border-gray-200 p-8 md:p-12">
          <p className="leading-relaxed text-black">
            {committee.fullDescription}
          </p>

          <div className="mt-10">
            <h2 className="text-sm font-bold text-black">Background guide</h2>
            {committee.backgroundGuideUrl ? (
              <a
                href={committee.backgroundGuideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-medium text-[#4A90E2] hover:text-[#357ABD]"
              >
                Read the {committee.committeeName} background guide
              </a>
            ) : (
              <p className="mt-2 text-black">Coming soon.</p>
            )}
          </div>

        </div>

        {committee.chairs.length > 0 && (
          <div className="mt-12 space-y-10">
            {committee.chairs.map((chair) => {
              const profile = CHAIR_PROFILES.get(chair.name);
              const image = profile?.image ?? "";
              const biography =
                profile?.biography && profile.biography.trim() !== ""
                  ? profile.biography
                  : BIO_PLACEHOLDER;

              return (
                <div key={chair.name} className="flex gap-5">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden border border-gray-200 bg-gray-50 sm:h-28 sm:w-28">
                    {image !== "" && (
                      <div className="relative h-full w-full">
                        <Image
                          src={`${basePath}${image}`}
                          alt={chair.name}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-black">
                      <span className="font-bold">{chair.name}</span>, {chair.role}
                    </p>
                    {chair.emailConfirmed && (
                      <a
                        href={`mailto:${chair.email}`}
                        className="mt-1 block text-sm text-[#4A90E2] hover:text-[#357ABD]"
                      >
                        {chair.email}
                      </a>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-black">
                      {biography}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/committees"
            className="inline-block border border-gray-300 px-6 py-3 text-sm text-black transition-colors hover:border-[#4A90E2] hover:text-[#4A90E2]"
          >
            All committees
          </Link>
        </div>
      </div>
    </main>
  );
}
