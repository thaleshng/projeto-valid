import styled from "styled-components"

export const DivVideo = () => {
    return (
        <VideoDiv>
            <video autoPlay loop muted>
                <source src="https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65cfcf0f181f071d9f2d2858_1149601_Animation_3d_Atmosphere_1920x1080-transcode.mp4" type="video/mp4" />
            </video>
        </VideoDiv>
            
    )
}

const VideoDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;

    & > video {
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }
`