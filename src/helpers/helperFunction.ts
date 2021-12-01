import { ImageGalery, Package } from "../@types/model.inteface";

export const isDiscount = (displayRate: Package['displayRate'], adjustedDisplayRate: Package['adjustedDisplayRate']) => {
    return displayRate.value > adjustedDisplayRate.value
}

export const calculateDicountPercent = (displayRateValue: number, adjustedDisplayRateValue: number) => {
    return ((displayRateValue - adjustedDisplayRateValue) / displayRateValue) * 100;
}

export const foodCodemapping = (foodCode: number) => {
    switch (foodCode) {
        case 1:
            return 'Room Only';
        case 2:
            return 'Breakfast';
        case 3:
            return 'Lunch';
        case 4:
            return 'Dinner';
        case 5:
            return 'Half board';
        case 6:
            return 'Full board';
        case 7:
            return 'All inclusive';
        default:
            break;
    }
}

export const imageSizeChecker = (imageGalery: ImageGalery) => {
    if (imageGalery.xs)
        return imageGalery.xs;
    else if (imageGalery.s)
        return imageGalery.s;
    else if (imageGalery.m)
        return imageGalery.m;
    else if (imageGalery.l)
        return imageGalery.l;
    else if (imageGalery.xl)
        return imageGalery.xl;
}