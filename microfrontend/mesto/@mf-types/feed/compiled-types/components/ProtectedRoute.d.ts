declare const ProtectedRoute: ({ component: Component, ...props }: {
    [x: string]: any;
    component: any;
}) => import("react/jsx-runtime").JSX.Element;
export default ProtectedRoute;
