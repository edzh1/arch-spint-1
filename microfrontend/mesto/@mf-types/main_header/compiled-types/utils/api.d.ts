declare class Api {
    constructor({ address, token, groupId }: {
        address: any;
        token: any;
        groupId: any;
    });
    addCard({ name, link }: {
        name: any;
        link: any;
    }): Promise<any>;
    setUserInfo({ name, about }: {
        name: any;
        about: any;
    }): Promise<any>;
    setUserAvatar({ avatar }: {
        avatar: any;
    }): Promise<any>;
}
declare const api: Api;
export default api;
