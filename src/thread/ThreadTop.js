import React,{useState,useEffect} from "react";
import { Card } from "./../component/card/card/Card";
import { CardWrap } from "./../component/card/card_wrap/CardWrap";


export const ThreadTop = () => {

    const [threads, setThreads] = useState([]);

    //スレッド一覧呼び出し
    useEffect(() => {
        async function getThreads(){
            let response = await fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0',{
                method: 'GET',
            });
            response = await response.json();
            setThreads(response);
        }
        getThreads();
    },[]);

    return (
        <>
            <h2>新着スレッド</h2>
            <CardWrap>
                {threads.map((thread) => 
                <Card key={thread.id} title={thread.title} url={"./thread/" + thread.id}></Card>)}
            </CardWrap>
        </>
    );
}