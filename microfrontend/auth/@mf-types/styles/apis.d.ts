
    export type RemoteKeys = 'styles/store' | 'styles/styles';
    type PackageType<T> = T extends 'styles/styles' ? typeof import('styles/styles') :T extends 'styles/store' ? typeof import('styles/store') :any;