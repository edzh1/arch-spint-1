
    export type RemoteKeys = 'feed/Feed';
    type PackageType<T> = T extends 'feed/Feed' ? typeof import('feed/Feed') :any;