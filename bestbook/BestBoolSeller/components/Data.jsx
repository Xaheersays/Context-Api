import {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10} from '../src/assets/images/Image_Exportation'
import Template from './template'

export {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10}
let data_arr = [
    [img1,"Friends, Lovers and the Big Terrible Thing","Matthew Perry"],
    [img2,"Ikigai","Francesc Miralles"],
    [img3,"Don't Believe Everything You Think","Joseph Nguyen"],
    [img4,"Don't Believe Everything You Think","Joseph Nguyen"],
    [img5,"Don't Believe Everything You Think","Joseph Nguyen"],
    [img6,"Don't Believe Everything You Think","Joseph Nguyen"],
    [img7,"Don't Believe Everything You Think","Joseph Nguyen"],
    [img8,"Don't Believe Everything You Think","Joseph Nguyen"],
    [img9,"Don't Believe Everything You Think","Joseph Nguyen"], 
    [img10,"Don't Believe Everything You Think","Joseph Nguyen"],
]
function Binder(){
    let react_arr = []
    for (let i=0;i<data_arr.length;i++){
        react_arr.push( 
            <Template img={data_arr[i][0]} title ={data_arr[i][1]}  author ={data_arr[i][2] } idx={i} />
        )
    }
    return react_arr;
}
let react_arr = Binder();
export default react_arr;
