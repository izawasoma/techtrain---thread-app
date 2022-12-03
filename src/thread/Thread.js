import React, { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormBox } from "./../component/form/form-box/FormBox";
import { Button } from "./../component/form/button/Button";
import { Input } from "./../component/form/input/Input";
import { Loading } from "./../component/tools/loading/Loading";
import { Card } from "./../component/card/card/Card";
import { CardWrap } from "./../component/card/card_wrap/CardWrap";

export const Thread = () => {
    //スレッドIDをURLパラメーターから取得
    let { id } = useParams();
    //ローディング
    const [isLoading,setIsLoading] = useState(false);

    //スレッド投稿一覧呼び出し
    const [posts, setPosts] = useState([]);
    const [isreload, setIsreload] = useState(0);
    useEffect(() => {
        async function getPosts(){
            setIsLoading(true);
            let response = await fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/' + id + '/posts',{
                method: 'GET',
            });
            response = await response.json();
            console.log(response);
            if(response.posts !== null){
                setPosts(response.posts);
            }
            else{
                setPosts([{"id":"dammy","post":"メッセージがありません"}]);
            }
            setIsLoading(false);
        }
        getPosts();
    },[isreload]);

    //スレッドに投稿
    const [message, setMessage] = useState("");
    const onChange = (event) => {
        setMessage(event.target.value);
    }
    const submit = () => {
        async function postThreads(){
            setIsLoading(true);

            let response = await fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/' + id + '/posts',{
                method: 'POST',
                body:JSON.stringify({"post": message})
            });
            
            const data = await response.json();
            if(response.status == 200){
                setMessage("");
            }
            else{
                console.log(`error!!!`);
            }
            setIsLoading(false);
            setIsreload(isreload + 1);
            console.log(isreload);
        }
        postThreads();
    }

    return (
        <>
            <h2>スレッド - しば犬同好会</h2>
            <Loading isLoading={isLoading}></Loading>
            <CardWrap>
                {posts.map((post) => 
                <Card key={post} title={post.post}></Card>)}
            </CardWrap>
            <FormBox formTitle="新規メッセージ追加">
                <Input onChange={onChange} value={message}></Input>
                <Button onClick={submit} label="メッセージ追加"></Button>
            </FormBox>
        </>
    );
}