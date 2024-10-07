import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import '../Css/cards.css'; // Ensure your CSS file is correctly imported
import { Modal } from 'react-bootstrap';

Chart.register(...registerables);

const Cards = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = (event) => {
        event.stopPropagation(); // Prevent event bubbling
        setShow(false);
    };

    const handleShow = () => { 
        setShow(true);
    };

    const renderMedal = () => {
        switch (props.rank) {
            case 1:
                return <img src="/images/Medals/gold.png" style={{ width: "50px" }} alt="Gold Medal" className="medal" />;
            case 2:
                return <img src="/images/Medals/silver.png" style={{ width: "30px" }} alt="Silver Medal" className="medal" />;
            case 3:
                return <img src="/images/Medals/bronze.png" style={{ width: "28px" }} alt="Bronze Medal" className="medal" />;
            default:
                return null;
        }
    };

    const { id, image, name, score_count, rank, pre_score, prev_team } = props;

    const data = {
        labels: ['Previous Score', 'Current Score'],
        datasets: [
            {
                label: 'Previous Score Vs Current Score',
                data: [pre_score, score_count],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'white',
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
            },
        },
    };

    return (
        <div className={`card ${show ? 'blur' : ''}`} onClick={handleShow}>
            {rank && <div className="medal-container">{renderMedal()}</div>}
            <div className='emp-id'>{id}</div>
            <img src={image} style={{ imageRendering: 'crisp-edges' }} alt={name} className="card-image" />
            <div className="card-content">
                <p className="card-author">{name}</p>
                <hr className='divider' />
                <p className="card-author">Score Count: {score_count}</p>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="true"
                keyboard={true}
                dialogClassName="custom-modal modal-animation "
            >
                <Modal.Header  closeButton onClick={handleClose}style={{color:"white"}} >
                    {rank && <div>{renderMedal()}</div>}
                    <Modal.Title className='text-white'>{name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="modal-image-container">
                    <p className="px-3 py-1.5" style={{fontFamily:"batman",color:"white"}}><strong>ID:</strong> {id}</p>      
                        <img src={image} alt={name} className="modal-image mb-24" />
                        
                    </div>
                    
                    <div className="modal-content-container">
                        
                        <p className="score-count"><strong>Current Score:</strong> {score_count}</p>
                        <p className="score-count"><strong>Previous Score:</strong> {pre_score}</p>
                        <p className="score-count"><strong>No. Of Courses Completed:</strong> 2</p>
                        <p className="score-count"><strong>Previous Team:</strong> {prev_team}</p>
                        <Bar className="my-4" data={data} options={options} />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Cards;
