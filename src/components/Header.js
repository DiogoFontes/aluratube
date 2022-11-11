import styled from "styled-components";

const StyledHeader = styled.div`
    div.banner {
        height: 320px;
        background-image: url(https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&q=100);
        background-repeat:no-repeat;
        background-position: center center;
        box-shadow: 1px 3px #00000042
    }
    
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <div className="banner"></div>

        <section className="user-info">
            <img src={`https://github.com/${props.account.github}.png`} />
            <div>
                <h2>
                    {props.account.name}
                </h2>

                <p>
                    {props.account.job}
                </p>
            </div>
        </section>
    </StyledHeader>
  );
}