import React from 'react';
import AdminLayout from "../Components/AdminLayout";
import {updateState,saveMenu} from "../redux/action/menusAction";
import {connect} from "react-redux";
import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";
import {AvForm,AvField} from "availity-reactstrap-validation";

const AdminMenus = (props) => {

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    return (

            <AdminLayout history={props.history}>
                <button type="button" className="btn btn-success d-block ms-lg-auto" onClick={() => props.updateState({open: !props.open})}> Add</button>

                <Modal isOpen={props.open} toggle={() => props.updateState({open: false})}>
                   <AvForm onSubmit={props.saveMenu}>
                    <ModalBody>
                        <AvField name="nameUz" type="text" onChange={(e) => props.updateState({url: generateUrl(e.target.value)})} label="Name (uz)"/>
                        <AvField name="nameUz" type="text" label="Name (ru)"/>
                        <AvField name="nameUz" type="text" label="Name (en)"/>

                        <AvField name="url" type="text" label="Url" value={props.url}/>

                        <AvField name="submenu" onChange={() => props.updateState ({submenu: !props.submenu})} type="checkbox" label="Is Submenu: "/>

                        {props.submenu ?
                            <AvField name="parentmenu" type="select" label="Parent Menu">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            </AvField> : ""
                        }

                    </ModalBody>

                    <ModalFooter>
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-secondary" onClick={() => props.updateState({open:false})}>Cancel</button>

                    </ModalFooter>
                   </AvForm>
                </Modal>

            </AdminLayout>

    );
};

const mapStateToProps = (state) => {
    return{
        open:state.menus.open,
        url:state.menus.url,
        submenu: state.menus.submenu
    }
};

export default connect(mapStateToProps ,{updateState,saveMenu}) (AdminMenus);