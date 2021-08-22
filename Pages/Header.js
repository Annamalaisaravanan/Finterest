import React,{useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import {styled} from '@material-ui/core/styles';
import Pinterest from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FaceIcon from '@material-ui/icons/Face';
import SMSIcon from '@material-ui/icons/Sms';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './Header.css';


const Logobutton = styled(Pinterest)({
     color:'#e60023',
     fontSize:'32px',
     cursor:'pointer'
});


function Header(props){
   
const [inpstate,setstate] = useState("");


const onSearchSubmit = (e) =>{
    e.preventDefault();
    props.onSubmit(inpstate);
    console.log("This is the input", inpstate);
}



        return(
            <div className='wrapper'>
                <div className='Logowrapper'>
                       <IconButton>
                                  <Logobutton />
                       </IconButton>
                </div>
                
                <div className='HomePageButton'>
                         <a href='/'>Homepage</a>
                </div>
                
                <div className='FollowingButton'>
                           <a href='/'>Following</a>
                </div>
                <div className='SearchWrapper'>
                      <div className='SearchbarWrapper'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <form>
                                <input type='text' onChange={(e)=> setstate(e.target.value)}/>
                                <button type='submit' onClick={onSearchSubmit}></button>
                            </form>
                      </div>
                </div>
                <div className='IconWrapper'>
                            <IconButton>
                            <div className='dhod'>
                                <NotificationsIcon />
                                </div>
                            </IconButton>
                            <IconButton>
                                <div className='dhod'>
                                <SMSIcon />
                                </div>
                            </IconButton>

                            <IconButton >
                                <div className='dhod'>
                                <FaceIcon />
                                </div>
                            </IconButton>

                            <IconButton>
                            <div className='dhod'>
                                < KeyboardArrowDownIcon />
                                </div>
                            </IconButton>
                </div>
            </div>
        )
}

export default Header;



