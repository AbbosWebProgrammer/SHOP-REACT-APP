import React, { useState } from "react";
import axios from "axios";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { connect } from "react-redux";
import { login } from "../redux/action/loginAction";
import {Link, useHistory} from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Login = (props) => {
    const history = useHistory();

    const [form, setForm] = useState({
        phone: "",
        password: "",
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await axios.post(
                "https://doniyor0277.pythonanywhere.com/login/",
                form,
                { headers: { "Content-Type": "application/json" } }
            );

            if (user.statusText === "OK") {
                localStorage.setItem("token", user.data.token);
                axios.defaults.headers.common["Authorization"] = user.data.token;
                history.push("/");
            }
        } catch (err) {
            console.log(err.message);
        }

        console.log(form);
    };

    return (

        <div>

            <Nav/>

        <div className="container log mt-5">
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-lg-4 col-sm-8 col-md-6 mt-5">
                    <div className="card form-card">
                        <div className="card-body">
                            <AvForm
                                onSubmit={(event, errors, values) => {
                                    props.login(event, errors, values, props.history);
                                }}
                            >
                                <AvField
                                    onChange={(e) => onChange(e)}
                                    value={form.phone}
                                    type="text"
                                    name="phone"
                                    label="Your phone number"
                                    required
                                    errorMessage="To'ldirish majburiy"
                                />

                                <AvField
                                    onChange={(e) => onChange(e)}
                                    value={form.password}
                                    type="password"
                                    name="password"
                                    label="Your password"
                                    required
                                    errorMessage="To'ldirish majburiy"
                                />

                                <button
                                    onClick={(e) => onSubmit(e)}
                                    type="submit"
                                    className="btn but btn-block w-100 mt-3"
                                >
                                    Sign in
                                </button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <Link to={"/enter"}>
                    <button className="but btn text-white col-4 offset-4 mb-5 ">Ползователь</button>
                </Link>
            </div>
        </div>
            <Footer/>
        </div>
    );
};

export default connect(null, { login })(Login);