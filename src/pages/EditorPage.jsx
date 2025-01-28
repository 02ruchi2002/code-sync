import { useState } from "react"
import Client from "../components/Client"
import Editor from "../components/Editor"

const EditorPage = () =>{
    const [clients,setClients] = useState([
        {socketId:1,userName:"rohit"},
        {socketId:2,userName:"anjali"},
    ])
    return(
        <div className="mainWrap">
           <div className="aside">
            <div className="asideInner">
                <div className="logo">
                    <img className="logoImage" src="" alt="logo" />
                </div>
                <h3>connected</h3>
                <div className="clientsList">
                    {
                        clients?.map((client)=><Client
                        key={client.socketId}
                         username={client.userName}
                         />)
                    }
                </div>
            </div>

            <button className="btn copyBtn">Copy ROOM ID</button>

            <button className="btn leaveBtn">Leave</button>
           </div>

           <div className="editorWrap">
            <Editor/>
           </div>
        </div>
    )
}

export default EditorPage