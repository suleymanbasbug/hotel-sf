import LviHomeHotels from "../components/LviHomeHotels";
import LviShowcaseHeader from "../components/LviShowcaseHeader";
import LviBanner from "../components/LviBanner";
import LviHotelCard from "../components/LviHotelCard";
import LviFilterbar from "../components/LviFilterbar";
import LviHotelDetail from "../components/LviHotelDetail";
import LviGenericSlider from "../components/LviGenericSlider";
import LviHotelInfoSection from "../components/LviHotelInfoSection";
import LviAccount from "../components/LviAccount";
import LviProfile from "../components/LviProfile";

export enum LviTypes {
    LVI_HOME_HOTELS,
    LVI_SHOWCASE_HEADER,
    LVI_BANNER,
    LVI_HOTEL_CARD,
    LVI_FILTERBAR,
    LVI_HOTEL_DETAIL,
    LVI_GENERIC_SLIDER,
    LVI_HOTEL_INFO_SECTION,
    LVI_ACCOUNT,
    LVI_PROFILE
}

export const LviClasses = {
    [LviTypes.LVI_HOME_HOTELS]: LviHomeHotels,
    [LviTypes.LVI_SHOWCASE_HEADER]: LviShowcaseHeader,
    [LviTypes.LVI_BANNER]: LviBanner,
    [LviTypes.LVI_HOTEL_CARD]: LviHotelCard,
    [LviTypes.LVI_FILTERBAR]: LviFilterbar,
    [LviTypes.LVI_HOTEL_DETAIL]: LviHotelDetail,
    [LviTypes.LVI_GENERIC_SLIDER]: LviGenericSlider,
    [LviTypes.LVI_HOTEL_INFO_SECTION]: LviHotelInfoSection,
    [LviTypes.LVI_ACCOUNT]: LviAccount,
    [LviTypes.LVI_PROFILE]: LviProfile
}
type SwipeAction = (...args: any[]) => Promise<void>;

type SwipeActions = {
    onEdit?: SwipeAction;
    onUpdate?: SwipeAction;
    onDelete?: SwipeAction;
    onOther?: SwipeAction;
    onShare?: SwipeAction;
    onApprove?: SwipeAction;
    onReject?: SwipeAction;
    onCancel?: SwipeAction;
    onCall?: SwipeAction;
    onMapOut?: SwipeAction;
    onCopyText?: SwipeAction;
    onAddReminder?: SwipeAction;
    onShowFeedbacks?: SwipeAction;
};

type GenericProperties = {
    borders?: string[];
    swipeable?: boolean;
    className?: string;
    maxWidthMargin?: number;
    height?: number;
};

export interface IProcessed<T> {
    type: string;
    height?: number;
    properties: Partial<T> & GenericProperties & SwipeActions;
    [key: string]: any;
}

export namespace ProcessorTypes {
    export interface ILviHomeHotels extends IProcessed<LviHomeHotels> { }
    export interface ILviShowcaseHeader extends IProcessed<LviShowcaseHeader> { }
    export interface ILviBanner extends IProcessed<ILviBanner> { }
    export interface ILviHotelCard extends IProcessed<LviHotelCard> { }
    export interface ILviFilterbar extends IProcessed<LviFilterbar> { }
    export interface ILviHotelDetail extends IProcessed<LviHotelDetail> { }
    export interface ILviGenericSlider extends IProcessed<LviGenericSlider> { }
    export interface ILviHotelInfoSection extends IProcessed<LviHotelInfoSection> { }
    export interface ILviAccount extends IProcessed<LviAccount> { }
    export interface ILviProfile extends IProcessed<LviProfile> { }



}

export function getLviHomeHotels(item: Partial<LviHomeHotels>): ProcessorTypes.ILviHomeHotels {
    return {
        type: 'LVI_HOME_HOTELS',
        properties: {
            ...item,
            borders: []
        },
        height: 200
    };
}

export function getLviShowcaseHeader(item: Partial<LviShowcaseHeader>): ProcessorTypes.ILviShowcaseHeader {
    return {
        type: 'LVI_SHOWCASE_HEADER',
        properties: { ...item, borders: [] },
        height: 50
    };
}

export function getLviBanner(item: Partial<LviBanner>): ProcessorTypes.ILviBanner {
    return {
        type: 'LVI_BANNER',
        properties: { ...item, borders: [] },
        height: 150
    };
}

export function getLviHotelCard(item: Partial<LviHotelCard>): ProcessorTypes.ILviHotelCard {
    return {
        type: 'LVI_HOTEL_CARD',
        properties: {
            ...item,
            borders: []
        },
        height: 255
    };
}

export function getLviFilterbar(item: Partial<LviFilterbar>): ProcessorTypes.ILviFilterbar {
    return {
        type: 'LVI_FILTERBAR',
        properties: {
            ...item,
            borders: []
        },
        height: 80
    };
}

export function getLviHotelDetail(item: Partial<LviHotelDetail>): ProcessorTypes.ILviHotelDetail {
    return {
        type: 'LVI_HOTEL_DETAIL',
        properties: {
            ...item,
            borders: []
        },
        height: 650
    };
}

export function getLviGenericSlider(
    item: Partial<LviGenericSlider>,
    opts?: { className?: string; height?: number }
): ProcessorTypes.ILviGenericSlider {
    return {
        type: 'LVI_GENERIC_SLIDER',
        properties: {
            ...item,
            borders: []
        },
        height: 300
    };
}

export function getLviHotelInfoSection(item: Partial<LviHotelInfoSection>): ProcessorTypes.ILviHotelInfoSection {
    return {
        type: 'LVI_HOTEL_INFO_SECTION',
        properties: {
            ...item,
            borders: []
        },
        height: LviHotelInfoSection.getHeight()
    };
}

export function getLviAccount(item: Partial<LviAccount>): ProcessorTypes.ILviAccount {
    return {
        type: 'LVI_ACCOUNT',
        properties: {
            ...item,
            borders: []
        },
        height: LviAccount.getHeight()
    };
}

export function getLviProfile(item: Partial<LviProfile>): ProcessorTypes.ILviProfile {
    return {
        type: 'LVI_PROFILE',
        properties: {
            ...item,
            borders: []
        },
        height: LviProfile.getHeight()
    };
}