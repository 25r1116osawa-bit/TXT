import styled from "styled-components";
// レイアウトの調整は呼び出す側の責務にしたらいいかな

export const Card = (props) =>{
    const { children } =props;

    return(
        <Scard>

        {children}
        </Scard>
    )
}

const Scard = styled.div`
    background-color:#FFF;
    box-shadow:#ddd 0px 0px 4px 2px;
    border-radius:8px;
    padding:16px;


`