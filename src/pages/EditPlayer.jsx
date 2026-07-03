import Navbar from "../components/Navbar";
import PlayerForm from "../components/PlayerForm";

function EditPlayer() {

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <PlayerForm isEdit={true} />

            </div>

        </>

    );

}

export default EditPlayer;