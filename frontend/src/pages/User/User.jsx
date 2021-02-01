import React from 'react';
import axios from 'axios';

import Main from '../../components/Main/Main';

import Navigator from '../../methods/Navigator';

const baseUrl = "http://localhost:3333/users";

const initialState = {
    user: { name: '', email: '' },
    list: []
};

export default class User extends React.Component {
    state = { ...initialState };

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : `${baseUrl}`;

        axios[method](url, user).then(response => {
            const list = this.getUpdatedList(response.data);

            this.setState({ user: initialState.user, list });
        });
    }

    componentDidMount() {
        axios(baseUrl).then(response => {
            this.setState({ list: response.data });
        });
    }

    load(user) {
        this.setState({ user });
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(response => {
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
        });
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id === user.id);

        if (add) {
            list.unshift(user);
        }
        
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;

        this.setState({ user });
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={e => this.updateField(e)} placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const el = (new Navigator()).get('user');

        return (
            <Main icon={el.icon} title={el.title} info={el.info}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        );
    }
};