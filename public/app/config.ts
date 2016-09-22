import { Site } from './shared';

export interface IFuture150Config {
    baseApiUrl: string;
    siteTwitterHandle: string;
    siteTitle: string;
    siteDescription: string;
    defaultProfileImageUrl: string;
    defaultArticleImageUrl: string;
    defaultProductImageUrl: string;
    defaultCollegeImageUrl: string;
    defaultEventImageUrl: string;
    defaultVideoImageUrl: string;
    defaultProfileBackgroundImageUrl: string;
    currentRankingsYear: number;
    sites: Site[];
}

export let future150Config: IFuture150Config = {
    baseApiUrl: '',
    siteTwitterHandle: '@future150',
    siteTitle: 'Basketball Recruiting News with Player Rankings & Profiles',
    siteDescription: 'The best source for college basketball recruiting, class rankings and elite player profiles. Discover which high school players are the hottest recruits.',
    defaultProfileImageUrl: '//www.clker.com/cliparts/C/N/O/F/T/X/blank-profile-hi.png',
    defaultArticleImageUrl: '//placehold.it/643x341?text=Article Placeholder',
    defaultProductImageUrl: '//placehold.it/60x60?text=No Image',
    defaultCollegeImageUrl: '//placehold.it/60x60?text=No Image',
    defaultEventImageUrl: '//placehold.it/643x341?text=Event Placeholder',
    defaultVideoImageUrl: '//placehold.it/643x341?text=Video Placeholder',
    defaultProfileBackgroundImageUrl: 'https://photos.smugmug.com/Media-Photos/2016-Media-Photos/UAA-Finals/i-7V46mr8/0/M/Trevon%20Duval%201439-M.jpg',
    currentRankingsYear: 2017,
    sites: [
        {
            path: '/hs',
            name: 'Mens',
            className: 'hs',
            logoImageUrl: '/img/future150.png'
        },
        {
            path: '/womens',
            name: 'Womens',
            className: 'womens',
            logoImageUrl: '/img/future150-women.png'
        },
        {
            path: '/jr',
            name: 'Junior',
            className: 'jr',
            logoImageUrl: '/img/future150-jr.png'
        }
    ]
}
