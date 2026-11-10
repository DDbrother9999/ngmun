interface StaffMember {
    name: string;
    role: string;
    image: string;
    biography: string;
    committee?: string;
}

interface CommitteeStaff {
    name: string;
    chairs: StaffMember[];
}

const PLACEHOLDER_PORTRAIT = "";

const leadershipTeam: StaffMember[] = [
    {
        name: "Seynabou Seck",
        role: "Co-Secretary-General",
        image: "/profiles/Seynabou_Seck.jpg",
        biography: ""
    },
    {
        name: "Camilla Mangal",
        role: "Co-Secretary-General",
        image: "/profiles/Camilla_Mangal.jpg",
        biography: ""
    },
    {
        name: "Alexandra Curry",
        role: "Under-Secretary-General",
        image: "/profiles/Alex_Curry.jpg",
        biography: ""
    },
    {
        name: "Agaezi Chukwu",
        role: "Chief of Staff",
        image: "/profiles/Agaezi_Chukwu.jpg",
        biography: ""
    },
    {
        name: "Jonathan Pat",
        role: "Chief of Staff",
        image: "/profiles/Jonathan_Pat.jpg",
        biography: ""
    },
    {
        name: "Talia Klevens",
        role: "Crisis Director",
        image: "/profiles/Talia_Klevens.jpg",
        biography: ""
    },
    {
        name: "Lily Salamipour",
        role: "Crisis Deputy",
        image: PLACEHOLDER_PORTRAIT,
        biography: ""
    },
    {
        name: "Junie Richmond",
        role: "Crisis Deputy",
        image: PLACEHOLDER_PORTRAIT,
        biography: ""
    },
    {
        name: "Derek Yin",
        role: "Director of Conference Services",
        image: "/profiles/Derek_Yin.jpg",
        biography: ""
    }
];

const committees: CommitteeStaff[] = [
    {
        name: "SOCHUM: Protecting Indigenous Land Defenders and Environmental Refugees",
        chairs: [
            {
                name: "Chloe Coleman",
                role: "Head Chair",
                image: "/profiles/Chloe_Coleman.jpg",
                committee: "SOCHUM",
                biography: ""
            },
            {
                name: "Eli Wember",
                role: "Co-Chair",
                image: PLACEHOLDER_PORTRAIT,
                committee: "SOCHUM",
                biography: ""
            }
        ]
    },
    {
        name: "ECOFIN: Deep Sea Mining and the Future of the Ocean",
        chairs: [
            {
                name: "Sanaaya Hora",
                role: "Head Chair",
                image: PLACEHOLDER_PORTRAIT,
                committee: "ECOFIN",
                biography: ""
            },
            {
                name: "Teddy Dlugosch",
                role: "Co-Chair",
                image: PLACEHOLDER_PORTRAIT,
                committee: "ECOFIN",
                biography: ""
            }
        ]
    },
    {
        name: "DISEC: The Sudan Crisis",
        chairs: [
            {
                name: "Bella Bessa Mackenzie-Grieve",
                role: "Head Chair",
                image: "/profiles/Bella_Bessa.jpg",
                committee: "DISEC",
                biography: ""
            },
            {
                name: "Luana Keefe",
                role: "Co-Chair",
                image: PLACEHOLDER_PORTRAIT,
                committee: "DISEC",
                biography: ""
            }
        ]
    },
    {
        name: "Crisis: Arendelle Succession Crisis",
        chairs: [
            {
                name: "Lucy Wildeman",
                role: "Head Chair",
                image: PLACEHOLDER_PORTRAIT,
                committee: "Arendelle",
                biography: ""
            },
            {
                name: "Cole Ogden",
                role: "Co-Chair",
                image: PLACEHOLDER_PORTRAIT,
                committee: "Arendelle",
                biography: ""
            }
        ]
    },
    {
        name: "Crisis: The House of Odysseus and the Suitors",
        chairs: [
            {
                name: "Sanjit Govindarajan",
                role: "Head Chair",
                image: PLACEHOLDER_PORTRAIT,
                committee: "House of Odysseus",
                biography: ""
            },
            {
                name: "Maddie Grossman",
                role: "Co-Chair",
                image: PLACEHOLDER_PORTRAIT,
                committee: "House of Odysseus",
                biography: ""
            }
        ]
    },
    {
        name: "Crisis: The Ministry of Magic",
        chairs: [
            {
                name: "Lauren Peloquin",
                role: "Head Chair",
                image: "/profiles/Lauren_Peloquin.jpg",
                committee: "Ministry of Magic",
                biography: ""
            },
            {
                name: "James Fair",
                role: "Co-Chair",
                image: "/profiles/James_Fair.jpg",
                committee: "Ministry of Magic",
                biography: ""
            }
        ]
    }
];

const facultyAdvisors: StaffMember[] = [
    {
        name: "Sheila McElwee",
        role: "Faculty Advisor",
        image: PLACEHOLDER_PORTRAIT,
        biography: ""
    },
    {
        name: "Amadou Seck",
        role: "Faculty Advisor",
        image: PLACEHOLDER_PORTRAIT,
        biography: ""
    }
];

export {leadershipTeam, committees, facultyAdvisors};
export type { StaffMember, CommitteeStaff };
