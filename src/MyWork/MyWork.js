import React from 'react'
import s from './MyWork.module.css';
import styleContainer from '../common/styles/Container.module.css'



function MyWork() {
    return (
        <div className={s.myWorkBlock} >
         <div className={ `${styleContainer.container} ${s.workContainer}`}>
            <h3 className={s.title}> MyWork</h3>

            <div>
                Work1
                Work2
            </div>


         </div>
        </div>
    )
}

export default MyWork;
