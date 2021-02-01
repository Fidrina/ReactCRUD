import React from 'react';

import Main from '../../components/Main/Main';

import Navigator from '../../methods/Navigator';

export default class Home extends React.Component {
    render() {
        const el = (new Navigator()).get('home');

        return (
            <Main icon={el.icon} title={el.title} info={el.info}>
                <main className="content container-fluid">
                    <div className="p-3 mt-3 shadow-lg">
                        <div className="display-4">Welcome</div>
                        <hr />
                        <p className="mb-0">CRUD Using <strong>React</strong></p>
                    </div>
                </main>
            </Main>
        );
    }
}