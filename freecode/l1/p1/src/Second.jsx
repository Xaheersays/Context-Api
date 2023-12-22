import { memo ,useCallback} from 'react'
import Thrid from './Third'
const Second =  ()=> {
    const handleClick = useCallback(()=>{
        console.log(handleClick)
    },[])
    return <>
    <p>here is your second component </p>
    <Thrid handleClick={handleClick}/>
    </>
}
export default Second

