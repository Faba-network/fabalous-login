import * as React from 'react';
export default class Login extends React.Component<{}, {}> {
    className: string;
    static props: {
        who?: string;
    };
    state: {
        busy?: boolean;
    };
    componentWillMount(): void;
    componentWillUnmount(): void;
    private onClickHandler(e);
    private changeUserNameHandler(e);
    private changePassWordHandler(e);
    private renderProgress();
    render(): any;
    renderToDom(name: any): void;
}
