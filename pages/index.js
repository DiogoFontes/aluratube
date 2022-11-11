import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Favorites from "../src/components/Favorites";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {

    return (
        <>
            
            <CSSReset />
            
            <div>
                <Menu />
                <Header account={config.account} />
                <Timeline playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
            
        </>
    )
}

export default HomePage


function Timeline(props) {

    const playlistsNames = Object.keys(props.playlists);
    
    return (
        <StyledTimeline>
                {playlistsNames.map((playlistsName) => {
                    const videos = props.playlists[playlistsName];
                    return (
                        <section key={playlistsName}>
                            <h2>{playlistsName}</h2>
                            <div>
                                {
                                    videos.map((video) => {
                                        return (
                                            <a href={video.url} key={video.title} target="blank">
                                                <img src={video.thumb} />
                                                <span>
                                                    {video.title}
                                                </span>
                                            </a>
                                        )
                                    }) 
                                }
                            </div>
                        </section>
                    )
                    
                } ) }
        </StyledTimeline>
    )
}