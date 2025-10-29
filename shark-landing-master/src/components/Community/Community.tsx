import { COMMUNITY_CONTENT } from "../../constants/communityData";
import { useCommunityStore } from "../../store/useCommunityStore/useCommunityStore";
import { Container } from "react-bootstrap";
import "./Community.css";

const Community = () => {
  const { isWalletConnected, connectWallet, disconnectWallet } =
    useCommunityStore();

  const handleAction = (action: "mint" | "wallet") => {
    if (action === "mint") {
      alert("Minting process started...");
    } else if (action === "wallet") {
      isWalletConnected ? disconnectWallet() : connectWallet();
    }
  };
  return (
    <section id="community">
      <Container>
        <div className="content">
          <div className="grid-section">
            <img
              src={COMMUNITY_CONTENT.imageSrc}
              alt="community"
              className="community-img"
            />
            <div className="text">
              <h1 className="title">{COMMUNITY_CONTENT.title}</h1>
              <h2 className="desc">{COMMUNITY_CONTENT.description}</h2>
              <div className="btns">
                {COMMUNITY_CONTENT.buttons.map((btn) => (
                  <button
                    key={btn.id}
                    className={btn.className}
                    onClick={() => handleAction(btn.action)}
                  >
                    {btn.action === "wallet" && isWalletConnected
                      ? "Disconnect Wallet"
                      : btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
