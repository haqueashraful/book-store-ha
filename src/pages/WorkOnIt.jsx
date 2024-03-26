import workonit from '../assets/workonit.svg'
const WorkOnIt = () => {
    return (
        <div className=' w-full flex-col justify-center items-center'>   
            <h1 className='text-black text-7xl text-center font-black'>Under Consturction!!</h1>
                <img className=' w-96 mx-auto h-96' src={workonit} alt="" />
        </div>
    );
};

export default WorkOnIt;