import React from 'react';

import Main from '../../components/Main/Main';

import Navigator from '../../methods/Navigator';

export default class User extends React.Component {
    render() {
        const el = (new Navigator()).get('user');

        return (
            <Main icon={el.icon} title={el.title} info={el.info}>
                User
            </Main>
        );
    }
};