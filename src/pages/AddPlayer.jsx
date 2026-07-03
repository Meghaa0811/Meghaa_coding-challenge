import Navbar from "../components/Navbar";
import PlayerForm from "../components/PlayerForm";

function AddPlayer() {
    return (
        <>
            <Navbar />

            <div className="container mt-4">

                <PlayerForm />

            </div>
        </>
    );
}

export default AddPlayer;