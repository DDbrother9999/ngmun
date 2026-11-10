'use client'

import Link from 'next/link';
import Image from 'next/image';
import { AnimateOnScroll } from "@/lib/ScrollUtils";
import COMMITTEES, { Committee } from "@/StaffData/Committees";
import { CONFERENCE } from "@/config/features";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const TINTS = [
    '#17324D',
    '#12514F',
    '#2A3C63',
    '#1F4E6B',
    '#3E3A66',
    '#4A2F4E'
];

const SECTIONS: { heading: string; type: Committee['type'] }[] = [
    { heading: "General Assembly", type: "General Assembly" },
    { heading: "Crisis", type: "Crisis" }
];

function CommitteeRow({ committee, index }: { committee: Committee; index: number }) {
    const flipped = index % 2 === 1;
    const showTitle = committee.title !== committee.committeeName;

    return (
        <AnimateOnScroll>
            <Link href={`/committees/${committee.id}`} className="group block">
                <div
                    className={`flex flex-col gap-8 py-12 md:flex-row md:items-center md:gap-14 ${
                        flipped ? 'md:flex-row-reverse' : ''
                    }`}
                >
                    <div className="relative h-56 w-full overflow-hidden md:h-72 md:w-2/5">
                        <Image
                            src={`${basePath}/${committee.image}`}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            quality={60}
                            className="object-cover"
                        />
                        <div
                            className="absolute inset-0 mix-blend-multiply"
                            style={{ backgroundColor: TINTS[index % TINTS.length], opacity: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                            <span
                                className="text-center text-2xl font-bold uppercase leading-tight tracking-[0.12em] text-white md:text-3xl"
                                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
                            >
                                {committee.committeeName}
                            </span>
                        </div>
                    </div>

                    <div className="md:w-3/5">
                        {showTitle && (
                            <h3
                                className="mb-4 text-2xl font-bold leading-tight tracking-tight text-black transition-colors group-hover:text-[#4A90E2] md:text-3xl"
                            >
                                {committee.title}
                            </h3>
                        )}
                        <p className="mb-8 max-w-xl leading-relaxed text-black">
                            {committee.description}
                        </p>
                        <div className="space-y-1 text-sm">
                            {committee.chairs.map((chair) => (
                                <p key={chair.name} className="text-black">
                                    <span className="font-bold">{chair.name}</span>, {chair.role}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </AnimateOnScroll>
    );
}

export default function CommitteesContent() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10 bg-[#17324D]/40"></div>
                <div className="absolute inset-0 z-20 bg-black/30"></div>

                <div className="absolute inset-0">
                    <Image
                        src={`${basePath}/committeesBg.jpg`}
                        alt=""
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                    />
                </div>

                <div className="relative z-30 px-4 text-center">
                    <h1
                        className="animate-fade-in-down text-4xl font-bold uppercase tracking-[0.08em] text-white md:text-5xl lg:text-6xl"
                    >
                        Committees
                    </h1>
                    <p
                        className="animate-fade-in mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 md:text-base"
                    >
                        {CONFERENCE.name}
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6">
                {SECTIONS.map((section) => {
                    const sectionCommittees = COMMITTEES.filter((c) => c.type === section.type);
                    if (sectionCommittees.length === 0) return null;

                    return (
                        <section key={section.type} className="border-b border-gray-200 py-16 last:border-b-0">
                            <AnimateOnScroll>
                                <h2 className="text-center text-2xl font-bold uppercase tracking-[0.1em] text-black md:text-3xl">
                                    {section.heading}
                                </h2>
                            </AnimateOnScroll>

                            <div className="mt-6 divide-y divide-gray-200">
                                {sectionCommittees.map((committee) => (
                                    <CommitteeRow
                                        key={committee.id}
                                        committee={committee}
                                        index={COMMITTEES.indexOf(committee)}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}
