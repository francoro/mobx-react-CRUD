import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useStyles} from './styles'
import { observer } from "mobx-react-lite";
import { IUser } from './types/types';
import UserStore from '../../../../../store/users/UserStore';

interface IModalEdit {
    user: IUser
    handleCloseEditModal: () => void
    store: UserStore
}

const ModalEdit = ({ user, handleCloseEditModal, store }: IModalEdit) => {
    const [name, setName] = useState(user.name)
    const [lastName, setLastName] = useState(user.lastName)
    const [address, setAddress] = useState(user.address)
    const [createdAt, setCreatedAt] = useState(user.createdAt)
    const [email, setEmail] = useState(user.email)

    const handleEdit = () => {
        const userToEdit = {
            name,
            lastName,
            address,
            createdAt,
            email,
            id: user.id,
            access: user.access
        };
        store.editUser(userToEdit.id, userToEdit)
        handleCloseEditModal()
    }

    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <TextField
                label="Created at"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit
            </Button>
        </div>
    )
}

export default observer(ModalEdit)