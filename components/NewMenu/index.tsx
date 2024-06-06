import React from 'react';
import styles from './index.module.less'
import {Input} from "@mui/material";
const NewMenu = () => {
    return (
        <div className={styles.container}>
            <Input name={'url'} ></Input>
        </div>
    );
};

export default NewMenu;