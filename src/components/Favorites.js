import styled from "styled-components";

const StyledFavorites = styled.div` 
    a {
        text-decoration: none;
        color: #000;
        width: 100%;
        padding: 16px 32px;
        display: inline
    }
    
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 8px 0 0
    }
`;

export default function Favorites(props) {
    const favoritesChannels = props.favorites;
    
    return (
        <StyledFavorites>
                {favoritesChannels.map((favoritesChannel) => {
                    return (
                        <a href={favoritesChannel.url} target="blank" key={favoritesChannel.account}>
                            <img src={favoritesChannel.thumb} />
                            <span>
                                {favoritesChannel.account}
                            </span>
                        </a>
                    )
                })}
        </StyledFavorites>
    )
}