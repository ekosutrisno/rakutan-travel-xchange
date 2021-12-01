export interface DataResponse {
    meta: Meta;
    outlets: Outlet
}

export interface Meta {
    previewMode:  boolean;
    brandName:    string;
    appCode:      string;
    sourceMarket: string;
    currency:     string;
    locale:       string;
    reqId:        string;
    nights:       number;
    roomCount:    number;
    targetCcy:    string;
}

export interface Outlet {
    priceRange:    null | any;
    tyRange:       null | any;
    starRange:     null | any;
    categoryRange: null | any;
    facilities:    null | any;
    meals:         null | any;
    rateType:      string;
    nights:        number;
    roomCount:     number;
    targetCcy:     string;
    availability:  Availability;
}

export interface Availability {
    sessionId:      string;
    status:         string;
    eventId:        string;
    search:         Search;
    results:        Result[];
    pagination?:    Pagination;
}

export interface Result{
    property:       Property;
    packages:       Package[];
    supplierId:     null | any;
    payAtHotel:     boolean;
    supplierRank:   number
}

export interface Package {
    propertyCode:          string;
    description:           string;
    supplierDescription:   string;
    foodCode:              number;
    roomType:              string;
    roomView:              string;
    beds:                  any;
    nonRefundable:         boolean;
    token:                 null | any;
    images:                any[];
    rateType:              string;
    pricingVer:            string;
    initialForex:          number;
    displayRate:           DisplayRate;
    adjustedDisplayRate:   DisplayRate;
    marketRates:           any[];
    unitMarketRates:       any[];
    score:                 number;
    skip:                  boolean;
    finalAdjustmentAmount: null | any;
    finalAdjustments:      any[];
    totalAmount:           null | any;
    rakutenPoint:          number;
    payAtHotel:            boolean;
    payLater:              boolean;
}

export interface Property{
    appCode:        string;
    locale:         string;
    propertyCode:   string;
    name:           string;
    starRating:     number;
    location:       Location;
    trustYou:       TrustYou;
    checkInTime:    null | any;
    checkOutTime:   null | any;
    contacts:       Contact;
    airportCode:    string;
    heroImage:      any;
    gallery:        ImageGalery[];
    categoryId:     number;
    facilities:     number[];
    reviews:        Review

}

export interface Review{
    summary: Summary
}

export interface Search {
    check_in_date:  string;
    check_out_date: string;
    room_count:     number;
    adult_count:    number;
    currency:       string;
    locale:         string;
    source_market:  string;
    children:       null | any;
}

export interface Pagination {
    page:       number;
    showing:    number[];
    totalItems: number;
}

export interface Location {
    address:       string;
    city:          string;
    country:       string;
    countryCode:   string;
    postalCode:    string;
    stateProvince: null | any;
    latLng:        LatLng;
}

export interface LatLng {
    lat: number;
    lng: number;
}

export interface TrustYou {
    score:        number;
    reviewsCount: number;
    key:          string;
}

export interface Contact {
    phone:   string;
    fax:     string;
    email:   string;
    website: null | string;
}

export interface Summary {
    globalPopularity:    number;
    highlightList:       HighlightList[];
    hotelType:           HotelType;
    location:            HotelType;
    locationNearby:      null | any;
    popularWith:         PopularWith;
    popularity:          number;
    reviewsDistribution: ReviewsDistribution[];
    score:               string;
    scoreDescription:    string;
    summarySentenceList: any[];
    text:                string;
    covidSavety:         null | any;
}

export interface HighlightList {
    categoryIdList: string[];
    confidence:     number;
    text:           string;
}

export interface HotelType {
    text: string;
}

export interface PopularWith {
    text:     string;
    tripType: string;
}

export interface ReviewsDistribution {
    reviewsCount: number;
    stars:        number;
}

export interface DisplayRate {
    value:             number;
    currency:          string;
    txFees:            number;
    txFeesInPct:       number;
    taxesAndFeesTotal: number;
    taxesConfident:    number;
}

export interface ErrorResponse {
    status:         number;
    type:           string;
    message:        string;
    code:           string;
    resolveActions: any;
}

export interface FilterData {
    value:  boolean;
    text:   string;
    score:  number;
}

export interface City {
    label:    string;
    cityCode: string;
}

export interface Image {
    caption: string;
    url:     string;
}

export interface ImageGalery {
    s?:      Image;
    m?:      Image;
    xs?:     Image;
    l?:      Image;
    xl?:     Image;
}