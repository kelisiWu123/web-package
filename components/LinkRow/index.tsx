import React from 'react';
import styles from './index.module.less'
import {returnSpace} from "@/components/LinkRow/utils.ts";

type LinkRowPropsType = {
    name:string,
    iconName?:string,
    isFather?:boolean
    url?:string
}

const LinkRow:React.FC<LinkRowPropsType> = ({name,iconName,isFather,url,}) => {
    return (
        <div>
            <div className={`${isFather ? styles.containerFather : styles.container}`} onClick={()=>{
                if (!isFather)
                window.open(url)
            }}>
                <div className={styles.icon}>
                    { !isFather ? returnSpace(5) : undefined}
                    <img src={`/icon/${iconName ?? 'wenjianjia.png'}`} className="logo" alt="antd logo" />
                </div>
                <div className={styles.text} >
                <span >{name}</span>
                </div>

            </div>
        </div>

    );
};

export default LinkRow;