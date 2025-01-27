import { useState } from "react"
import {v4 as uuidv4} from "uuid"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    const [roomId,setRoomId] = useState("")

    const [userName,setUserName] = useState("")

    const createNewRoom = (e) => {
          e.preventDefault()

          const id = uuidv4()
          setRoomId(id)

         toast.success("created a new room")

    }

    const joinRoom = () => {
        if(!roomId || !userName){
            toast.error("Room id & userName is required")
            return;
        }
        //Redirect
        navigate(`/editor/${roomId}`,{
            state:{
               userName,
            }
        })
    }

    const handleInputEnter = (e) => {
       if(e.code === "Enter"){
          joinRoom()
       }
    }

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="" alt="code-sync-logo" />
                <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        className="inputBox"
                        type="text"
                        placeholder="ROOM ID"
                        onChange={(e)=>setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        className="inputBox"
                        type="text"
                        placeholder="USERNAME"
                        onChange={(e)=>setUserName(e.target.value)}
                        value={userName}
                        onKeyUp={handleInputEnter}

                    />

                    <button className="btn joinBtn" onClick={joinRoom}>Join</button>

                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a href="" onClick={createNewRoom} className="createNewBtn">
                            new room
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home