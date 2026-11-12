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

const leadershipTeam: StaffMember[] = [
    {
        name: "Seynabou Seck",
        role: "Secretary General",
        image: "/profiles/Seynabou_Seck.jpg",
        biography: "Seynabou is a senior at the Noble and Greenough School and has been doing Model UN since 7th grade. She loves traveling, international relations, and learning about new and different cultures. Seynabou is so excited for NGMUN IX and looks forward to meeting delegates and hearing about their ideas! Outside of Model UN, Seynabou is involved in Student Government at Nobles and serves as a Middle School Mentor. Seynabou enjoys her time in the city, watching Gilmore Girls, and hanging out with her friends!"
    },
    {
        name: "Camilla Mangal",
        role: "Secretary General",
        image: "/profiles/Camilla_Mangal.jpg",
        biography: "Camilla is a senior at the Noble and Greenough School and has been passionate about Model UN since middle school, both as a delegate and a chair. She loves MUN as a dynamic space to learn, teach, and debate the world around us, and loves watching delegates collaborate to solve complex global issues. Outside of committee, Camilla enjoys baking, playing the saxophone, watching movies with friends and family, and taking her labradors, Louie and Cleo, on long hikes."
    },
    {
        name: "Alex Curry",
        role: "Undersecretary General",
        image: "/profiles/Alex_Curry.jpg",
        biography: "Alex is a junior at the Noble and Greenough School, and she started Model UN in her freshman year. Alex loves the excitement of debate, which drove her involvement in NGMUN. She is looking forward to NGMUN and cannot wait to welcome delegates to a great day of debate and diplomacy. Alex’s favorite class is history, and she loves hanging out with friends, walking her dogs, and reading. Outside of MUN, Alex is a part of Student Government at Nobles and is on the tennis and ski team."
    },
    {
        name: "Agaezi Chukwu",
        role: "Chief of Staff",
        image: "/profiles/Agaezi_Chukwu.jpg",
        biography: "Agaezi is a senior at the Noble and Greenough School and has been involved in Model UN since 7th grade. She loves thinking of innovative solutions to world issues along with hearing all the creative ideas of other delegates. She is looking forward to helping the conference run smoothly and supporting the staff. Outside of Model UN, Agaezi is a Senior Prefect and Freshman Mentor. You can find her in science class, taking pictures with her digital camera, listening to music, playing Volleyball, or throwing Javelin and Shot Put on the Track and Field team."
    },
    {
        name: "Jonathan Pat",
        role: "Chief of Staff",
        image: "/profiles/Jonathan_Pat.jpg",
        biography: "Jonathan is currently a junior at the Noble and Greenough School and has participated in Model UN since before he arrived at Nobles as a freshman at Needham High School. His experience in Model UN, through meetings and committees, has allowed him to build strong connections and improve his public speaking, debating, problem-solving, and collaboration skills. He is incredibly excited to be involved in his third year of NGMUN, seeing debate spark and newly thought-out solutions emerge! Outside of Model UN, you can find Jonathan at track practice, behind his cello at orchestra rehearsal, or even on the pickleball courts in the fall."
    },
    {
        name: "Talia Klevens",
        role: "Crisis Director",
        image: "/profiles/Talia_Klevens.jpg",
        biography: "Talia is a senior at the Noble and Greenough School and is a current co-president of the Model UN and Debate club. She focuses specifically on crisis and specialized committees, but also loves debating world conflicts and controversies. Outside of MUN, Talia is part of the Nobles crew team and loves spending time with friends and outdoors."
    },
    {
        name: "Lily Salamipour",
        role: "Crisis Deputy",
        image: "/profiles/Lily_Salamipour.jpg",
        biography: "Lily is a current sophomore who was introduced to Model UN in middle school and has been actively involved in Nobles Model UN since freshman year. She loves engaging in debate, collaborating with peers to develop solutions to meaningful problems, and sharpening her public speaking skills. Outside of her participation in Model UN, she enjoys playing soccer and squash, traveling, playing the piano, and spending time with her friends and family. Lily is very excited for NGMUN IX and cannot wait to see how delegates navigate and respond creatively to crises!"
    },
    {
        name: "Junie Richmond",
        role: "Crisis Deputy",
        image: "/profiles/Junie_Richmond.jpg",
        biography: "Junie is a current sophomore at Nobles and has loved Model UN since she started in sixth grade. She loves participating in debates, improving her public speaking skills, and generating innovative ideas to solve problems! When not participating in heated debates, Junie loves to row, play the piano, play field hockey, and explore new places in and out of Boston! She is very excited to see everything the delegates come up with and to help the crisis team!"
    },
    {
        name: "Derek Yin",
        role: "Director of Conference Services",
        image: "/profiles/Derek_Yin.jpg",
        biography: "Derek is a senior at Noble and Greenough School and has been involved in Model UN since the start of his freshman year. He is so excited for NGMUN IX and can’t wait to hear the lively debates and the multitude of different ideas. Outside of Model UN, Derek runs cross country and enjoys chemistry, biology, and math problems!"
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
                biography: "Chloe is a senior at Noble and Greenough and has been a delegate for Nobles’ Model United Nations team since freshman year. She has been chairing middle school and high school committees at both NGMUN and the United Nations Association of Greater Boston for four years. Outside of MUN, Chloe is captain of Nobles’ debate team, captain of Nobles Varsity Wrestling, and a leader for the Black Student Union and Sister2Sister affinity spaces. In her free time, she enjoys making art and reading."
            },
            {
                name: "Eli Wember",
                role: "Co-Chair",
                image: "/profiles/Eli_Wember.jpg",
                committee: "SOCHUM",
                biography: "Eli is a sophomore at Noble and Greenough School and has been involved in MUN since freshman year. This is his second year being involved in NGMUN, and he is excited to be a co-chair after being on crisis staff last year. Outside of MUN, Eli plays soccer and is part of the Nobles crew team, and plays guitar and drums in a band outside of school."
            }
        ]
    },
    {
        name: "ECOFIN: Deep Sea Mining and the Future of the Ocean",
        chairs: [
            {
                name: "Sanaaya Hora",
                role: "Head Chair",
                image: "/profiles/Sanaaya_Hora.jpg",
                committee: "ECOFIN",
                biography: "Sanaaya is a junior at Noble and Greenough and has loved Model UN since she joined in ninth grade. She loves problem-solving, connecting ideas in creative ways, and collaborating with others to learn and create better solutions. She can’t wait to see how delegates tackle the effects of deep-sea mining! When she’s not in western business attire, Sanaaya loves to read, go on long bike rides, and watch Marvel movies."
            },
            {
                name: "Teddy Dlugosch",
                role: "Co-Chair",
                image: "/profiles/Teddy_Dlugosch.jpg",
                committee: "ECOFIN",
                biography: "Teddy is a sophomore at Noble and Greenough School and has been doing Model UN since seventh grade. This is his second year being involved in NGMUN, but he is looking forward to his first time in the co-chair position. He is excited to participate in a fun and engaging committee with lots of constructive discourse and creativity. Other than Model UN, Teddy enjoys playing the piano, spending time with friends and family, and playing squash and golf!"
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
                biography: "Bella is a junior at Nobles, and this is her fifth year in Model UN and her third year on the staff of NGMUN. In addition to Model UN, she is also involved in Nobles’ International Affairs and Mock Trial clubs. She loves listening to music, hanging out with friends and family, and reading in her free time. Bella is so excited for NGMUN IX and is thrilled to be a head chair, hoping to see productive debate and diplomacy among delegates!"
            },
            {
                name: "Luana Keefe",
                role: "Co-Chair",
                image: "/profiles/Luana_Keefe.jpg",
                committee: "DISEC",
                biography: "Luana is a sophomore at Noble and Greenough School and has been doing Model UN since seventh grade. This is her second year doing NGMUN, and she is looking forward to listening to the delegates debate and collaborate on new ideas. Outside of Model UN, Luana enjoys playing soccer and rowing crew, as well as reading and spending time with friends."
            }
        ]
    },
    {
        name: "Frozen: Arendelle Succession Crisis",
        chairs: [
            {
                name: "Lucy Wildeman",
                role: "Head Chair",
                image: "/profiles/Lucy_Wildeman.jpg",
                committee: "Frozen",
                biography: "Lucy is a junior at Nobles and has participated in MUN since freshman year. She loves meeting new people in MUN, hearing a variety of creative solutions, debating other delegates, and watching chaotic crises unfold. With two years of backroom staff experience, she can’t wait for NGMUN IX! Outside of MUN, Lucy loves sewing, playing volleyball and tennis, spending time with her friends, and baking cookies."
            },
            {
                name: "Cole Ogden",
                role: "Co-Chair",
                image: "/profiles/Cole_Ogden.jpg",
                committee: "Frozen",
                biography: "Cole is a senior at Noble and Greenough School and has been doing Model UN since freshman year. After four years of MUN experience, he is excited to participate for the first time as a co-chair. Outside of MUN, he runs cross country and enjoys competing in squash. He is excited to create a fun and creative committee and looks forward to seeing delegates develop innovative solutions and collaborate with one another!"
            }
        ]
    },
    {
        name: "House of Odysseus and Suitors",
        chairs: [
            {
                name: "Sanjit Govindarajan",
                role: "Head Chair",
                image: "/profiles/Sanjit_Govindarajan.jpg",
                committee: "Odysseus",
                biography: "Sanjit is a junior at the Noble and Greenough School and has actively participated in Model UN since 7th grade. His involvement in the program has allowed him to significantly improve his public speaking and negotiation skills. Sanjit is super excited to hear how each delegate plans to handle the chaos in Penelope’s palace and looks forward to the passing of a constructive solution. Outside of Model UN, you can catch Sanjit teaching karate, playing tennis and squash, or watching Suits!"
            },
            {
                name: "Madi Grossman",
                role: "Co-Chair",
                image: "/profiles/Madi_Grossman.jpg",
                committee: "Odysseus",
                biography: "Madi is a current sophomore and has participated in Model UN at Nobles since seventh grade. Throughout her time in the program, she has developed a love of active debate and public speaking. Outside of Model UN, she loves playing field hockey, rowing on the Charles, traveling, baking, and reading. She looks forward to hearing the creative strategies and negotiations from each delegate in the House of Odysseus!"
            }
        ]
    },
    {
        name: "Harry Potter and The Ministry of Magic",
        chairs: [
            {
                name: "Lauren Peloquin",
                role: "Head Chair",
                image: "/profiles/Lauren_Peloquin.jpg",
                committee: "Ministry of Magic",
                biography: "Lauren is a senior at the Noble and Greenough School and one of the co-presidents of the Model UN Club this year, having been involved in MUN since 7th grade. Outside of MUN, she is an avid trail runner who enjoys competing in cross-country. A passionate political enthusiast and avid reader, Lauren brings energy and excitement to current events and international policy. She can’t wait to guide delegates through a memorable crisis experience."
            },
            {
                name: "James Fair",
                role: "Co-Chair",
                image: "/profiles/James_Fair.jpg",
                committee: "Ministry of Magic",
                biography: "James Fair is a senior at Noble and Greenough School and began attending Model UN conferences in 7th grade. This is his 3rd year being involved in NGMUN committees. He is excited for a fun and lively committee and lots of creativity from the delegates. Outside of Model UN, he participates in debate, cross country, and track and field."
            }
        ]
    }
];

const facultyAdvisors: StaffMember[] = [
    {
        name: "Sheila McElwee",
        role: "Faculty Advisor",
        image: "/profiles/Sheila_McElwee.jpg",
        biography: ""
    },
    {
        name: "Amadou Seck",
        role: "Faculty Advisor",
        image: "/profiles/Amadou_Seck.jpg",
        biography: ""
    }
];

export {leadershipTeam, committees, facultyAdvisors};
export type { StaffMember, CommitteeStaff };
