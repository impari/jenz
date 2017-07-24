import { Config, Platform, FeatureCard } from '../../app/dashboard';
import { OPEN_HPI_REVIEWS, OPEN_SAP_REVIEWS, MOOC_HOUSE_REVIEWS, OPEN_WHO_REVIEWS } from 'assets/reviews/reviews';

// Check for production status, see #15
declare var process: any;
const PREFIX = process.env.NODE_ENV === 'production' ? '/jenz' : '';

const OPEN_HPI: Platform = {
    rootUrl: 'https://open.hpi.de',
    logoUrl: PREFIX + '/assets/logos/open_hpi_logo.png',
    mapMarkerUrl: PREFIX + '/assets/marker/hpi.png',
    reviews: OPEN_HPI_REVIEWS,
    isFilterSelected: true
};

const OPEN_SAP: Platform = {
    rootUrl: 'https://open.sap.com',
    logoUrl: PREFIX + '/assets/logos/openSAP_Logo_neg.png',
    mapMarkerUrl: PREFIX + '/assets/marker/sap.png',
    reviews: OPEN_SAP_REVIEWS,
    isFilterSelected: false
};

const MOOC_HOUSE: Platform = {
    rootUrl: 'https://mooc.house',
    logoUrl: PREFIX + '/assets/logos/mooc_house_logo_neg_srgb_300.png',
    mapMarkerUrl: PREFIX + '/assets/marker/mooc.png',
    reviews: MOOC_HOUSE_REVIEWS,
    isFilterSelected: false
};

const OPEN_WHO: Platform = {
    rootUrl: 'https://openwho.org',
    logoUrl: PREFIX + '/assets/logos/who_logo_white.png',
    mapMarkerUrl: PREFIX + '/assets/marker/who.png',
    reviews: OPEN_WHO_REVIEWS,
    isFilterSelected: false
};

export const CONFIG: Config = {
    platforms: [OPEN_HPI, OPEN_SAP, MOOC_HOUSE, OPEN_WHO],
    courseSubUrl: '/api/v2/courses',
	directCourseUrl: '/courses/',
    geoSubUrl: '/api/v2/stats/geo.json',
    geoStartParam: 'start_date',
    geoEndParam: 'end_date',
    globalsSubUrl: '/api/v2/stats/global.json'
};

export const FEATURE_CARDS: FeatureCard[] = [
    { imageUrl: PREFIX + '/assets/many-people.svg', title: 'Massive', text: 'Learn with thousands of interested students.' },
    { imageUrl: PREFIX + '/assets/open-door.svg', title: 'Open', text: 'Everyone can participate. Sign-Up is free.' },
    { imageUrl: PREFIX + '/assets/online.svg', title: 'Online', text: 'Learn anywhere, at any time. Set your own plans.' },
    { imageUrl: PREFIX + '/assets/online-course.svg', title: 'Courses', text: 'A huge variety of topics, waiting to be explored.' }
  ]