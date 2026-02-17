import styled from "styled-components";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { Input } from "../../atoms/input/input";


export const SearchInput = () =>{

    return(
        <SContainer>
            
            <Input placeholder="検索条件をテスト"></Input>
        <Sbuttonwrapper>
            <PrimaryButton>検索</PrimaryButton>
        </Sbuttonwrapper>
        </SContainer>
    )
}

const SContainer = styled.div`
display:flex;
align-items:center;
`

const Sbuttonwrapper = styled.div`
    padding-left:10px
`