export interface MeteosourceFindPlaceResult {
    name: string;
    place_id: string;
    adm_area1: string;
    adm_area2?: string;
    country: string;
    lat: number;
    lon: number;
    timezone: string;
    type: 'settlement' | 'city' | 'village' | 'region' | 'country';
}

export interface MeteosourceFindPlaceResponse {
    data: MeteosourceFindPlaceResult[];
    status: string;
}

export interface MeteosourceCurrentData {
    icon: string;
    icon_num: number;
    summary: string;
    temperature: number;
    wind: {
        speed: number;
        angle: number;
        dir: string;
    };
    precipitation: {
        total: number;
        type: string;
    };
    cloud_cover: number;
}

export interface MeteosourcePointResponse {
    lat: string;
    lon: string;
    elevation: number;
    timezone: string;
    units: string;
    current: MeteosourceCurrentData;
    hourly?: { data: Array<{ date: string; summary: string; temperature: number;[key: string]: any }> };
    daily?: { data: Array<{ day: string; summary: string; temperature: number;[key: string]: any }> };
    status: string;
}