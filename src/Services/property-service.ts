import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class propertySrv {
    constructor(private _activatedRouter: ActivatedRoute) {

    }
    private properties = [{
        name: "AVE Malvern",
        image: "https://www.corporatehousing.com/images/sites/3644/thumb-photo-14065829450532-466026658657.jpg",
        address: "311 East Lancaster Avenue",
        city: "Malvern",
        state: 'Malvern Metro',
        county: "PA",
        zip: 19355,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-31'
        }
        ],
        phone: "(955) 872-6321"
    },
    {
        name: "Royal Worthington",
        image: "https://www.corporatehousing.com/images/sites/8939/thumb-photo-14725040397342-724294737912.jpg",
        address: "45 Creekside Lane",
        city: "Malvern",
        state: 'Malvern Metro',
        county: "PA",
        zip: 19355,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 999-2126"
    },
    {
        name: "Phoenix Village",
        image: "https://www.corporatehousing.com/images/sites/8282/thumb-photo-14192712422364-975205421447.jpg",
        address: "131 Bridge Street",
        city: "Phoenixville",
        state: 'Phoenixville',
        county: "PA",
        zip: 19460,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 963-2552"
    },
    {
        name: "Nickson Suites at Riverview Landing",
        image: "https://www.corporatehousing.com/images/sites/4750/thumb-photo-14724785707115-138076064176.jpg",
        address: "1776 Patriots Ln",
        city: "Eagleville",
        state: 'Eagleville',
        county: "PA",
        zip: 19403,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 742-6983"
    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "Newtown Square",
        state: 'Newtown',
        county: "PA",
        zip: 19765,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1914"

    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "downtown",
        state: 'Newtown',
        county: "PA",
        zip: 19765,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1915"

    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "central city",
        state: 'Newtown',
        county: "PA",
        zip: 19765,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1916"

    },
    {
        name: "AVE Malvern",
        image: "https://www.corporatehousing.com/images/sites/3644/thumb-photo-14065829450532-466026658657.jpg",
        address: "311 East Lancaster Avenue",
        city: "Malvern",
        state: 'Malvern Metro',
        county: "PA",
        zip: 19355,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-31'
        }
        ],
        phone: "(955) 872-6327"
    },
    {
        name: "Royal Worthington",
        image: "https://www.corporatehousing.com/images/sites/8939/thumb-photo-14725040397342-724294737912.jpg",
        address: "45 Creekside Lane",
        city: "Malvern",
        state: 'Malvern Metro',
        county: "PA",
        zip: 19355,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 999-2128"
    },
    {
        name: "Phoenix Village",
        image: "https://www.corporatehousing.com/images/sites/8282/thumb-photo-14192712422364-975205421447.jpg",
        address: "131 Bridge Street",
        city: "Phoenixville",
        state: 'Phoenixville',
        county: "PA",
        zip: 19460,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 963-2559"
    },
    {
        name: "Nickson Suites at Riverview Landing",
        image: "https://www.corporatehousing.com/images/sites/4750/thumb-photo-14724785707115-138076064176.jpg",
        address: "1776 Patriots Ln",
        city: "Eagleville",
        state: 'Eagleville',
        county: "PA",
        zip: 19403,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 742-6910"
    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "Newtown Square",
        state: 'Newtown',
        county: "PA",
        zip: 19765,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1911"

    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "downtown",
        state: 'Newtown',
        county: "PA",
        zip: 19762,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1912"

    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "central city",
        state: 'Newtown',
        county: "PA",
        zip: 19762,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1913"

    },
    {
        name: "AVE Malvern",
        image: "https://www.corporatehousing.com/images/sites/3644/thumb-photo-14065829450532-466026658657.jpg",
        address: "311 East Lancaster Avenue",
        city: "Malvern",
        state: 'Malvern Metro',
        county: "PA",
        zip: 19355,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-31'
        }
        ],
        phone: "(955) 872-6314"
    },
    {
        name: "Royal Worthington",
        image: "https://www.corporatehousing.com/images/sites/8939/thumb-photo-14725040397342-724294737912.jpg",
        address: "45 Creekside Lane",
        city: "Malvern",
        state: 'Malvern Metro',
        county: "PA",
        zip: 19355,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 999-2115"
    },
    {
        name: "Phoenix Village",
        image: "https://www.corporatehousing.com/images/sites/8282/thumb-photo-14192712422364-975205421447.jpg",
        address: "131 Bridge Street",
        city: "Phoenixville",
        state: 'Phoenixville',
        county: "PA",
        zip: 19460,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 963-2516"
    },
    {
        name: "Nickson Suites at Riverview Landing",
        image: "https://www.corporatehousing.com/images/sites/4750/thumb-photo-14724785707115-138076064176.jpg",
        address: "1776 Patriots Ln",
        city: "Eagleville",
        state: 'Eagleville',
        county: "PA",
        zip: 19403,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 742-6917"
    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "Newtown Square",
        state: 'Newtown',
        county: "PA",
        zip: 19765,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1918"

    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "downtown",
        state: 'Newtown',
        county: "PA",
        zip: 19765,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1919"

    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "central city",
        state: 'Newtown',
        county: "PA",
        zip: 19765,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1920"

    },
    {
        name: "AVE Malvern",
        image: "https://www.corporatehousing.com/images/sites/3644/thumb-photo-14065829450532-466026658657.jpg",
        address: "311 East Lancaster Avenue",
        city: "Malvern",
        state: 'Malvern Metro',
        county: "PA",
        zip: 19355,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-31'
        }
        ],
        phone: "(955) 872-6321"
    },
    {
        name: "Royal Worthington",
        image: "https://www.corporatehousing.com/images/sites/8939/thumb-photo-14725040397342-724294737912.jpg",
        address: "45 Creekside Lane",
        city: "Malvern",
        state: 'Malvern Metro',
        county: "PA",
        zip: 19355,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 999-2122"
    },
    {
        name: "Phoenix Village",
        image: "https://www.corporatehousing.com/images/sites/8282/thumb-photo-14192712422364-975205421447.jpg",
        address: "131 Bridge Street",
        city: "Phoenixville",
        state: 'Phoenixville',
        county: "PA",
        zip: 19460,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 963-2523"
    },
    {
        name: "Nickson Suites at Riverview Landing",
        image: "https://www.corporatehousing.com/images/sites/4750/thumb-photo-14724785707115-138076064176.jpg",
        address: "1776 Patriots Ln",
        city: "Eagleville",
        state: 'Eagleville',
        county: "PA",
        zip: 19403,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(877) 742-6924"
    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "kentucky",
        state: 'Newtown',
        county: "PA",
        zip: 73301,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1925"

    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "atlanta",
        state: 'Newtown',
        county: "PA",
        zip: 73301,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1926"

    },
    {
        name: "AVE Newtown Square",
        image: "https://www.corporatehousing.com/images/sites/8536/thumb-photo-14284133979714-896938335616.jpg",
        address: "7000 Cornerstone Dr.",
        city: "central home",
        state: 'Newtown',
        county: "PA",
        zip: 19762,
        show: false,
        listingHighlights: [
            "state-of-the-art health complex featuring precor elliptical machines",
            "olympic size swimming pool, sand volley ball",
            "fully equipped locker rooms with saunas and showers",
            "award winning landscaping with country club setting, marbled lobby",
            "executive business center with high speed internet",
            "housekeeping & concierge services available, dry cleaning on premises"
        ],
        facilities: [{
            name: 'Pool',
            id: 'spot-light-26'
        },
        {
            name: 'Spa',
            id: 'spot-light-28'
        }, {
            name: 'TV',
            id: 'spot-light-30'
        }, {
            name: 'View',
            id: 'spot-light-31'
        }
        ],
        phone: "(866) 742-1927"

    }
    ];
    private joinUrl(): string {
        var params = [];
        for (var t in arguments) { params.push(arguments[t]); }
        var urlToReturn = '';
        if (params) {
            params.forEach(function (s) {
                if (s) {
                    urlToReturn = urlToReturn + '/' + s;
                }
            });
        }
        return urlToReturn.replace(/\/\//g, '/').replace(/ /g, '-').toLowerCase();
    };

    public getProperties(): Array<any> {
        return this.properties;
    };

    public getBreadcrumbs(): Array<any> {
        var breadCrumbs = [],
            prevUrl = '';
        if (this._activatedRouter.$$url) {
            var links = this._activatedRouter.$$url.split('/');
            for (var i = 0; i < links.length; i++) {
                prevUrl = prevUrl + (i == 0 ? '' : links[i]) + '/';
                breadCrumbs.push({
                    url: prevUrl,
                    displayText: (i == 0 ? 'Corporate Housing' : links[i])
                })
            }
        }
        return breadCrumbs;
    };

    public getSearchResults(searchText: string): Array<any> {
        let joinUrl = this.joinUrl;
        let results = this.properties.reduce(function (a, b) {
            var arr = [];
            if (a.length > 0) {
                if (a.filter(function (x) { x.displayText.toString().indexOf(b.zip.toString()) === 0 }).length === 0) {
                    arr.push({ displayText: b.zip, url: joinUrl(b.county, b.state, b.city, b.zip) });
                }
                if (a.filter(function (x) { x.displayText.toString().indexOf(b.city.toString()) === 0 }).length === 0) {
                    arr.push({ displayText: b.city, url: joinUrl(b.county, b.state, b.city) });
                }

                if (a.filter(function (x) { x.displayText.toString().indexOf(b.state.toString()) === 0 }).length === 0 && b.city !== b.state) {
                    arr.push({ displayText: b.state, url: joinUrl(b.county, b.state) });
                }
            } else {
                arr.push({ displayText: b.zip, url: joinUrl(b.county, b.state, b.city, b.zip) });
                arr.push({ displayText: b.city, url: joinUrl(b.county, b.state, b.city) });
                arr.push({ displayText: b.state, url: joinUrl(b.county, b.state) });
            }
            return [].concat(a, arr);
        }, []);
        return results.filter(function (x) {
            if (typeof x === 'string' || typeof x === 'number') {
                return searchText ? x.toString().indexOf(searchText.toString()) == 0 : true;
            } else if (typeof x === 'object') {
                return x.displayText.toString().indexOf(searchText.toString()) == 0;
            }
        });
    };
}