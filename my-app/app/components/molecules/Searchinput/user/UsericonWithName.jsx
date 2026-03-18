import styled from "styled-components"
import { Card } from "../../../atoms/card/Card"

export const UserIconWithName = (props) =>{
    const {image,name} = props;

    return(
        <Scontainer>
            <SImg  src={image} height={160} width={160} alt="プロフィール" />
            <SName>名前：{name}</SName>        

        </Scontainer>
    )
}


const Scontainer = styled.div`
    text-align:center;

`

const SImg = styled.img`
    border-radius:50%;

`

const SName = styled.p`
    font-size:18px;
    font-weight:bold;
    margin:0;
    color:#40514e

`