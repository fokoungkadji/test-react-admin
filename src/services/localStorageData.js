import { getUserData  } from "./localStorageService";


export const localStorageData = () => {
    const userData = getUserData();
    const userId = userData?.id || '';
    const lastName = userData?.lastName || '';
    const firstName = userData?.firstName || '';
    const phoneNumber = userData?.phoneNumber || '';
    const createAt = userData?.createAt || '';
    const roleUser = userData?.role || '';
    const profilImage = userData?.profilImage || '';
    const companyId = userData?.company?.id || '';
    const companyName = userData?.company?.name || '';
    const companyLogo = userData?.company?.logo || '';
    const companySeat = userData?.companySeat?.name || '';
    const SeatId = userData?.companySeat?.id || '';

    return {
        userId,
        createAt,
        lastName,
        phoneNumber,
        firstName,
        companyId,
         companyName,
        companyLogo,
        companySeat,
        roleUser,
        profilImage,
        SeatId,
    };
};


