import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlayers, deletePlayer } from "../services/playerService";

function PlayerTable() {

    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");

    const loadPlayers = async () => {

        try {

            const response = await getPlayers();
            setPlayers(response.data);

        }
        catch (error) {

            console.error(error);
            alert("Unable to load players.");

        }

    };
    useEffect(() => {
        loadPlayers();
    }, []);

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this player?"
        );

        if (!confirmDelete) return;

        try {

            await deletePlayer(id);

            alert("Player deleted successfully!");

            loadPlayers();

        }
        catch (error) {

            console.error(error);
            alert("Unable to delete player.");

        }

    };

    const filteredPlayers = players.filter((player) =>

        player.playerName.toLowerCase().includes(search.toLowerCase()) ||

        player.role.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <>

            <div className="mb-3">

                <input

                    type="text"

                    className="form-control"

                    placeholder="Search by Player Name or Role"

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

            </div>

            <div className="table-responsive">

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>

                            <th>Player ID</th>
                            <th>Player Name</th>
                            <th>Jersey Number</th>
                            <th>Role</th>
                            <th className="text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredPlayers.length > 0 ? (

                            filteredPlayers.map((player) => (

                                <tr key={player.playerId}>

                                    <td>{player.playerId}</td>

                                    <td>{player.playerName}</td>

                                    <td>{player.jerseyNumber}</td>

                                    <td>{player.role}</td>

                                    <td className="text-center">

                                        <Link
                                            to={`/edit-player/${player.playerId}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(player.playerId)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="text-center text-danger"
                                >
                                    No Players Found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default PlayerTable;