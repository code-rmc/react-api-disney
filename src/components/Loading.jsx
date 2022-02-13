import styled from "./Loading.module.css"

export function Loading() {

    return(
        <div className={styled.gooey}>
            <span className={styled.dot}></span>
            <div className={styled.dots}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

//  <div className={styled.container}>
//             <div className={styled.yellow}></div>
//             <div className={styled.red}></div>
//             <div className={styled.blue}></div>
//             <div className={styled.violet}></div>
//         </div>