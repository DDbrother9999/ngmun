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
    shortDescription: string;
    image: string;
    fullDescription: string;
    chairs: Chair[];
    backgroundGuideUrl: string;
}

const PLACEHOLDER_IMAGE = '/committeesBg.jpg';

const COMMITTEES: Committee[] = [
    {
        id: 'sochum',
        type: 'General Assembly',
        committeeName: 'SOCHUM',
        title: 'Protecting Indigenous Land Defenders and Environmental Refugees',
        shortDescription: 'Protections for Indigenous land defenders and communities displaced by environmental harm.',
        image: PLACEHOLDER_IMAGE,
        fullDescription: `SOCHUM will address threats facing Indigenous land defenders and the growing displacement of communities affected by environmental degradation, exploring international protections and accountability.`,
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
        shortDescription: 'The economic, environmental, and geopolitical stakes of mining the deep sea.',
        image: PLACEHOLDER_IMAGE,
        fullDescription: `ECOFIN will examine the economic, environmental, and geopolitical implications of deep-sea mining and debate how the international community should regulate the future of ocean resources.`,
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
        shortDescription: 'Regional security, civilian protection, and the path to peace in Sudan.',
        image: PLACEHOLDER_IMAGE,
        fullDescription: `DISEC will address the ongoing conflict in Sudan, examining its implications for regional security, international intervention, civilian protection, and the international community's responsibility to pursue peace.`,
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
        shortDescription: 'Anna and Elsa summon Arendelle’s advisors to decide the kingdom’s political future.',
        image: PLACEHOLDER_IMAGE,
        fullDescription: `Anna and Elsa are struggling to govern Arendelle following a major crisis, prompting them to call upon advisors, dignitaries, and influential figures to help determine the kingdom's political future.`,
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
        title: 'The House of Odysseus and the Suitors',
        shortDescription: 'Suitors besiege Penelope’s palace as control of Ithaca hangs in the balance.',
        image: PLACEHOLDER_IMAGE,
        fullDescription: `With Odysseus still missing, Penelope's palace has been overtaken by suitors competing for her hand and control of Ithaca, threatening the future of the House of Odysseus.`,
        chairs: [
            { name: 'Sanjit Govindarajan', role: 'Head Chair', email: 'sgovindarajan28@nobles.edu', emailConfirmed: true },
            { name: 'Maddie Grossman', role: 'Co-Chair', email: 'mgrossman29@nobles.edu', emailConfirmed: true }
        ],
        backgroundGuideUrl: ''
    },
    {
        id: 'ministry-of-magic',
        type: 'Crisis',
        committeeName: 'Harry Potter + The Ministry of Magic',
        title: 'The Ministry of Magic',
        shortDescription: 'Division and corruption force a reckoning over the future of magical governance.',
        image: PLACEHOLDER_IMAGE,
        fullDescription: `Amid growing instability in the wizarding world, the Ministry of Magic faces political division, corruption, and threats to its authority, forcing influential witches and wizards to determine the future of magical governance.`,
        chairs: [
            { name: 'Lauren Peloquin', role: 'Head Chair', email: 'lpeloquin27@nobles.edu', emailConfirmed: true },
            { name: 'James Fair', role: 'Co-Chair', email: 'jfair27@nobles.edu', emailConfirmed: true }
        ],
        backgroundGuideUrl: ''
    }
];

export default COMMITTEES;
export type { Committee, Chair };
