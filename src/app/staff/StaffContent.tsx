"use client";

import Image from "next/image";
import { leadershipTeam, committees, facultyAdvisors, StaffMember } from "@/StaffData/Staff";
import { AnimateOnScroll } from "@/lib/ScrollUtils";
import { CONFERENCE } from "@/config/features";
import { BIO_PLACEHOLDER } from "@/lib/placeholders";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function getImageSrc(image: string): string {
    if (image.startsWith("http")) {
        return image;
    }
    return `${basePath}${image}`;
}

function StaffMemberCard({ member }: { member: StaffMember }) {
    const hasImage = Boolean(member.image && member.image.trim() !== "");
    const biography =
        member.biography && member.biography.trim() !== ""
            ? member.biography
            : BIO_PLACEHOLDER;

    return (
        <div className="flex gap-5">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden border border-gray-200 bg-gray-50 sm:h-28 sm:w-28">
                {hasImage && (
                    <div className="relative h-full w-full">
                        <Image
                            src={getImageSrc(member.image)}
                            alt={member.name}
                            fill
                            sizes="112px"
                            className="object-cover"
                        />
                    </div>
                )}
            </div>

            <div className="min-w-0 flex-1">
                <h3 className="font-bold leading-snug text-black">{member.name}</h3>
                <p className="mt-0.5 text-sm text-black">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-black">{biography}</p>
            </div>
        </div>
    );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <AnimateOnScroll>
            <h2 className="text-center text-2xl font-bold uppercase tracking-[0.1em] text-black md:text-3xl">
                {children}
            </h2>
        </AnimateOnScroll>
    );
}

export default function StaffContent() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10 bg-[#17324D]/40"></div>
                <div className="absolute inset-0 z-20 bg-black/30"></div>

                <div className="absolute inset-0">
                    <Image
                        src={`${basePath}/staffBg.jpg`}
                        alt=""
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center 40%" }}
                        quality={100}
                        priority
                    />
                </div>

                <div className="relative z-30 px-4 text-center">
                    <h1 className="animate-fade-in-down text-4xl font-bold uppercase tracking-[0.08em] text-white md:text-5xl lg:text-6xl">
                        Staff
                    </h1>
                    <p className="animate-fade-in mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 md:text-base">
                        {CONFERENCE.name}
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6">
                <section className="border-b border-gray-200 py-16">
                    <SectionHeading>Leadership Team</SectionHeading>
                    <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
                        {leadershipTeam.map((member) => (
                            <AnimateOnScroll key={member.name}>
                                <StaffMemberCard member={member} />
                            </AnimateOnScroll>
                        ))}
                    </div>
                </section>

                <section className="border-b border-gray-200 py-16">
                    <SectionHeading>Committee Leadership</SectionHeading>
                    <div className="mt-12 divide-y divide-gray-200">
                        {committees.map((committee) => (
                            <div key={committee.name} className="py-10 first:pt-0">
                                <AnimateOnScroll>
                                    <h3 className="text-center text-sm font-bold text-black">
                                        {committee.name}
                                    </h3>
                                </AnimateOnScroll>
                                <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
                                    {committee.chairs.map((chair) => (
                                        <AnimateOnScroll key={chair.name}>
                                            <StaffMemberCard member={chair} />
                                        </AnimateOnScroll>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-16">
                    <SectionHeading>Faculty Advisors</SectionHeading>
                    <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
                        {facultyAdvisors.map((advisor) => (
                            <AnimateOnScroll key={advisor.name}>
                                <StaffMemberCard member={advisor} />
                            </AnimateOnScroll>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
