import React, {useState} from "react";
import { FormBox } from "./../component/form/form-box/FormBox";
import { Button } from "./../component/form/button/Button";
import { Input } from "./../component/form/input/Input";
import { Loading } from "./../component/tools/loading/Loading";

export const ThreadCreate = () => {

    const [title,setTitle] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const onChange = (event) => {
        setTitle(event.target.value);
    }
    const submit = () => {
        async function postThreads(){
            setIsLoading(true);
            let response = await fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads',{
                method: 'POST',
                body:JSON.stringify({"title": title})
            });
            console.log(response);
            const data = await response.json();
            if(response.status === 200){
                setIsLoading(false);
                setTitle("");
                alert(`ID「${data.id}」でタイトル「${data.title}」を追加しました。`);
            }
            else{
                console.log(`error!!!`);
            }
            console.log(data);
        }
        postThreads();
    }

    return (
        <>
            <h2>新着スレッド作成</h2>
            <Loading isLoading={ isLoading }></Loading>
            <FormBox formTitle="新規スレッド追加">
                <Input onChange={onChange} value={title} ></Input>
                <Button label="スレッド作成" onClick={submit}></Button>
            </FormBox>
        </>
    );
}