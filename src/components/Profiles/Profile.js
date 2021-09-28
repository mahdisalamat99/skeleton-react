import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '../LoadingSkeleton'

const Container = styled.div`
    display:flex;
    flex-direction:row;
    margin:40px 0px;
`;
const ImageContainer = styled.div`
    width:50px;
    height:50px;
    margin-right:20px;
`;
const Name = styled.div`
    width:300px;
    height:20px;
    color:#8A99C0;
`;
const UserName = styled.div`
    width:300px;
    height:20px;
    margin-top:5px;
    color:#a5a5a5;
`;
const Email = styled.div`
    width:300px;
    height:20px;
    margin-top:5px;
    color:#a5a5a5;
`;
const Image = styled.img`
    width:50px;
    height:50px;
    border-radius:25px;
    box-shadow:0px 2px 6px -1px rgba(0,0,0,0.31);
`;

const Profile = ({profile,loading}) => {
    if(loading ===true){
        return(
            <Container>
                <ImageContainer>
                    <Skeleton borderRadius={25} />
                </ImageContainer>
                <div>
                    <Name><Skeleton borderRadius={20} /></Name>
                    <UserName><Skeleton borderRadius={20} /></UserName>
                    <Email><Skeleton borderRadius={20} /></Email>
                </div>
            </Container>
        )
    }
    return (
        <>
        <Container>
            <ImageContainer>
                <Image src={profile.picture} />
            </ImageContainer>
            <div>
                <Name>{profile.name}</Name>
                <UserName>{profile.username}</UserName>
                <Email>{profile.email}</Email>
            </div>
        </Container>
        </>
    )
}

export default Profile
