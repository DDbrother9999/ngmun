interface Chair {
    name: string;
    role: string;
    email: string;
    emailConfirmed: boolean;
}

interface Committee {
    id: string;
    type: 'General Assembly' | 'Crisis';
    title: string;
    committeeName: string;
    description: string;
    image: string;
    chairs: Chair[];
    backgroundGuideUrl: string;
}

const COMMITTEES: Committee[] = [
    {
        id: 'sochum',
        type: 'General Assembly',
        committeeName: 'SOCHUM',
        title: 'Protecting Indigenous Land Defenders and Environmental Refugees',
        description: `The Social, Humanitarian, and Cultural Committee (SOCHUM) will address threats facing Indigenous land defenders and the growing displacement of communities affected by environmental degradation, exploring international protections and accountability.`,
        image: 'committees/sochumBg.webp',
        chairs: [
            { name: 'Chloe Coleman', role: 'Head Chair', email: 'ccoleman27@nobles.edu', emailConfirmed: true },
            { name: 'Eli Wember', role: 'Co-Chair', email: 'ewember29@nobles.edu', emailConfirmed: true }
        ],
        backgroundGuideUrl: ''
    },
    {
        id: 'ecofin',
        type: 'General Assembly',
        committeeName: 'ECOFIN',
        title: 'Deep Sea Mining and the Future of the Ocean',
        description: `The Economic and Financial Committee (ECOFIN) will examine the economic, environmental, and geopolitical implications of deep-sea mining and debate how the international community should regulate the future of ocean resources.`,
        image: 'committees/ecofinBg.jpg',
        chairs: [
            { name: 'Sanaaya Hora', role: 'Head Chair', email: 'shora28@nobles.edu', emailConfirmed: true },
            { name: 'Teddy Dlugosch', role: 'Co-Chair', email: 'tdlugosch29@nobles.edu', emailConfirmed: true }
        ],
        backgroundGuideUrl: ''
    },
    {
        id: 'disec',
        type: 'General Assembly',
        committeeName: 'DISEC',
        title: 'The Sudan Crisis',
        description: `The Disarmament and International Security Committee (DISEC) will address the ongoing conflict in Sudan, examining its implications for regional security, international intervention, civilian protection, and the international community's responsibility to pursue peace.`,
        image: 'committees/disecBg.webp',
        chairs: [
            { name: 'Bella Bessa Mackenzie-Grieve', role: 'Head Chair', email: 'bbessa28@nobles.edu', emailConfirmed: true },
            { name: 'Luana Keefe', role: 'Co-Chair', email: 'lkeefe29@nobles.edu', emailConfirmed: true }
        ],
        backgroundGuideUrl: ''
    },
    {
        id: 'arendelle-succession-crisis',
        type: 'Crisis',
        committeeName: 'Frozen',
        title: 'Arendelle Succession Crisis',
        description: `Anna and Elsa are struggling to govern Arendelle following a major crisis, prompting them to call upon advisors, dignitaries, and influential figures to help determine the kingdom's political future.`,
        image: 'committees/arendelleBg.jpg',
        chairs: [
            { name: 'Lucy Wildeman', role: 'Head Chair', email: 'lwildeman28@nobles.edu', emailConfirmed: true },
            { name: 'Cole Ogden', role: 'Co-Chair', email: 'cogden27@nobles.edu', emailConfirmed: true }
        ],
        backgroundGuideUrl: ''
    },
    {
        id: 'house-of-odysseus',
        type: 'Crisis',
        committeeName: 'House of Odysseus + Suitors',
        title: 'House of Odysseus + Suitors',
        description: `With Odysseus still missing, Penelope's palace has been overtaken by suitors competing for her hand and control of Ithaca, threatening the future of the House of Odysseus.`,
        image: 'committees/odysseusBg.jpg',
        chairs: [
            { name: 'Sanjit Govindarajan', role: 'Head Chair', email: 'sgovindarajan28@nobles.edu', emailConfirmed: true },
            { name: 'Madi Grossman', role: 'Co-Chair', email: 'mgrossman29@nobles.edu', emailConfirmed: true }
        ],
        backgroundGuideUrl: ''
    },
    {
        id: 'ministry-of-magic',
        type: 'Crisis',
        committeeName: 'Harry Potter + The Ministry of Magic',
        title: 'Harry Potter + The Ministry of Magic',
        description: `Amid growing instability in the wizarding world, the Ministry of Magic faces political division, corruption, and threats to its authority, forcing influential witches and wizards to determine the future of magical governance.`,
        image: 'committees/ministryBg.jpg',
        chairs: [
            { name: 'Lauren Peloquin', role: 'Head Chair', email: 'lpeloquin27@nobles.edu', emailConfirmed: true },
            { name: 'James Fair', role: 'Co-Chair', email: 'jfair27@nobles.edu', emailConfirmed: true }
        ],
        backgroundGuideUrl: ''
    }
];

export default COMMITTEES;
export type { Committee, Chair };
