
    export type RemoteKeys = 'externalstore/ExternalStore';
    type PackageType<T> = T extends 'externalstore/ExternalStore' ? typeof import('externalstore/ExternalStore') :any;