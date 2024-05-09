import React from 'react';
import "./categoryIcon.scss";


import WorkIcon from '@mui/icons-material/Work';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LanguageIcon from '@mui/icons-material/Language';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useLocation } from 'react-router-dom';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import HouseIcon from '@mui/icons-material/House';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function CategoryIcon(props) {
    const location=useLocation();
    const IsInIncome=location.pathname === '/income';
    console.log(IsInIncome);
    const { optionIn, optionEx } = props;
    console.log(optionIn);

    const ExpenseIcon = (optionEx) => {
        switch (optionEx) {
            case "food":
                console.log(optionEx);
                return <FastfoodIcon/>;
                case "house":
                    return <HouseIcon/>;
                    case "transportation":
                        return <EmojiTransportationIcon/>;
                        case "utilities":
                            return <WaterDropIcon/>;
                            case "healthcare":
                return <HealthAndSafetyIcon/>;
                case "insurance":
                    return <LocalHospitalIcon/>;
            case "education":
                return <SchoolIcon/>;
                case "entertainment":
                    return <AddReactionIcon/>;
                    case "other":
                        return <MoreHorizIcon/>;
                        default:
                            return null;
                        }
                    }
                    
                    
            const IncomeIcon = (optionIn) => {
                switch (optionIn) {
                    case "job":
                    console.log(optionIn);
                    return <WorkIcon/>;
                    case "freelancing":
                    return <LaptopChromebookOutlinedIcon/>;
                    case "investments":
                        return <AddBusinessIcon/>;
                    case "business":
                        return <CardTravelIcon/>;
                    case "selling":
                        return <HandshakeIcon/>;
                    case "rental":
                        return <CarRentalIcon/>;
                    case "online":
                        return <LanguageIcon/>;
                    case "other":
                        return <MoreHorizIcon/>;
                    default:
                        return null;
                }
            }


    return (
        <div className='option'>
            <div className='icon'>
                {IsInIncome ? IncomeIcon(optionIn) : ExpenseIcon(optionEx)}
            </div>
        </div>
      
    )
}

export default CategoryIcon;
