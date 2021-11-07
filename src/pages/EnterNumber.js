
import React from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation"
import {connect} from "react-redux";
import {enternumber} from "../redux/action/loginAction";


const EnterNumber = (props) => {
    console.log(props)
    return (

        <div className="container">

            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={(event,errors,values) =>{ props.enternumber (event,errors,values,props.history)}}>
                                <AvField type="text" name="phone" label="Your phone number" required errorMessage="To'ldirish majburiy" />

                                <button type="submit" className="btn btn-success btn-block w-100 mt-3" >Sign in</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null,{enternumber})(EnterNumber) ;