
    export type RemoteKeys = 'auth/Auth';
    type PackageType<T> = T extends 'auth/Auth' ? typeof import('auth/Auth') :any;