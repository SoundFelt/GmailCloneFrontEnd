import React, {useState} from 'react'
import './sidebarLeft.css'
import NewMailBox from './NewMailBox';
import IconButton from '@mui/material/IconButton';
import SidebarOption from './SidebarOption'
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PeopleIcon from '@mui/icons-material/People';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import SellIcon from '@mui/icons-material/Sell';
import Collapse from '@mui/material/Collapse';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';
import { teal } from '@mui/material/colors';

function SidebarLeft(props) {

    const [moreOpen, setMoreOpen] = useState(false)
    const [clickedOption, setClickedOption] = useState()
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const [newMailBoxOpen, setNewMailBoxOpen] = useState(false)
    const [sentBuzzNotificaiton, setSentBuzzNotification] = useState(false)

    const selectOption = (idx) => {  
        idx === 0 && props.setSentMailBoxOpen(false)
        idx === 3 && props.setSentMailBoxOpen(true)
        idx === 5 && setMoreOpen(!moreOpen)
        idx === 9 && setCategoriesOpen(!categoriesOpen)
        setClickedOption(idx)
        setSentBuzzNotification(false)
    }

    const iconsGroup1 = [InboxIcon, StarIcon, AccessTimeFilledIcon, SendIcon, InsertDriveFileIcon]
    const iconsGroup2 = [LabelImportantOutlinedIcon, ReportIcon, DeleteIcon, ArrowDropDownIcon]
    const iconsGroup3 = [PeopleIcon, InfoIcon, ForumIcon, SellIcon]
    const titlesGroup1 = ['Inbox', 'Starred', 'Snoozed', 'Sent', 'Drafts']
    const titlesGroup2 = ['Important', 'Spam', 'Trash', 'Categories']
    const titlesGroup3 = ['Social', 'Updates', 'Forums', 'Promotions']

  return (
    <div className="sidebar-container">
        <div className="main">

            <div className="compose-button-container">
                <button className="compose-button" onClick={() => setNewMailBoxOpen(true)}>
                    <img alt="compose-new-mail" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"></img>
                    <span>Compose</span>
                </button>
            </div>

            {newMailBoxOpen && <NewMailBox setNewMailBoxOpen={setNewMailBoxOpen} setSentBuzzNotification={setSentBuzzNotification} setEmailJustSent={props.setEmailJustSent} />}

            <div>     
                <div className="sidebar-upper">
                    {titlesGroup1.map((title, idx) => (
                        <SidebarOption key={idx} Icon={iconsGroup1[idx]} number={props.totalEmailsSent} title={title} idx={idx} 
                        selectOption={selectOption} clickedOption={clickedOption} sentBuzzNotification={sentBuzzNotificaiton}/>
                    ))}

                    <SidebarOption selectOption={selectOption} Icon={moreOpen ? ExpandLessIcon : ExpandMoreIcon} 
                    title={moreOpen ? 'Less' : 'More'} idx={5} clickedOption={clickedOption}/>
        
                    {moreOpen &&
                        <>
                        {titlesGroup2.map((title, idx) => (
                            <SidebarOption key={idx + 6} Icon={iconsGroup2[idx]} title={title} idx={idx + 6}
                            selectOption={selectOption} clickedOption={clickedOption} setCategoriesOpen={setCategoriesOpen}/>
                        ))}
                        <Collapse in={categoriesOpen}>
                            {titlesGroup3.map((title, idx) => (
                                <SidebarOption key={idx + 10} Icon={iconsGroup3[idx]} title={title} idx={idx + 10} 
                                selectOption={selectOption} clickedOption={clickedOption}/>
                            ))}
                        </Collapse>
                        </>
                    }    
                </div>   
        
                <div>
                    <h5 className="meet-title">Meet</h5>
                    <SidebarOption Icon={VideocamIcon} title='New meeting' idx={15} 
                    selectOption={selectOption} clickedOption={clickedOption}/>
                    <SidebarOption Icon={KeyboardIcon} title='Join a meeting' idx={16} 
                    selectOption={selectOption} clickedOption={clickedOption}/>
                </div>
                
                <div className="hangout-section" >
                    <h5 className="hangout-title">Hangouts</h5>
                    <div className="hangout-user">
                        <div>
                            <Badge overlap="circular" style={{marginLeft:'25px'}} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
                            <Avatar sx={{ fontSize: '15px', bgcolor: teal[900], height: '28px', width: '28px' }}>A</Avatar>
                            </Badge>
                            <span>Anthony</span>
                            <ArrowDropDownIcon sx={{cursor: 'pointer', marginTop: '2px', fontSize: '1.1rem', 
                                color: 'rgb(180, 180, 180)', '&:hover': { color: "rgb(100,100,100)" }}}/>
                        </div>
                        <div>
                            <IconButton>
                                <AddIcon sx={{fontSize: '20px', color: 'rgb(140,140,140)'}}/>
                            </IconButton>
                        </div>
                    </div>
                    <div className="fake-border"></div>
                </div>

                <div className="start-chat">
                    <div>
                        <p>No recent chats</p>
                        <p className="start-chat-link">Start a new one</p>
                    </div>
                </div>
            </div>
        </div>

            <div className="sidebar-bottom-links">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <div style={{ paddingTop: '5px', borderTop: '1px solid rgb(235,235,235)'}}>                   
                        <PersonIcon sx={{cursor: 'pointer', fontSize: '20px'}} color="action"/>
                        <CommentIcon sx={{cursor: 'pointer', fontSize: '20px', marginLeft: '15px'}} color="action" />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SidebarLeft