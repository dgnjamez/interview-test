import React from 'react';
import {
    validateEmpty,
    validateEmail,
    validateMatch,
    minMax
} from '../lib/form-validate'
import '../style/form.scss'

type MyProps = {};

type MyState = {
    validate: boolean;
    result: boolean;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    verfy_pass?: string;
    gender?: string;
};

class Form extends React.Component<MyProps, MyState> {
    state: MyState = {
        validate: false,
        result: false,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        verfy_pass: '',
        gender: ''
    };

    saveUser = (): any => {
        this.setState({validate: true, result: false}, (): any => {
            if (
                !validateEmpty(this.state.firstname).status &&
                !validateEmpty(this.state.lastname).status &&
                !validateEmpty(this.state.gender).status &&
                !validateEmail(this.state.email).status &&
                !validateMatch(this.state.verfy_pass, this.state.password).status &&
                !minMax(this.state.password, [6, 12]).status
            ) {
                this.setState({result: true})
            }
        })
    }

    render() {
        const { validate, firstname, lastname, email, password, verfy_pass, gender, result } = this.state;
        return (
            <div className="form container px-1 pt-4 pb-0">
                <div className="form-card py-2 px-4">
                    <div className="form-header w-full mt-1 mb-5">Form and validation</div>
                    <div className="form-group mb-4">
                        <label htmlFor="firstname" className={`px-2 ${validate && validateEmpty(firstname).status ? 'is-invalid' : ''}`}>First Name</label>
                        <div className="input-group">
                            <input
                                name="firstname"
                                className={`form-control ${validate && validateEmpty(firstname).status ? 'is-invalid' : ''}`}
                                placeholder="Please fill first name"
                                value={firstname}
                                onChange={(e) => this.setState({firstname: e.target.value})}
                            />
                            {validate ? <small>{validateEmpty(firstname).msg}</small> : null}
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="lastname" className={`px-2 ${validate && validateEmpty(lastname).status ? 'is-invalid' : ''}`}>Last Name</label>
                        <div className="input-group">
                            <input
                                name="lastname"
                                className={`form-control ${validate && validateEmpty(lastname).status ? 'is-invalid' : ''}`}
                                placeholder="Please fill last name"
                                value={lastname}
                                onChange={(e) => this.setState({lastname: e.target.value})}
                            />
                            {validate ? <small>{validateEmpty(lastname).msg}</small> : null}
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="email" className={`px-2 ${validate && validateEmail(email).status ? 'is-invalid' : ''}`}>E-mail</label>
                        <div className="input-group">
                            <input
                                name="email"
                                type="email"
                                className={`form-control ${validate && validateEmail(email).status ? 'is-invalid' : ''}`}
                                placeholder="Please fill email"
                                value={email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                            {validate ? <small>{validateEmail(email).msg}</small> : null}
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className={`px-2 ${validate && minMax(password, [6, 12]).status ? 'is-invalid' : ''}`}>Password</label>
                        <div className="input-group">
                            <input
                                name="password"
                                type="password"
                                className={`form-control ${validate && minMax(password, [6, 12]).status ? 'is-invalid' : ''}`}
                                placeholder="Please fill password"
                                value={password}
                                onChange={(e) => this.setState({password: e.target.value})}
                            />
                            {validate ? <small>{minMax(password, [6, 12]).msg}</small> : null}
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="verfy_pass" className={`px-2 ${validate && validateMatch(verfy_pass, password).status ? 'is-invalid' : ''}`}>Verify Password</label>
                        <div className="input-group">
                            <input
                                name="verfy_pass"
                                type="password"
                                className={`form-control ${validate && validateMatch(verfy_pass, password).status ? 'is-invalid' : ''}`}
                                placeholder="Please fill verify password"
                                value={verfy_pass}
                                onChange={(e) => this.setState({verfy_pass: e.target.value})}
                            />
                            {validate ? <small>{validateMatch(verfy_pass, password).msg}</small> : null}
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="gender" className={`px-2 ${validate && validateEmpty(gender).status ? 'is-invalid' : ''}`}>Gender</label>
                        <div className="input-group">
                            <select
                                name="gender"
                                className={`form-control ${validate && validateEmpty(gender).status ? 'is-invalid' : ''}`}
                                value={gender}
                                onChange={(e) => this.setState({gender: e.target.value})}
                            >
                                <option value="">Please select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {validate ? <small>{validateEmpty(gender).msg}</small> : null}
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <label></label>
                        <div className="input-group" style={{padding:'0 2rem'}}>
                            <button className="btn btn-success" style={{width:'fit-content'}} onClick={this.saveUser}>Submit</button>
                        </div>
                    </div>
                    {
                        result ?
                        <div className="form-group mb-2">
                            <label></label>
                            <div className="input-group" style={{paddingLeft:'2rem'}}>
                                <div className="result-content p-2">
                                    <div className="header pb-1">Result</div>
                                    <div className="data-list pt-2">
                                        <div className="item">First Name: {firstname}</div>
                                        <div className="item">Last Name : {lastname}</div>
                                        <div className="item">E-mail : {email}</div>
                                        <div className="item">Gender : {gender}</div>
                                    </div>
                                </div>
                            </div>
                        </div>:null

                    }
                </div>
            </div>
        )
    }
}

export default Form