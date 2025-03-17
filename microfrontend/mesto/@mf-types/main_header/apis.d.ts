
    export type RemoteKeys = 'main_header/MainHeader';
    type PackageType<T> = T extends 'main_header/MainHeader' ? typeof import('main_header/MainHeader') :any;