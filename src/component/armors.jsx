import "./armors.css";


function Armors ({parts, image_part_armor}) {

    return(
          <div className="cards-armors"
            style={{background: `url(${image_part_armor})`}} >{parts}</div>
    );
}

export default Armors;

