import {gql, request} from "graphql-request";


export async function getData({setLoading, setCourses, content, setOverOns}){
    const queryCourses = gql`{ 
                cursus(where: {title: "${content}"}){
                    list
                    inhoud
                    cost
                    startDate
                    duration
                    title                    
                }
                overOnsPl{
                    name
                    description
                    function
                }
            }`

    setLoading(true)
    try{
        const {cursus, overOnsPl} = await request('https://api-eu-central-1.graphcms.com/v2/ckrup1phx088501xs18ri5rej/master', queryCourses
        )
        setOverOns(overOnsPl)
        setCourses(cursus)
        setLoading(false)
        console.log(overOnsPl)
    }
    catch (e){
        console.error(e)
    }}