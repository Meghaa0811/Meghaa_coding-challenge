import Navbar from "../components/Navbar";
import PlayerTable from "../components/PlayerTable";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar />

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">

                        <h3 className="m-0">
                            Cricket Players
                        </h3>

                        <Link
                            to="/add-player"
                            className="btn btn-light"
                        >
                            + Add Player
                        </Link>

                    </div>

                    <div className="card-body">

                        <PlayerTable />

                    </div>

                </div>

            </div>

        </>
    );
}

export default Home;