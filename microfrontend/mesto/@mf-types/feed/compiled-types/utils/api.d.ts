declare class Api {
    constructor({ address, token, groupId }: {
        address: any;
        token: any;
        groupId: any;
    });
    getAppInfo(): Promise<[any, any]>;
    getCardList(): Promise<any>;
    removeCard(cardID: any): Promise<any>;
    getUserInfo(): Promise<any>;
    changeLikeCardStatus(cardID: any, like: any): Promise<any>;
}
declare const api: Api;
export default api;
