const dataProduct = [
    {
        id: 1,
        image: require('../../../assets/lpcovers/acdc.jpg'),
        price: '$ 16,66',
        alt: 'AC/DC',
        name: 'AC/DC',
        title: 'HIGHWAY TO HELL',
        description: 'Highway to Hell is the sixth studio album by Australian hard rock band AC/DC, released on 27 July 1979.'
    },
    {
        id: 2,
        image: require('../../../assets/lpcovers/alicecooper.jpg'),
        price: '$ 15,44',
        alt: 'ALICE COOPER',
        name: 'ALICE COOPER',
        title: 'WELCOME TO MY NIGHTMARE',
        description: 'Welcome to My Nightmare is the first solo album by American rock musician Alice Cooper, released in March 1975.'
    },
    {
        id: 3,
        image: require('../../../assets/lpcovers/beastieboys.jpg'),
        price: '$ 13,91',
        alt: 'BEASTIE BOYS',
        name: 'BEASTIE BOYS',
        title: 'PAUL`S BOUTIQUE',
        description: 'Paul`s Boutique is the second studio album by American hip hop group Beastie Boys, released on July 25, 1989.'
    },
    {
        id: 4,
        image: require('../../../assets/lpcovers/billieholiday.jpg'),
        price: '$ 16,50',
        alt: 'BILLIE HOLIDAY',
        name: 'BILLIE HOLIDAY',
        title: 'MUSIC FOR TORCHING',
        description: 'Music for Torching is a studio album by jazz singer Billie Holiday. A collection of torch songs, it was released in 1955.'
    },
    {
        id: 5,
        image: require('../../../assets/lpcovers/blondie.jpg'),
        price: '$ 17,55',
        alt: 'BLONDIE',
        name: 'BLONDIE',
        title: 'PARALLEL LINES',
        description: 'Parallel Lines is the third studio album by American rock band Blondie, released on September 23, 1978.'
    },
    {
        id: 6,
        image: require('../../../assets/lpcovers/theclash.jpg'),
        price: '$ 12,00',
        alt: 'CLASH (THE)',
        name: 'CLASH (THE)',
        title: 'LONDON CALLING',
        description: 'London Calling is the third studio album by English rock band the Clash, released on 14 December 1979.'
    },
    {
        id: 7,
        image: require('../../../assets/lpcovers/thecramps.jpg'),
        price: '$ 14,88',
        alt: 'CRAMPS (THE)',
        name: 'CRAMPS (THE)',
        title: 'BAD MUSIC FOR BAD PEOPLE',
        description: 'Bad Music for Bad People is a compilation album by the American rock band the Cramps, released in 1984.'
    },
    {
        id: 8,
        image: require('../../../assets/lpcovers/elvispresley.jpg'),
        price: '$ 19,54',
        alt: 'ELVIS PRESLEY',
        name: 'ELVIS PRESLEY',
        title: 'ELVIS PRESLEY',
        description: 'Elvis Presley is the debut studio album by American rock and roll singer Elvis Presley. It was released by RCA Victor, on March 13, 1956.'
    },
    {
        id: 9,
        image: require('../../../assets/lpcovers/gracejones.jpg'),
        price: '$ 13,85',
        alt: 'GRACE JONES',
        name: 'GRACE JONES',
        title: 'ISLAND LIFE',
        description: 'Island Life is a compilation album by Grace Jones, released in December 1985, summing up the first nine years of her musical career..'
    },
    {
        id: 10,
        image: require('../../../assets/lpcovers/hankiii.jpg'),
        price: '$ 13,13',
        alt: 'HANK III',
        name: 'HANK III',
        title: 'STRAIGHT TO HELL',
        description: 'Straight to Hell is the third studio album by American musician Hank Williams III, released on February 28, 2006.'
    },
    {
        id: 11,
        image: require('../../../assets/lpcovers/howlingwolf.jpg'),
        price: '$ 19,29',
        alt: 'HOWLING WOLF',
        name: 'HOWLING WOLF',
        title: 'MORE REAL FOLK BLUES',
        description: 'More Real Folk Blues is a compilation album by blues musician Howling Wolf, released by Chess Records in 1967.'
    },
    {
        id: 12,
        image: require('../../../assets/lpcovers/iggypop.jpg'),
        price: '$ 13,66',
        alt: 'IGGY POP',
        name: 'IGGY POP',
        title: 'THE IDIOT',
        description: 'The Idiot is the debut studio album by American musician Iggy Pop, released on March 18, 1977.'
    },
    {
        id: 13,
        image: require('../../../assets/lpcovers/jamesbrown.jpg'),
        price: '$ 15,11',
        alt: 'JAMES BROWN',
        name: 'JAMES BROWN',
        title: 'PRISONER OF LOVE',
        description: 'Prisoner of Love is the sixth studio album by American musician James Brown. The album was released in September 1963.'
    },
    {
        id: 14,
        image: require('../../../assets/lpcovers/janisjoplin.jpg'),
        price: '$ 13,11',
        alt: 'JANIS JOPLIN',
        name: 'JANIS JOPLIN',
        title: 'PEARL',
        description: 'Pearl is the second and final solo album (and fourth album overall) by Janis Joplin, released on January 11, 1971.'
    },
    {
        id: 15,
        image: require('../../../assets/lpcovers/joetex.jpg'),
        price: '$ 15,65',
        alt: 'JOE TEX',
        name: 'JOE TEX',
        title: 'THE NEW BOSS',
        description: 'The New Boss is the second studio album by American soul singer Joe Tex, released on 27 July 1965.'
    },
    {
        id: 16,
        image: require('../../../assets/lpcovers/motorhead.jpg'),
        price: '$ 18,42',
        alt: 'MOTÖRHEAD',
        name: 'MOTÖRHEAD',
        title: 'ROCK N ROLL',
        description: 'Rock n Roll is the eighth studio album by English rock band Motörhead, released on 5 September 1987.'
    },
    {
        id: 17,
        image: require('../../../assets/lpcovers/muddywaters.jpg'),
        price: '$ 15,98',
        alt: 'MUDDY WATERS',
        name: 'MUDDY WATERS',
        title: 'HARD AGAIN',
        description: 'Hard Again is a studio album by American blues singer Muddy Waters. Released on January 10, 1977.'
    },
    {
        id: 18,
        image: require('../../../assets/lpcovers/ramones.jpg'),
        price: '$ 12,65',
        alt: 'RAMONES (THE)',
        name: 'RAMONES (THE)',
        title: 'RAMONES',
        description: 'Ramones is the debut studio album by American punk rock band The Ramones, released on April 23, 1976.'
    },
    {
        id: 19,
        image: require('../../../assets/lpcovers/slade.jpg'),
        price: '$ 14,17',
        alt: 'SLADE',
        name: 'SLADE',
        title: 'SLADEST',
        description: 'Sladest is a compilation album by the British rock band Slade. It was released by Polydor on 28 September 1973.'
    },
    {
        id: 20,
        image: require('../../../assets/lpcovers/tomwaits.jpg'),
        price: '$ 17,20',
        alt: 'TOM WAITS',
        name: 'TOM WAITS',
        title: 'SMALL CHANGE',
        description: 'Small Change is the fourth studio album by singer and songwriter Tom Waits, released on September 21, 1976.'
    },
];

export default dataProduct;