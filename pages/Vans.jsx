import React, { useState, useEffect } from 'react';

function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setVans(data.vans))
            .catch(error => console.error('Error fetching vans:', error));
    }, []);

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ));

    return (
        <div>
            {vanElements}
        </div>
    );
}

export default Vans;
