import React, { Component } from "react";
import Ryu from '../../../assets/images/ryu.png';
import Ken from '../../../assets/images/ken.png';
import Bison from '../../../assets/images/bison.png';
import Vega from '../../../assets/images/vega.png';

const images = {
    "ken": Ken,
    "ryu": Ryu,
    "bison": Bison,
    "vega": Vega, 
};

class Fighter extends Component {

    render() {
        return (
            <div
                style={{
                    backgroundImage: `url(${images[this.props.fighter]})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: ".6rem",
                    height: "14rem",
                    width: "14rem"
            }} />
        );
    }
}

export default Fighter;